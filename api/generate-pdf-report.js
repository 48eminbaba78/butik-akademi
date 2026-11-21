// ═══════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — PDF/PRINT REPORT GENERATOR
// Endpoint: /api/generate-pdf-report
// ═══════════════════════════════════════════════════════════

import { getServiceClient, verifyJwtUser, signReportToken, verifyReportToken, escapeHtml } from '../lib/api-auth.js';

const EXAM_SCHEDULE_PDF = {
  LGS:  { month: 5, day: 7,  label: 'LGS'  },
  KPSS: { month: 6, day: 14, label: 'KPSS' },
  ALES: { month: 4, day: 10, label: 'ALES' },
  DGS:  { month: 6, day: 20, label: 'DGS'  },
  YDS:  { month: 3, day: 15, label: 'YDS'  },
  YKS:  { month: 5, day: 14, label: 'YKS'  },
};

function computeReportCountdown(examProfile) {
  const key = String(examProfile || 'YKS').toUpperCase().split(/[\s_-]/)[0];
  const cfg = EXAM_SCHEDULE_PDF[key] || EXAM_SCHEDULE_PDF.YKS;
  const now = new Date();
  let year = now.getUTCFullYear();
  let examDate = new Date(Date.UTC(year, cfg.month, cfg.day, 9, 0, 0));
  if (now > examDate) {
    year += 1;
    examDate = new Date(Date.UTC(year, cfg.month, cfg.day, 9, 0, 0));
  }
  return {
    days: Math.max(1, Math.ceil((examDate.getTime() - now.getTime()) / 86400000)),
    label: `${cfg.label} ${year}`,
  };
}

