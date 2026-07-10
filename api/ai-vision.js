// ═══════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — AI VİZYON (Gemini Multimodal)
// Endpoint: /api/ai-vision
// Fotoğraflı soru çözümü için Gemini 1.5 Flash
// ═══════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';

const SB_URL = process.env.SUPABASE_URL || 'https://imyhenrwmsmyikpollur.supabase.co';
const SB_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34';
const db = createClient(SB_URL, SB_KEY);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { imageBase64, mimeType, text, context, userRole } = req.body;

    if (!imageBase64) return res.status(400).json({ error: 'Görsel verisi eksik.' });

    // API key: Vercel env önce, yoksa Supabase platform_settings
    let GEMINI_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_KEY) {
      try {
        const { data } = await db.from('platform_settings').select('value').eq('key', 'ai_settings').maybeSingle();
        GEMINI_KEY = data?.value?.gemini_api_key;
      } catch(e) {}
    }
    if (!GEMINI_KEY) return res.status(500).json({ error: 'Gemini API anahtarı yapılandırılmamış.' });

    const systemPrompt = buildVisionPrompt(context, userRole);
    const userText = text || 'Bu soruyu çöz.';

    const contents = [
      { role: 'user', parts: [{ text: systemPrompt }] },
      { role: 'model', parts: [{ text: 'Anladım. Soru fotoğrafını gönder, adım adım çözeceğim.' }] },
      {
        role: 'user',
        parts: [
          { inline_data: { mime_type: mimeType || 'image/jpeg', data: imageBase64 } },
          { text: userText }
        ]
      }
    ];

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents, generationConfig: { temperature: 0.4, maxOutputTokens: 2048 } })
      }
    );

    if (!geminiRes.ok) {
      const errData = await geminiRes.json().catch(() => ({}));
      const msg = errData?.error?.message || `HTTP ${geminiRes.status}`;
      console.error('Gemini API error:', msg);
      return res.status(502).json({ error: msg });
    }

    const data = await geminiRes.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Yanıt üretilemedi.';
    return res.status(200).json({ reply });

  } catch (err) {
    console.error('ai-vision error:', err);
    return res.status(500).json({ error: err.message || 'Sunucu hatası' });
  }
}

function buildVisionPrompt(context, userRole) {
  let base = `Sen Rostrum Akademi'nin uzman öğretmen yapay zekasısın. Türkiye eğitim sistemine (YKS/TYT/AYT, LGS) hakimsin.`;

  if (userRole === 'student') {
    base += `

Öğrenci sana bir soru fotoğrafı gönderdi. Şu anda o sorunun ait olduğu dersin uzman öğretmenisin.

KURALLAR:
1. Soruyu dikkatlice incele, konusunu belirle ve kısaca belirt (örn: "Bu soru kombinasyon/olasılık konusundan").
2. Çözümü adım adım, net ve öğretici bir dille yaz. Her adımı numaralandır.
3. Formül veya kural kullandıysan neden kullandığını kısaca açıkla.
4. Varsa çeldirici seçeneklerin neden yanlış olduğunu belirt.
5. Sonunda cevabı net şekilde yaz.
6. Türkçe yanıt ver.`;
  } else {
    base += `\nKoça veya kullanıcıya görseli analiz ederek Türkçe yanıt ver.`;
  }

  if (context?.studentName) base += `\nÖğrenci: ${context.studentName}`;
  return base;
}
