import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const supabaseAdmin = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

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
