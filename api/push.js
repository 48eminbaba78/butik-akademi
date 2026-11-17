// ═══════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — PUSH BİLDİRİMLERİ (abonelik + gönderim)
// Endpoint: /api/push?action=subscribe | /api/push?action=send
// JWT doğrulanmış kullanıcı sadece kendi aboneliğini kaydeder ve
// kendi adıyla ilişkili koç/öğrencisine push gönderebilir.
// ═══════════════════════════════════════════════════════════

import webpush from 'web-push';
import { verifyJwtUser, getServiceClient } from '../lib/api-auth.js';

if (process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails('mailto:destek@rostrumakademi.com', process.env.VAPID_PUBLIC_KEY, process.env.VAPID_PRIVATE_KEY);
}

async function handleSubscribe(req, res, auth) {
  const { subscription } = req.body || {};
  if (!subscription?.endpoint || !subscription?.keys?.p256dh || !subscription?.keys?.auth) {
    return res.status(400).json({ error: 'Geçerli bir subscription gerekli' });
  }
  const client = getServiceClient();
  const { error } = await client.from('push_subscriptions').upsert({
    user_id: auth.user.id,
    endpoint: subscription.endpoint,
    p256dh: subscription.keys.p256dh,
    auth: subscription.keys.auth
  }, { onConflict: 'endpoint' });
  if (error) return res.status(500).json({ error: 'Abonelik kaydedilemedi' });
  return res.status(200).json({ ok: true });
}

async function handleSend(req, res, auth) {
  if (!process.env.VAPID_PRIVATE_KEY) return res.status(200).json({ ok: false, skipped: 'VAPID not configured' });

  const { recipient_id, title, body, url } = req.body || {};
  if (!recipient_id || !title) {
    return res.status(400).json({ error: 'recipient_id ve title gerekli' });
  }

  const client = getServiceClient();
  const senderId = auth.user.id;

  const { data: pair } = await client.from('users').select('id,coach_id').in('id', [senderId, recipient_id]);
  const sender = pair?.find(u => u.id === senderId);
  const recipient = pair?.find(u => u.id === recipient_id);
  const related = auth.profile.role === 'developer'
    || (sender && recipient && (sender.coach_id === recipient_id || recipient.coach_id === senderId));
  if (!related) return res.status(403).json({ error: 'İlişki doğrulanamadı' });

  const { data: subs, error } = await client.from('push_subscriptions').select('*').eq('user_id', recipient_id);
  if (error) return res.status(500).json({ error: 'Abonelik sorgusu başarısız' });
  if (!subs?.length) return res.status(200).json({ ok: true, sent: 0 });

  const safeUrl = (typeof url === 'string' && url.startsWith('/')) ? url : '/app.html';
  const payload = JSON.stringify({ title: String(title).slice(0, 120), body: String(body || '').slice(0, 300), icon: '/icons/icon-192x192.png', url: safeUrl });
  let sent = 0;
  const dead = [];

  await Promise.all(subs.map(async (s) => {
    try {
      await webpush.sendNotification({ endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } }, payload);
      sent++;
    } catch (e) {
      if (e.statusCode === 404 || e.statusCode === 410) dead.push(s.id);
    }
  }));

  if (dead.length) await client.from('push_subscriptions').delete().in('id', dead);
  return res.status(200).json({ ok: true, sent });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const auth = await verifyJwtUser(req);
  if (!auth) return res.status(401).json({ error: 'Oturum doğrulaması gerekli' });

  const { action } = req.query;
  if (action === 'subscribe') return handleSubscribe(req, res, auth);
  if (action === 'send') return handleSend(req, res, auth);
  return res.status(400).json({ error: 'Geçersiz action' });
}
