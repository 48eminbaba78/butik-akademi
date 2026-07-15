import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  // Güvenlik: Vercel Cron Secret kontrolü (opsiyonel ama koruma için iyi)
  // CRON_SECRET env varsa doğrulanır, yoksa devam eder
  if (process.env.CRON_SECRET && req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Yetkisiz cron çağrısı' });
  }

  const supabaseAdmin = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

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
