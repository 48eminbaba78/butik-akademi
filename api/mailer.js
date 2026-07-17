// ═══════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — UNIFIED EMAIL DISPATCHER
// Endpoint: /api/mailer
// Types: student_welcome | application_update | password_reset
// ═══════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';

const SB_URL = process.env.SUPABASE_URL || 'https://imyhenrwmsmyikpollur.supabase.co';
const SB_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const RESEND_KEY = process.env.RESEND_API_KEY;
const FROM = `Rostrum Akademi <${process.env.SENDER_EMAIL || 'onboarding@resend.dev'}>`;
const SITE_URL = process.env.SITE_URL || 'https://rostrumakademi.com';
const GCAL_REDIRECT = 'https://www.rostrumakademi.com/app.html';
const G_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const G_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

async function sendEmail(to, subject, html) {
  if (!RESEND_KEY) {
    console.warn('[mailer] RESEND_API_KEY not set — skipping');
    return;
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${RESEND_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: FROM, to: [to], subject, html })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Resend error ' + res.status);
  }
  return res.json();
}

function wrap(inner) {
  return `<!DOCTYPE html><html lang="tr"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Rostrum Akademi</title></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:32px 0">
<tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(30,41,59,.06);border:1px solid #e2e8f0">
${inner}
<tr><td style="padding:24px 40px;text-align:center;background:#1e293b;border-top:1px solid #e2e8f0">
  <p style="margin:0;font-size:12px;color:#94a3b8">Bu e-posta Rostrum Akademi tarafından gönderildi.</p>
  <p style="margin:4px 0 0;font-size:12px;color:#64748b">Beklemiyorduysanız lütfen bu e-postayı görmezden gelin.</p>
</td></tr>
</table></td></tr></table>
</body></html>`;
}

function welcomeEmail({ student_name, username, password, login_url, coach_name }) {
  const url = login_url || `${SITE_URL}/app.html`;
  return wrap(`
<tr><td style="background:#1e293b;padding:40px;text-align:center;border-bottom:4px solid #0d9488">
  <div style="font-size:48px;margin-bottom:12px">🚀</div>
  <h1 style="color:#ffffff;font-size:26px;font-weight:800;margin:0 0 8px">Rostrum Akademi'ye Hoş Geldin!</h1>
  <p style="color:#38bdf8;margin:0;font-size:15px">${coach_name ? 'Koçun ' + coach_name + ' seni platforma davet etti!' : 'Hesabın hazır'}</p>
</td></tr>
<tr><td style="padding:36px 40px">
  <p style="margin:0 0 20px;font-size:15px;color:#1e293b">Merhaba <strong>${student_name || 'Öğrencimiz'}</strong>,</p>
  <p style="margin:0 0 24px;font-size:14px;color:#475569;line-height:1.6">Senin için oluşturulan giriş bilgileri aşağıdadır. Bu bilgilerle giriş yapıp haftalık ders programını takip edebilir, hedeflerini gerçekleştirebilirsin.</p>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;border:1px solid #cbd5e1;border-radius:12px;margin-bottom:28px">
    <tr>
      <td width="50%" style="padding:18px 20px;vertical-align:top;border-right:1px solid #cbd5e1">
        <div style="font-size:10px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:.8px;margin-bottom:6px">Kullanıcı Adı / E-Posta</div>
        <div style="font-size:16px;font-weight:800;color:#0d9488;font-family:monospace">${username}</div>
      </td>
      <td width="50%" style="padding:18px 20px;vertical-align:top">
        <div style="font-size:10px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:.8px;margin-bottom:6px">Şifre</div>
        <div style="font-size:16px;font-weight:800;color:#0d9488;font-family:monospace">${password}</div>
      </td>
    </tr>
  </table>
  <div style="text-align:center;margin-bottom:20px">
    <a href="${url}" style="display:inline-block;background:#0d9488;color:#ffffff;padding:15px 40px;border-radius:10px;font-size:16px;font-weight:800;text-decoration:none;box-shadow:0 4px 14px rgba(13,148,136,.3)">Hadi Başlayalım! 🚀</a>
  </div>
</td></tr>`);
}

function parentReportEmail({ student_name, student_id, coach_name, completion_percentage, coach_note }) {
  const reportUrl = `${SITE_URL}/api/generate-pdf-report?studentId=${student_id}`;
  return wrap(`
<tr><td style="background:#1e293b;padding:40px;text-align:center;border-bottom:4px solid #0d9488">
  <div style="font-size:48px;margin-bottom:12px">📈</div>
  <h1 style="color:#ffffff;font-size:24px;font-weight:800;margin:0 0 8px">Haftalık Performans Raporu</h1>
  <p style="color:#38bdf8;margin:0;font-size:14px">Öğrenci: ${student_name}</p>
</td></tr>
<tr><td style="padding:36px 40px">
  <p style="margin:0 0 16px;font-size:15px;color:#1e293b">Değerli Velimiz,</p>
  <p style="margin:0 0 20px;font-size:14px;color:#475569;line-height:1.6">Öğrencimiz <strong>${student_name}</strong> bu hafta programındaki hedeflerin <strong>%${completion_percentage}</strong>'sini tamamlayarak harika bir çaba gösterdi.</p>
  
  ${coach_note ? `
    <div style="background:#f1f5f9;border-left:4px solid #0d9488;padding:16px 20px;border-radius:0 10px 10px 0;margin-bottom:28px;font-size:14px;color:#334155;line-height:1.65">
      <div style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;margin-bottom:6px">Koç Değerlendirmesi</div>
      "${coach_note}"
    </div>
  ` : ''}
  
  <p style="margin:0 0 24px;font-size:14px;color:#475569;line-height:1.6">Detaylı gelişim analizini ve haftalık ders programını PDF olarak indirmek veya tarayıcınızda görüntülemek için aşağıdaki butona tıklayabilirsiniz:</p>
  
  <div style="text-align:center;margin-bottom:20px">
    <a href="${reportUrl}" style="display:inline-block;background:#0d9488;color:#ffffff;padding:15px 40px;border-radius:10px;font-size:16px;font-weight:800;text-decoration:none;box-shadow:0 4px 14px rgba(13,148,136,.3)">Raporu Görüntüle / İndir 📊</a>
  </div>
</td></tr>`);
}

