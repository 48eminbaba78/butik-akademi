import { createClient } from '@supabase/supabase-js';
import { isAuthed, publishDue } from '../lib/core.js';
import { applyCors } from '../lib/cors.js';
import fs from 'fs';
import path from 'path';

const SB_URL = process.env.SUPABASE_URL || 'https://imyhenrwmsmyikpollur.supabase.co';
const SB_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34';
const db = createClient(SB_URL, SB_KEY);
const WEBHOOK_VERIFY_TOKEN = process.env.IG_WEBHOOK_VERIFY_TOKEN || 'rostrum_webhook_verify_token_2026';

// ── Helpers from publish-instagram.js ──
async function validateToken(accountId, accessToken) {
  const res = await fetch(
    `https://graph.facebook.com/v20.0/${accountId}?fields=id,username&access_token=${accessToken}`
  );
  const data = await res.json();
  if (data.error) {
    const code = data.error.code;
    if (code === 190) {
      throw new Error('TOKEN_EXPIRED: Instagram access token süresi dolmuş.');
    }
    throw new Error(`TOKEN_INVALID [${code}]: ${data.error.message}`);
  }
  return data.username;
}

async function uploadImage(base64, fileName) {
  const buffer = Buffer.from(base64, 'base64');
  const { error } = await db.storage
    .from('platform_assets')
    .upload(`instagram_posts/${fileName}`, buffer, {
      contentType: 'image/jpeg',
      cacheControl: '3600',
      upsert: true
    });
  if (error) throw new Error('Storage yüklemesi başarısız: ' + error.message);
  const { data: { publicUrl } } = db.storage
    .from('platform_assets')
    .getPublicUrl(`instagram_posts/${fileName}`);
  return publicUrl;
}

async function createMediaContainer(accountId, accessToken, params) {
  const res = await fetch(`https://graph.facebook.com/v20.0/${accountId}/media`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...params, access_token: accessToken })
  });
  const data = await res.json();
  if (data.error) {
    throw new Error(`Meta Container Hatası [${data.error.code}]: ${data.error.message}`);
  }
  return data.id;
}

async function waitForContainer(containerId, accessToken, maxAttempts = 12) {
  let statusCode = 'IN_PROGRESS';
  let attempts = 0;
  while (statusCode === 'IN_PROGRESS' && attempts < maxAttempts) {
    await new Promise(r => setTimeout(r, 2000));
    const res = await fetch(
      `https://graph.facebook.com/v20.0/${containerId}?fields=status_code&access_token=${accessToken}`
    );
    const data = await res.json();
    statusCode = data.status_code || 'ERROR';
    attempts++;
  }
  if (statusCode !== 'FINISHED') {
    throw new Error(`Container hazırlanamadı. Durum: ${statusCode}`);
  }
}

async function publishContainer(accountId, accessToken, creationId) {
  const res = await fetch(`https://graph.facebook.com/v20.0/${accountId}/media_publish`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ creation_id: creationId, access_token: accessToken })
  });
  const data = await res.json();
  if (data.error) throw new Error('Meta Publish Hatası: ' + data.error.message);
  return data.id;
}

