import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const supabaseAdmin = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

  // ── PUBLIC: Koç kayıt (type === 'coach', kimlik doğrulama gerekmez) ──
  if (req.body.type === 'coach') {
    const { full_name, email, password, brand_name } = req.body;
    if (!full_name || !email || !password) {
      return res.status(400).json({ error: 'Ad, e-posta ve şifre zorunludur.' });
    }
    if (password.length < 8) {
      return res.status(400).json({ error: 'Şifre en az 8 karakter olmalıdır.' });
    }

    // Auth kullanıcısı oluştur
    const { data: newUser, error: createErr } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name, role: 'coach' }
    });
    if (createErr) {
      const msg = createErr.message.includes('already') ? 'Bu e-posta adresiyle zaten bir hesap var.' : createErr.message;
      return res.status(400).json({ error: msg });
    }

    const userId = newUser.user.id;
    const passHash = crypto.createHash('sha256').update(password).digest('hex');
    const trialEndsAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

    // users tablosuna yaz
    const { error: profileErr } = await supabaseAdmin.from('users').upsert({
      id: userId,
      full_name,
      username: email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, ''),
      password_hash: passHash,
      role: 'coach',
      email,
      plan: 'trial',
      trial_ends_at: trialEndsAt,
      color: '#E8613A',
      progress: 0
    });
    if (profileErr) {
      await supabaseAdmin.auth.admin.deleteUser(userId);
      return res.status(400).json({ error: profileErr.message });
    }

    // workspace oluştur
    await supabaseAdmin.from('workspaces').upsert({
      coach_id: userId,
      brand_name: brand_name || (full_name.split(' ')[0] + ' Akademi'),
      brand_color: '#E8613A',
      onboarding_done: false
    });

    // Hoş geldin maili gönder (fire-and-forget)
    try {
      const protocol = (req.headers.host || '').includes('localhost') ? 'http' : 'https';
      const mailerUrl = `${protocol}://${req.headers.host}/api/mailer`;
      await fetch(mailerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'coach_welcome',
          to: email,
          coach_name: full_name,
          email: email,
          brand_name: brand_name || (full_name.split(' ')[0] + ' Akademi')
        })
      });
    } catch (mailErr) {
      // Mail hatası kayıt akışını engellemez
      console.error('[Coach Welcome Email Error]', mailErr.message);
    }

    return res.status(200).json({ userId, trialEndsAt });
  }

  // ── AUTHENTICATED: Koç ödeme/dekont bildirimi (type === 'submit-payment') ──
  if (req.body.type === 'submit-payment') {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token gerekli' });

    const { data: { user }, error: authErr } = await supabaseAdmin.auth.getUser(token);
    if (authErr || !user) return res.status(401).json({ error: 'Yetkisiz' });

    const { data: coach, error: coachErr } = await supabaseAdmin
      .from('users')
      .select('id, full_name, username, email, role, payment_reference_code')
      .eq('id', user.id)
      .single();
    if (coachErr || !coach) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    if (!['coach', 'developer'].includes(coach.role)) {
      return res.status(403).json({ error: 'Sadece koçlar ödeme bildirebilir' });
    }

    const { months, receipt_path } = req.body;
    const periodMonths = [1, 3, 6, 12].includes(+months) ? +months : 1;
    if (!receipt_path) return res.status(400).json({ error: 'Dekont dosyası gerekli' });

    // Referans kodu yoksa üret
    let refCode = coach.payment_reference_code;
    if (!refCode) {
      const { data: rpcData, error: rpcErr } = await supabaseAdmin.rpc('generate_payment_ref_code');
      if (rpcErr) return res.status(500).json({ error: 'Referans kodu üretilemedi: ' + rpcErr.message });
      refCode = rpcData;
      await supabaseAdmin.from('users').update({ payment_reference_code: refCode }).eq('id', coach.id);
    }

    // Fiyatı platform_settings'ten oku (hardcode yok)
    const { data: settingsRow } = await supabaseAdmin
      .from('platform_settings')
      .select('value')
      .eq('key', 'payment_settings')
      .maybeSingle();
    const priceMonthly = +(settingsRow?.value?.price_monthly) || 0;
    const amount = priceMonthly * periodMonths;

    const { error: insertErr } = await supabaseAdmin.from('payments').insert({
      coach_id: coach.id,
      coach_name: coach.full_name || coach.username || coach.email || '',
      amount,
      method: 'havale',
      period_months: periodMonths,
      period_start: new Date().toISOString().split('T')[0],
      receipt_url: receipt_path,
      note: 'Koç tarafından bildirildi',
      verified: false,
      status: 'pending'
    });
    if (insertErr) return res.status(400).json({ error: insertErr.message });

    return res.status(200).json({ success: true, refCode });
  }

  // ── AUTHENTICATED: Öğrenci oluşturma ──
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token gerekli' });

  const { data: { user }, error: authErr } = await supabaseAdmin.auth.getUser(token);
  if (authErr || !user) return res.status(401).json({ error: 'Yetkisiz' });

  const { data: caller } = await supabaseAdmin.from('users').select('role').eq('id', user.id).single();
  if (!caller || !['coach', 'developer'].includes(caller.role)) {
    return res.status(403).json({ error: 'Sadece koçlar öğrenci ekleyebilir' });
  }

  const { email, password, full_name, username, color, target, progress, week_start, coach_id, exam_profile, yks_area } = req.body;
  if (!email || !password || !full_name || !username) {
    return res.status(400).json({ error: 'Zorunlu alanlar eksik' });
  }

  // Admin API ile kullanıcı oluştur
  const { data: newUser, error: createErr } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name, role: 'student' }
  });
  if (createErr) return res.status(400).json({ error: createErr.message });

  const userId = newUser.user.id;
  const passHash = crypto.createHash('sha256').update(password).digest('hex');

  const { error: profileErr } = await supabaseAdmin.from('users').upsert({
    id: userId,
    full_name,
    username,
    password_hash: passHash,
    role: 'student',
    email,
    color: color || '#4da6ff',
    target: target || '',
    progress: progress || 0,
    week_start: week_start || 0,
    coach_id,
    exam_profile: exam_profile || 'YKS',
    yks_area: yks_area || 'SAY'
  });

  if (profileErr) {
    await supabaseAdmin.auth.admin.deleteUser(userId);
    return res.status(400).json({ error: profileErr.message });
  }

  // E-posta gönderimini tetikle
  try {
    const { data: coachData } = await supabaseAdmin.from('users').select('full_name').eq('id', coach_id).single();
    const coachName = coachData?.full_name || 'Koçunuz';
    const protocol = req.headers.host.includes('localhost') || req.headers.host.includes('127.0.0.1') ? 'http' : 'https';
    const mailerUrl = `${protocol}://${req.headers.host}/api/mailer`;
    
    await fetch(mailerUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'student_welcome',
        to: email,
        student_name: full_name,
        username: username,
        password: password,
        coach_name: coachName
      })
    });
  } catch (err) {
    console.error('[Welcome Email Error]', err.message);
  }

  return res.status(200).json({ userId });
}
