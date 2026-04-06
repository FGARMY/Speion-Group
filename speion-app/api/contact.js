import { getSupabase } from './lib/supabase.js';
import { checkRateLimit } from './lib/rateLimit.js';
import { sendLeadNotification } from './lib/sendEmail.js';

// ─── Validation Helpers ───
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function validateBody(body) {
  const errors = [];

  if (!body.name || body.name.trim().length < 2) {
    errors.push('Name is required (min 2 characters)');
  }
  if (!body.email || !EMAIL_REGEX.test(body.email.trim())) {
    errors.push('A valid email address is required');
  }
  if (!body.subject || body.subject.trim().length < 2) {
    errors.push('Subject is required');
  }
  if (!body.message || body.message.trim().length < 10) {
    errors.push('Message is required (min 10 characters)');
  }
  if (body.name && body.name.length > 100) {
    errors.push('Name must be under 100 characters');
  }
  if (body.subject && body.subject.length > 200) {
    errors.push('Subject must be under 200 characters');
  }
  if (body.message && body.message.length > 5000) {
    errors.push('Message must be under 5000 characters');
  }
  if (body.phone && body.phone.length > 20) {
    errors.push('Phone number must be under 20 characters');
  }

  return errors;
}

// ─── Main Handler ───
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // ─── Rate Limiting ───
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim()
      || req.headers['x-real-ip']
      || req.socket?.remoteAddress
      || 'unknown';

    const { limited, retryAfterMs } = checkRateLimit(ip);

    if (limited) {
      const retryMinutes = Math.ceil(retryAfterMs / 60000);
      return res.status(429).json({
        error: `Too many submissions. Please try again in ${retryMinutes} minute${retryMinutes > 1 ? 's' : ''}.`,
      });
    }

    // ─── Validation ───
    const body = req.body;

    if (!body || typeof body !== 'object') {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const errors = validateBody(body);
    if (errors.length > 0) {
      return res.status(400).json({ error: errors[0], errors });
    }

    // ─── Sanitize ───
    const lead = {
      name: sanitize(body.name),
      email: body.email.trim().toLowerCase(),
      phone: sanitize(body.phone || ''),
      subject: sanitize(body.subject),
      message: sanitize(body.message),
      status: 'new',
      ip,
    };

    // ─── Save to Supabase ───
    const supabase = getSupabase();
    const { data, error: dbError } = await supabase
      .from('leads')
      .insert([lead])
      .select()
      .single();

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      return res.status(500).json({ error: 'Failed to save your inquiry. Please try again.' });
    }

    // ─── Send Email Notification ───
    // Await this so Vercel doesn't kill the serverless function mid-execution
    try {
      await sendLeadNotification(lead);
    } catch (err) {
      console.error('Email notification failed:', err);
    }

    // ─── Success Response ───
    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been received. We\'ll be in touch shortly.',
      id: data?.id,
    });

  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({
      error: 'An unexpected error occurred. Please try again.',
      debug: err.message || err.toString(),
      stack: err.stack
    });
  }
}
