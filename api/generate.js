import { sb, isAuthed, generateForDate, trNow, trDateStr } from '../lib/core.js';
import { applyCors } from '../lib/cors.js';

export default async function handler(req, res) {
  if (applyCors(req, res)) return;

  // ── Posts/story_queue yönetimi (eski /api/posts) ─────────────────────────
  if (req.method === 'POST' && req.body && req.body.action === 'login') {
    var pw = (process.env.PANEL_PASSWORD || '').trim();
    var given = (req.body.password || '').trim();
    var ok = given === pw;
    return res.status(ok ? 200 : 401).json({ ok: ok });
  }

  const isPosts = req.query && req.query._route === 'posts';
  if (isPosts) {
    if (!isAuthed(req)) return res.status(401).json({ error: 'Yetkisiz' });
    var client = sb();
    try {
      if (req.method === 'GET') {
        var result = await client
          .from('story_queue')
          .select('*')
          .order('post_date', { ascending: false })
          .limit(30);
        if (result.error) throw result.error;
        return res.status(200).json({ posts: result.data });
      }
      if (req.method === 'POST') {
        var action = req.body && req.body.action;
        var id = req.body && req.body.id;
        if (action === 'approve' || action === 'reject') {
          var status = action === 'approve' ? 'approved' : 'rejected';
          var upd = await client.from('story_queue').update({ status, error_msg: null, updated_at: new Date().toISOString() }).eq('id', id);
          if (upd.error) throw upd.error;
          return res.status(200).json({ ok: true, status });
        }
        if (action === 'save') {
          var patch = { updated_at: new Date().toISOString() };
          if (typeof req.body.caption === 'string') patch.caption = req.body.caption;
          if (typeof req.body.svg === 'string') { patch.svg = req.body.svg; patch.png_url = null; }
          if (req.body.publish_at) patch.publish_at = req.body.publish_at;
          if (req.body.svg || req.body.caption) patch.status = 'draft';
          var sv = await client.from('story_queue').update(patch).eq('id', id);
          if (sv.error) throw sv.error;
          return res.status(200).json({ ok: true });
        }
        return res.status(400).json({ error: 'Bilinmeyen action' });
      }
      return res.status(405).json({ error: 'Method desteklenmiyor' });
    } catch (e) {
      return res.status(500).json({ error: String(e.message || e) });
    }
  }

  // Caption üretimi — auth gerektirmez, POST body'de type:'reels_caption'
  if (req.method === 'POST' && req.body && req.body.type === 'reels_caption') {
    try {
      const prompt = `Rostrum Akademi için Instagram Reels caption yaz.
Bağlam: Türkiye'nin önde gelen YKS hazırlık dijital platformuyuz. Uygulama üzerinden ders takibi, koçluk ve soru çözümü yapılıyor.
Amaç: Platformumuzu tanıtmak, öğrencileri kayıt olmaya davet etmek.
Kurallar:
- Max 3 kısa satır metin (toplam 150 karakter altında)
- Güçlü, duygusal bir hook ile başla
- 1 net CTA: bio'daki linke tıkla veya DM'e "BAŞLA" yaz
- 8-10 alakalı Türkçe hashtag ekle
Sadece caption metnini döndür, başka hiçbir şey yazma.`;
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-api-key': (process.env.ANTHROPIC_API_KEY || '').trim(),
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 400,
          messages: [{ role: 'user', content: prompt }],
        }),
      });
      if (!resp.ok) return res.status(500).json({ error: 'AI hatası ' + resp.status });
      const data = await resp.json();
      const caption = (data.content || []).map(b => b.text || '').join('').trim();
      return res.status(200).json({ caption });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  // Onboarding deneme/müsamaha e-postaları — eski /api/onboarding-cron (cron: ?job=onboarding)
  if (req.query && req.query.job === 'onboarding') {
    if (!isAuthed(req)) return res.status(401).json({ error: 'Yetkisiz cron çağrısı' });
    return runOnboardingCron(req, res);
  }

  if (!isAuthed(req)) return res.status(401).json({ error: 'Yetkisiz' });
  try {
    var tomorrow = new Date(trNow().getTime() + 86400000);
    var dateStr = (req.query && req.query.date) || trDateStr(tomorrow);
    var force = req.query && req.query.force === '1';
    var idea = (req.query && req.query.idea ? String(req.query.idea) : '').slice(0, 600);
    var result = await generateForDate(dateStr, { force: force, idea: idea });
    return res.status(200).json(Object.assign({ date: dateStr }, result));
  } catch (e) {
    return res.status(500).json({ error: String(e.message || e) });
  }
}