function coachWelcomeEmail({ coach_name, email, brand_name }) {
  const url = `${SITE_URL}/app.html`;
  const trialEnd = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
  return wrap(`
<tr><td style="background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);padding:48px 40px;text-align:center;border-bottom:4px solid #E8613A">
  <div style="font-size:56px;margin-bottom:16px">🎉</div>
  <h1 style="color:#ffffff;font-size:28px;font-weight:800;margin:0 0 10px;letter-spacing:-0.5px">Hesabınız Hazır!</h1>
  <p style="color:#94a3b8;margin:0;font-size:15px">Rostrum Akademi koçluk portalına hoş geldiniz</p>
</td></tr>
<tr><td style="padding:40px">
  <p style="margin:0 0 20px;font-size:16px;color:#1e293b">Merhaba <strong>${coach_name || 'Hocam'}</strong>,</p>
  <p style="margin:0 0 28px;font-size:14px;color:#475569;line-height:1.7">
    ${brand_name ? `<strong>${brand_name}</strong> için koçluk paneliniz başarıyla oluşturuldu.` : 'Koçluk paneliniz başarıyla oluşturuldu.'} Sisteme kayıt sırasında belirlediğiniz şifrenizle giriş yapabilirsiniz.
  </p>

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:28px">
    <tr>
      <td style="padding:20px 24px">
        <div style="font-size:10px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:.8px;margin-bottom:6px">Giriş E-postanız</div>
        <div style="font-size:15px;font-weight:800;color:#E8613A;font-family:monospace">${email || '—'}</div>
      </td>
    </tr>
  </table>

  <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,rgba(232,97,58,.08) 0%,rgba(232,97,58,.04) 100%);border:1px solid rgba(232,97,58,.2);border-radius:12px;margin-bottom:32px">
    <tr><td style="padding:20px 24px">
      <div style="font-size:11px;font-weight:700;color:#E8613A;text-transform:uppercase;letter-spacing:.8px;margin-bottom:10px">🎁 7 Günlük Ücretsiz Deneme</div>
      <p style="margin:0;font-size:14px;color:#334155;line-height:1.6">Kredi kartı gerekmeden, tüm özelliklere erişimle <strong>${trialEnd}</strong> tarihine kadar ücretsiz kullanabilirsiniz. Deneme süresince öğrenci ekleyebilir, PDF raporlar oluşturabilirsiniz.</p>
    </td></tr>
  </table>

  <div style="text-align:center;margin-bottom:28px">
    <a href="${url}" style="display:inline-block;background:#E8613A;color:#ffffff;padding:16px 44px;border-radius:12px;font-size:16px;font-weight:800;text-decoration:none;box-shadow:0 4px 20px rgba(232,97,58,.35);letter-spacing:-.2px">Koç Paneline Giriş Yap →</a>
  </div>

  <div style="background:#f1f5f9;border-radius:10px;padding:16px 20px;font-size:13px;color:#64748b;line-height:1.6">
    💡 <strong>İlk adımlar:</strong> Giriş yaptıktan sonra <em>Öğrencilerim</em> sekmesinden ilk öğrencinizi ekleyebilir, haftalık program oluşturabilir ve PDF veli raporu gönderebilirsiniz.
  </div>
</td></tr>`);
}

function applicationEmail({ student_name, status, coach_name }) {
  const pending = status === 'pending';
  const accepted = status === 'accepted';
  const color = pending ? '#E8613A' : accepted ? '#0d9488' : '#ef4444';
  const icon = pending ? '📬' : accepted ? '🎉' : '📋';
  const title = pending
    ? 'Başvurunuz Alındı!'
    : accepted
      ? 'Başvurunuz Kabul Edildi!'
      : 'Başvurunuz Hakkında Bilgi';
  const body = pending
    ? `Kurumsal başvurunuz <strong>başarıyla alındı</strong>. <strong>${coach_name || 'Rostrum Akademi ekibi'}</strong> en kısa sürede (ortalama 1 iş günü içinde) sizinle iletişime geçecektir.`
    : accepted
      ? `<strong>${coach_name || 'Koçunuz'}</strong> başvurunuzu kabul etti! Yakında hesap bilgilerinizi alacaksınız.`
      : `<strong>${coach_name || 'Koçumuz'}</strong> şu an için yeni öğrenci kabul etmiyor. Daha fazla bilgi için koçla iletişime geçebilirsiniz.`;

  return wrap(`
<tr><td style="background:#1e293b;padding:40px;text-align:center;border-bottom:4px solid ${color}">
  <div style="font-size:48px;margin-bottom:12px">${icon}</div>
  <h1 style="color:#fff;font-size:24px;font-weight:800;margin:0">${title}</h1>
</td></tr>
<tr><td style="padding:36px 40px">
  <p style="margin:0 0 16px;font-size:15px;color:#444">Merhaba${student_name ? ' <strong>' + student_name + '</strong>' : ''},</p>
  <p style="margin:0 0 28px;font-size:15px;color:#555;line-height:1.7">${body}</p>
  ${pending ? `
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:20px 24px;font-size:13px;color:#64748b;line-height:1.6">
      📞 <strong>Hızlı iletişim:</strong> Acil sorularınız için <a href="mailto:info@rostrumakademi.com" style="color:#E8613A;text-decoration:none">info@rostrumakademi.com</a> adresine yazabilirsiniz.
    </div>
  ` : ''}
  ${accepted ? `<div style="text-align:center"><a href="${SITE_URL}/app.html" style="display:inline-block;background:${color};color:#fff;padding:15px 40px;border-radius:10px;font-size:15px;font-weight:800;text-decoration:none">Platforma Git →</a></div>` : ''}
</td></tr>`);
}

