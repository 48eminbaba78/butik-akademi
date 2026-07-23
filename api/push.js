// ═══════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — PUSH BİLDİRİMLERİ (abonelik + gönderim)
// Endpoint: /api/push?action=subscribe | /api/push?action=send
// Vercel Hobby planında 12 fonksiyon sınırı var — abonelik ve gönderim
// tek dosyada, action parametresiyle ayrılıyor (bkz. student-self.js'teki
// aynı desen).
// ═══════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';
import webpush from 'web-push';

const SB_URL = process.env.SUPABASE_URL || 'https://imyhenrwmsmyikpollur.supabase.co';
const SB_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails('mailto:destek@rostrumakademi.com', process.env.VAPID_PUBLIC_KEY, process.env.VAPID_PRIVATE_KEY);
}

function db() {
  return createClient(SB_URL, SB_SERVICE_KEY, { auth: { autoRefreshToken: false, persistSession: false } });
}

async function handleSubscribe(req, res) {
  const { user_id, subscription } = req.body || {};
  if (!user_id || !subscription?.endpoint || !subscription?.keys?.p256dh || !subscription?.keys?.auth) {
    return res.status(400).json({ error: 'user_id ve geçerli bir subscription gerekli' });
  }
  const { error } = await db().from('push_subscriptions').upsert({
    user_id,
    endpoint: subscription.endpoint,
    p256dh: subscription.keys.p256dh,
    auth: subscription.keys.auth
  }, { onConflict: 'endpoint' });
  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json({ ok: true });
}

async function handleSend(req, res) {
  if (!process.env.VAPID_PRIVATE_KEY) return res.status(200).json({ ok: false, skipped: 'VAPID not configured' });

  const { sender_id, recipient_id, title, body, url } = req.body || {};
  if (!sender_id || !recipient_id || !title) {
    return res.status(400).json({ error: 'sender_id, recipient_id ve title gerekli' });
  }

  const client = db();

  // Koç↔öğrenci ilişkisini doğrula — rastgele kullanıcıya bildirim spam'i önlemek için
  const { data: pair } = await client.from('users').select('id,coach_id').in('id', [sender_id, recipient_id]);
  const sender = pair?.find(u => u.id === sender_id);
  const recipient = pair?.find(u => u.id === recipient_id);
  const related = sender && recipient && (sender.coach_id === recipient_id || recipient.coach_id === sender_id);
  if (!related) return res.status(403).json({ error: 'İlişki doğrulanamadı' });

  const { data: subs, error } = await client.from('push_subscriptions').select('*').eq('user_id', recipient_id);
  if (error) return res.status(500).json({ error: error.message });
  if (!subs?.length) return res.status(200).json({ ok: true, sent: 0 });

  const payload = JSON.stringify({ title, body: body || '', icon: '/icons/icon-192x192.png', url: url || '/app.html' });
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
  res.status(200).json({ ok: true, sent });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { action } = req.query;
  if (action === 'subscribe') return handleSubscribe(req, res);
  if (action === 'send') return handleSend(req, res);
  res.status(400).json({ error: 'Geçersiz action' });
}
