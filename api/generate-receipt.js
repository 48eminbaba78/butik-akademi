// ═══════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — YAZDIRILABİLİR ÖDEME MAKBUZU
// Endpoint: /api/generate-receipt?paymentId=...
// ═══════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';

const SB_URL = process.env.SUPABASE_URL || 'https://imyhenrwmsmyikpollur.supabase.co';
const SB_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34';
const db = createClient(SB_URL, SB_KEY);

export default async function handler(req, res) {
  const { paymentId } = req.query;
  if (!paymentId) return res.status(400).send('<h1>Hata: paymentId parametresi zorunludur.</h1>');

  try {
    const { data: payment } = await db.from('payments').select('*').eq('id', paymentId).maybeSingle();
    if (!payment) return res.status(404).send('<h1>Hata: Ödeme kaydı bulunamadı.</h1>');
    if (payment.status && payment.status !== 'completed') {
      return res.status(400).send('<h1>Bu ödeme henüz onaylanmadı — makbuz oluşturulamaz.</h1>');
    }

    const { data: coach } = await db.from('users').select('payment_reference_code').eq('id', payment.coach_id).maybeSingle();

    const dateTxt = new Date(payment.period_start || payment.created_at).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    const amountTxt = `₺${Number(payment.amount || 0).toLocaleString('tr-TR')}`;
    const methodLbl = { havale: 'Havale / EFT', elden: 'Elden', diger: 'Diğer' }[payment.method] || (payment.method || '—');

    const html = `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ödeme Makbuzu — ${payment.coach_name || ''}</title>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body{font-family:'Inter',sans-serif;background:#f1f5f9;color:#0f172a;margin:0;padding:3rem;line-height:1.5}
    .sheet{max-width:640px;margin:0 auto;background:#fff;border-radius:16px;padding:3rem;box-shadow:0 4px 24px rgba(15,23,42,.08)}
    .header{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:2px solid #E8613A;padding-bottom:1.5rem;margin-bottom:2rem}
    .logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.4rem}
    .logo span{color:#E8613A}
    .stamp{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#0d9488;background:#f0fdfa;border:1px solid rgba(13,148,136,.3);border-radius:999px;padding:.4rem 1rem}
    h1{font-family:'Syne',sans-serif;font-size:1.6rem;margin:0 0 .3rem}
    .meta{font-size:.85rem;color:#64748b;margin-bottom:2rem}
    .grid{display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin-bottom:2rem}
    .row{border:1px solid #e2e8f0;border-radius:12px;padding:1rem 1.2rem;background:#f8fafc}
    .row-lbl{font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;font-weight:700;color:#64748b;margin-bottom:.3rem}
    .row-val{font-size:1.05rem;font-weight:700}
    .total{background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);color:#fff;border-radius:14px;padding:1.5rem 1.7rem;display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem}
    .total .amt{font-family:'Syne',sans-serif;font-size:1.9rem;font-weight:800;color:#f0a500}
    .footer{font-size:.75rem;color:#94a3b8;text-align:center;border-top:1px solid #e2e8f0;padding-top:1.2rem}
    .print-btn{position:fixed;bottom:2rem;right:2rem;background:#0f172a;color:#fff;border:none;padding:.75rem 1.5rem;border-radius:8px;font-weight:600;cursor:pointer}
    @media print{.print-btn{display:none}body{background:#fff;padding:0}.sheet{box-shadow:none;border-radius:0}}
  </style>
</head>
<body>
  <button class="print-btn" onclick="window.print()">🖨️ PDF Olarak Kaydet</button>
  <div class="sheet">
    <div class="header">
      <div>
        <div class="logo">Rostrum<span>Akademi</span></div>
        <div class="meta" style="margin:.4rem 0 0">Ödeme Makbuzu</div>
      </div>
      <div class="stamp">✓ Havale/EFT ile Tahsil Edilmiştir</div>
    </div>

    <h1>${payment.coach_name || 'Koç'}</h1>
    <div class="meta">Makbuz Tarihi: ${dateTxt}</div>

    <div class="grid">
      <div class="row"><div class="row-lbl">Ödeme Yöntemi</div><div class="row-val">${methodLbl}</div></div>
      <div class="row"><div class="row-lbl">Dönem</div><div class="row-val">${payment.period_months || 1} Ay</div></div>
      <div class="row"><div class="row-lbl">Referans Kodu</div><div class="row-val">${coach?.payment_reference_code || '—'}</div></div>
      <div class="row"><div class="row-lbl">Erişim Bitiş Tarihi</div><div class="row-val">${payment.period_end ? new Date(payment.period_end).toLocaleDateString('tr-TR') : '—'}</div></div>
    </div>

    <div class="total">
      <div>Toplam Tahsilat</div>
      <div class="amt">${amountTxt}</div>
    </div>

    <div class="footer">Bu belge Rostrum Akademi Eğitim Teknolojileri tarafından elektronik olarak oluşturulmuştur.</div>
  </div>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).send(html);
  } catch (err) {
    console.error('Receipt generator error:', err);
    return res.status(500).send(`<h1>Sunucu Hatası: ${err.message}</h1>`);
  }
}