export default async function handler(req, res) {
  // ── 1. GET Request: Webhook Verification or Debug ──
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
      if (mode === 'subscribe' && token === WEBHOOK_VERIFY_TOKEN) {
        console.log('[Webhook] Webhook successfully verified.');
        return res.status(200).send(challenge);
      } else {
        return res.status(403).send('Forbidden: Token mismatch');
      }
    }

    // Fallback: Eski publish.js debug aracı
    if (req.query && req.query.debug === '1') {
      if (applyCors(req, res)) return;
      if (!isAuthed(req)) return res.status(401).json({ error: 'Yetkisiz' });
      const cwd = process.cwd();
      const dirContents = (dir) => {
        try { return fs.readdirSync(dir); } catch (e) { return e.message; }
      };
      return res.status(200).json({
        cwd,
        root: dirContents(cwd),
        fonts: dirContents(path.join(cwd, 'fonts')),
        apiFonts: dirContents(path.join(cwd, 'api/fonts')),
      });
    }

    // Default GET: Zamanı gelenleri yayınla (eski publish.js işi)
    try {
      if (applyCors(req, res)) return;
      if (!isAuthed(req)) return res.status(401).json({ error: 'Yetkisiz' });
      const id = req.query && req.query.id ? req.query.id : null;
      const results = await publishDue({ id: id });
      return res.status(200).json({ processed: results.length, results: results });
    } catch (e) {
      return res.status(500).json({ error: String(e.message || e) });
    }
  }

  // ── 2. POST Request: Meta Webhook Event OR Publish ──
  if (req.method === 'POST') {
    const { action } = req.query;

    // A. Webhook Event handling
    if (action === 'webhook' || req.body?.object === 'instagram') {
      const body = req.body;
      try {
        const { data: credData } = await db.from('platform_settings').select('value').eq('key', 'instagram_credentials').maybeSingle();
        const accessToken = credData?.value?.instagram_access_token;
        if (!accessToken) return res.status(200).json({ status: 'no_token' });

        const { data: rulesData } = await db.from('platform_settings').select('value').eq('key', 'instagram_automation_rules').maybeSingle();
        const rules = (rulesData && rulesData.value) || [];

        for (const entry of body.entry || []) {
          for (const change of entry.changes || []) {
            const value = change.value;
            const field = change.field;

            if (field === 'comments' && value && value.id) {
              const commentId = value.id;
              const text = (value.text || '').trim().toUpperCase();
              const username = value.from ? value.from.username : '';

              const matchingRule = rules.find(r => text.includes(r.trigger.toUpperCase()));
              if (matchingRule) {
                // Post comment reply
                await fetch(`https://graph.facebook.com/v20.0/${commentId}/replies`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ message: matchingRule.reply_comment, access_token: accessToken })
                });

                // Send private DM
                await fetch(`https://graph.facebook.com/v20.0/me/messages?access_token=${accessToken}`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ recipient: { comment_id: commentId }, message: { text: matchingRule.send_dm } })
                });
              }
            }
          }
        }
        return res.status(200).json({ status: 'success' });
      } catch (err) {
        console.error('[Webhook Error]', err);
        return res.status(500).json({ message: 'Webhook processing error' });
      }
    }

    // B. Publish Action handling (Eski publish-instagram.js)
    if (action === 'publish') {
      const { caption, imageBase64, isStory, slides, isCarousel, isReels, videoUrl } = req.body;

      if (!imageBase64 && !videoUrl && (!slides || slides.length === 0)) {
        return res.status(400).json({ message: 'imageBase64, videoUrl veya slides parametresi eksik.' });
      }

      try {
        const { data: credData, error: credError } = await db
          .from('platform_settings')
          .select('value')
          .eq('key', 'instagram_credentials')
          .maybeSingle();

        if (credError) throw credError;
        const creds = credData?.value;
        if (!creds?.instagram_account_id || !creds?.instagram_access_token) {
          return res.status(400).json({ message: 'Instagram credentials missing.' });
        }

        const accountId = creds.instagram_account_id;
        const accessToken = creds.instagram_access_token;
        const ts = Date.now();

        // Validate
        await validateToken(accountId, accessToken);

        // Reels
        if (isReels) {
          const containerId = await createMediaContainer(accountId, accessToken, {
            media_type: 'REELS',
            video_url: videoUrl,
            caption: caption || '',
            share_to_feed: true,
          });
          await waitForContainer(containerId, accessToken, 30);
          const publishedId = await publishContainer(accountId, accessToken, containerId);
          return res.status(200).json({ success: true, id: publishedId });
        }

        // Story
        if (isStory) {
          const imageUrl = await uploadImage(imageBase64, `story-${ts}.jpg`);
          const containerId = await createMediaContainer(accountId, accessToken, {
            image_url: imageUrl, media_type: 'STORIES'
          });
          await waitForContainer(containerId, accessToken);
          const publishedId = await publishContainer(accountId, accessToken, containerId);
          return res.status(200).json({ success: true, id: publishedId, imageUrl });
        }

        // Carousel
        if (isCarousel && slides && slides.length > 0) {
          const childIds = [];
          for (let i = 0; i < slides.length; i++) {
            const imageUrl = await uploadImage(slides[i], `carousel-${ts}-slide${i+1}.jpg`);
            const childId = await createMediaContainer(accountId, accessToken, {
              image_url: imageUrl,
              is_carousel_item: true
            });
            childIds.push(childId);
          }
          const carouselId = await createMediaContainer(accountId, accessToken, {
            media_type: 'CAROUSEL',
            children: childIds.join(','),
            caption: caption || ''
          });
          await waitForContainer(carouselId, accessToken, 15);
          const publishedId = await publishContainer(accountId, accessToken, carouselId);
          return res.status(200).json({ success: true, id: publishedId, slideCount: slides.length });
        }

        // Single Image
        const imageUrl = await uploadImage(imageBase64, `post-${ts}.jpg`);
        const containerId = await createMediaContainer(accountId, accessToken, {
          image_url: imageUrl,
          caption: caption || ''
        });
        await waitForContainer(containerId, accessToken);
        const publishedId = await publishContainer(accountId, accessToken, containerId);
        return res.status(200).json({ success: true, id: publishedId, imageUrl });

      } catch (err) {
        console.error('[API] Publish error:', err);
        const isAuthError = /190|TOKEN_|OAuth|access token/i.test(err.message);
        return res.status(isAuthError ? 401 : 500).json({
          message: err.message,
          tokenError: isAuthError
        });
      }
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