function studentInvitationEmail({ student_name, coach_name, invitation_link }) {
  return wrap(`
<tr><td style="background:#1e293b;padding:40px;text-align:center;border-bottom:4px solid #0d9488">
  <div style="font-size:48px;margin-bottom:12px">🎓</div>
  <h1 style="color:#ffffff;font-size:24px;font-weight:800;margin:0 0 8px">Rostrum Akademi'ye Davet Edildiniz!</h1>
  <p style="color:#38bdf8;margin:0;font-size:15px">Koçunuz <strong>${coach_name}</strong> sizi platforma davet etti.</p>
</td></tr>
<tr><td style="padding:36px 40px">
  <p style="margin:0 0 20px;font-size:15px;color:#1e293b">Merhaba<strong>${student_name ? ' ' + student_name : ''}</strong>,</p>
  <p style="margin:0 0 24px;font-size:14px;color:#475569;line-height:1.6">
    Koçunuz ile ders programınızı takip etmek, hedeflerinizi belirlemek ve gelişiminizi izlemek için Rostrum Akademi platformunda üyeliğinizi tamamlamanız gerekiyor.
  </p>
  <p style="margin:0 0 24px;font-size:14px;color:#475569;line-height:1.6">
    Aşağıdaki butona tıklayarak parolanızı belirleyebilir ve hesabınızı anında aktif hale getirebilirsiniz.
  </p>
  <div style="text-align:center;margin-bottom:24px">
    <a href="${invitation_link}" style="display:inline-block;background:#0d9488;color:#ffffff;padding:15px 40px;border-radius:10px;font-size:16px;font-weight:800;text-decoration:none;box-shadow:0 4px 14px rgba(13,148,136,.3)">Hesabımı Aktif Et 🚀</a>
  </div>
  <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.5">Bu davet bağlantısı <strong>48 saat</strong> geçerlidir. Süre dolduktan sonra koçunuzdan yeni bir davet talep edebilirsiniz.</p>
</td></tr>`);
}

function onboardingDay1Email({ coach_name }) {
  const url = `${SITE_URL}/app.html`;
  return wrap(`
<tr><td style="background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);padding:48px 40px;text-align:center;border-bottom:4px solid #E8613A">
  <div style="font-size:56px;margin-bottom:16px">⏱️</div>
  <h1 style="color:#ffffff;font-size:26px;font-weight:800;margin:0 0 10px;letter-spacing:-0.5px">5 Dakikada Haftalık Program</h1>
  <p style="color:#94a3b8;margin:0;font-size:15px">Pazar günlerinizi kendinize geri kazandırın</p>
</td></tr>
<tr><td style="padding:40px">
  <p style="margin:0 0 20px;font-size:16px;color:#1e293b">Merhaba <strong>${coach_name || 'Hocam'}</strong>,</p>
  <p style="margin:0 0 24px;font-size:14px;color:#475569;line-height:1.75">
    Koçlarımızın en çok vakit harcadığı konunun <strong>öğrenci programı hazırlamak</strong> olduğunu biliyoruz. Rostrum Akademi ile bu süreci 5 dakikaya indirmeniz için harika araçlar hazırladık:
  </p>
  <ul style="margin:0 0 28px;padding-left:20px;font-size:14px;color:#475569;line-height:1.8">
    <li><strong>Akıllı Süre Tahmini:</strong> Yapay zeka, konuların zorluğuna göre çalışma sürelerini otomatik hesaplar.</li>
    <li><strong>Hazır Şablonlar:</strong> Sık kullandığınız programları şablon olarak kaydedip tüm öğrencilere tek tıkla uygulayabilirsiniz.</li>
    <li><strong>YouTube Entegrasyonu:</strong> İzlenmesi gereken videoları doğrudan görevlere ekleyin.</li>
  </ul>
  <div style="text-align:center;margin-bottom:28px">
    <a href="${url}" style="display:inline-block;background:#E8613A;color:#ffffff;padding:16px 44px;border-radius:12px;font-size:16px;font-weight:800;text-decoration:none;box-shadow:0 4px 20px rgba(232,97,58,.35)">Hemen Program Oluştur →</a>
  </div>
</td></tr>`);
}

function onboardingDay3Email({ coach_name }) {
  const url = `${SITE_URL}/app.html`;
  return wrap(`
<tr><td style="background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);padding:48px 40px;text-align:center;border-bottom:4px solid #E8613A">
  <div style="font-size:56px;margin-bottom:16px">📄</div>
  <h1 style="color:#ffffff;font-size:26px;font-weight:800;margin:0 0 10px;letter-spacing:-0.5px">Velileriniz Bu Rapora Bayılacak!</h1>
  <p style="color:#94a3b8;margin:0;font-size:15px">Tek tıkla markalı ve kurumsal PDF gelişim raporu</p>
</td></tr>
<tr><td style="padding:40px">
  <p style="margin:0 0 20px;font-size:16px;color:#1e293b">Merhaba <strong>${coach_name || 'Hocam'}</strong>,</p>
  <p style="margin:0 0 24px;font-size:14px;color:#475569;line-height:1.75">
    Öğrencilerinizin başarısı kadar, velilerinizin bu emeği görmesi de önemlidir. Rostrum Akademi ile velilere WhatsApp üzerinden gönderebileceğiniz profesyonel gelişim analizleri oluşturabilirsiniz:
  </p>
  <ul style="margin:0 0 28px;padding-left:20px;font-size:14px;color:#475569;line-height:1.8">
    <li><strong>Tamamlanma Yüzdeleri:</strong> Öğrencinin haftalık hedeflerine uyumunu grafiklerle gösterin.</li>
    <li><strong>Koç Değerlendirmesi:</strong> Kendi profesyonel görüşlerinizi ve haftalık notunuzu rapora ekleyin.</li>
    <li><strong>Kurumsal Markalama:</strong> Raporlarda sizin logonuz ve marka renkleriniz yer alır.</li>
  </ul>
  <div style="text-align:center;margin-bottom:28px">
    <a href="${url}" style="display:inline-block;background:#E8613A;color:#ffffff;padding:16px 44px;border-radius:12px;font-size:16px;font-weight:800;text-decoration:none;box-shadow:0 4px 20px rgba(232,97,58,.35)">İlk PDF Raporunu İncele →</a>
  </div>
</td></tr>`);
}

