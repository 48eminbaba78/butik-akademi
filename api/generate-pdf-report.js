// ═══════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — PDF/PRINT REPORT GENERATOR
// Endpoint: /api/generate-pdf-report
// ═══════════════════════════════════════════════════════════

import { getServiceClient, verifyJwtUser, verifyReportToken, escapeHtml } from '../lib/api-auth.js';

export default async function handler(req, res) {
  const { studentId, paymentId, sig } = req.query;

  const auth = await verifyJwtUser(req);
  const signed = sig ? verifyReportToken(sig) : null;

  if (!auth && !signed) {
    return res.status(401).send('<h1>Yetkisiz Erişim: Oturum doğrulaması veya geçerli rapor imzası gereklidir.</h1>');
  }

  let db;
  try {
    db = getServiceClient();
  } catch (_) {
    return res.status(500).send('<h1>Sunucu yapılandırma hatası.</h1>');
  }

  if (paymentId) return generateReceipt(res, db, paymentId, auth, signed);

  if (!studentId) {
    return res.status(400).send('<h1>Hata: studentId parametresi zorunludur.</h1>');
  }

  if (signed && signed.studentId !== studentId) {
    return res.status(403).send('<h1>Yetkisiz rapor bağlantısı.</h1>');
  }

  try {
    const [{ data: student }, { data: tasks }, { data: exams }, { data: appts }] = await Promise.all([
      db.from('users').select('*, workspaces(brand_name, brand_color)').eq('id', studentId).maybeSingle(),
      db.from('tasks').select('*').eq('student_id', studentId),
      db.from('exams').select('*').eq('student_id', studentId),
      db.from('appointments').select('*').eq('student_id', studentId)
    ]);

    if (!student) {
      return res.status(404).send('<h1>Hata: Öğrenci bulunamadı.</h1>');
    }

    if (auth) {
      const r = auth.profile.role;
      const isOwner = auth.user.id === student.id || student.coach_id === auth.user.id || r === 'developer';
      if (!isOwner) return res.status(403).send('<h1>Bu öğrencinin raporuna erişim yetkiniz yok.</h1>');
    }

    const totalTasks = tasks?.length || 0;
    const doneTasks = tasks?.filter(t => t.done)?.length || 0;
    const completionRate = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

    const brandName = escapeHtml(student.workspaces?.brand_name || 'Rostrum Akademi');
    const brandColor = /^#[0-9a-fA-F]{3,8}$/.test(student.workspaces?.brand_color || '') ? student.workspaces.brand_color : '#f0a500';
    const studentNameEsc = escapeHtml(student.full_name || 'Öğrenci');

    const recentExams = exams?.slice(-5) || [];

    const htmlReport = `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${studentNameEsc} — Haftalık Gelişim Raporu</title>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #ffffff;
      color: #0f172a;
      margin: 0;
      padding: 3rem;
      line-height: 1.5;
    }
    .header {
      border-bottom: 2px solid ${brandColor};
      padding-bottom: 1.5rem;
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .logo {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      color: #0f172a;
    }
    .logo span {
      color: ${brandColor};
    }
    h1 {
      font-family: 'Syne', sans-serif;
      font-size: 2.2rem;
      font-weight: 800;
      margin: 0 0 0.5rem 0;
    }
    .meta {
      font-size: 0.9rem;
      color: #64748b;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-bottom: 2.5rem;
    }
    .card {
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 1.5rem;
      background-color: #f8fafc;
    }
    .card-lbl {
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: 700;
      color: #64748b;
      letter-spacing: 1px;
      margin-bottom: 0.5rem;
    }
    .card-val {
      font-family: 'Syne', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      color: #0f172a;
    }
    h2 {
      font-family: 'Syne', sans-serif;
      font-size: 1.5rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 0.5rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 2rem;
    }
    th, td {
      padding: 0.75rem 1rem;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
    }
    th {
      background-color: #f1f5f9;
      font-weight: 600;
    }
    .badge {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 99px;
      font-size: 0.75rem;
      font-weight: 600;
      background-color: #dcfce7;
      color: #15803d;
    }
    .badge-pending {
      background-color: #fee2e2;
      color: #b91c1c;
    }
    .print-btn {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background-color: #0f172a;
      color: #ffffff;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    }
    @media print {
      .print-btn {
        display: none;
      }
      body {
        padding: 0;
      }
    }
  </style>
</head>
<body>

  <button class="print-btn" onclick="window.print()">🖨️ PDF Olarak Kaydet</button>

  <div class="header">
    <div>
      <h1>${studentNameEsc}</h1>
      <div class="meta">Hedef: <strong>${escapeHtml(student.target || 'Belirtilmemiş')}</strong> | Tarih: <strong>${escapeHtml(new Date().toLocaleDateString('tr-TR'))}</strong></div>
    </div>
    <div class="logo">${brandName}</div>
  </div>

  <div class="grid">
    <div class="card">
      <div class="card-lbl">Görev Başarı Oranı</div>
      <div class="card-val" style="color: ${brandColor}">%${completionRate}</div>
      <div style="font-size: 0.85rem; color: #64748b; margin-top: 0.5rem;">${doneTasks} tamamlanan / ${totalTasks} toplam görev</div>
    </div>
    <div class="card">
      <div class="card-lbl">Genel İlerleme</div>
      <div class="card-val">%${Number(student.progress) || 0}</div>
      <div style="font-size: 0.85rem; color: #64748b; margin-top: 0.5rem;">Sistem müfredat yüzdesi</div>
    </div>
    <div class="card">
      <div class="card-lbl">Girilen Denemeler</div>
      <div class="card-val">${exams?.length || 0}</div>
      <div style="font-size: 0.85rem; color: #64748b; margin-top: 0.5rem;">Toplam takip edilen sınav</div>
    </div>
  </div>

  <h2>📊 Son Deneme Net Performansları</h2>
  ${recentExams.length > 0 ? `
  <table>
    <thead>
      <tr>
        <th>Sınav Adı</th>
        <th>Tarih</th>
        <th>Sınav Türü</th>
        <th>Ders Bazlı Net Dağılımı</th>
      </tr>
    </thead>
    <tbody>
      ${recentExams.map(e => `
        <tr>
          <td><strong>${escapeHtml(e.name)}</strong></td>
          <td>${escapeHtml(e.date)}</td>
          <td><span class="badge" style="background-color: #eff6ff; color: #1d4ed8;">${escapeHtml(e.exam_type)}</span></td>
          <td>${Object.entries(e.nets || {}).map(([subject, net]) => `${escapeHtml(subject)}: <strong>${escapeHtml(net)}</strong>`).join(', ')}</td>
        </tr>
      `).join('')}
    </tbody>
  </table>
  ` : '<p style="color: #64748b;">Henüz deneme kaydı bulunmuyor.</p>'}

  <h2>📅 Haftalık Ders Çalışma Planı Görevleri</h2>
  ${tasks && tasks.length > 0 ? `
  <table>
    <thead>
      <tr>
        <th>Tarih</th>
        <th>Ders / Konu</th>
        <th>Tür</th>
        <th>Süre</th>
        <th>Durum</th>
      </tr>
    </thead>
    <tbody>
      ${tasks.slice(0, 15).map(t => `
        <tr>
          <td>${escapeHtml(t.date)}</td>
          <td><strong>${escapeHtml(t.subject)}</strong>${t.note ? `<br><span style="font-size: 11px; color: #64748b;">Not: ${escapeHtml(t.note)}</span>` : ''}</td>
          <td>${escapeHtml(t.type)}</td>
          <td>${Number(t.duration) || 0} dk</td>
          <td><span class="badge ${t.done ? '' : 'badge-pending'}">${t.done ? 'Tamamlandı' : 'Bekliyor'}</span></td>
        </tr>
      `).join('')}
    </tbody>
  </table>
  ` : '<p style="color: #64748b;">Haftalık programda tanımlanmış görev bulunmuyor.</p>'}

</body>
</html>
    `;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).send(htmlReport);

  } catch (err) {
    console.error('PDF Report generator error:', err);
    return res.status(500).send('<h1>Rapor oluşturulurken sunucu hatası oluştu.</h1>');
  }
}

