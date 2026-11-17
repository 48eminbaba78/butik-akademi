import crypto from 'node:crypto';
import {
  requireRole,
  verifyJwtUser,
  getServiceClient,
  getSafeOrigin,
  makeInternalHeaders,
  checkCoachStudentQuota,
} from '../lib/api-auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { action } = req.query;
  let supabaseAdmin;
  try {
    supabaseAdmin = getServiceClient();
  } catch (_) {
    return res.status(500).json({ error: 'Sunucu yapılandırma hatası' });
  }

  // ── ACTION: CREATE (Davet Oluşturma) ──
  if (action === 'create') {
    const auth = await requireRole(req, res, ['coach', 'developer']);
    if (!auth) return;

    const coachId = auth.user.id;
    const coachName = auth.profile.full_name || 'Koçunuz';

    const quota = await checkCoachStudentQuota(supabaseAdmin, coachId);
    if (!quota.allowed) {
      return res.status(403).json({
        error: `${quota.tier === 'profesyonel' ? 'Profesyonel' : 'Bireysel'} paket öğrenci limitinize (${quota.limit}) ulaştınız. Lütfen paketinizi yükseltin.`
      });
    }

    const { email, student_name, username, send_email } = req.body || {};
    if (!student_name || !String(student_name).trim()) {
      return res.status(400).json({ error: 'Öğrencinin adı ve soyadı zorunludur' });
    }

    const inviteToken = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString();

    const { error: inviteErr } = await supabaseAdmin
      .from('student_invitations')
      .insert({
        token: inviteToken,
        coach_id: coachId,
        email: email ? String(email).toLowerCase().trim() : '',
        student_name: String(student_name).trim(),
        username: username ? String(username).trim().toLowerCase() : null,
        expires_at: expiresAt
      });

    if (inviteErr) {
      console.error('[Invitation DB Error]', inviteErr.message);
      return res.status(500).json({ error: 'Davet oluşturulurken bir hata oluştu' });
    }

    if (send_email && email) {
      try {
        await _sendInviteMail(req, { token: inviteToken, email, student_name, coachName });
      } catch (err) {
        console.error('[Invitation Email Error]', err.message);
      }
    }

    return res.status(200).json({ success: true, token: inviteToken });
  }

  // ── ACTION: SEND_EMAIL (Mevcut davet için e-posta gönder) ──
  if (action === 'send_email') {
    const auth = await requireRole(req, res, ['coach', 'developer']);
    if (!auth) return;

    const { token, email: reqEmail } = req.body || {};
    if (!token) return res.status(400).json({ error: 'Token gereklidir' });

    const { data: invite } = await supabaseAdmin
      .from('student_invitations')
      .select('token, email, student_name, coach_id, used_at, expires_at')
      .eq('token', token)
      .maybeSingle();
    if (!invite) return res.status(404).json({ error: 'Davet bulunamadı' });
    if (auth.profile.role !== 'developer' && invite.coach_id !== auth.user.id) {
      return res.status(403).json({ error: 'Bu davet üzerinde yetkiniz yok' });
    }
    if (invite.used_at) return res.status(400).json({ error: 'Bu davet zaten kullanılmış' });
    if (new Date(invite.expires_at) < new Date()) return res.status(400).json({ error: 'Davet süresi dolmuş' });

    const targetEmail = reqEmail ? String(reqEmail).toLowerCase().trim() : invite.email;
    if (!targetEmail || !targetEmail.includes('@')) {
      return res.status(400).json({ error: 'Geçerli bir e-posta adresi girin' });
    }

    if (targetEmail !== invite.email) {
      await supabaseAdmin
        .from('student_invitations')
        .update({ email: targetEmail })
        .eq('token', token);
    }

    const { data: coach } = await supabaseAdmin
      .from('users').select('full_name').eq('id', invite.coach_id).maybeSingle();

    try {
      await _sendInviteMail(req, {
        token: invite.token,
        email: targetEmail,
        student_name: invite.student_name,
        coachName: coach?.full_name || 'Koçunuz'
      });
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('[Invitation Email Error]', err.message);
      return res.status(400).json({ error: 'E-posta gönderilemedi. Davet bağlantısını kopyalayarak iletebilirsiniz.' });
    }
  }

  // ── ACTION: UPDATE_APPLICATION (Başvuru durumunu günceller) ──
  if (action === 'update_application') {
    const auth = await requireRole(req, res, ['coach', 'developer']);
    if (!auth) return;

    const { appId, status } = req.body || {};
    const allowedStatuses = ['pending', 'accepted', 'rejected', 'matched', 'completed'];
    if (!appId || !allowedStatuses.includes(status)) {
      return res.status(400).json({ error: 'Eksik veya geçersiz parametre' });
    }

    const { data: existingApp } = await supabaseAdmin
      .from('match_requests')
      .select('id, coach_id')
      .eq('id', appId)
      .maybeSingle();
    if (!existingApp) return res.status(404).json({ error: 'Başvuru bulunamadı' });
    if (auth.profile.role !== 'developer' && existingApp.coach_id !== auth.user.id) {
      return res.status(403).json({ error: 'Bu başvuru üzerinde yetkiniz yok' });
    }

    const { error: updateErr } = await supabaseAdmin
      .from('match_requests')
      .update({ status })
      .eq('id', appId);
    if (updateErr) {
      console.error('[Update Application Error]', updateErr.message);
      return res.status(500).json({ error: 'Başvuru güncellenemedi' });
    }
    return res.status(200).json({ success: true });
  }

  // ── ACTION: ACCEPT (Davet Kabul Etme — kimliği doğrulanmış öğrenci) ──
  if (action === 'accept') {
    const auth = await verifyJwtUser(req);
    if (!auth) return res.status(401).json({ error: 'Daveti kabul etmek için oturum açmanız gerekir' });

    const { token } = req.body || {};
    if (!token) return res.status(400).json({ error: 'Token gereklidir' });

    const { data: invite, error: selectErr } = await supabaseAdmin
      .from('student_invitations')
      .select('*')
      .eq('token', token)
      .maybeSingle();

    if (selectErr || !invite) return res.status(404).json({ error: 'Davet bulunamadı' });
    if (invite.used_at) return res.status(400).json({ error: 'Bu davet zaten kullanılmış' });
    if (new Date(invite.expires_at) < new Date()) return res.status(400).json({ error: 'Davet süresi dolmuş' });

    const quota = await checkCoachStudentQuota(supabaseAdmin, invite.coach_id);
    if (!quota.allowed) {
      return res.status(403).json({ error: 'Koçunuzun öğrenci kontenjanı dolduğu için bu davet şu an kabul edilemiyor' });
    }

    const { error: bindErr } = await supabaseAdmin
      .from('users')
      .update({ coach_id: invite.coach_id, role: 'student' })
      .eq('id', auth.user.id);
    if (bindErr) return res.status(500).json({ error: 'Öğrenci eşleştirmesi tamamlanamadı' });

    const { error: updateErr } = await supabaseAdmin
      .from('student_invitations')
      .update({ used_at: new Date().toISOString() })
      .eq('token', token);
    if (updateErr) return res.status(500).json({ error: 'Davet güncellenemedi' });

    return res.status(200).json({ success: true });
  }

  return res.status(400).json({ error: 'Geçersiz aksiyon' });
}

async function _sendInviteMail(req, { token, email, student_name, coachName }) {
  const siteUrl = getSafeOrigin(req);
  const invitationLink = `${siteUrl}/davet.html?token=${encodeURIComponent(token)}`;
  const mailerUrl = `${siteUrl}/api/mailer`;

  const mailRes = await fetch(mailerUrl, {
    method: 'POST',
    headers: makeInternalHeaders(),
    body: JSON.stringify({
      type: 'student_invitation',
      to: email,
      student_name: student_name || '',
      coach_name: coachName,
      invitation_link: invitationLink
    })
  });
  if (!mailRes.ok) throw new Error(await mailRes.text());
}
