import { getSupabase } from './lib/supabase.js';

const VALID_STATUSES = ['new', 'contacted', 'closed'];

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // ─── Auth Check ───
  const adminKey = process.env.ADMIN_API_KEY;
  const providedKey = req.query.key || req.headers['x-admin-key'];

  if (!adminKey || providedKey !== adminKey) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const supabase = getSupabase();

  try {
    // ─── GET: List leads ───
    if (req.method === 'GET') {
      const status = req.query.status; // optional filter
      const limit = Math.min(parseInt(req.query.limit) || 50, 200);
      const offset = parseInt(req.query.offset) || 0;

      let query = supabase
        .from('leads')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1);

      if (status && VALID_STATUSES.includes(status)) {
        query = query.eq('status', status);
      }

      const { data, error, count } = await query;

      if (error) {
        console.error('Supabase query error:', error);
        return res.status(500).json({ error: 'Failed to fetch leads' });
      }

      return res.status(200).json({
        leads: data,
        total: count,
        limit,
        offset,
      });
    }

    // ─── PATCH: Update lead status ───
    if (req.method === 'PATCH') {
      const { id, status } = req.body || {};

      if (!id) {
        return res.status(400).json({ error: 'Lead ID is required' });
      }

      if (!status || !VALID_STATUSES.includes(status)) {
        return res.status(400).json({
          error: `Status must be one of: ${VALID_STATUSES.join(', ')}`,
        });
      }

      const { data, error } = await supabase
        .from('leads')
        .update({ status })
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Supabase update error:', error);
        return res.status(500).json({ error: 'Failed to update lead' });
      }

      if (!data) {
        return res.status(404).json({ error: 'Lead not found' });
      }

      return res.status(200).json({ lead: data });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('Leads API error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred' });
  }
}