function onboardingDay5Email({ coach_name }) {
  const url = `${SITE_URL}/app.html`;
  return wrap(`
<tr><td style="background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);padding:48px 40px;text-align:center;border-bottom:4px solid #E8613A">
  <div style="font-size:56px;margin-bottom:16px">🤖</div>
  <h1 style="color:#ffffff;font-size:26px;font-weight:800;margin:0 0 10px;letter-spacing:-0.5px">Yapay Zeka Ders Asistanı</h1>
  <p style="color:#94a3b8;margin:0;font-size:15px">Sokratik yöntemle öğrenen öğrenciler</p>
</td></tr>
<tr><td style="padding:40px">
  <p style="margin:0 0 20px;font-size:16px;color:#1e293b">Merhaba <strong>${coach_name || 'Hocam'}</strong>,</p>
  <p style="margin:0 0 24px;font-size:14px;color:#475569;line-height:1.75">
    Öğrencileriniz ders çalışırken takıldıklarında Rostrum AI onlara yardımcı olmaya hazır. Rostrum Sokratik AI asistanı:
  </p>
  <ul style="margin:0 0 28px;padding-left:20px;font-size:14px;color:#475569;line-height:1.8">
    <li><strong>Sorunun Doğrudan Cevabını Vermez:</strong> Sokratik sorular yönlendirerek öğrencinin çözümü kendisinin bulmasını sağlar.</li>
    <li><strong>7/24 Aktif:</strong> Öğrencileriniz gece çalışırken bile yalnız kalmaz.</li>
    <li><strong>Koç Kontrolünde:</strong> Öğrencilerinizin yapay zeka ile diyalog özetlerini kendi panelinizden takip edebilirsiniz.</li>
  </ul>
  <div style="text-align:center;margin-bottom:28px">
    <a href="${url}" style="display:inline-block;background:#E8613A;color:#ffffff;padding:16px 44px;border-radius:12px;font-size:16px;font-weight:800;text-decoration:none;box-shadow:0 4px 20px rgba(232,97,58,.35)">Öğrenci Portalını İncele →</a>
  </div>
</td></tr>`);
}

function onboardingDay6Email({ coach_name, student_count }) {
  const url = `${SITE_URL}/app.html`;
  return wrap(`
<tr><td style="background:linear-gradient(135deg,#1e293b 0%,#0f172a 100%);padding:48px 40px;text-align:center;border-bottom:4px solid #E8613A">
  <div style="font-size:56px;margin-bottom:16px">⏱️🔥</div>
  <h1 style="color:#ffffff;font-size:26px;font-weight:800;margin:0 0 10px;letter-spacing:-0.5px">Son 24 Saat!</h1>
  <p style="color:#94a3b8;margin:0;font-size:15px">Kurucu Üye fiyatını ömür boyu sabitleyin</p>
</td></tr>
<tr><td style="padding:40px">
  <p style="margin:0 0 20px;font-size:16px;color:#1e293b">Merhaba <strong>${coach_name || 'Hocam'}</strong>,</p>
  <p style="margin:0 0 24px;font-size:14px;color:#475569;line-height:1.75">
    Rostrum Akademi deneme sürenizin bitmesine son 24 saat kaldı. İlk 100 koçumuza özel <strong>Kurucu Üye lansman fiyatı</strong> ve ömür boyu sabit fiyat garantisi yarın sona eriyor.
  </p>
  <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:18px;margin-bottom:28px">
    <div style="font-size:11px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px">Aktif Durumunuz</div>
    <div style="font-size:14px;color:#334155">Mevcut öğrenci sayınız: <strong>${student_count || 0} öğrenci</strong>. Aboneliğinizi başlattığınızda tüm verileriniz kesintisiz olarak korunacaktır.</div>
  </div>
  <div style="text-align:center;margin-bottom:28px">
    <a href="${url}" style="display:inline-block;background:#E8613A;color:#ffffff;padding:16px 44px;border-radius:12px;font-size:16px;font-weight:800;text-decoration:none;box-shadow:0 4px 20px rgba(232,97,58,.35)">Kurucu Üye Ol →</a>
  </div>
</td></tr>`);
}

function onboardingDay7Email({ coach_name, delete_date }) {
  const url = `${SITE_URL}/app.html`;
  return wrap(`
<tr><td style="background:linear-gradient(135deg,#ea580c 0%,#c2410c 100%);padding:48px 40px;text-align:center;border-bottom:4px solid #c2410c">
  <div style="font-size:56px;margin-bottom:16px">⏳</div>
  <h1 style="color:#ffffff;font-size:26px;font-weight:800;margin:0 0 10px;letter-spacing:-0.5px">Deneme Süreniz Sona Erdi</h1>
  <p style="color:rgba(255,255,255,.85);margin:0;font-size:15px">Öğrencileriniz mağdur olmasın diye 3 gün daha erişiminiz açık</p>
</td></tr>
<tr><td style="padding:40px">
  <p style="margin:0 0 20px;font-size:16px;color:#1e293b">Merhaba <strong>${coach_name || 'Hocam'}</strong>,</p>
  <p style="margin:0 0 24px;font-size:14px;color:#475569;line-height:1.75">
    Rostrum Akademi'nin 7 günlük ücretsiz deneme süreniz doldu. Öğrencilerinizin çalışmaları kesintiye uğramasın diye panelinize <strong>3 gün daha</strong> erişiminiz açık tutulacak. Bu süre dolduktan sonra da öğrencileriniz, hazırladığınız programlar ve tüm geçmiş verileriniz **${delete_date || '30 gün boyunca'}** silinmeyecektir.
  </p>
  <p style="margin:0 0 28px;font-size:14px;color:#475569;line-height:1.75">
    Aboneliğinizi başlatmak için panelinizdeki <strong>"Üyeliğim"</strong> sayfasından güncel fiyatı, banka bilgilerini ve size özel referans kodunuzu görebilir, dekontunuzu yükleyebilirsiniz.
  </p>
  <div style="text-align:center;margin-bottom:28px">
    <a href="${url}" style="display:inline-block;background:#ea580c;color:#ffffff;padding:16px 44px;border-radius:12px;font-size:16px;font-weight:800;text-decoration:none;box-shadow:0 4px 20px rgba(234,88,12,.35)">Aboneliğimi Başlat →</a>
  </div>
</td></tr>`);
}

