import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

// Öğrencinin kendi profilini/şifresini güncellemesi için tek uç nokta.
// student_profiles RLS politikası "id = auth.uid()" gerektiriyor; ama bu uygulamada
// bazı öğrenciler gerçek Supabase Auth JWT'si olmadan (kullanıcı adı + password_hash
// karşılaştırmasıyla çalışan RPC fallback girişiyle) oturum açabiliyor. Böyle bir
// oturumun anon anahtarıyla yaptığı doğrudan REST çağrıları auth.uid() = null olduğu
// için 401 ile reddediliyor. Bu uç nokta, kimliği (JWT ya da hash eşleşmesiyle)
// sunucu tarafında doğrulayıp service role ile yazarak bu açığı kapatır.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { action } = req.query;

  const supabaseAdmin = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

  // ── Kimlik doğrulama: önce gerçek JWT, yoksa X-Student-Id / X-Student-Hash ──
  let studentId = null;

  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    if (token && token !== 'undefined' && token !== 'null') {
      const { data: { user }, error: authErr } = await supabaseAdmin.auth.getUser(token);
      if (!authErr && user) studentId = user.id;
    }
  }

  if (!studentId) {
    const xId = req.headers['x-student-id'];
    const xHash = req.headers['x-student-hash'];
    if (xId && xHash) {
      const { data: stuUser } = await supabaseAdmin
        .from('users')
        .select('id, role')
        .eq('id', xId)
        .eq('password_hash', xHash)
        .maybeSingle();
      if (stuUser && stuUser.role === 'student') studentId = stuUser.id;
    }
  }

  if (!studentId) return res.status(401).json({ error: 'Oturum doğrulanamadı' });

  // ── ACTION: PROFILE (öğrenci kendi student_profiles kaydını + yks_area günceller) ──
  if (action === 'profile') {
    const {
      bio, school, grade, target_university, target_department,
      struggling_subjects, daily_capacity, target_rank,
      parent_email, parent_phone, onboarding_done, yks_area
    } = req.body || {};

    if (yks_area) {
      await supabaseAdmin.from('users').update({ yks_area }).eq('id', studentId);
    }

    const payload = { id: studentId, updated_at: new Date().toISOString() };
    if (bio !== undefined) payload.bio = bio;
    if (school !== undefined) payload.school = school;
    if (grade !== undefined) payload.grade = grade;
    if (target_university !== undefined) payload.target_university = target_university;
    if (target_department !== undefined) payload.target_department = target_department;
    if (struggling_subjects !== undefined) payload.struggling_subjects = struggling_subjects;
    if (daily_capacity !== undefined) payload.daily_capacity = daily_capacity;
    if (target_rank !== undefined) payload.target_rank = target_rank;
    if (parent_email !== undefined) payload.parent_email = parent_email;
    if (parent_phone !== undefined) payload.parent_phone = parent_phone;
    if (onboarding_done !== undefined) payload.onboarding_done = onboarding_done;

    let { error } = await supabaseAdmin.from('student_profiles').upsert(payload);
    if (error && /column/i.test(error.message || '')) {
      // migration_v23 henüz çalıştırılmamış olabilir — eski kolon setiyle tekrar dene
      const legacy = { id: studentId, school: payload.school, grade: payload.grade,
        target_university: payload.target_university, target_department: payload.target_department,
        struggling_subjects: payload.struggling_subjects, daily_capacity: payload.daily_capacity,
        bio: payload.bio };
      ({ error } = await supabaseAdmin.from('student_profiles').upsert(legacy));
    }
    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json({ success: true });
  }

  // ── ACTION: PASSWORD (öğrenci kendi şifresini değiştirir) ──
  if (action === 'password') {
    const { new_password } = req.body || {};
    if (!new_password || new_password.length < 4) {
      return res.status(400).json({ error: 'Şifre en az 4 karakter olmalı' });
    }

    const passwordHash = crypto.createHash('sha256').update(new_password).digest('hex');

    // Gerçek Supabase Auth hesabı varsa şifresini de senkron tut ki bir sonraki
    // girişte normal (JWT) yoldan giriş yapılabilsin. Hesap yoksa/senkron
    // değilse bu çağrı sessizce başarısız olabilir — asıl kayıt password_hash'tir.
    await supabaseAdmin.auth.admin.updateUserById(studentId, { password: new_password }).catch(() => {});

    const { error } = await supabaseAdmin.from('users').update({ password_hash: passwordHash }).eq('id', studentId);
    if (error) return res.status(400).json({ error: error.message });
    return res.status(200).json({ success: true, password_hash: passwordHash });
  }

  return res.status(400).json({ error: 'Geçersiz aksiyon' });
}
