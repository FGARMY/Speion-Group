import { Resend } from 'resend';

let resendClient = null;

function getResend() {
  if (resendClient) return resendClient;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('RESEND_API_KEY not set — email notifications disabled');
    return null;
  }

  resendClient = new Resend(apiKey);
  return resendClient;
}

/**
 * Send a lead notification email.
 * @param {{ name: string, email: string, phone: string, subject: string, message: string }} lead
 */
export async function sendLeadNotification(lead) {
  const resend = getResend();
  if (!resend) return { success: false, error: 'Email not configured' };

  const toEmail = process.env.NOTIFICATION_EMAIL || 'speiongroup@gmail.com';

  try {
    const { data, error } = await resend.emails.send({
      from: 'Speion Leads <onboarding@resend.dev>', // Use your verified domain in production
      to: [toEmail],
      subject: `🚀 New Lead: ${lead.subject}`,
      html: `
        <div style="font-family: 'Inter', -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e0e0e0; border-radius: 16px; overflow: hidden;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #1a1a2e 0%, #0a0a1a 100%); padding: 32px; border-bottom: 1px solid rgba(99, 132, 255, 0.2);">
            <h1 style="margin: 0 0 8px; font-size: 22px; color: #ffffff;">New Lead Received</h1>
            <p style="margin: 0; font-size: 14px; color: #8888aa;">Speion Contact Form Submission</p>
          </div>

          <!-- Lead Details -->
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #6384ff; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; width: 100px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 15px; color: #ffffff;">${lead.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #6384ff; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 15px;"><a href="mailto:${lead.email}" style="color: #7c9aff; text-decoration: none;">${lead.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #6384ff; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 15px;"><a href="tel:${lead.phone}" style="color: #7c9aff; text-decoration: none;">${lead.phone || 'Not provided'}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); color: #6384ff; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Subject</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 15px; color: #ffffff;">${lead.subject}</td>
              </tr>
            </table>

            <!-- Message Box -->
            <div style="margin-top: 24px; padding: 20px; background: rgba(99, 132, 255, 0.06); border: 1px solid rgba(99, 132, 255, 0.15); border-radius: 12px;">
              <p style="margin: 0 0 8px; font-size: 13px; font-weight: 600; color: #6384ff; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #cccccc; white-space: pre-wrap;">${lead.message}</p>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 32px; background: rgba(0,0,0,0.3); border-top: 1px solid rgba(255,255,255,0.05); text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #555;">Speion Lead System • ${new Date().toLocaleDateString('en-IN', { dateStyle: 'long' })}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, id: data?.id };
  } catch (err) {
    console.error('Email send failed:', err);
    return { success: false, error: err.message };
  }
}