function paymentApprovedEmail({ coach_name, amount, period_end, ref_code }) {
  const url = `${SITE_URL}/app.html`;
  const amountTxt = amount ? `₺${Number(amount).toLocaleString('tr-TR')}` : '';
  const endTxt = period_end ? new Date(period_end).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }) : '';
  return wrap(`
<tr><td style="background:linear-gradient(135deg,#0d9488 0%,#0f766e 100%);padding:48px 40px;text-align:center;border-bottom:4px solid #0f766e">
  <div style="font-size:56px;margin-bottom:16px">🥳</div>
  <h1 style="color:#ffffff;font-size:26px;font-weight:800;margin:0 0 10px;letter-spacing:-0.5px">Ödemeniz Onaylandı!</h1>
  <p style="color:rgba(255,255,255,.85);margin:0;font-size:15px">Sınırsız erişiminiz aktif</p>
</td></tr>
<tr><td style="padding:40px">
  <p style="margin:0 0 20px;font-size:16px;color:#1e293b">Merhaba <strong>${coach_name || 'Hocam'}</strong>,</p>
  <p style="margin:0 0 24px;font-size:14px;color:#475569;line-height:1.75">
    ${amountTxt ? `<strong>${amountTxt}</strong> tutarındaki ödemeniz onaylandı ve hesabınız aktif abone statüsüne geçti.` : 'Ödemeniz onaylandı ve hesabınız aktif abone statüsüne geçti.'} Panelinize ve tüm özelliklere sınırsız erişebilirsiniz.
  </p>
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdfa;border:1px solid rgba(13,148,136,.25);border-radius:12px;margin-bottom:28px">
    <tr>
      ${endTxt ? `<td style="padding:18px 20px;vertical-align:top;${ref_code ? 'border-right:1px solid rgba(13,148,136,.2)' : ''}">
        <div style="font-size:10px;font-weight:700;color:#0f766e;text-transform:uppercase;letter-spacing:.8px;margin-bottom:6px">Bir Sonraki Yenileme Tarihi</div>
        <div style="font-size:15px;font-weight:800;color:#0f172a">${endTxt}</div>
      </td>` : ''}
      ${ref_code ? `<td style="padding:18px 20px;vertical-align:top">
        <div style="font-size:10px;font-weight:700;color:#0f766e;text-transform:uppercase;letter-spacing:.8px;margin-bottom:6px">Referans Kodunuz</div>
        <div style="font-size:15px;font-weight:800;color:#0f172a;font-family:monospace">${ref_code}</div>
      </td>` : ''}
    </tr>
  </table>
  <div style="text-align:center;margin-bottom:28px">
    <a href="${url}" style="display:inline-block;background:#0d9488;color:#ffffff;padding:16px 44px;border-radius:12px;font-size:16px;font-weight:800;text-decoration:none;box-shadow:0 4px 20px rgba(13,148,136,.35)">Panele Git →</a>
  </div>
  <div style="background:#f1f5f9;border-radius:10px;padding:16px 20px;font-size:13px;color:#64748b;line-height:1.6">
    💡 Ödeme makbuzunuza panelinizdeki <strong>"Üyeliğim"</strong> sayfasındaki ödeme geçmişinden ulaşabilirsiniz.
  </div>
</td></tr>`);
}

function newMessageEmail({ student_name, message_preview, login_url }) {
  const url = login_url || `${SITE_URL}/app.html`;
  const preview = message_preview || '';
  return wrap(`
<tr><td style="background:#1e293b;padding:40px;text-align:center;border-bottom:4px solid #0d9488">
  <div style="font-size:48px;margin-bottom:12px">💬</div>
  <h1 style="color:#fff;font-size:24px;font-weight:800;margin:0 0 8px">Yeni Mesaj</h1>
  <p style="color:rgba(255,255,255,.85);margin:0;font-size:15px">${student_name ? `<strong>${student_name}</strong> sana yazdı` : 'Öğrenciniz sana yazdı'}</p>
</td></tr>
<tr><td style="padding:36px 40px">
  <p style="margin:0 0 20px;font-size:15px;color:#444">Merhaba,</p>
  ${preview ? `<div style="background:#f1f5f9;border-left:4px solid #0d9488;padding:16px 20px;border-radius:0 10px 10px 0;margin-bottom:28px;font-size:14px;color:#555;line-height:1.65">${preview}</div>` : ''}
  <div style="text-align:center">
    <a href="${url}" style="display:inline-block;background:#0d9488;color:#fff;padding:15px 40px;border-radius:10px;font-size:15px;font-weight:800;text-decoration:none">Mesajı Gör →</a>
  </div>
</td></tr>`);
}

function templateShareEmail({ coach_name, template_name, task_count, tasks_json }) {
  return wrap(`
<tr><td style="background:#1e293b;padding:40px;text-align:center;border-bottom:4px solid #0d9488">
  <div style="font-size:48px;margin-bottom:12px">📋</div>
  <h1 style="color:#fff;font-size:24px;font-weight:800;margin:0">Yeni Şablon Paylaşıldı</h1>
 </td></tr>
 <tr><td style="padding:36px 40px">
  <p style="margin:0 0 16px;font-size:15px;color:#444"><strong>${coach_name || 'Bir koç'}</strong> bir program şablonu paylaştı:</p>
  <div style="background:#f8f8f8;border:1px solid #cbd5e1;border-radius:12px;padding:20px;margin-bottom:24px">
    <div style="font-size:16px;font-weight:800;color:#111;margin-bottom:4px">${template_name || 'İsimsiz Şablon'}</div>
    <div style="font-size:13px;color:#888">${task_count || 0} görev</div>
  </div>
  <pre style="background:#f8f8f8;border:1px solid #cbd5e1;border-radius:8px;padding:16px;font-size:11px;line-height:1.5;overflow:auto;max-height:400px;white-space:pre-wrap;word-break:break-all">${tasks_json || ''}</pre>
 </td></tr>`);
}

