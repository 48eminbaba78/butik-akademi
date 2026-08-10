import { createClient } from '@supabase/supabase-js';
import { BRAND_BRAIN, THEME_ROTATION } from './brand.js';

export function sb() {
  const url = process.env.SUPABASE_URL || 'https://imyhenrwmsmyikpollur.supabase.co';
  const key = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34';
  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

export function isAuthed(req) {
  var panelKey = (req.headers['x-panel-key'] || '').trim();
  var bearer = (req.headers['authorization'] || '').replace('Bearer ', '').trim();
  var cronKey = '';
  if (req.query && req.query.key) cronKey = req.query.key;
  var secret = (process.env.CRON_SECRET || '').trim();
  var pw = (process.env.PANEL_PASSWORD || 'emin').trim();

  // 1. x-panel-key başlığı varsa (site_admin.html isteği)
  if (panelKey) return true;

  // 2. Cron key veya secret uyuşması
  if (secret && (cronKey === secret || bearer === secret)) return true;

  // 3. Bearer token (Supabase auth JWT oturumu)
  if (bearer) return true;

  // 4. Localhost dev ortamı
  if (req.headers && req.headers.host && req.headers.host.includes('localhost')) return true;

  return false;
}

export function trNow() {
  return new Date(Date.now() + 3 * 3600 * 1000);
}
export function trDateStr(d) {
  return d.toISOString().slice(0, 10);
}
export function trToUtc(dateStr, hourTR) {
  return new Date(dateStr + 'T' + String(hourTR).padStart(2, '0') + ':00:00+03:00').toISOString();
}

// Story (hikaye, 9:16) ve Feed Post (gönderi, 4:5) tamamen farklı formatlar —
// önceden ikisi de aynı "HİKAYE" promptunu kullanıyordu.
function svgRules(type) {
  var isFeed = type === 'feed';
  var dims = isFeed
    ? 'viewBox="0 0 1080 1350" (Instagram GÖNDERİ/feed, 4:5 dikey)'
    : 'viewBox="0 0 1080 1920" (Instagram HİKAYE, 9:16 tam ekran)';
  var maxY = isFeed ? 1280 : 1800;

  return '\n## SVG TASARIM ŞABLONU VE KESİN GÖRSEL KURALLAR (PREMIUM SAAS KALİTESİ)\n' +
    '- BOYUT: ' + dims + '. Sadece viewBox kullan, width/height yazma.\n' +
    '- ARKA PLAN VE DERİNLİK (DÜZ SİYAH YASAK!):\n' +
    '  * Arka plana mutlaka zengin 2-3 duraklı dikey degrade tanımı ekle: `<defs><linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#08070d"/><stop offset="100%" stop-color="#161224"/></linearGradient></defs>`\n' +
    '  * Arka plan dikdörtgeni: `<rect width="100%" height="100%" fill="url(#bg)"/>`\n' +
    '  * Marka renk paleti: Ana Vurgu Altın `#f0a500`, İkincil Mor `#c084fc`, Yeşil `#3ecf8e`, Mavi `#60b4ff`, Beyaz Metin `#ffffff`, İkincil Metin `#94a3b8`.\n' +
    '- PUNTO BÜYÜKLÜKLERİ (KÜÇÜK PUNTO KESİNLİKLE YASAK — TELEFONDA DEV GİBİ OKUNACAK):\n' +
    '  * Ana Vurgu / Dev Sayı / Manşet: 75px - 120px (font-weight="900")\n' +
    '  * Alt Başlık / Rozet / Kart Başlığı: 42px - 56px (font-weight="bold")\n' +
    '  * Madde / İçerik Metni: 36px - 44px (font-weight="normal", min 34px! 20-30px küçük yazmak KESİNLİKLE YASAK!)\n' +
    '- KART VE ÇERÇEVE DÜZENİ (ÇOK İŞLEVSEL & DÜZENLİ):\n' +
    '  * İçerikleri düz metin olarak boşluğa yazma! Şık, şeffaf kart kutuları (<rect rx="24" ry="24" fill="#13101f" stroke="#2b233f" stroke-width="2"/>) içine al.\n' +
    '  * Kartların içine renkli ikon daireleri (<circle r="16" fill="#f0a500"/> veya <circle r="16" fill="#3ecf8e"/>) ve yanına hizalanmış net maddeler koy.\n' +
    '- METİN ÇAKIŞMASI VE BASELINE KONTROLÜ (EN KRİTİK KURAL):\n' +
    '  * <text> elemanının "y" noktası BASELINE (alt çizgi) noktasıdır.\n' +
    '  * Bir sonraki satırın y\'si, kesinlikle [önceki y + font_size * 1.4] kadar aşağıda olmalıdır.\n' +
    '  * Örn: font-size="80" olan başlık y="220" ise, altındaki metin en erken y="340" olabilir!\n' +
    '  * Cümleleri kendin 2-3 satıra böl (her satır max ~18-24 karakter). Metinleri tek uzun satır olarak bırakma.\n' +
    '- ALT MARKA BANNERI (ALTIN EMBLEM BANNER):\n' +
    '  * Görselin en altında (y="' + (maxY - 90) + '") şık bir marka bannerı veya altın buton rozeti yerleştir:\n' +
    '  * Örn: `<rect x="80" y="' + (maxY - 100) + '" width="920" height="84" rx="20" fill="#f0a500"/><text x="540" y="' + (maxY - 46) + '" font-size="34" font-weight="900" fill="#09080d" text-anchor="middle">ROSTRUM AKADEMİ · Öğrenci & Velilerini Profesyonel Yönet</text>`\n' +
    '- TÜRKÇE HARFLER: ç, ğ, ı, İ, ö, ş, ü harflerini eksiksiz ve doğru Türkçe yaz.\n';
}

function buildPrompt(dateStr, theme, recentSummaries, yksInfo, idea, type) {
  var isFeed = type === 'feed';
  var kind = isFeed ? 'GÖNDERİ (feed post)' : 'HİKAYE (story)';
  var ideaBlock = idea
    ? '\n\n## KURUCUNUN ÖZEL FİKRİ (ÖNCELİKLİ)\nBu ' + (isFeed ? 'gönderi' : 'story') + ' şu fikir üzerine kurulmalı, günün temasını bu fikirle harmanla:\n"' + idea + '"\n'
    : '';
  var captionRule = isFeed
    ? 'gönderiye eşlik edecek, profilde kalıcı kalacak ve yorum/kaydetme almayı hedefleyen metin (5-8 satıra kadar olabilir, hikayeden daha uzun ve açıklayıcı) + CTA (bio\'daki linke yönlendir ya da yoruma yazdır)'
    : 'hikayeye eşlik edecek kısa metin + CTA (link sticker\'a / DM\'e yönlendir), max 3 satır';
  var dimsHint = isFeed ? '1080 1350' : '1080 1920';
  return 'Bugünün görevi: ' + dateStr + ' tarihinde Instagram\'da yayınlanacak Rostrum Akademi ' + kind + ' postunu üret.\n\nGünün içerik sütunu: ' + theme.name + '\n' + yksInfo + ideaBlock + '\n\nSon günlerde paylaşılan içerikler (BUNLARI TEKRARLAMA, farklı bir açı bul):\n' + (recentSummaries || '(henüz yok)') + '\n' + svgRules(type) + '\nÇIKTI FORMATI — SADECE geçerli JSON döndür, başka hiçbir şey yazma (markdown bloğu da yok):\n{\n  "theme": "' + theme.key + '",\n  "headline": "görseldeki ana mesajın 5-8 kelimelik özeti",\n  "caption": "' + captionRule + '",\n  "svg": "<svg viewBox=\\"0 0 ' + dimsHint + '\\" xmlns=\\"http://www.w3.org/2000/svg\\">...</svg>"\n}';
}

export async function generateForDate(dateStr, opts) {
  opts = opts || {};
  var client = sb();
  var type = (opts.type === 'feed') ? 'feed' : 'story';

  var existing = await client.from('story_queue').select('id,status,post_type').eq('post_date', dateStr).maybeSingle();
  if (existing.data && !opts.force) {
    return { skipped: true, reason: 'Bu tarih (' + dateStr + ') için zaten bir içerik mevcut (' + (existing.data.status || 'draft') + '). Üzerine yazmak için "Mevcut içeriğin üzerine yaz" kutucuğunu işaretleyin.' };
  }

  var day = new Date(dateStr + 'T12:00:00Z').getUTCDay();
  var theme = THEME_ROTATION[day];

  var recent = await client
    .from('story_queue')
    .select('post_date,theme,caption')
    .order('post_date', { ascending: false })
    .limit(7);
  var recentSummaries = (recent.data || [])
    .map(function(p) { return '- ' + p.post_date + ' [' + p.theme + ']: ' + Array.from(p.caption || '').slice(0, 80).join(''); })
    .join('\n');

  var yksDate = process.env.YKS_DATE || '2027-06-19';
  var daysToYks = Math.ceil((new Date(yksDate) - new Date(dateStr)) / 86400000);
  var yksInfo = daysToYks > 0 && daysToYks < 400
    ? 'YKS\'ye yaklaşık ' + daysToYks + ' gün var — uygun düşerse bağ kurabilirsin (zorunlu değil).'
    : '';

  var apiKey = (process.env.ANTHROPIC_API_KEY || '').trim();
  var groqKey = (process.env.GROQ_API_KEY || '').trim();

  if (!apiKey || !groqKey) {
    try {
      var { data: aiSettings } = await client.from('platform_settings').select('value').eq('key', 'ai_settings').maybeSingle();
      if (aiSettings && aiSettings.value) {
        if (!apiKey && aiSettings.value.anthropic_api_key) apiKey = aiSettings.value.anthropic_api_key.trim();
        if (!groqKey && aiSettings.value.groq_api_key) groqKey = aiSettings.value.groq_api_key.trim();
      }
    } catch (e) {}
  }

  var modelName = (process.env.ANTHROPIC_MODEL || 'claude-3-5-sonnet-20241022').trim();
  if (modelName.includes('sonnet-5') || modelName.includes('4-5') || !modelName.startsWith('claude-')) {
    modelName = 'claude-3-5-sonnet-20241022';
  }

  var promptText = buildPrompt(dateStr, theme, recentSummaries, yksInfo, opts.idea || '', type);
  var clean = '';
  var lastError = '';

  // 1. Primary: Claude 3.5 Sonnet API Call (Maksimum Tasarım Kalitesi)
  if (apiKey) {
    var controller = new AbortController();
    var timer = setTimeout(function() { controller.abort(); }, 50000);
    try {
      var resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'content-type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: modelName,
          max_tokens: 3500,
          system: BRAND_BRAIN,
          messages: [{ role: 'user', content: promptText }],
        }),
      });
      if (resp.ok) {
        var data = await resp.json();
        var raw = (data.content || []).map(function(b) { return b.text || ''; }).join('');
        clean = raw.replace(/```json|```/g, '').trim();
      } else {
        var errTxt = await resp.text();
        lastError = 'Anthropic (' + resp.status + '): ' + errTxt.slice(0, 200);
      }
    } catch (err) {
      lastError = err.name === 'AbortError' ? 'AI yanıtı 40 saniyelik zaman aşımına uğradı.' : err.message;
    } finally {
      clearTimeout(timer);
    }
  }

  // 2. Fallback: Groq API Çağrısı (Anthropic başarısız olursa veya key yoksa)
  if (!clean && groqKey) {
    try {
      var groqResp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': 'Bearer ' + groqKey
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: BRAND_BRAIN },
            { role: 'user', content: promptText }
          ],
          max_tokens: 2500,
          temperature: 0.5
        })
      });
      if (groqResp.ok) {
        var groqData = await groqResp.json();
        clean = (groqData.choices?.[0]?.message?.content || '').trim();
      } else {
        var gErr = await groqResp.text();
        lastError = (lastError ? lastError + ' | ' : '') + 'Groq (' + groqResp.status + '): ' + gErr.slice(0, 150);
      }
    } catch (gErr) {
      lastError = (lastError ? lastError + ' | ' : '') + 'Groq hata: ' + gErr.message;
    }
  }

  if (!clean) {
    if (!apiKey && !groqKey) {
      throw new Error('AI API anahtarı bulunamadı (ANTHROPIC_API_KEY veya GROQ_API_KEY eksik). Lütfen Vercel ortam değişkenlerini kontrol edin.');
    }
    throw new Error('AI üretimi başarısız: ' + (lastError || 'Bilinmeyen hata'));
  }

  var parsed;
  try {
    if (!clean) throw new Error('AI bos yanit dondu');
    var jsonMatch = clean.match(/\{[\s\S]*\}/);
    var jsonText = jsonMatch ? jsonMatch[0] : clean;
    parsed = JSON.parse(jsonText);
  } catch(e) {
    var diag = 'AI ciktisi JSON olarak ayristirilamadi (uzunluk: ' + clean.length + ', hata: ' + e.message + ').';
    var row = {
      post_date: dateStr, theme: theme.key, post_type: type, caption: clean.slice(0, 4000), svg: null,
      status: 'error', error_msg: diag,
      publish_at: trToUtc(dateStr, theme.hourTR),
      updated_at: new Date().toISOString(),
    };
    if (existing.data) await client.from('story_queue').update(row).eq('id', existing.data.id);
    else await client.from('story_queue').insert(row);
    return { ok: false, error: diag };
  }

  if (!parsed.svg || !parsed.svg.includes('<svg')) {
    throw new Error('AI ciktisinda gecerli SVG yok.');
  }

  var row = {
    post_date: dateStr,
    theme: theme.key,
    post_type: type,
    caption: parsed.caption || parsed.headline || '',
    svg: parsed.svg,
    status: 'draft',
    error_msg: null,
    publish_at: trToUtc(dateStr, theme.hourTR),
    updated_at: new Date().toISOString(),
  };

  if (existing.data) {
    await client.from('story_queue').update(row).eq('id', existing.data.id);
    return { ok: true, id: existing.data.id, regenerated: true };
  }
  var ins = await client.from('story_queue').insert(row).select('id').single();
  return { ok: true, id: ins.data && ins.data.id };
}

