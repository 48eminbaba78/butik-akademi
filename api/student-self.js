import crypto from 'node:crypto';
import { requireRole, getServiceClient } from '../lib/api-auth.js';

// Öğrencinin kendi profilini/şifresini güncellemesi için JWT doğrulamalı tek uç nokta.
// Sahte 'supabase_managed' hash bypass'ı güvenlik gerekçesiyle kaldırılmıştır.
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { action } = req.query;
  const auth = await requireRole(req, res, ['student']);
  if (!auth) return;

  const studentId = auth.user.id;
  let supabaseAdmin;
  try {
    supabaseAdmin = getServiceClient();
  } catch (_) {
    return res.status(500).json({ error: 'Sunucu yapılandırma hatası' });
  }

  // ── ACTION: PROFILE (öğrenci kendi student_profiles kaydını + yks_area günceller) ──
  if (action === 'profile') {
    const {
      bio, school, grade, target_university, target_department,
      struggling_subjects, daily_capacity, target_rank,
      parent_email, parent_phone, onboarding_done, yks_area
    } = req.body || {};

    if (yks_area && ['SAY', 'EA', 'SOZ', 'DIL'].includes(yks_area)) {
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
      const legacy = {
        id: studentId, school: payload.school, grade: payload.grade,
        target_university: payload.target_university, target_department: payload.target_department,
        struggling_subjects: payload.struggling_subjects, daily_capacity: payload.daily_capacity,
        bio: payload.bio
      };
      ({ error } = await supabaseAdmin.from('student_profiles').upsert(legacy));
    }
    if (error) return res.status(400).json({ error: 'Profil güncellenemedi' });
    return res.status(200).json({ success: true });
  }

  // ── ACTION: PASSWORD (öğrenci kendi şifresini değiştirir) ──
  if (action === 'password') {
    const { new_password } = req.body || {};
    if (!new_password || String(new_password).length < 6) {
      return res.status(400).json({ error: 'Şifre en az 6 karakter olmalı' });
    }

    const { error: authUpdErr } = await supabaseAdmin.auth.admin.updateUserById(studentId, { password: new_password });
    if (authUpdErr) {
      return res.status(400).json({ error: 'Şifre güncellenemedi' });
    }

    const passwordHash = crypto.createHash('sha256').update(new_password).digest('hex');
    const { error } = await supabaseAdmin.from('users').update({ password_hash: passwordHash }).eq('id', studentId);
    if (error) return res.status(400).json({ error: 'Profil şifre özeti güncellenemedi' });
    return res.status(200).json({ success: true });
  }

  return res.status(400).json({ error: 'Geçersiz aksiyon' });
}
