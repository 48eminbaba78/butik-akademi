// ═══════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — DELETE USER (Auth + DB)
// Endpoint: /api/delete-user
// Yetki: developer herkesi; koç yalnızca KENDİ öğrencisini silebilir
// ═══════════════════════════════════════════════════════════

import { requireRole, getServiceClient } from '../lib/api-auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { targetUserId } = req.body || {};
  if (!targetUserId) return res.status(400).json({ error: 'targetUserId gerekli' });

  const auth = await requireRole(req, res, ['coach', 'developer']);
  if (!auth) return;

  if (targetUserId === auth.user.id) {
    return res.status(400).json({ error: 'Kendi hesabını silemezsin' });
  }

  let admin;
  try {
    admin = getServiceClient();
  } catch (e) {
    return res.status(500).json({ error: 'Sunucu yapılandırma hatası' });
  }

  if (auth.profile.role === 'coach') {
    const { data: target } = await admin.from('users').select('role, coach_id').eq('id', targetUserId).maybeSingle();
    if (!target) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    if (target.role !== 'student' || target.coach_id !== auth.user.id) {
      return res.status(403).json({ error: 'Sadece kendi öğrencinizi silebilirsiniz' });
    }
  }

  const { error: deleteErr } = await admin.auth.admin.deleteUser(targetUserId);
  if (deleteErr) {
    if (deleteErr.message?.includes('not found') || deleteErr.status === 404) {
      await admin.from('users').delete().eq('id', targetUserId);
      return res.status(200).json({ success: true, note: 'auth-only-db-deleted' });
    }
    return res.status(400).json({ error: 'Kullanıcı silinemedi' });
  }

  return res.status(200).json({ success: true });
}
