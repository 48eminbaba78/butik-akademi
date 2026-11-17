import crypto from 'node:crypto';
import {
  getServiceClient,
  requireRole,
  getSafeOrigin,
  makeInternalHeaders,
  checkCoachStudentQuota,
} from '../lib/api-auth.js';

function localIsoToday() {
  const now = new Date(Date.now() + 3 * 3600 * 1000);
  return now.toISOString().slice(0, 10);
}

export default async function handler(req, res) {
  let supabaseAdmin;
  try {
    supabaseAdmin = getServiceClient();
  } catch (_) {
    return res.status(500).json({ error: 'Sunucu yapılandırma hatası' });
  }

  // ── PUBLIC READ: Koç ödeme modalı için hassas anahtar içermeyen banka/fiyat bilgisi ──
  if (req.method === 'GET' && req.query?.type === 'payment-info') {
    const { data } = await supabaseAdmin
      .from('platform_settings')
      .select('value')
      .eq('key', 'payment_settings')
      .maybeSingle();
    const v = data?.value || {};
    return res.status(200).json({
      bank_name: v.bank_name || '',
      account_holder: v.account_holder || '',
      iban: v.iban || '',
      price_bireysel: v.price_bireysel || 0,
      price_bireysel_10mo: v.price_bireysel_10mo || 0,
      price_profesyonel: v.price_profesyonel || 0,
      price_profesyonel_10mo: v.price_profesyonel_10mo || 0,
    });
  }

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // ── PUBLIC: Koç kayıt (type === 'coach') ──
  if (req.body?.type === 'coach') {
    const { full_name, email, password, brand_name } = req.body;
    const plan_tier = ['bireysel', 'profesyonel'].includes(req.body.plan_tier) ? req.body.plan_tier : 'bireysel';
    if (!full_name || !email || !password) {
      return res.status(400).json({ error: 'Ad, e-posta ve şifre zorunludur.' });
    }
    if (String(password).length < 8) {
      return res.status(400).json({ error: 'Şifre en az 8 karakter olmalıdır.' });
    }

    const { data: newUser, error: createErr } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name, role: 'coach' }
    });
    if (createErr) {
      const msg = createErr.message.includes('already') ? 'Bu e-posta adresiyle zaten bir hesap var.' : 'Hesap oluşturulamadı.';
      return res.status(400).json({ error: msg });
    }

    const userId = newUser.user.id;
    const passHash = crypto.createHash('sha256').update(password).digest('hex');
    const trialEndsAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

    const { error: profileErr } = await supabaseAdmin.from('users').upsert({
      id: userId,
      full_name,
      username: String(email).split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, ''),
      password_hash: passHash,
      role: 'coach',
      email,
      plan: 'trial',
      plan_tier,
      trial_ends_at: trialEndsAt,
      color: '#E8613A',
      progress: 0
    });
    if (profileErr) {
      await supabaseAdmin.auth.admin.deleteUser(userId);
      return res.status(400).json({ error: 'Profil oluşturulamadı.' });
    }

    await supabaseAdmin.from('workspaces').upsert({
      coach_id: userId,
      brand_name: brand_name || (String(full_name).split(' ')[0] + ' Akademi'),
      brand_color: '#E8613A',
      onboarding_done: false
    });

    try {
      const mailerUrl = `${getSafeOrigin(req)}/api/mailer`;
      await fetch(mailerUrl, {
        method: 'POST',
        headers: makeInternalHeaders(),
        body: JSON.stringify({
          type: 'coach_welcome',
          to: email,
          coach_name: full_name,
          email,
          brand_name: brand_name || (String(full_name).split(' ')[0] + ' Akademi')
        })
      });
    } catch (mailErr) {
      console.error('[Coach Welcome Email Error]', mailErr.message);
    }

    return res.status(200).json({ userId, trialEndsAt });
  }

  // ── AUTHENTICATED: Koç ödeme/dekont bildirimi (type === 'submit-payment') ──
  if (req.body?.type === 'submit-payment') {
    const auth = await requireRole(req, res, ['coach', 'developer']);
    if (!auth) return;

    const coach = auth.profile;
    const { months, receipt_path } = req.body;
    const periodMonths = [1, 3, 6, 10, 12].includes(+months) ? +months : 1;
    if (!receipt_path || !String(receipt_path).startsWith(`${coach.id}/`)) {
      return res.status(400).json({ error: 'Geçersiz dekont dosya yolu' });
    }

    let refCode = coach.payment_reference_code;
    if (!refCode) {
      const { data: rpcData, error: rpcErr } = await supabaseAdmin.rpc('generate_payment_ref_code');
      if (rpcErr) return res.status(500).json({ error: 'Referans kodu üretilemedi' });
      refCode = rpcData;
      await supabaseAdmin.from('users').update({ payment_reference_code: refCode }).eq('id', coach.id);
    }

    const { data: settingsRow } = await supabaseAdmin
      .from('platform_settings')
      .select('value')
      .eq('key', 'payment_settings')
      .maybeSingle();
    const sv = settingsRow?.value || {};
    const tier = coach.plan_tier === 'profesyonel' ? 'profesyonel' : 'bireysel';
    const priceMonthly = +sv[`price_${tier}`] || 0;
    const amount = periodMonths === 10
      ? (+sv[`price_${tier}_10mo`] || priceMonthly * 10)
      : priceMonthly * periodMonths;

    const today = localIsoToday();
    const { error: insertErr } = await supabaseAdmin.from('payments').insert({
      coach_id: coach.id,
      coach_name: coach.full_name || coach.username || coach.email || '',
      amount,
      method: 'havale',
      period_months: periodMonths,
      period_start: today,
      payment_date: today,
      receipt_url: receipt_path,
      note: 'Koç tarafından bildirildi',
      verified: false,
      status: 'pending'
    });
    if (insertErr) return res.status(400).json({ error: 'Ödeme bildirimi kaydedilemedi' });

    return res.status(200).json({ success: true, refCode });
  }

  // ── AUTHENTICATED: Öğrenci oluşturma ──
  const auth = await requireRole(req, res, ['coach', 'developer']);
  if (!auth) return;

  const { email, password, full_name, username, color, target, progress, week_start, coach_id, exam_profile, yks_area } = req.body || {};
  if (!email || !password || !full_name || !username) {
    return res.status(400).json({ error: 'Zorunlu alanlar eksik' });
  }

  // Koç başka bir koça öğrenci enjekte edemez — yalnızca kendi adına ekler
  const effectiveCoachId = (auth.profile.role === 'developer' && coach_id) ? coach_id : auth.user.id;
  const quota = await checkCoachStudentQuota(supabaseAdmin, effectiveCoachId);
  if (!quota.allowed) {
    return res.status(403).json({
      error: `${quota.tier === 'profesyonel' ? 'Profesyonel' : 'Bireysel'} paket öğrenci limitinize (${quota.limit}) ulaştınız. Lütfen paketinizi yükseltin.`
    });
  }

  const { data: newUser, error: createErr } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name, role: 'student' }
  });
  if (createErr) return res.status(400).json({ error: 'Öğrenci hesabı oluşturulamadı' });

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
    coach_id: effectiveCoachId,
    exam_profile: exam_profile || 'YKS',
    yks_area: ['SAY', 'EA', 'SOZ', 'DIL'].includes(yks_area) ? yks_area : 'SAY'
  });

  if (profileErr) {
    await supabaseAdmin.auth.admin.deleteUser(userId);
    return res.status(400).json({ error: 'Öğrenci profili kaydedilemedi' });
  }

  try {
    const { data: coachData } = await supabaseAdmin.from('users').select('full_name').eq('id', effectiveCoachId).maybeSingle();
    const coachName = coachData?.full_name || 'Koçunuz';
    const mailerUrl = `${getSafeOrigin(req)}/api/mailer`;

    await fetch(mailerUrl, {
      method: 'POST',
      headers: makeInternalHeaders(),
      body: JSON.stringify({
        type: 'student_welcome',
        to: email,
        student_name: full_name,
        username,
        password,
        coach_name: coachName
      })
    });
  } catch (err) {
    console.error('[Welcome Email Error]', err.message);
  }

  return res.status(200).json({ userId });
}