function passwordResetEmail({ action_link }) {
  return wrap(`
<tr><td style="background:#1e293b;padding:40px;text-align:center;border-bottom:4px solid #E8613A">
  <img src="${SITE_URL}/logo.png" alt="Rostrum Akademi" style="height:48px;width:auto;margin-bottom:16px;border-radius:8px;display:inline-block;vertical-align:middle;">
  <h1 style="color:#ffffff;font-size:24px;font-weight:800;margin:0 0 8px">Şifre Sıfırlama</h1>
  <p style="color:#ff9e80;margin:0;font-size:14px">Rostrum Akademi Hesabı</p>
</td></tr>
<tr><td style="padding:36px 40px">
  <p style="margin:0 0 16px;font-size:15px;color:#1e293b">Merhaba,</p>
  <p style="margin:0 0 28px;font-size:14px;color:#475569;line-height:1.6">Hesabınız için şifre sıfırlama talebinde bulundunuz. Yeni şifrenizi belirlemek için aşağıdaki butona tıklayın:</p>
  <div style="text-align:center;margin-bottom:28px">
    <a href="${action_link}" style="display:inline-block;background:#E8613A;color:#ffffff;padding:15px 40px;border-radius:10px;font-size:16px;font-weight:800;text-decoration:none;box-shadow:0 4px 14px rgba(232,97,58,.3)">Şifremi Sıfırla →</a>
  </div>
  <p style="margin:0;font-size:13px;color:#94a3b8;line-height:1.5">Bu bağlantı <strong>1 saat</strong> geçerlidir. Şifrenizi sıfırlamak istemediyseniz bu e-postayı güvenle yoksayabilirsiniz.</p>
</td></tr>`);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { type, ...data } = req.body;

  try {
    if (type === 'student_welcome') {
      if (!data.to) return res.status(400).json({ error: 'to alanı gerekli' });
      const subject = `${data.student_name ? data.student_name + ', P' : 'P'}latformumuza Hoş Geldin! 🎓`;
      await sendEmail(data.to, subject, welcomeEmail(data));
      return res.status(200).json({ success: true });
    }

    if (type === 'student_invitation') {
      if (!data.to) return res.status(400).json({ error: 'to alanı gerekli' });
      const subject = `${data.coach_name || 'Koçunuz'} sizi Rostrum Akademi'ye davet etti! 🎓`;
      await sendEmail(data.to, subject, studentInvitationEmail(data));
      return res.status(200).json({ success: true });
    }

    if (type === 'coach_welcome') {
      if (!data.to) return res.status(400).json({ error: 'to alanı gerekli' });
      const subject = `Rostrum Akademi Hesabınız Hazır! 🎉`;
      await sendEmail(data.to, subject, coachWelcomeEmail(data));
      return res.status(200).json({ success: true });
    }

    if (type === 'onboarding_day1') {
      if (!data.to) return res.status(400).json({ error: 'to alanı gerekli' });
      await sendEmail(data.to, 'Pazar günlerinizi geri kazanın: 5 Dakikada Haftalık Program ⏱️', onboardingDay1Email(data));
      return res.status(200).json({ success: true });
    }

    if (type === 'onboarding_day3') {
      if (!data.to) return res.status(400).json({ error: 'to alanı gerekli' });
      await sendEmail(data.to, 'Velileriniz bu rapora bayılacak! (Tek tıkla PDF) 📄', onboardingDay3Email(data));
      return res.status(200).json({ success: true });
    }

    if (type === 'onboarding_day5') {
      if (!data.to) return res.status(400).json({ error: 'to alanı gerekli' });
      await sendEmail(data.to, 'Öğrencilerinizin yeni favorisi: Sokratik AI Ders Asistanı 🤖', onboardingDay5Email(data));
      return res.status(200).json({ success: true });
    }

    if (type === 'onboarding_day6') {
      if (!data.to) return res.status(400).json({ error: 'to alanı gerekli' });
      await sendEmail(data.to, 'Son 24 Saat: Ömür boyu sabit fiyat avantajını kaçırmayın! ⏱️🔥', onboardingDay6Email(data));
      return res.status(200).json({ success: true });
    }

    if (type === 'onboarding_day7') {
      if (!data.to) return res.status(400).json({ error: 'to alanı gerekli' });
      await sendEmail(data.to, 'Deneme süreniz sona erdi ⏳ (3 gün ek süreniz var)', onboardingDay7Email(data));
      return res.status(200).json({ success: true });
    }

    if (type === 'payment_approved') {
      if (!data.to) return res.status(400).json({ error: 'to alanı gerekli' });
      await sendEmail(data.to, 'Ödemeniz Onaylandı! 🥳 Sınırsız Erişiminiz Aktif', paymentApprovedEmail(data));
      return res.status(200).json({ success: true });
    }

    if (type === 'parent_report') {
      if (!data.to) return res.status(400).json({ error: 'to alanı gerekli' });
      const subject = `📊 Öğrencimiz ${data.student_name || 'Öğrencimizin'} Gelişim Raporu`;
      await sendEmail(data.to, subject, parentReportEmail(data));
      return res.status(200).json({ success: true });
    }

    if (type === 'application_update') {
      if (!data.to) return res.status(400).json({ error: 'to alanı gerekli' });
      const subject = data.status === 'accepted'
        ? '🎉 Başvurunuz kabul edildi!'
        : '📋 Başvurunuz hakkında bilgi — Rostrum Akademi';
      await sendEmail(data.to, subject, applicationEmail(data));
      return res.status(200).json({ success: true });
    }

    if (type === 'password_reset') {
      if (!data.email) return res.status(400).json({ error: 'email alanı gerekli' });
      if (!SB_SERVICE_KEY) return res.status(500).json({ error: 'Sunucu yapılandırma hatası' });

      const admin = createClient(SB_URL, SB_SERVICE_KEY, {
        auth: { autoRefreshToken: false, persistSession: false }
      });

      // E-posta veya kullanıcı adı girilmiş olabilir, veritabanından asıl e-postayı bulalım
      const input = data.email.trim().toLowerCase();
      let targetEmail = input;

      const { data: userProfile } = await admin
        .from('users')
        .select('email')
        .or(`username.eq.${input},email.eq.${input}`)
        .maybeSingle();

      if (userProfile?.email) {
        targetEmail = userProfile.email;
      } else if (!input.includes('@')) {
        // Eğer veritabanında bulunamadıysa ve @ işareti yoksa varsayılan domain ile deneyelim
        targetEmail = input + '@rostrumakademi.com';
      }

      // Dinamik redirect URL oluşturma (Localhost veya canlı domain)
      const host = req.headers.host || '';
      const protocol = host.includes('localhost') || host.includes('127.0.0.1') ? 'http' : 'https';
      const redirectBase = host ? `${protocol}://${host}` : (process.env.SITE_URL || 'https://rostrumakademi.com');
      const redirectTo = `${redirectBase}/app.html`;

      const { data: linkData, error: linkErr } = await admin.auth.admin.generateLink({
        type: 'recovery',
        email: targetEmail,
        options: { redirectTo }
      });

      if (linkErr) throw new Error(linkErr.message);

      const action_link = linkData?.properties?.action_link;
      if (!action_link) throw new Error('Sıfırlama linki oluşturulamadı');

      await sendEmail(targetEmail, '🔐 Rostrum Akademi — Şifre Sıfırlama', passwordResetEmail({ action_link }));
      return res.status(200).json({ success: true });
    }

    if (type === 'new_message') {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) return res.status(401).json({ error: 'Token gerekli' });
      if (!SB_SERVICE_KEY) return res.status(500).json({ error: 'Sunucu yapılandırma hatası' });
      const admin = createClient(SB_URL, SB_SERVICE_KEY, { auth: { autoRefreshToken: false, persistSession: false } });
      const { data: { user }, error: authErr } = await admin.auth.getUser(token);
      if (authErr || !user) return res.status(401).json({ error: 'Yetkisiz' });
      const { data: sender } = await admin.from('users').select('role, coach_id').eq('id', user.id).single();
      if (!sender || sender.role !== 'student') return res.status(403).json({ error: 'Sadece öğrenciler bildirim gönderebilir' });
      if (sender.coach_id !== data.coach_id) return res.status(403).json({ error: 'Geçersiz koç ID' });
      const { data: coach } = await admin.from('users').select('email').eq('id', data.coach_id).single();
      if (!coach?.email) return res.status(404).json({ error: 'Koç bulunamadı' });
      await sendEmail(coach.email, `💬 ${data.student_name || 'Öğrenciniz'} sana mesaj gönderdi`, newMessageEmail({ ...data, login_url: `${SITE_URL}/app.html` }));
      return res.status(200).json({ success: true });
    }

    if (type === 'template_share') {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) return res.status(401).json({ error: 'Token gerekli' });
      if (!SB_SERVICE_KEY) return res.status(500).json({ error: 'Sunucu yapılandırma hatası' });
      const admin = createClient(SB_URL, SB_SERVICE_KEY, { auth: { autoRefreshToken: false, persistSession: false } });
      const { data: { user }, error: authErr } = await admin.auth.getUser(token);
      if (authErr || !user) return res.status(401).json({ error: 'Yetkisiz' });
      const { data: caller } = await admin.from('users').select('role, full_name').eq('id', user.id).single();
      if (!caller || !['coach', 'developer'].includes(caller.role)) return res.status(403).json({ error: 'Yetkisiz' });
      const to = process.env.ADMIN_EMAIL || 'simkoc1@rostrumakademi.com';
      await sendEmail(to, `📋 Yeni şablon: ${data.template_name || 'İsimsiz'} — ${caller.full_name || 'Koç'}`, templateShareEmail({ ...data, coach_name: caller.full_name }));
      return res.status(200).json({ success: true });
    }

    if (type === 'google_oauth_exchange') {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) return res.status(401).json({ error: 'Token gerekli' });
      if (!SB_SERVICE_KEY) return res.status(500).json({ error: 'Sunucu yapılandırma hatası' });
      if (!G_CLIENT_ID || !G_CLIENT_SECRET) return res.status(500).json({ error: 'Google OAuth yapılandırılmamış' });

      const admin = createClient(SB_URL, SB_SERVICE_KEY, { auth: { autoRefreshToken: false, persistSession: false } });
      const { data: { user }, error: authErr } = await admin.auth.getUser(token);
      if (authErr || !user) return res.status(401).json({ error: 'Yetkisiz' });
      const { data: caller } = await admin.from('users').select('role').eq('id', user.id).single();
      if (!caller || !['coach', 'developer'].includes(caller.role)) return res.status(403).json({ error: 'Sadece koçlar Google Takvim bağlayabilir' });

      const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          code: data.code,
          client_id: G_CLIENT_ID,
          client_secret: G_CLIENT_SECRET,
          redirect_uri: GCAL_REDIRECT,
          grant_type: 'authorization_code'
        })
      });
      const tokenData = await tokenRes.json();
      if (!tokenRes.ok || !tokenData.refresh_token) {
        console.error('[gcal oauth]', JSON.stringify(tokenData));
        const msg = tokenData.error_description || tokenData.error || `HTTP ${tokenRes.status}`;
        return res.status(400).json({ error: msg, detail: tokenData });
      }

      const { error: updateErr } = await admin
        .from('workspaces')
        .update({ google_refresh_token: tokenData.refresh_token, google_calendar_connected: true })
        .eq('coach_id', user.id);
      if (updateErr) throw new Error(updateErr.message);
      return res.status(200).json({ success: true });
    }

    if (type === 'google_calendar_event') {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) return res.status(401).json({ error: 'Token gerekli' });
      if (!SB_SERVICE_KEY) return res.status(500).json({ error: 'Sunucu yapılandırma hatası' });
      if (!G_CLIENT_ID || !G_CLIENT_SECRET) return res.status(500).json({ error: 'Google OAuth yapılandırılmamış' });

      const admin = createClient(SB_URL, SB_SERVICE_KEY, { auth: { autoRefreshToken: false, persistSession: false } });
      const { data: { user }, error: authErr } = await admin.auth.getUser(token);
      if (authErr || !user) return res.status(401).json({ error: 'Yetkisiz' });
      const { data: caller } = await admin.from('users').select('role').eq('id', user.id).single();
      if (!caller || !['coach', 'developer'].includes(caller.role)) return res.status(403).json({ error: 'Sadece koçlar kullanabilir' });

      const { data: workspace } = await admin.from('workspaces').select('google_refresh_token').eq('coach_id', user.id).single();
      if (!workspace?.google_refresh_token) return res.status(400).json({ error: 'Google Takvim bağlı değil' });

      const atRes = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          refresh_token: workspace.google_refresh_token,
          client_id: G_CLIENT_ID,
          client_secret: G_CLIENT_SECRET,
          grant_type: 'refresh_token'
        })
      });
      const atData = await atRes.json();
      if (!atRes.ok || !atData.access_token) return res.status(500).json({ error: 'Google token yenilenemedi' });

      const { action, appointment } = data;
      const apptDate = appointment.date;
      const apptHour = appointment.hour || '09:00';
      const [hh, mm] = apptHour.split(':').map(Number);
      const startDT = `${apptDate}T${String(hh).padStart(2,'0')}:${String(mm).padStart(2,'0')}:00+03:00`;
      const endH = hh + 1;
      const endDT = `${apptDate}T${String(endH).padStart(2,'0')}:${String(mm).padStart(2,'0')}:00+03:00`;

      const gcalHeaders = { 'Authorization': `Bearer ${atData.access_token}`, 'Content-Type': 'application/json' };
      const baseUrl = 'https://www.googleapis.com/calendar/v3/calendars/primary/events';

      if (action === 'delete') {
        if (appointment.google_event_id) {
          await fetch(`${baseUrl}/${appointment.google_event_id}`, { method: 'DELETE', headers: gcalHeaders });
        }
        return res.status(200).json({ success: true });
      }

      const eventBody = {
        summary: `Koçluk Seansı${appointment.student_name ? ' — ' + appointment.student_name : ''}`,
        description: appointment.notes || '',
        start: { dateTime: startDT, timeZone: 'Europe/Istanbul' },
        end: { dateTime: endDT, timeZone: 'Europe/Istanbul' }
      };

      if (action === 'update' && appointment.google_event_id) {
        const upRes = await fetch(`${baseUrl}/${appointment.google_event_id}`, {
          method: 'PUT', headers: gcalHeaders, body: JSON.stringify(eventBody)
        });
        const upData = await upRes.json();
        return res.status(200).json({ success: true, google_event_id: upData.id });
      }

      const crRes = await fetch(baseUrl, { method: 'POST', headers: gcalHeaders, body: JSON.stringify(eventBody) });
      const crData = await crRes.json();
      if (!crRes.ok) return res.status(500).json({ error: crData.error?.message || 'Takvim etkinliği oluşturulamadı' });
      if (appointment.appointment_id && crData.id) {
        await admin.from('appointments').update({ google_event_id: crData.id }).eq('id', appointment.appointment_id);
      }
      return res.status(200).json({ success: true, google_event_id: crData.id });
    }

    if (type === 'google_calendar_sync') {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) return res.status(401).json({ error: 'Token gerekli' });
      if (!SB_SERVICE_KEY || !G_CLIENT_ID || !G_CLIENT_SECRET) return res.status(500).json({ error: 'Sunucu yapılandırma hatası' });

      const admin = createClient(SB_URL, SB_SERVICE_KEY, { auth: { autoRefreshToken: false, persistSession: false } });
      const { data: { user }, error: authErr } = await admin.auth.getUser(token);
      if (authErr || !user) return res.status(401).json({ error: 'Yetkisiz' });
      const { data: caller } = await admin.from('users').select('role').eq('id', user.id).single();
      if (!caller || !['coach', 'developer'].includes(caller.role)) return res.status(403).json({ error: 'Yetkisiz' });

      const { data: workspace } = await admin.from('workspaces').select('google_refresh_token').eq('coach_id', user.id).single();
      if (!workspace?.google_refresh_token) return res.status(400).json({ error: 'Google Takvim bağlı değil' });

      const atRes = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ refresh_token: workspace.google_refresh_token, client_id: G_CLIENT_ID, client_secret: G_CLIENT_SECRET, grant_type: 'refresh_token' })
      });
      const atData = await atRes.json();
      if (!atData.access_token) return res.status(500).json({ error: 'Google token yenilenemedi' });

      const gcalHeaders = { 'Authorization': `Bearer ${atData.access_token}` };

      const { data: appts } = await admin.from('appointments').select('id, google_event_id, date, time').eq('coach_id', user.id).not('google_event_id', 'is', null);
      if (!appts?.length) return res.status(200).json({ success: true, deleted: 0, updated: 0, deletedIds: [], updatedItems: [] });

      const dates = appts.map(a => a.date).sort();
      const timeMin = encodeURIComponent(new Date(dates[0] + 'T00:00:00+03:00').toISOString());
      const timeMax = encodeURIComponent(new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString());
      const listRes = await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&showDeleted=true&maxResults=2500`, { headers: gcalHeaders });
      const listData = await listRes.json();
      if (!listRes.ok) return res.status(500).json({ error: listData.error?.message || 'Google Calendar sorgu hatası' });

      const gcalMap = {};
      (listData.items || []).forEach(e => { gcalMap[e.id] = e; });

      let deleted = 0, updated = 0;
      const deletedIds = [], updatedItems = [];

      for (const appt of appts) {
        const evt = gcalMap[appt.google_event_id];
        if (!evt || evt.status === 'cancelled') {
          await admin.from('appointments').delete().eq('id', appt.id);
          deletedIds.push(appt.id);
          deleted++;
        } else if (evt.start?.dateTime) {
          const utcMs = new Date(evt.start.dateTime).getTime();
          const istDt = new Date(utcMs + 3 * 60 * 60 * 1000);
          const gcalDate = istDt.toISOString().substring(0, 10);
          const gcalTime = istDt.toISOString().substring(11, 16);
          if (gcalDate !== appt.date || gcalTime !== appt.time) {
            await admin.from('appointments').update({ date: gcalDate, time: gcalTime }).eq('id', appt.id);
            updatedItems.push({ id: appt.id, date: gcalDate, time: gcalTime });
            updated++;
          }
        }
      }

      return res.status(200).json({ success: true, deleted, updated, deletedIds, updatedItems });
    }

    return res.status(400).json({ error: 'Geçersiz tip: ' + type });
  } catch (e) {
    console.error('[mailer] type=' + type, e.message);
    return res.status(500).json({ error: e.message });
  }
}