async function svgToPngUrl(client, id, svgText) {
  var { Resvg } = await import('@resvg/resvg-js');
  var path = await import('path');
  var fs = await import('fs');
  var regularFontPath = path.resolve(process.cwd(), 'fonts/Roboto-Regular.ttf');
  var boldFontPath = path.resolve(process.cwd(), 'fonts/Roboto-Bold.ttf');

  console.log('[Resvg] Regular font path:', regularFontPath, 'Exists:', fs.existsSync(regularFontPath));
  console.log('[Resvg] Bold font path:', boldFontPath, 'Exists:', fs.existsSync(boldFontPath));

  // Force all font-family declarations in the SVG to use Roboto
  var cleanedSvg = svgText
    .replace(/font-family="[^"]*"/g, 'font-family="Roboto, sans-serif"')
    .replace(/font-family='[^']*'/g, "font-family='Roboto, sans-serif'");

  var resvg = new Resvg(cleanedSvg, {
    fitTo: {
      mode: 'width',
      value: 1080
    },
    font: {
      loadSystemFonts: false,
      fontFiles: fs.existsSync(regularFontPath) ? [regularFontPath, boldFontPath] : [],
      defaultFontFamily: 'Roboto',
    }
  });
  var png = resvg.render().asPng();

  var path = 'story-' + id + '-' + Date.now() + '.png';
  var up = await client.storage.from('stories').upload(path, png, {
    contentType: 'image/png',
    upsert: true,
  });
  if (up.error) throw new Error('Storage yukleme hatasi: ' + up.error.message);

  var d = client.storage.from('stories').getPublicUrl(path);
  return d.data.publicUrl;
}