async function runOnboardingCron(req, res) {
  const supabaseAdmin = sb();
  try {
    // 1. Trial veya müsamaha (grace) sürecindeki koçları sorgula
    const { data: coaches, error: queryErr } = await supabaseAdmin
      .from('users')
      .select('id, full_name, email, created_at, onboarding_email_step, plan')
      .eq('role', 'coach')
      .in('plan', ['trial', 'grace']);

    if (queryErr) throw queryErr;
    if (!coaches || coaches.length === 0) {
      return res.status(200).json({ success: true, message: 'İşlenecek koç bulunamadı.' });
    }

    const results = [];
    const protocol = (req.headers.host || '').includes('localhost') ? 'http' : 'https';
    const mailerUrl = `${protocol}://${req.headers.host}/api/mailer`;

    for (const coach of coaches) {
      const hoursSinceSignup = Math.floor((Date.now() - new Date(coach.created_at).getTime()) / (1000 * 60 * 60));
      let targetStep = coach.onboarding_email_step || 0;
      let emailType = null;
      let emailPayload = { to: coach.email, coach_name: coach.full_name };

      // Hangi adımın tetikleneceğini hesapla
      if (hoursSinceSignup >= 240 && coach.plan === 'grace') {
        // 10. Gün - Müsamaha süresi de bitti, erişimi kilitle (e-posta Faz 2'de eklenecek)
        await supabaseAdmin
          .from('users')
          .update({ plan: 'inactive' })
          .eq('id', coach.id);
        results.push({ email: coach.email, sentType: null, action: 'plan->inactive' });
        continue;
      } else if (hoursSinceSignup >= 168 && targetStep < 6) {
        // 7. Gün - Deneme Süresi Bitti, 3 günlük müsamahaya geçiliyor
        emailType = 'onboarding_day7';
        targetStep = 6;

        // Tarih hesaplama (30 gün sonrası için silinme uyarısı)
        const deleteDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
        emailPayload.delete_date = deleteDate;

        // Koçun planını müsamaha (grace) sürecine çek — 3 gün daha erişim açık kalır
        await supabaseAdmin
          .from('users')
          .update({ plan: 'grace' })
          .eq('id', coach.id);

      } else if (hoursSinceSignup >= 144 && targetStep < 5) {
        // 6. Gün - FOMO (Son 24 saat)
        emailType = 'onboarding_day6';
        targetStep = 5;

        // Koçun öğrenci sayısını hesapla
        const { count } = await supabaseAdmin
          .from('users')
          .select('id', { count: 'exact', head: true })
          .eq('coach_id', coach.id)
          .eq('role', 'student');

        emailPayload.student_count = count || 0;

      } else if (hoursSinceSignup >= 120 && targetStep < 4) {
        // 5. Gün - Sokratik AI
        emailType = 'onboarding_day5';
        targetStep = 4;
      } else if (hoursSinceSignup >= 72 && targetStep < 3) {
        // 3. Gün - PDF Rapor
        emailType = 'onboarding_day3';
        targetStep = 3;
      } else if (hoursSinceSignup >= 24 && targetStep < 2) {
        // 1. Gün - Hızlı Program Değeri
        emailType = 'onboarding_day1';
        targetStep = 2;
      }

      // Eğer yeni bir e-posta gönderilmesi gerekiyorsa tetikle
      if (emailType) {
        try {
          await fetch(mailerUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type: emailType,
              ...emailPayload
            })
          });

          // DB'de adımı ve gönderim tarihini güncelle
          await supabaseAdmin
            .from('users')
            .update({
              onboarding_email_step: targetStep,
              onboarding_email_sent_at: new Date().toISOString()
            })
            .eq('id', coach.id);

          results.push({ email: coach.email, sentType: emailType, step: targetStep });
        } catch (mailErr) {
          console.error(`[Cron Mail Failure] ${coach.email}`, mailErr.message);
        }
      }
    }

    return res.status(200).json({ success: true, processedCount: results.length, details: results });
  } catch (err) {
    console.error('[Onboarding Cron Error]', err.message);
    return res.status(500).json({ error: 'Sunucu hatası: ' + err.message });
  }
}