export default async function handler(req, res) {
  const q = req.query || {};
  const studentId = q.studentId || q.student_id || '';
  const paymentId = q.paymentId || q.payment_id || '';
  const sig = q.sig || '';
  const action = q.action || '';

  const auth = await verifyJwtUser(req);

  // İmzalı bağlantı üretimi (Makbuz veya Veli WhatsApp Raporu için)
  if (action === 'sign') {
    if (!auth) {
      return res.status(401).json({ error: 'İmzalı bağlantı üretmek için oturum doğrulaması gerekir.' });
    }
    let signDb;
    try {
      signDb = getServiceClient();
    } catch (_) {
      return res.status(500).json({ error: 'Sunucu yapılandırma hatası.' });
    }

    if (paymentId) {
      const { data: payment } = await signDb.from('payments').select('id, coach_id, user_id').eq('id', paymentId).maybeSingle();
      if (!payment) return res.status(404).json({ error: 'Ödeme kaydı bulunamadı.' });
      const isOwner = payment.coach_id === auth.user.id || payment.user_id === auth.user.id || auth.profile.role === 'developer';
      if (!isOwner) return res.status(403).json({ error: 'Bu makbuza erişim yetkiniz yok.' });
      const token = signReportToken({ paymentId });
      if (!token) return res.status(500).json({ error: 'Rapor imzası üretilemedi.' });
      return res.status(200).json({ sig: token });
    }

    if (studentId) {
      const { data: student } = await signDb.from('users').select('id, coach_id').eq('id', studentId).maybeSingle();
      if (!student) return res.status(404).json({ error: 'Öğrenci bulunamadı.' });
      const isOwner = auth.user.id === student.id || student.coach_id === auth.user.id || auth.profile.role === 'developer';
      if (!isOwner) return res.status(403).json({ error: 'Bu öğrenci için rapor bağlantısı üretemezsiniz.' });
      const token = signReportToken({ studentId });
      if (!token) return res.status(500).json({ error: 'Rapor imzası üretilemedi.' });
      return res.status(200).json({ sig: token });
    }

    return res.status(400).json({ error: 'studentId veya paymentId parametresi zorunludur.' });
  }

  const signed = sig ? verifyReportToken(sig) : null;
  const signedStuId = signed?.studentId || signed?.student_id || '';
  const signedPayId = signed?.paymentId || signed?.payment_id || '';

  if (!auth && !signed) {
    return res.status(401).send('<h1>Yetkisiz Erişim: Oturum doğrulaması veya geçerli rapor imzası gereklidir.</h1>');
  }

  if (signed && paymentId && signedPayId !== paymentId) {
    return res.status(403).send('<h1>Yetkisiz makbuz bağlantısı.</h1>');
  }
  if (signed && studentId && signedStuId !== studentId) {
    return res.status(403).send('<h1>Yetkisiz rapor bağlantısı.</h1>');
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

  try {
    const [{ data: student }, { data: tasks }, { data: exams }, { data: masteryRows }] = await Promise.all([
      db.from('users').select('id, full_name, target, exam_profile, coach_id').eq('id', studentId).maybeSingle(),
      db.from('tasks').select('date, type, exam_type, subject, duration, done, note, student_note, student_result, student_feedback').eq('student_id', studentId).order('date', { ascending: false }).limit(120),
      db.from('exams').select('name, date, exam_type, nets').eq('student_id', studentId).order('date', { ascending: false }).limit(10),
      db.from('konu_mastery').select('subject, konu, stars, status, ka_date, td_date, last_review_date').eq('student_id', studentId),
    ]);

    if (!student) {
      return res.status(404).send('<h1>Hata: Öğrenci bulunamadı.</h1>');
    }

    if (auth) {
      const r = auth.profile.role;
      const isOwner = auth.user.id === student.id || student.coach_id === auth.user.id || r === 'developer';
      if (!isOwner) return res.status(403).send('<h1>Bu öğrencinin raporuna erişim yetkiniz yok.</h1>');
    }

    const { data: workspace } = student.coach_id
      ? await db.from('workspaces').select('brand_name, brand_color').eq('coach_id', student.coach_id).maybeSingle()
      : { data: null };

    const allTasks = tasks || [];
    const totalTasks = allTasks.length;
    const doneTasks = allTasks.filter(t => t.done).length;
    const completionRate = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

    const weekCutoffIso = new Date(Date.now() - 7 * 86400000).toISOString().slice(0, 10);
    const weekTasks = allTasks.filter(t => t.date && t.date >= weekCutoffIso);
    const weekDone = weekTasks.filter(t => t.done).length;
    const weekPct = weekTasks.length > 0 ? Math.round((weekDone / weekTasks.length) * 100) : completionRate;

    const allMastery = masteryRows || [];
    const tdCount = allMastery.filter(m => m.status === 'td' || Number(m.stars) >= 7).length;
    const activeMasteryCount = allMastery.filter(m => m.status !== 'td' && Number(m.stars) < 7 && (m.status === 'active' || Number(m.stars) > 0 || m.ka_date)).length;
    const masteryPct = allMastery.length > 0
      ? Math.min(100, Math.round(((tdCount + activeMasteryCount * 0.4) / allMastery.length) * 100))
      : 0;

    const countdown = computeReportCountdown(student.exam_profile);

    const brandName = escapeHtml(workspace?.brand_name || 'Rostrum Akademi');
    const brandColor = /^#[0-9a-fA-F]{3,8}$/.test(workspace?.brand_color || '') ? workspace.brand_color : '#E8613A';
    const studentNameEsc = escapeHtml(student.full_name || 'Öğrenci');

    const recentExams = exams || [];

    const htmlReport = `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${studentNameEsc} — Gelişim Raporu</title>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #ffffff;
      color: #0f172a;
      margin: 0;
      padding: 2.5rem 3rem;
      line-height: 1.5;
    }
    .header {
      border-bottom: 2px solid ${brandColor};
      padding-bottom: 1.4rem;
      margin-bottom: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .logo {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 1.4rem;
      color: #0f172a;
    }
    h1 {
      font-family: 'Syne', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      margin: 0 0 0.4rem 0;
    }
    .meta {
      font-size: 0.9rem;
      color: #64748b;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-bottom: 2.2rem;
    }
    @media (max-width: 780px) {
      body { padding: 1.5rem 1rem; }
      .grid { grid-template-columns: repeat(2, 1fr); }
    }
    .card {
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 1.2rem;
      background-color: #f8fafc;
    }
    .card-lbl {
      font-size: 0.72rem;
      text-transform: uppercase;
      font-weight: 700;
      color: #64748b;
      letter-spacing: 0.8px;
      margin-bottom: 0.4rem;
    }
    .card-val {
      font-family: 'Syne', sans-serif;
      font-size: 1.85rem;
      font-weight: 800;
      color: #0f172a;
    }
    .card-sub {
      font-size: 0.8rem;
      color: #64748b;
      margin-top: 0.35rem;
    }
    h2 {
      font-family: 'Syne', sans-serif;
      font-size: 1.35rem;
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
      padding: 0.7rem 0.9rem;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
      vertical-align: top;
      font-size: 0.9rem;
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
    .stu-fb-line {
      display: inline-block;
      margin-top: 4px;
      font-size: 11px;
      color: #475569;
      background: #f1f5f9;
      border-radius: 6px;
      padding: 2px 7px;
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
      font-size: 0.95rem;
      cursor: pointer;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    }
    @media print {
      .print-btn { display: none; }
      body { padding: 0; }
    }
  </style>
</head>
<body>

  <button class="print-btn" onclick="window.print()">🖨️ PDF Olarak Kaydet</button>

  <div class="header">
    <div>
      <h1>${studentNameEsc}</h1>
      <div class="meta">Hedef: <strong>${escapeHtml(student.target || 'Belirtilmemiş')}</strong> | Rapor Tarihi: <strong>${escapeHtml(new Date().toLocaleDateString('tr-TR'))}</strong></div>
    </div>
    <div class="logo">${brandName}</div>
  </div>

  <div class="grid">
    <div class="card">
      <div class="card-lbl">Son 7 Gün Başarı</div>
      <div class="card-val" style="color: ${brandColor}">%${weekPct}</div>
      <div class="card-sub">${weekTasks.length ? `${weekDone}/${weekTasks.length} görev` : `${doneTasks}/${totalTasks} genel görev`}</div>
    </div>
    <div class="card">
      <div class="card-lbl">Konu İlerleme</div>
      <div class="card-val">%${masteryPct}</div>
      <div class="card-sub">${tdCount} TD · ${activeMasteryCount} aktif konu</div>
    </div>
    <div class="card">
      <div class="card-lbl">Sınava Kalan Gün</div>
      <div class="card-val">${countdown.days}</div>
      <div class="card-sub">${escapeHtml(countdown.label)}</div>
    </div>
    <div class="card">
      <div class="card-lbl">Girilen Denemeler</div>
      <div class="card-val">${recentExams.length}</div>
      <div class="card-sub">Son takip edilen sınavlar</div>
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

  <h2>📅 Son Ders Çalışma Planı Görevleri &amp; Geri Bildirimler</h2>
  ${allTasks.length > 0 ? `
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
      ${allTasks.slice(0, 20).map(t => {
        const res = t.student_result;
        const resTxt = res && (res.dogru != null || res.yanlis != null)
          ? `${Number(res.dogru || 0)}D / ${Number(res.yanlis || 0)}Y`
          : '';
        const diffNum = Number(t.student_feedback?.difficulty || 0);
        const fbBits = [
          resTxt,
          diffNum >= 4 ? `Zorluk: ${diffNum}/5` : '',
          t.student_note ? `Not: "${String(t.student_note).slice(0, 80)}"` : '',
        ].filter(Boolean).join(' · ');
        return `
        <tr>
          <td>${escapeHtml(t.date)}</td>
          <td><strong>${escapeHtml(t.subject)}</strong>${t.note ? `<br><span style="font-size: 11px; color: #64748b;">${escapeHtml(t.note)}</span>` : ''}${fbBits ? `<br><span class="stu-fb-line">${escapeHtml(fbBits)}</span>` : ''}</td>
          <td>${escapeHtml(t.type)}</td>
          <td>${Number(t.duration) || 0} dk</td>
          <td><span class="badge ${t.done ? '' : 'badge-pending'}">${t.done ? 'Tamamlandı' : 'Bekliyor'}</span></td>
        </tr>`;
      }).join('')}
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
  const signedPayId = signed?.paymentId || signed?.payment_id || '';
  if (signed && signedPayId !== paymentId) {
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