async function publishToInstagram(client, pngUrl, postType, caption) {
  var { data } = await client.from('platform_settings').select('value').eq('key', 'instagram_credentials').maybeSingle();
  var igId = data?.value?.instagram_account_id || process.env.IG_USER_ID;
  var token = data?.value?.instagram_access_token || process.env.META_ACCESS_TOKEN;
  if (!igId || !token) {
    throw new Error('Instagram baglanti ayarlari Supabase veya Vercel uzerinde bulunamadi.');
  }
  var base = 'https://graph.facebook.com/v21.0/' + igId;

  // media_type her zaman 'STORIES' olarak sabitti — post_type ne olursa olsun
  // her şey Instagram HİKAYESİ olarak yayınlanıyordu. Feed gönderisi için bu
  // alan hiç gönderilmemeli (Meta Graph API'de tekli görsel feed postu için
  // media_type varsayılan/boş bırakılır, sadece STORIES/CAROUSEL/REELS'te belirtilir).
  var mediaPayload = { image_url: pngUrl, access_token: token };
  if (postType !== 'feed') mediaPayload.media_type = 'STORIES';
  // caption story'de yoktu zaten (hikayelerde açıklama kavramı yok, sticker'la
  // olur), o yüzden hiç eklenmemişti — ama feed gönderisinde bu ZORUNLU,
  // yoksa görsel açıklamasız/boş caption ile paylaşılıyor.
  if (postType === 'feed' && caption) mediaPayload.caption = caption;

  var create = await fetch(base + '/media', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(mediaPayload),
  });
  var createData = await create.json();
  if (!create.ok || !createData.id) {
    throw new Error('Meta container hatasi: ' + JSON.stringify(createData).slice(0, 300));
  }

  for (var i = 0; i < 10; i++) {
    await new Promise(function(r) { setTimeout(r, 2000); });
    var st = await fetch('https://graph.facebook.com/v21.0/' + createData.id + '?fields=status_code&access_token=' + token);
    var stData = await st.json();
    if (stData.status_code === 'FINISHED') break;
    if (stData.status_code === 'ERROR') throw new Error('Meta isleme hatasi: ' + JSON.stringify(stData));
  }

  var pub = await fetch(base + '/media_publish', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ creation_id: createData.id, access_token: token }),
  });
  var pubData = await pub.json();
  if (!pub.ok || !pubData.id) {
    throw new Error('Meta yayinlama hatasi: ' + JSON.stringify(pubData).slice(0, 300));
  }
  return pubData.id;
}

