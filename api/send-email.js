// ═══════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — EMAIL DISPATCHER & LINK TRACKING API
// Endpoint: /api/send-email (Yalnızca Developer / Panel Yetkili)
// ═══════════════════════════════════════════════════════════

import { getServiceClient, isDeveloperOrCron, getSafeOrigin, escapeHtml } from '../lib/api-auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  if (!(await isDeveloperOrCron(req))) {
    return res.status(403).json({ message: 'Bu işlem için yönetici yetkisi gerekli.' });
  }

  const { leadId, pitchText } = req.body || {};
  if (!leadId || !pitchText) {
    return res.status(400).json({ message: 'leadId and pitchText are required' });
  }

  try {
    const db = getServiceClient();
    const { data: lead, error: leadErr } = await db
      .from('leads')
      .select('*')
      .eq('id', leadId)
      .maybeSingle();

    if (leadErr || !lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    const lines = String(pitchText).split('\n');
    let subject = 'Rostrum Akademi Davetiyesi';
    let bodyText = String(pitchText);

    const subjectLine = lines.find(l => l.toLowerCase().startsWith('konu:'));
    if (subjectLine) {
      subject = subjectLine.replace(/konu:/i, '').trim();
      bodyText = lines.filter(l => !l.toLowerCase().startsWith('konu:')).join('\n').trim();
    }

    const origin = getSafeOrigin(req);
    const clickUrl = `${origin}/index.html?lead_id=${encodeURIComponent(leadId)}`;

    const formattedHtml = `
      <div style="font-family: sans-serif; font-size: 14px; line-height: 1.6; color: #333;">
        ${escapeHtml(bodyText).replace(/\n/g, '<br>')}
        <br><br>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <div style="text-align: center; margin: 20px 0;">
          <a href="${clickUrl}" style="background-color: #f0a500; color: #07060a; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
            Sistemi Canlı İnceleyin →
          </a>
        </div>
      </div>
    `;

    const resendApiKey = process.env.RESEND_API_KEY;
    const senderEmail = process.env.SENDER_EMAIL || 'onboarding@resend.dev';

    if (!resendApiKey) {
      await db.from('leads').update({ pitch_text: pitchText, status: 'contacted' }).eq('id', leadId);
      return res.status(200).json({
        success: true,
        simulated: true,
        message: 'RESEND_API_KEY tanımlı olmadığı için simülasyon modunda kaydedildi.'
      });
    }

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: `Rostrum Akademi <${senderEmail}>`,
        to: [lead.email],
        subject,
        html: formattedHtml
      })
    });

    if (resendRes.ok) {
      await db.from('leads').update({ pitch_text: pitchText, status: 'contacted' }).eq('id', leadId);
      return res.status(200).json({ success: true });
    }
    return res.status(502).json({ success: false, message: 'E-posta servisi yanıt vermedi.' });
  } catch (err) {
    console.error('[Send-Email API Error]:', err);
    return res.status(500).json({ message: 'Sunucu hatası' });
  }
}
