import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { action } = req.query;

  const supabaseAdmin = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

  // ── ACTION: CREATE (Davet Oluşturma) ──
  if (action === 'create') {
    let coachId = null;
    let coachName = 'Koçunuz';

    // 1. Standart Yetkilendirme (Supabase JWT Token)
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      if (token && token !== 'undefined' && token !== 'null') {
        const { data: { user }, error: authErr } = await supabaseAdmin.auth.getUser(token);
        if (!authErr && user) {
          coachId = user.id;
        }
      }
    }

    // 2. Yedek Yetkilendirme (RPC Fallback Girişleri İçin - Güvenli Hash Karşılaştırma)
    if (!coachId) {
      const xCoachId = req.headers['x-coach-id'];
      const xCoachHash = req.headers['x-coach-hash'];
      if (xCoachId && xCoachHash) {
        const { data: coachUser, error: dbErr } = await supabaseAdmin
          .from('users')
          .select('id, role, full_name')
          .eq('id', xCoachId)
          .eq('password_hash', xCoachHash)
          .maybeSingle();

        if (!dbErr && coachUser) {
          coachId = coachUser.id;
          coachName = coachUser.full_name;
        }
      }
    }

    // Yetki kontrolü
    if (!coachId) {
      return res.status(401).json({ error: 'Token gerekli (Oturum doğrulanamadı)' });
    }

    // Koçun veritabanındaki rol ve isim bilgisini al (eğer JWT ile girilmişse)
    if (coachName === 'Koçunuz') {
      const { data: caller } = await supabaseAdmin
        .from('users')
        .select('role, full_name')
        .eq('id', coachId)
        .maybeSingle();

      if (!caller || !['coach', 'developer'].includes(caller.role)) {
        return res.status(403).json({ error: 'Sadece koçlar davet gönderebilir' });
      }
      coachName = caller.full_name || 'Koçunuz';
    }

    const { email, student_name, username } = req.body;
    if (!email) return res.status(400).json({ error: 'E-posta adresi zorunludur' });

    const inviteToken = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString();

    const { error: inviteErr } = await supabaseAdmin
      .from('student_invitations')
      .insert({
        token: inviteToken,
        coach_id: coachId,
        email: email.toLowerCase().trim(),
        student_name: student_name ? student_name.trim() : null,
        username: username ? username.trim().toLowerCase() : null,
        expires_at: expiresAt
      });

    if (inviteErr) {
      console.error('[Invitation DB Error]', inviteErr.message);
      return res.status(500).json({ error: 'Davet oluşturulurken bir hata oluştu' });
    }

    // Trigger invitation email
    try {
      const protocol = req.headers.host.includes('localhost') || req.headers.host.includes('127.0.0.1') ? 'http' : 'https';
      const siteUrl = process.env.SITE_URL || `${protocol}://${req.headers.host}`;
      const invitationLink = `${siteUrl}/davet.html?token=${inviteToken}`;
      const mailerUrl = `${protocol}://${req.headers.host}/api/mailer`;

      const mailRes = await fetch(mailerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'student_invitation',
          to: email,
          student_name: student_name || '',
          coach_name: coachName,
          invitation_link: invitationLink
        })
      });

      if (!mailRes.ok) {
        const errText = await mailRes.text();
        console.warn('[Invitation Email Warning]', errText);
      }
    } catch (err) {
      console.error('[Invitation Email Error]', err.message);
    }

    return res.status(200).json({ success: true, token: inviteToken });
  }

  // ── ACTION: ACCEPT (Davet Kabul Etme) ──
  if (action === 'accept') {
    const { token, userId } = req.body;
    if (!token) return res.status(400).json({ error: 'Token gereklidir' });

    try {
      const { data: invite, error: selectErr } = await supabaseAdmin
        .from('student_invitations')
        .select('*')
        .eq('token', token)
        .maybeSingle();

      if (selectErr || !invite) {
        return res.status(404).json({ error: 'Davet bulunamadı' });
      }

      if (invite.used_at) {
        return res.status(400).json({ error: 'Bu davet zaten kullanılmış' });
      }

      if (new Date(invite.expires_at) < new Date()) {
        return res.status(400).json({ error: 'Davet süresi dolmuş' });
      }

      const { error: updateErr } = await supabaseAdmin
        .from('student_invitations')
        .update({ used_at: new Date().toISOString() })
        .eq('token', token);

      if (updateErr) throw new Error(updateErr.message);

      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('[Accept Invitation Error]', err.message);
      return res.status(500).json({ error: 'İşlem tamamlanırken bir sunucu hatası oluştu' });
    }
  }

  return res.status(400).json({ error: 'Geçersiz aksiyon' });
}