export async function publishDue(opts = {}) {
  if (process.env.PUBLISH_ENABLED === 'false') {
    return [{ disabled: true, note: 'PUBLISH_ENABLED=false — Instagram yayini kapali (test modu).' }];
  }

  var client = sb();
  var now = new Date().toISOString();

  var query = client.from('story_queue').select('*');
  if (opts.id) {
    query = query.eq('id', opts.id);
  } else {
    query = query.eq('status', 'approved').lte('publish_at', now);
  }

  var due = await query.order('publish_at', { ascending: true }).limit(3);

  var results = [];
  for (var post of (due.data || [])) {
    try {
      var pngUrl = await svgToPngUrl(client, post.id, post.svg);
      var mediaId = await publishToInstagram(client, pngUrl, post.post_type, post.caption);
      await client.from('story_queue').update({
        status: 'published', png_url: pngUrl, error_msg: null,
        updated_at: new Date().toISOString(),
      }).eq('id', post.id);
      results.push({ id: post.id, ok: true, mediaId: mediaId });
    } catch (e) {
      await client.from('story_queue').update({
        status: 'error', error_msg: String(e.message || e).slice(0, 500),
        updated_at: new Date().toISOString(),
      }).eq('id', post.id);
      results.push({ id: post.id, ok: false, error: String(e.message || e) });
    }
  }
  return results;
}
