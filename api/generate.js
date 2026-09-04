import { sb, isAuthed, generateForDate, generateHookSuggestions, generateTwoWeeksBatch, getFeedbackMemory, publishDue, trNow, trDateStr } from '../lib/core.js';
import { applyCors } from '../lib/cors.js';

export default async function handler(req, res) {
  if (applyCors(req, res)) return;

  // ── Posts/story_queue yönetimi (eski /api/posts) ─────────────────────────
  if (req.method === 'POST' && req.body && req.body.action === 'login') {
    var pw = (process.env.PANEL_PASSWORD || 'emin').trim();
    var given = (req.body.password || '').trim();
    var ok = given === pw;
    return res.status(ok ? 200 : 401).json({ ok: ok });
  }

  const isPosts = req.query && req.query._route === 'posts';
  if (isPosts) {
    if (!(await isAuthed(req))) return res.status(401).json({ error: 'Yetkisiz' });
    var client = sb();
    try {
      if (req.method === 'GET') {
        var result = await client
          .from('story_queue')
          .select('*')
          .order('post_date', { ascending: true })
          .limit(150);
        if (result.error) throw result.error;

        var memory = await getFeedbackMemory(client);
        return res.status(200).json({ posts: result.data || [], feedback_memory: memory });
      }
      if (req.method === 'POST') {
        var action = req.body && req.body.action;
        var id = req.body && req.body.id;

        // 1. Onayla
        if (action === 'approve') {
          var updApprove = await client.from('story_queue').update({
            status: 'approved',
            error_msg: null,
            approved_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }).eq('id', id);
          if (updApprove.error && updApprove.error.code === '42703') {
            updApprove = await client.from('story_queue').update({
              status: 'approved',
              error_msg: null,
              updated_at: new Date().toISOString()
            }).eq('id', id);
          }
          if (updApprove.error) throw updApprove.error;
          return res.status(200).json({ ok: true, status: 'approved' });
        }

        // 2. Reddet ve Gerekçe Kaydet (Kalite Hafızası)
        if (action === 'reject') {
          var reason = (req.body.reason || req.body.rejection_reason || '').trim();
          var patch = {
            status: 'rejected',
            rejection_reason: reason || null,
            rejected_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
          var updReject = await client.from('story_queue').update(patch).eq('id', id);
          if (updReject.error && updReject.error.code === '42703') {
            updReject = await client.from('story_queue').update({
              status: 'rejected',
              updated_at: new Date().toISOString()
            }).eq('id', id);
          }
          if (updReject.error) throw updReject.error;

          // Eğer ret sebebi yazılmışsa kalıcı kalite hafızasına kaydet
          if (reason) {
            try {
              var { data: memData } = await client.from('platform_settings').select('value').eq('key', 'instagram_feedback_memory').maybeSingle();
              var memList = (memData && Array.isArray(memData.value)) ? memData.value : [];
              if (!memList.includes(reason)) {
                memList.unshift(reason);
                if (memList.length > 30) memList = memList.slice(0, 30);
                await client.from('platform_settings').upsert({ key: 'instagram_feedback_memory', value: memList }, { onConflict: 'key' });
              }
            } catch (mErr) {
              console.warn('[Memory Save Error]:', mErr.message);
            }
          }
          return res.status(200).json({ ok: true, status: 'rejected', reason: reason });
        }

        // 3. Geri Bildirimle Yeniden Üret (Regenerate with Feedback)
        if (action === 'regenerate_with_feedback' || action === 'regenerate') {
          var targetRow = await client.from('story_queue').select('*').eq('id', id).maybeSingle();
          if (!targetRow.data) return res.status(404).json({ error: 'İçerik bulunamadı' });

          var regenReason = (req.body.reason || req.body.rejection_reason || targetRow.data.rejection_reason || '').trim();

          // Hafızaya ekle
          if (regenReason) {
            try {
              var { data: mData } = await client.from('platform_settings').select('value').eq('key', 'instagram_feedback_memory').maybeSingle();
              var mArr = (mData && Array.isArray(mData.value)) ? mData.value : [];
              if (!mArr.includes(regenReason)) {
                mArr.unshift(regenReason);
                await client.from('platform_settings').upsert({ key: 'instagram_feedback_memory', value: mArr }, { onConflict: 'key' });
              }
            } catch(e) {}
          }

          var regenRes = await generateForDate(targetRow.data.post_date, {
            force: true,
            type: targetRow.data.post_type || 'story',
            rejection_reason: regenReason,
            idea: req.body.idea || ''
          });

          return res.status(200).json({ ok: true, regenerated: true, result: regenRes });
        }

        // 4. A/B Kanca Değiştir (Switch Hook)
        if (action === 'switch_hook') {
          var hookText = req.body.hook_text;
          if (!hookText) return res.status(400).json({ error: 'hook_text eksik' });
          var postToSwitch = await client.from('story_queue').select('*').eq('id', id).maybeSingle();
          if (!postToSwitch.data) return res.status(404).json({ error: 'İçerik bulunamadı' });

          var oldCaption = postToSwitch.data.caption || '';
          var newCaption = hookText + '\n\n' + oldCaption.replace(/^.*?\n\n/, '');
          var hookUpd = await client.from('story_queue').update({
            caption: newCaption,
            updated_at: new Date().toISOString()
          }).eq('id', id);
          if (hookUpd.error) throw hookUpd.error;
          return res.status(200).json({ ok: true, caption: newCaption });
        }

        // 5. Günlük Hook / Kanca Önerileri (Fast ~2s)
        if (action === 'generate_hooks') {
          var hookDate = req.body.date || trDateStr(new Date(Date.now() + 86400000));
          var hooksRes = await generateHookSuggestions(hookDate, { idea: req.body.idea || '' });
          return res.status(200).json(hooksRes);
        }

        // 6. Seçilen Kanca ve Tasarımla Tek Günlük Üretim (Zero Timeout ~10s)
        if (action === 'generate_day_post') {
          var postDate = req.body.date;
          if (!postDate) return res.status(400).json({ error: 'date zorunludur' });
          var postRes = await generateForDate(postDate, {
            force: true,
            type: req.body.type || 'feed',
            hook: req.body.hook || '',
            archetype: req.body.archetype || '',
            lead_magnet_trigger: req.body.trigger || 'ROSTRUM',
            status: req.body.status || 'draft',
            idea: req.body.idea || ''
          });
          return res.status(200).json(postRes);
        }

        // 7. 14 Günlük Toplu Üretim (Legacy)
        if (action === 'batch_14days') {
          var startDate = req.body.startDate || req.query.startDate;
          var batchRes = await generateTwoWeeksBatch(startDate, { force: !!req.body.force });
          return res.status(200).json(batchRes);
        }

        // 6. Kalite Hafızası Kuralını Sil
        if (action === 'delete_feedback_rule') {
          var ruleToDelete = req.body.rule;
          var { data: mData2 } = await client.from('platform_settings').select('value').eq('key', 'instagram_feedback_memory').maybeSingle();
          var mList2 = (mData2 && Array.isArray(mData2.value)) ? mData2.value : [];
          mList2 = mList2.filter(r => r !== ruleToDelete);
          await client.from('platform_settings').upsert({ key: 'instagram_feedback_memory', value: mList2 }, { onConflict: 'key' });
          return res.status(200).json({ ok: true, rules: mList2 });
        }

        // 7. Taslağı Kaydet
        if (action === 'save') {
          var patchSave = { updated_at: new Date().toISOString() };
          if (typeof req.body.caption === 'string') patchSave.caption = req.body.caption;
          if (typeof req.body.svg === 'string') { patchSave.svg = req.body.svg; patchSave.png_url = null; }
          if (req.body.publish_at) patchSave.publish_at = req.body.publish_at;
          if (req.body.svg || req.body.caption) patchSave.status = 'draft';
          var sv = await client.from('story_queue').update(patchSave).eq('id', id);
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

  // ── Yayınlama (eski /api/publish) — approved & süresi gelmiş story'leri
  // (ya da ?id= ile tek bir story'yi hemen) Instagram'a gönderir ────────────
  const isPublish = req.query && req.query._route === 'publish';
  if (isPublish) {
    if (!(await isAuthed(req))) return res.status(401).json({ error: 'Yetkisiz' });
    try {
      var results = await publishDue({ id: req.query.id });
      var processed = results.filter(function (r) { return r.ok; }).length;
      return res.status(200).json({ results: results, processed: processed });
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
      // claude-3-5-haiku-20241022 Anthropic tarafından 19 Şubat 2026'da emekli edildi
      // (404 not_found_error) — güncel karşılığı claude-haiku-4-5.
      const modelName = (process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5').trim();
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 25000);
      let resp;
      try {
        resp = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          signal: controller.signal,
          headers: {
            'content-type': 'application/json',
            'x-api-key': (process.env.ANTHROPIC_API_KEY || '').trim(),
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: modelName,
            max_tokens: 400,
            messages: [{ role: 'user', content: prompt }],
          }),
        });
      } catch (err) {
        if (err.name === 'AbortError') throw new Error('AI yanıtı zaman aşımına uğradı.');
        throw err;
      } finally {
        clearTimeout(timer);
      }
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
    if (!(await isAuthed(req))) return res.status(401).json({ error: 'Yetkisiz cron çağrısı' });
    return runOnboardingCron(req, res);
  }

  if (!(await isAuthed(req))) return res.status(401).json({ error: 'Yetkisiz' });
  try {
    var tomorrow = new Date(trNow().getTime() + 86400000);
    var dateStr = (req.query && req.query.date) || trDateStr(tomorrow);
    var force = req.query && req.query.force === '1';
    var idea = (req.query && req.query.idea ? String(req.query.idea) : '').slice(0, 600);
    var type = (req.query && req.query.type === 'feed') ? 'feed' : 'story';
    var result = await generateForDate(dateStr, { force: force, idea: idea, type: type });
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
      .select('id, full_name, email, created_at, onboarding_email_step, plan, onboarding_rescue_sent_at')
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

      // Sıfır aktivasyon kurtarma e-postası — gün bazlı akıştan bağımsız,
      // tek seferlik. 48 saat geçtiği halde hâlâ hiç öğrencisi yoksa nazik
      // bir hatırlatma gönderilir (FOMO değil, düşük eforlu bir davet).
      if (hoursSinceSignup >= 48 && !coach.onboarding_rescue_sent_at) {
        const { count: liveStudentCount } = await supabaseAdmin
          .from('users')
          .select('id', { count: 'exact', head: true })
          .eq('coach_id', coach.id)
          .eq('role', 'student');

        if (!liveStudentCount) {
          try {
            await fetch(mailerUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ type: 'onboarding_rescue', to: coach.email, coach_name: coach.full_name })
            });
            results.push({ email: coach.email, sentType: 'onboarding_rescue', step: null });
          } catch (mailErr) {
            console.error(`[Cron Rescue Mail Failure] ${coach.email}`, mailErr.message);
          }
        }
        // Öğrencisi olsun ya da olmasın kontrol tamamlandı — cron'un her
        // çalıştığında bu koç için tekrar tekrar kontrol etmesini önler.
        await supabaseAdmin
          .from('users')
          .update({ onboarding_rescue_sent_at: new Date().toISOString() })
          .eq('id', coach.id);
      }

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

        // "İlk 100 koç" iddiası gerçek bir sayaç olmalı — sahte kıtlık güven
        // kaybettirir. Bugüne kadar kayıt olmuş toplam koç sayısını gönderiyoruz;
        // e-posta şablonu sayı 100'ü geçtiyse bu iddiayı otomatik göstermez.
        const { count: totalCoachCount } = await supabaseAdmin
          .from('users')
          .select('id', { count: 'exact', head: true })
          .eq('role', 'coach');

        emailPayload.founding_coach_count = totalCoachCount || 0;

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

