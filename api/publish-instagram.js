// ═══════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — INSTAGRAM PUBLISH API
// Görsel tarayıcıda üretilip base64 olarak gönderilir.
// Bu endpoint sadece Storage yükleme + Meta Graph API çağrısı yapar.
// ═══════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';

const SB_URL = 'https://imyhenrwmsmyikpollur.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34';
const db = createClient(SB_URL, SB_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { caption, imageBase64, isStory } = req.body;

  if (!imageBase64) {
    return res.status(400).json({ message: 'imageBase64 parametresi eksik.' });
  }

  try {
    // 1. Credentials Supabase'den oku
    const { data: credData, error: credError } = await db
      .from('platform_settings')
      .select('value')
      .eq('key', 'instagram_credentials')
      .maybeSingle();

    if (credError) {
      return res.status(500).json({ message: 'Kimlik bilgileri okunamadı: ' + credError.message });
    }

    const creds = credData?.value;
    if (!creds?.instagram_account_id || !creds?.instagram_access_token) {
      return res.status(400).json({
        message: 'Instagram kimlik bilgileri eksik. Admin paneli → Yapay Zeka & Pazarlama → Bağlantı Ayarları bölümünden girin.'
      });
    }

    const accountId = creds.instagram_account_id;
    const accessToken = creds.instagram_access_token;

    // 2. Base64 → Buffer → Supabase Storage
    const imageBuffer = Buffer.from(imageBase64, 'base64');
    const fileName = `ig-${isStory ? 'story' : 'post'}-${Date.now()}.jpg`;

    const { error: uploadError } = await db.storage
      .from('platform_assets')
      .upload(`instagram_posts/${fileName}`, imageBuffer, {
        contentType: 'image/jpeg',
        cacheControl: '3600',
        upsert: true
      });

    if (uploadError) {
      return res.status(500).json({
        message: `Storage yüklemesi başarısız: ${uploadError.message}`
      });
    }

    const { data: { publicUrl } } = db.storage
      .from('platform_assets')
      .getPublicUrl(`instagram_posts/${fileName}`);

    console.log('[API] Görsel URL:', publicUrl);

    // 3. Instagram Graph API v20.0 — Container oluştur
    const mediaParams = { image_url: publicUrl, access_token: accessToken };
    if (isStory) {
      mediaParams.media_type = 'STORIES';
    } else {
      mediaParams.caption = caption || '';
    }

    const containerRes = await fetch(`https://graph.facebook.com/v20.0/${accountId}/media`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mediaParams)
    });

    const containerData = await containerRes.json();
    if (containerData.error) {
      return res.status(400).json({ message: 'Meta Hatası (Container): ' + containerData.error.message });
    }

    const creationId = containerData.id;
    console.log('[API] Container ID:', creationId);

    // 4. Container FINISHED olana kadar bekle (max 30 sn)
    let statusCode = 'IN_PROGRESS';
    let attempts = 0;
    while (statusCode === 'IN_PROGRESS' && attempts < 10) {
      await new Promise(r => setTimeout(r, 3000));
      const statusRes = await fetch(
        `https://graph.facebook.com/v20.0/${creationId}?fields=status_code&access_token=${accessToken}`
      );
      const statusData = await statusRes.json();
      statusCode = statusData.status_code || 'ERROR';
      attempts++;
      console.log(`[API] Container status (${attempts}): ${statusCode}`);
    }

    if (statusCode !== 'FINISHED') {
      return res.status(400).json({ message: `Container hazırlanamadı. Durum: ${statusCode}` });
    }

    // 5. Yayınla
    const publishRes = await fetch(`https://graph.facebook.com/v20.0/${accountId}/media_publish`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ creation_id: creationId, access_token: accessToken })
    });

    const publishData = await publishRes.json();
    if (publishData.error) {
      return res.status(400).json({ message: 'Meta Hatası (Publish): ' + publishData.error.message });
    }

    console.log('[API] Yayınlandı! ID:', publishData.id);
    return res.status(200).json({ success: true, id: publishData.id, imageUrl: publicUrl });

  } catch (err) {
    console.error('Publish Instagram API error:', err);
    return res.status(500).json({ message: 'Sunucu hatası: ' + err.message });
  }
}
