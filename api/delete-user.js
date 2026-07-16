// ═══════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — DELETE USER (Auth + DB)
// Endpoint: /api/delete-user
// Yetki: developer herkesi; koç yalnızca KENDİ öğrencisini silebilir
// ═══════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';

const SB_URL = process.env.SUPABASE_URL || 'https://imyhenrwmsmyikpollur.supabase.co';
const SB_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { targetUserId } = req.body;
  if (!targetUserId) return res.status(400).json({ error: 'targetUserId gerekli' });

  // Caller doğrulama — sadece developer silebilir
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token gerekli' });

  const db = createClient(SB_URL, SB_ANON);
  const { data: { user }, error: authErr } = await db.auth.getUser(token);
  if (authErr || !user) return res.status(401).json({ error: 'Yetkisiz' });

  const { data: caller } = await db.from('users').select('role').eq('id', user.id).single();

  // Kendini silmeye çalışıyor mu?
  if (targetUserId === user.id) return res.status(400).json({ error: 'Kendi hesabını silemezsin' });

  if (caller?.role === 'coach') {
    // Koç yalnızca kendi öğrencisini silebilir — hedefi service-role ile doğrula
    // (anon istemci RLS'e takılabilir; yetki kararını güvenilir veriyle ver)
    const adminCheck = createClient(SB_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
      auth: { autoRefreshToken: false, persistSession: false }
    });
    const { data: target } = await adminCheck.from('users').select('role, coach_id').eq('id', targetUserId).single();
    if (!target) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    if (target.role !== 'student' || target.coach_id !== user.id) {
      return res.status(403).json({ error: 'Sadece kendi öğrencinizi silebilirsiniz' });
    }
  } else if (caller?.role !== 'developer') {
    return res.status(403).json({ error: 'Bu işlem için yetkiniz yok' });
  }

  // Admin API ile hem auth hem DB'den sil (CASCADE ile public.users da silinir)
  const admin = createClient(SB_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false }
  });

  const { error: deleteErr } = await admin.auth.admin.deleteUser(targetUserId);

  if (deleteErr) {
    // Auth'da yoksa sadece public.users'dan sil
    if (deleteErr.message?.includes('not found') || deleteErr.status === 404) {
      await admin.from('users').delete().eq('id', targetUserId);
      return res.status(200).json({ success: true, note: 'auth-only-db-deleted' });
    }
    return res.status(400).json({ error: deleteErr.message });
  }

  return res.status(200).json({ success: true });
}