// Yazdırılabilir ödeme makbuzu
async function generateReceipt(res, db, paymentId, auth, signed) {
  if (signed && signed.paymentId !== paymentId) {
    return res.status(403).send('<h1>Yetkisiz makbuz bağlantısı.</h1>');
  }
  try {
    const { data: payment } = await db.from('payments').select('*').eq('id', paymentId).maybeSingle();
    if (!payment) return res.status(404).send('<h1>Hata: Ödeme kaydı bulunamadı.</h1>');

    if (auth) {
      const r = auth.profile.role;
      const isOwner = payment.coach_id === auth.user.id || payment.user_id === auth.user.id || r === 'developer';
      if (!isOwner) return res.status(403).send('<h1>Bu makbuza erişim yetkiniz yok.</h1>');
    }
    if (payment.status && payment.status !== 'completed') {
      return res.status(400).send('<h1>Bu ödeme henüz onaylanmadı — makbuz oluşturulamaz.</h1>');
    }

    const { data: coach } = await db.from('users').select('payment_reference_code').eq('id', payment.coach_id).maybeSingle();

    const dateTxt = new Date(payment.period_start || payment.created_at).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    const amountTxt = `₺${Number(payment.amount || 0).toLocaleString('tr-TR')}`;
    const methodLbl = escapeHtml({ havale: 'Havale / EFT', elden: 'Elden', diger: 'Diğer' }[payment.method] || (payment.method || '—'));
    const coachNameEsc = escapeHtml(payment.coach_name || 'Koç');
    const refCodeEsc = escapeHtml(coach?.payment_reference_code || '—');

    const html = `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ödeme Makbuzu — ${coachNameEsc}</title>
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

    <h1>${coachNameEsc}</h1>
    <div class="meta">Makbuz Tarihi: ${escapeHtml(dateTxt)}</div>

    <div class="grid">
      <div class="row"><div class="row-lbl">Ödeme Yöntemi</div><div class="row-val">${methodLbl}</div></div>
      <div class="row"><div class="row-lbl">Dönem</div><div class="row-val">${Number(payment.period_months) || 1} Ay</div></div>
      <div class="row"><div class="row-lbl">Referans Kodu</div><div class="row-val">${refCodeEsc}</div></div>
      <div class="row"><div class="row-lbl">Erişim Bitiş Tarihi</div><div class="row-val">${payment.period_end ? escapeHtml(new Date(payment.period_end).toLocaleDateString('tr-TR')) : '—'}</div></div>
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
    return res.status(500).send('<h1>Makbuz oluşturulurken sunucu hatası oluştu.</h1>');
  }
}
