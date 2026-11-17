// ═══════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — AI KOÇ ASİSTANI (Vercel Serverless Function)
// Endpoint: /api/ai-chat
// Groq API proxy (llama-3.3-70b) — hızlı ve ücretsiz
// ═══════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';
import {
  buildResourceTopicIndex,
  hydrateProgramPlan,
  extractJsonObject
} from '../lib/program-planner.js';

const SB_URL = process.env.SUPABASE_URL || 'https://imyhenrwmsmyikpollur.supabase.co';
const SB_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34';
const db = createClient(SB_URL, SB_KEY);

// ── Sunucu Taraflı Topraklama (Grounding) ─────────────────
// Client'ın gönderdiği context'e GÜVENİLMEZ. Çağıranın JWT'siyle (RLS altında)
// gerçek öğrenci listesi + son denemeler DB'den çekilir; model yalnızca bu
// doğrulanmış veriye dayanır. Kayıtlı olmayan isim → analiz reddedilir.
async function buildVerifiedContext(req, mode) {
  const authHeader = req.headers['authorization'] || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return { verified: false, block: '' };

  try {
    // Kullanıcının kendi yetkileriyle (RLS) sorgulayan istemci
    const userDb = createClient(SB_URL, SB_KEY, {
      global: { headers: { Authorization: `Bearer ${token}` } }
    });
    const { data: { user }, error: uErr } = await userDb.auth.getUser(token);
    if (uErr || !user) return { verified: false, block: '' };

    const { data: me } = await userDb.from('users')
      .select('id, full_name, role, coach_id, target')
      .eq('id', user.id).maybeSingle();
    if (!me) return { verified: false, block: '' };

    let block = `\n\n════ DOĞRULANMIŞ VERİTABANI KAYITLARI (TEK GERÇEK KAYNAK) ════`;

    // Destek modunda koç ödeme/fiyat sorularını UYDURMADAN yanıtlayabilmesi için
    // gerçek fiyat/IBAN bilgisi topraklamaya eklenir (db: service-scoped client,
    // platform_settings zaten public-okuma tablosu).
    if (mode === 'support' && (me.role === 'coach' || me.role === 'developer')) {
      const { data: pay } = await db.from('platform_settings').select('value').eq('key', 'payment_settings').maybeSingle();
      const ps = pay?.value;
      if (ps) {
        block += `\nÖDEME/FİYAT BİLGİSİ (GERÇEK — bunun dışında fiyat UYDURMA): Bireysel ${ps.price_bireysel ? ps.price_bireysel + '₺/ay' : 'ayarlanmadı'}, Profesyonel ${ps.price_profesyonel ? ps.price_profesyonel + '₺/ay' : 'ayarlanmadı'}, Banka: ${ps.bank_name || '—'}, IBAN: ${ps.iban || '—'}.`;
      }
    }

    if (me.role === 'coach' || me.role === 'developer') {
      // Koçun GERÇEK öğrenci listesi
      const { data: students } = await userDb.from('users')
        .select('id, full_name, target')
        .eq('coach_id', me.id).eq('role', 'student')
        .order('full_name').limit(50);
      const stuList = students || [];
      block += `\nKOÇ: ${me.full_name}`;
      block += `\nKAYITLI ÖĞRENCİLER (${stuList.length} kişi): ${stuList.length ? stuList.map(s => s.full_name).join(', ') : 'HİÇ ÖĞRENCİ YOK'}`;

      // Son denemeler (tüm öğrenciler için tek sorgu, öğrenci başına en yeni 3)
      if (stuList.length) {
        const ids = stuList.map(s => s.id);
        const nameById = Object.fromEntries(stuList.map(s => [s.id, s.full_name]));
        const { data: exams } = await userDb.from('exams')
          .select('student_id, name, date, exam_type, nets')
          .in('student_id', ids)
          .order('date', { ascending: false }).limit(60);
        const perStu = {};
        (exams || []).forEach(e => {
          (perStu[e.student_id] = perStu[e.student_id] || []).length < 3 && perStu[e.student_id].push(e);
        });
        const examLines = Object.entries(perStu).map(([sid, list]) =>
          `- ${nameById[sid]}: ` + list.map(e => `${e.name} (${e.date}) ${JSON.stringify(e.nets)}`).join(' · ')
        );
        if (examLines.length) block += `\nSON DENEMELER:\n${examLines.join('\n')}`;

        // Son 7 gün görev tamamlama oranları
        const weekAgo = new Date(Date.now() - 7 * 864e5).toISOString().slice(0, 10);
        const { data: tasks } = await userDb.from('tasks')
          .select('student_id, done')
          .in('student_id', ids).gte('date', weekAgo).limit(1000);
        if (tasks && tasks.length) {
          const agg = {};
          tasks.forEach(t => {
            const a = (agg[t.student_id] = agg[t.student_id] || { d: 0, t: 0 });
            a.t++; if (t.done) a.d++;
          });
          block += `\nSON 7 GÜN GÖREV TAMAMLAMA: ` + Object.entries(agg)
            .map(([sid, a]) => `${nameById[sid]} %${Math.round(a.d / a.t * 100)} (${a.d}/${a.t})`).join(' · ');
        }
      }
      block += `\n\nKATI KURAL: Yukarıdaki KAYITLI ÖĞRENCİLER listesinde OLMAYAN bir isim hakkında analiz/rapor/veli metni istenirse, KESİNLİKLE üretme. Şöyle yanıtla: "Sistemde bu isimde kayıtlı bir öğrenci bulamadım. Kayıtlı öğrencileriniz: [listeyi say]." Uydurma veri, tahmini net, hayali tamamlama oranı ASLA yazma.`;
    } else if (me.role === 'student') {
      block += `\nÖĞRENCİ: ${me.full_name}${me.target ? ` · Hedef: ${me.target}` : ''}`;
      const { data: exams } = await userDb.from('exams')
        .select('name, date, exam_type, nets')
        .eq('student_id', me.id)
        .order('date', { ascending: false }).limit(5);
      if (exams && exams.length) {
        block += `\nSON DENEMELERİN:\n` + exams.map(e => `- ${e.name} (${e.date}) ${JSON.stringify(e.nets)}`).join('\n');
      }
      block += `\n\nKATI KURAL: Seviye/kaynak önerirken YALNIZCA yukarıdaki gerçek deneme netlerini kullan. Başka öğrenciler hakkında hiçbir bilgi verme.`;
    }

    block += `\n═══════════════════════════════════════════════════════════`;
    return { verified: true, block };
  } catch (e) {
    console.error('Grounding error:', e.message);
    return { verified: false, block: '' };
  }
}

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (req.body?.mode === 'program_builder') {
    return handleProgramBuilder(req, res);
  }

  try {
    const { messages, context, userRole, imageBase64, mimeType, text, mode } = req.body;

    // ── Görsel varsa Gemini Vision kullan ───────────────────
    if (imageBase64) {
      let GEMINI_KEY = process.env.GEMINI_API_KEY;
      if (!GEMINI_KEY) {
        try {
          const { data } = await db.from('platform_settings').select('value').eq('key', 'ai_settings').maybeSingle();
          GEMINI_KEY = data?.value?.gemini_api_key;
        } catch (e) { }
      }
      if (!GEMINI_KEY) return res.status(500).json({ error: 'Gemini API anahtarı yapılandırılmamış.' });

      const sysPrompt = buildVisionPrompt(context, userRole);
      const userText = text || 'Bu soruda takıldım, yardımcı olur musun?';
      const contents = [
        {
          role: 'user', parts: [
            { inline_data: { mime_type: mimeType || 'image/jpeg', data: imageBase64 } },
            { text: userText }
          ]
        }
      ];
      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,
        {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: sysPrompt }] },
            contents,
            generationConfig: { temperature: 0.4, maxOutputTokens: 2048 }
          })
        }
      );
      if (!geminiRes.ok) {
        const e = await geminiRes.json().catch(() => ({}));
        return res.status(502).json({ error: e?.error?.message || 'Gemini hatası' });
      }
      const gd = await geminiRes.json();
      const reply = gd?.candidates?.[0]?.content?.parts?.[0]?.text || 'Yanıt üretilemedi.';
      return res.status(200).json({ reply, model: 'gemini-1.5-flash' });
    }

    // ── Metin: Groq / LLaMA ─────────────────────────────────
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Mesaj listesi boş olamaz.' });
    }

    let GROQ_KEY = process.env.GROQ_API_KEY;
    if (!GROQ_KEY) {
      const { data: aiSettings } = await db
        .from('platform_settings')
        .select('value')
        .eq('key', 'ai_settings')
        .maybeSingle();
      GROQ_KEY = aiSettings?.value?.groq_api_key;
    }

    if (!GROQ_KEY) {
      return res.status(500).json({ error: 'AI API anahtarı yapılandırılmamış.' });
    }

    // ── Sunucu taraflı topraklama: gerçek veriler DB'den ────
    const grounding = await buildVerifiedContext(req, mode);

    // ── Sistem Promptu ──────────────────────────────────────
    const systemPrompt = buildSystemPrompt(context, userRole, grounding, mode);

    // ── Groq API İsteği (OpenAI uyumlu) ─────────────────────
    const groqMessages = [{ role: 'system', content: systemPrompt }];
    for (const msg of messages) {
      groqMessages.push({ role: msg.role === 'user' ? 'user' : 'assistant', content: msg.content });
    }

    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_KEY}`
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-120b',
        messages: groqMessages,
        temperature: 0.5,
        max_tokens: 2048,
      })
    });

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      console.error('Groq API error:', errorText);
      return res.status(502).json({ error: 'Yapay zeka servisi şu anda yanıt veremiyor.' });
    }

    const groqData = await groqResponse.json();
    const reply = groqData?.choices?.[0]?.message?.content || 'Üzgünüm, bir yanıt üretemedi.';

    return res.status(200).json({
      reply,
      model: 'openai/gpt-oss-120b',
      timestamp: new Date().toISOString()
    });

  } catch (err) {
    console.error('AI Chat error:', err);
    return res.status(500).json({ error: 'Sunucu hatası: ' + (err.message || 'Bilinmeyen hata') });
  }
}

// ── Vision Sistem Promptu ─────────────────────────────────
function buildVisionPrompt(context, userRole) {
  let base = `Sen Rostrum Akademi'nin uzman öğretmen yapay zekasısın. Türkiye eğitim sistemine (YKS/TYT/AYT, LGS) hakimsin.\n\nKESİNLİKLE YALNIZCA TÜRKÇE yanıt ver. İngilizce, Japonca, Çince veya başka hiçbir dil ya da karakter seti kullanma.`;
  if (userRole === 'student') {
    base += `\n\n[SYSTEM INSTRUCTION — SOKRATİK AI DERS ASİSTANI]
Öğrenci sana bir soru fotoğrafı gönderdi. Görevin sorunun cevabını veya tüm çözümünü vermek DEĞİLDİR — Sokratik metodla öğrencinin cevabı KENDİSİNİN bulmasını sağlamaktır.
KURALLAR:
1. Soruyu incele, ana kavramı/konuyu belirt (örn: "Bu bir logaritma sorusu") ve öğrenciyi sakinleştir.
2. İlk adımı buldurtacak minik bir yönlendirici soru sor ("Sence burada önce hangi bilgi verilmiş?").
3. Öğrenci açıkça "tam çözümü yaz" derse: çözümü numaralı adımlarla, her formülün NEDENİNİ açıklayarak yaz; ama nihai cevabı yazmadan önce son adımı ona bırakmayı dene.
4. ASLA tek mesajda şıkkı söyleyip geçme. Mesajların kısa (2-4 cümle) ve öğretici olsun.`;
  } else {
    base += `\nKullanıcıya görseli analiz ederek yanıt ver.`;
  }
  if (context?.studentName) base += `\nÖğrenci: ${context.studentName}`;
  return base;
}

// ── Rostrum Bilgi Tabanı (rostrum-developer-copilot.md — Tek Gerçeklik Kaynağı) ──
const ROSTRUM_KB = `
════ ROSTRUM BİLGİ TABANI (önerilerinde YALNIZCA bu veritabanını kullan) ════

【KAYNAK PİRAMİDİ — Ders × Seviye × Kanal/Kitap】
MATEMATİK:
- Başlangıç (0-10 net): Kanal: Rehber Matematik, Şenol Hoca, MatMan · Kitap: Antrenmanlarla Matematik, Karekök 0, Birey A, Çap Fasikülleri
- Orta (10-25 net): Kanal: Mert Hoca, Matematiğin Güler Yüzü, İlyas Güneş · Kitap: ÜçDörtBeş (345), Bilgi Sarmal, Birey B, Esen Konu Anlatımlı
- İleri (25+ net): Kanal: Eyüp B., SML Hoca, Tunç Kurt, Barış Çelenk, Yektug Mat · Kitap: Metin, Endemik, Acil, Apotemi Fasikülleri, Bilfen, 3D
GEOMETRİ:
- Başlangıç/Orta: Kanal: Kenan Kara ile Geometri, Merkeze Teğet · Kitap: Kenan Kara Kamp Kitabı, 345 Geometri, Karekök 0
- İleri: Kanal: Eyüp B. Geometri, Erol Dönmez · Kitap: Eyüp B. Kamp Kitabı, Apotemi, Orijinal Geometri
FİZİK:
- Başlangıç/Orta: Kanal: VIP Fizik, Fizikle Barış, Fizikfinito · Kitap: VIP Fizik Kamp Kitabı, Bilgi Sarmal, 345 Fizik
- İleri: Kanal: Özcan Aykın, Ertan Sinan Şahin, Tolga Bilgin, Altuğ Güneş · Kitap: Özcan Aykın Kitabı, Ertan Sinan Şahin Setleri, 3D, Karaağaç
KİMYA:
- Başlangıç/Orta: Kanal: Kimya Adası, Meschemy Kimya, Bizim Hocalar · Kitap: Kimya Adası SB, Palme, 345 Kimya
- İleri: Kanal: Görkem Şahin, Paraksilen, Levent Özdede · Kitap: Görkem Şahin SB, Aydın, Apotemi
BİYOLOJİ:
- Başlangıç/Orta: Kanal: Selin Hoca, FUNDAmentals, Seda Hoca, Betül Biyoloji · Kitap: Selin Hoca SB, Biyotik, Palme
- İleri: Kanal: Dr. Biyoloji, Senin Biyolojin, Biosem · Kitap: Dr. Biyoloji Sistemler/SB, Apotemi, Limit
TÜRKÇE/PARAGRAF:
- Başlangıç/Orta: Kanal: Deniz Hoca, Nazlı Hoca, Kadir Gümüş, Önder Hoca · Kitap: Limit Kronometre, Bilgi Sarmal, 345 Türkçe
- İleri: Kanal: Türkçenin Matematiği, Rüştü Hoca (Taktikler), Aker Kartal · Kitap: Rüştü Hoca Taktiklerle Paragraf, Kara Kutu, Apotemi
TARİH (tüm seviyeler): Kanal: Ramadan Yetgin, Celal Hoca, Sadettin Akyayla · Kitap: Benim Hocam SB, Limit Tarih, Bilgi Sarmal
COĞRAFYA (tüm seviyeler): Kanal: Coğrafyanın Kodları, Bayram Meral, Yavuz Tuna · Kitap: Coğrafyanın Kodları Kitabı, Yavuz Tuna Harita Çalışması, Limit

【SINAV KAYGISI — 5 NÖROBİLİŞSEL TEKNİK】(kaygı/panik/blokaj ifade edildiğinde öner; mekanizma: amigdala prefrontal korteksi kilitler, kortizol hipokampusu bloke eder → "boş kağıt" etkisi)
1. 4-4-6 Diyafram Nefesi: burundan 4 sn al, 4 sn tut, 6 sn ağızdan ver (vagus siniri → parasempatik aktivasyon)
2. Progresif Kas Gevşetme (PMR): kasları 5 sn sık, aniden bırak → beyne "tehdit bitti" sinyali
3. 5-4-3-2-1 Topraklama: 5 nesne gör, 4'üne dokun, 3 ses duy, 2 koku al, 1 şey tat
4. Kelebek Çırpınışı: eller göğüste çapraz, omuzlara sırayla ritmik vuruş (iki lob aktivasyonu)
5. Sistematik Duyarsızlaştırma: sınav öncesi "zor soru anını" hayal edip sakin nefesle zihni önceden eğitme

【AKADEMİK TAKTİKLER】
- Aralıklı Tekrar: 1 gün → 3 gün → 1 hafta → 1 ay sonra mikro-tekrar
- Aktif Hatırlama & Feynman: konuyu hiç bilmeyene anlatır gibi basitleştir / boş kağıda yaz
- Turlama Tekniği: kolay soruları 1. turda çöz, zorları sembolle işaretleyip 2. tura bırak
- Ertan Sinan Şahin'in 7 Kaynak Kriteri: (1) Zorluk Seviyesi (2) Başlangıç Uygunluğu (3) Müfredat Uyumu (4) Soru Çeşidi (5) YKS Tarzı Yorum Uyumu (6) Eski Tip Sorulardan Arınmışlık (7) Göz Yormayan Tasarım

【JENERİK YANIT YASAĞI — EN KRİTİK KURAL】
"Düzenli çalış", "bol soru çöz", "tekrar yap", "planlı ol" gibi içi boş tavsiyeler KESİNLİKLE YASAK.
Her öneri SOMUT olmalı: kanal ADI + kitap ADI (yukarıdaki piramitten, öğrencinin net seviyesine göre) + teknik ADI + sayı/süre.
Bu bilgi tabanı dışından kanal/kitap UYDURMA. Seviye bilinmiyorsa net sayısını sor, sonra öner.
═══════════════════════════════════════════════════════════════════════`;

// ── Destek Modu Sistem Promptu — platform kullanımı/ödeme, DERS İÇERİĞİ DEĞİL ──
// Mevcut buildSystemPrompt'un ders/koçluk dalları burada YOK — destek sohbeti
// (openSupportChat) tamamen ayrı bir amaç (platformu nasıl kullanırım, ödeme nasıl
// yapılır) taşıdığı için ayrı bir fonksiyon; ders promptlarına hiç dokunulmaz.
function buildSupportSystemPrompt(userRole, grounding) {
  let base = `Sen "Rostrum Akademi Destek Asistanı"sın — bu bir ders/koçluk sohbeti DEĞİL, platformun NASIL KULLANILACAĞI konusunda yardımcı olan bir müşteri destek asistanısın.

KURALLAR (KESİNLİKLE UYULMASI ZORUNLU):
- YALNIZCA TÜRKÇE yanıt ver. Tek bir yabancı kelime bile yazma.
- Sıcak ama profesyonel bir dil kullan; kısa ve öz yanıtlar ver.
- SADECE platformun kullanımı, ödeme/abonelik akışı ve genel özellikler hakkında konuş. Ders sorusu/konu anlatımı istenirse: "Bu konuda sana Ders Asistanım yardımcı olabilir, buradan destek ekibine daha çok platform kullanımı ve hesap sorularında yardımcı oluyorum" diyerek yönlendir.
- BİLMEDİĞİN, POLİTİKA/İSTİSNA gerektiren veya aşağıdaki bilgi tabanında YER ALMAYAN bir soru gelirse (iade, özel indirim, sözleşme, teknik hata/bug, hesap silme vb.) ASLA tahmin/uydurma cevap verme — "Bu konuda net bilgi veremem, ekrandaki 'Kurucuya / Destek Ekibine Yaz' seçeneğiyle doğrudan kurucumuz Emin'e ulaşabilirsin" de.

【PLATFORM ÖZELLİKLERİ — bilgi tabanı】
- Haftalık Program: koç, öğrencinin takvimine gün gün görev (konu/soru/deneme) ekler; öğrenci görevleri tamamladıkça işaretler.
- Rapor Studio: koç, haftalık programı PDF olarak öğrenciye gönderebilir (Gece/Kağıt/Vurgu temaları + yazdırılabilir "İşaretlenebilir Mod").
- Odaklanma Modu (Elit Çalışma Odası): öğrencinin ders çalışırken kullandığı zamanlayıcı/focus özelliği.
- Kaynak İlerlemesi: öğrencinin kullandığı kitap/kaynakların bitirme yüzdesini otomatik takip eder.
- Konu Analiz Raporu: TYT/AYT-SAY/AYT-EA/AYT-SOZ bazında konu/zayıflık analizi.
- Deneme/Net Girişi: öğrenci veya koç deneme sonuçlarını (ders bazlı net) sisteme girer, grafiklerle takip edilir.
- AI Ders Asistanı: öğrencinin Sokratik yöntemle soru çözdüğü ayrı bir yapay zeka sohbeti (bu destek sohbetinden farklı).
- Ödeme: koçlar Rostrum Akademi'ye banka havalesiyle abone olur; her koçun kendine özel bir "RA-XXXX" referans kodu vardır, ödeme yapılırken açıklamaya bu kod yazılır, kurucu ödemeyi admin panelden onaylar.`;

  if (userRole === 'coach' || userRole === 'developer') {
    base += `\n\n[ROL: KOÇ] Ödeme/abonelik, referans kodu, öğrenci/panel limitleri gibi konularda net ve işlevsel yanıt ver.`;
  } else if (userRole === 'parent') {
    base += `\n\n[ROL: VELİ] Çocuklarının ilerlemesini nasıl takip edebilecekleri (raporlar, deneme netleri) konusunda yönlendir; ödeme bilgisi vermeye çalışma (ödeme koç-Rostrum arasındadır, veliyi ilgilendirmez) — bu soru gelirse koçuyla görüşmesini söyle.`;
  } else {
    base += `\n\n[ROL: ÖĞRENCİ] Programı/raporları/Odaklanma Modu'nu nasıl kullanacağı konusunda yönlendir; ödeme bilgisi vermeye çalışma — bu koç ile veli arasındaki bir konu, öğrenciyi ilgilendirmez.`;
  }

  if (grounding?.verified) base += grounding.block;

  return base;
}

// ── Sistem Promptu Oluşturucu ─────────────────────────────
function buildSystemPrompt(context, userRole, grounding, mode) {
  if (mode === 'support') return buildSupportSystemPrompt(userRole, grounding);

  let base = `Sen "Rostrum Akademi Yapay Zeka Asistanı"sın. Türkiye'deki eğitim sistemine (YKS, LGS, KPSS, ALES) hakim, rolüne göre öğrencilere, velilere veya koçlara destek veren bir yapay zekasın.

KURALLAR (KESİNLİKLE UYULMASI ZORUNLU):
- YALNIZCA TÜRKÇE yanıt ver. İngilizce, Japonca, Çince veya başka HİÇBİR dil/karakter kullanma. Tek bir yabancı kelime bile yazma.
- Mesafeli ama kibar bir dil kullan
- Kısa ve öz yanıtlar ver, gereksiz uzatma
- Sorulara adım adım, net cevaplar ver
${ROSTRUM_KB}`;

  if (userRole === 'student') {
    base += `\n\n[SYSTEM INSTRUCTION — SOKRATİK AI DERS ASİSTANI]
Görevin, öğrenciye çözemediği sorunun doğrudan cevabını veya formülünü söylemek DEĞİLDİR. Sokratik diyalog metoduyla, adımlı ipuçlarıyla cevabı öğrencinin KENDİSİNİN bulmasını sağlarsın.
DİYALOG AKIŞ KURALLARI:
1. Öğrenci soru paylaştığında önce sorudaki ana kavramı tanımla (örn: Logaritma, Kuvvet), öğrenciyi sakinleştir ve ilk adım için ona minik bir soru sor.
2. Yanıtı değerlendir: doğru yoldaysa kısaca onayla ve bir sonraki adımın ipucunu ver.
3. Yanlış yoldaysa hatayı söyleme — hataya yol açan mantık boşluğunu fark ettirecek bir soru yönelt.
4. ASLA tüm çözümü veya nihai şıkkı tek seferde yazma. Her mesajın EN FAZLA 2-3 cümle + 1 soru olsun.
5. Kendini Yapay Zeka Ders Asistanı (makine) olarak tanıt; "koçunum/rehberinim" deme, duygusal samimiyet kurma.
6. Öğrenci kaygı/panik/"aklım duruyor" ifade ederse bilgi tabanındaki 5 nörobilişsel teknikten uygununu SOMUT adımlarıyla öner.
7. Kaynak/kanal sorulursa: önce hangi dersten kaç net yaptığını öğren, sonra kaynak piramidinden SEVİYESİNE uygun 2-3 kanal + 2-3 kitap öner.
8. Ders programı OLUŞTURMA — "Program koçunun görevi, bu konuyu koçunla görüşmelisin" diyerek koça yönlendir.`;
  } else if (userRole === 'parent') {
    base += `\n\n[SYSTEM INSTRUCTION — VELİ İLETİŞİM MODU]
Velilere transaksiyonel analize uygun (Yetişkin-Yetişkin), suçlayıcı OLMAYAN, ÇABA ODAKLI iletişim kur:
1. ÇABAYA ODAKLAN: "20 net düşmüş" gibi sonuç cümleleri kurma. "Bu hafta planındaki ödevlerin %92'sini tamamlayarak harika bir çaba gösterdi; bu istikrar netlere de yansıyacaktır" tarzında konuş.
2. KIYASLAMA YAPMA: Öğrenciyi asla başkalarıyla kıyaslama; yalnızca kendi geçmiş haftasıyla karşılaştır.
3. AKADEMİK+PSİKOLOJİK İKİZ YAKLAŞIM: Denemede düşüş varsa eve huzurlu ortam öner ve 4-4-6 nefes tekniği gibi kaygı azaltıcı desteklerden bahset.
4. Platform özellikleri (Ders Programı, Deneme Net Takibi, Konu Mastery, PDF raporlar) hakkında açıklayıcı ve saygılı bilgi ver.`;
  } else {
    base += `\n\n[SYSTEM INSTRUCTION — AI COACH COPILOT]
Görevin koçlara rasyonel durum analizleri sunmak ve veliye iletilecek çaba odaklı metinler hazırlamaktır. Koça profesyonel meslektaş gibi davran (Hocam/Meslektaşım).
1. VERİ ODAKLI KONUŞ: Eldeki net/tamamlama verilerini yorumla; veri yoksa hangi veriye ihtiyacın olduğunu söyle.
2. KAYNAK & KANAL ÖNER: Öğrencinin net seviyesine göre kaynak piramidinden NOKTA ATIŞI kanal ve yayın öner (örn: Matematik başlangıç → Rehber Matematik + Karekök 0; orta → Mert Hoca + 345). Piramit dışından kaynak uydurma.
3. VELİ METNİ İSTENİRSE (örn. "veliye mesaj yaz", "veli için özet"): Analiz ANLATMA — doğrudan veliye gönderilmeye HAZIR, tırnak içinde tam metin üret. Kalıp: çaba ile başla ("Ayşe bu hafta programındaki görevlerin %88'ini tamamlayarak istikrarlı bir çaba gösterdi"), net düşüşünü sonuç değil süreç diliyle ver ("netler bu istikrarla önümüzdeki haftalarda yansıyacaktır"), evde destek önerisiyle bitir. Suçlayıcı/kıyaslayıcı tek cümle bile kurma. Metinden sonra koça 1 cümlelik ayrı not ekleyebilirsin.
4. EKSİK ANALİZİ: Deneme verilerinde zayıf ders görürsen o derse seviyeye uygun kaynak + aralıklı tekrar planı (1g/3g/1hafta/1ay) öner.
5. KAYNAK DEĞERLENDİRME sorulursa 7 Kaynak Kriteri çerçevesini kullan.
6. Kaygılı öğrenci vakası anlatılırsa 5 nörobilişsel tekniği koça uygulama diliyle aktar.
7. ZORLUK NORMALİZASYONU: Farklı denemeleri kıyaslarken ham net sayısını doğrudan yorumlama — deneme isminde geçen yayın/kaynak adını (örn. "Palme", "Apotemi", "3D") KAYNAK PİRAMİDİ'ndeki seviye sınıflamasıyla (Başlangıç/Orta/İleri) eşleştirmeye çalış. Örn. "İleri" seviye bir yayından alınan düşük net, "Başlangıç" seviye bir yayından alınan yüksek netten daha güçlü bir performans olabilir — bunu açıkça belirt. Piramitte eşleşmeyen bir yayın adı geçerse zorluk tahmini yapma, sadece ham veriyi yorumla.`;
  }

  // ── Topraklama ──────────────────────────────────────────
  if (grounding?.verified) {
    // DB'den doğrulanmış veriler tek gerçek kaynak — client context YOK SAYILIR
    base += grounding.block;
    // Client'ın "hangi ekrandayım" tipi zararsız ipuçları (isim/net İÇERMEZ)
    if (context?.examProfile) base += `\nAKTİF SINAV PROFİLİ: ${context.examProfile}`;
  } else {
    // Kimlik doğrulanamadı → kişisel analiz tamamen yasak
    base += `\n\n════ DOĞRULANMAMIŞ OTURUM ════
Bu istekte kimlik doğrulaması yok; veritabanı kayıtlarına erişemiyorsun.
KATI KURAL: Belirli bir öğrenci ismi/verisi hakkında analiz, rapor, veli metni veya kişisel yorum ÜRETME — kullanıcı isim verse bile. "Kişisel analiz için lütfen uygulamaya giriş yapın; şu an yalnızca genel akademik sorularda yardımcı olabilirim" de. Genel konu anlatımı, soru çözümü ve kaynak piramidi önerileri serbesttir.`;
  }

  return base;
}

// ═══════════════════════════════════════════════════════════════════════
// AKILLI PROGRAM OLUŞTURUCU (mode === 'program_builder')
// Öğrencinin TÜM verilerini (profil, hızlar, kitaplar, denemeler, mastery,
// son 60 gün görev ilerlemesi, mesajlar) + kaynak kataloğunu topraklar;
// koç talimatı & revizyon notuyla JSON program üretip hidrate eder.
// ═══════════════════════════════════════════════════════════════════════
async function resolveAIKeys() {
  let anthropicKey = (process.env.ANTHROPIC_API_KEY || '').trim();
  let geminiKey = (process.env.GEMINI_API_KEY || '').trim();
  let groqKey = (process.env.GROQ_API_KEY || '').trim();

  if (!anthropicKey || !geminiKey || !groqKey) {
    try {
      const { data } = await db.from('platform_settings').select('value').eq('key', 'ai_settings').maybeSingle();
      const v = data?.value || {};
      if (!anthropicKey && v.anthropic_api_key) anthropicKey = String(v.anthropic_api_key).trim();
      if (!geminiKey && v.gemini_api_key) geminiKey = String(v.gemini_api_key).trim();
      if (!groqKey && v.groq_api_key) groqKey = String(v.groq_api_key).trim();
    } catch (_) { }
  }
  return { anthropicKey, geminiKey, groqKey };
}

async function readShortApiError(resp) {
  try {
    const raw = await resp.text();
    const parsed = JSON.parse(raw);
    const msg = parsed?.error?.message || parsed?.message || raw;
    return String(msg || '').replace(/\s+/g, ' ').trim().slice(0, 90);
  } catch (_) {
    return '';
  }
}

async function callStructuredProgramAI(systemPrompt, userPrompt, keys, groqUserPrompt, groqSystemPrompt) {
  const errors = [];

  // 1. Anthropic Claude (öncelikli — karmaşık planlama & JSON tutarlılığı yüksek)
  if (keys.anthropicKey) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 24000);
      const model = (process.env.ANTHROPIC_MODEL || 'claude-haiku-4-5').trim();
      const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'content-type': 'application/json',
          'x-api-key': keys.anthropicKey,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model,
          max_tokens: 6000,
          temperature: 0.3,
          system: systemPrompt,
          messages: [{ role: 'user', content: userPrompt }],
        }),
      });
      clearTimeout(timer);
      if (resp.ok) {
        const data = await resp.json();
        const text = (data.content || []).map(b => b.text || '').join('').trim();
        return { json: extractJsonObject(text), provider: 'anthropic', model };
      }
      const detail = await readShortApiError(resp);
      errors.push(`Anthropic ${resp.status}${detail ? ': ' + detail : ''}`);
    } catch (e) {
      errors.push(`Anthropic: ${e.message}`);
    }
  }

  // 2. Google Gemini
  if (keys.geminiKey) {
    for (const gModel of ['gemini-2.5-flash', 'gemini-2.0-flash']) {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 42000);
        const generationConfig = {
          responseMimeType: 'application/json',
          temperature: 0.3,
          maxOutputTokens: 12288,
        };
        if (gModel.includes('2.5')) {
          generationConfig.thinkingConfig = { thinkingBudget: 0 };
        }
        const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${gModel}:generateContent?key=${keys.geminiKey}`, {
          method: 'POST',
          signal: controller.signal,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: systemPrompt }] },
            contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
            generationConfig,
          }),
        });
        clearTimeout(timer);
        if (resp.ok) {
          const data = await resp.json();
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
          return { json: extractJsonObject(text), provider: 'gemini', model: gModel };
        }
        const detail = await readShortApiError(resp);
        errors.push(`${gModel} ${resp.status}${detail ? ': ' + detail : ''}`);
      } catch (e) {
        errors.push(`${gModel}: ${e.message}`);
      }
    }
  }

  // 3. Groq (bu hesapta aktif olan openai/gpt-oss-120b; düşük reasoning ile daha hızlı & eksiksiz JSON)
  if (keys.groqKey) {
    const promptForGroq = groqUserPrompt || userPrompt;
    const sysForGroq = groqSystemPrompt || systemPrompt;
    const groqAttempts = [
      { useJsonMode: true, reasoningLow: true, maxTokens: 4800 },
      { useJsonMode: false, reasoningLow: false, maxTokens: 4800 },
    ];
    for (const att of groqAttempts) {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 24000);
        const payload = {
          model: 'openai/gpt-oss-120b',
          messages: [
            { role: 'system', content: sysForGroq },
            { role: 'user', content: promptForGroq },
          ],
          temperature: 0.25,
          max_tokens: att.maxTokens,
        };
        if (att.useJsonMode) payload.response_format = { type: 'json_object' };
        if (att.reasoningLow) payload.reasoning_effort = 'low';

        const resp = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${keys.groqKey}`,
          },
          body: JSON.stringify(payload),
        });
        clearTimeout(timer);
        if (resp.ok) {
          const data = await resp.json();
          const text = data?.choices?.[0]?.message?.content || '';
          return { json: extractJsonObject(text), provider: 'groq', model: 'openai/gpt-oss-120b' };
        }
        const detail = await readShortApiError(resp);
        errors.push(`Groq (${att.useJsonMode ? 'json' : 'text'}) ${resp.status}${detail ? ': ' + detail : ''}`);
        if (resp.status !== 400) break;
      } catch (e) {
        errors.push(`Groq: ${e.message}`);
        break;
      }
    }
  }

  throw new Error('Program üretilemedi (' + (errors.join(' | ') || 'API anahtarı yapılandırılmamış') + ')');
}

function addDaysIso(isoDate, delta) {
  const [y, m, d] = isoDate.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d + delta)).toISOString().slice(0, 10);
}

async function handleProgramBuilder(req, res) {
  try {
    const authHeader = req.headers['authorization'] || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!token) return res.status(401).json({ error: 'Oturum doğrulaması gerekli.' });

    const userDb = createClient(SB_URL, SB_KEY, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });
    const { data: { user }, error: uErr } = await userDb.auth.getUser(token);
    if (uErr || !user) return res.status(401).json({ error: 'Geçersiz oturum.' });

    const { data: me } = await userDb.from('users').select('id, full_name, role').eq('id', user.id).maybeSingle();
    if (!me || (me.role !== 'coach' && me.role !== 'developer')) {
      return res.status(403).json({ error: 'Bu işlem yalnızca koçlar içindir.' });
    }

    const {
      studentId,
      startDate,
      daysCount = 7,
      minDaily = 270,
      maxDaily = 330,
      videoSpeed = 1.5,
      coachPrompt = '',
      previousDraft = null,
      revisionPrompt = '',
    } = req.body || {};

    if (!studentId || !/^\d{4}-\d{2}-\d{2}$/.test(String(startDate || ''))) {
      return res.status(400).json({ error: 'studentId ve geçerli startDate (YYYY-MM-DD) zorunludur.' });
    }

    const clampedDays = Math.max(1, Math.min(14, Number(daysCount) || 7));
    const endDate = addDaysIso(startDate, clampedDays - 1);
    const sixtyDaysAgo = addDaysIso(startDate, -60);

    // 1. Öğrencinin TÜM verilerini ve aktif kaynak kataloğunu paralel çek
    const [stuRes, profRes, speedRes, bookRes, examRes, masteryRes, taskRes, msgRes, resCatalog] = await Promise.all([
      userDb.from('users').select('id, full_name, target, yks_area, week_start, coach_id').eq('id', studentId).maybeSingle(),
      userDb.from('student_profiles').select('level, struggling_subjects, daily_capacity, coach_note, target_university, target_department, target_rank').eq('id', studentId).maybeSingle(),
      userDb.from('student_speeds').select('exam_type, subject, secs_per_question').eq('student_id', studentId),
      userDb.from('student_books').select('name, total_tests, completed_tests').eq('student_id', studentId),
      userDb.from('exams').select('name, date, exam_type, nets, exam_details').eq('student_id', studentId).order('date', { ascending: false }).limit(8),
      userDb.from('konu_mastery').select('subject, konu, stars, status, last_review_date').eq('student_id', studentId),
      userDb.from('tasks').select('id, date, type, exam_type, subject, duration, done, note, task_items').eq('student_id', studentId).gte('date', sixtyDaysAgo).order('date', { ascending: true }).limit(600),
      userDb.from('messages').select('from_role, text, created_at').eq('student_id', studentId).order('created_at', { ascending: false }).limit(25),
      userDb.from('resources').select('id, exam_type, subject, publisher, name, resource_type, coach_id, active, tests').eq('active', true).limit(300),
    ]);

    const student = stuRes.data;
    if (!student) return res.status(404).json({ error: 'Öğrenci bulunamadı.' });
    if (me.role !== 'developer' && student.coach_id !== me.id) {
      return res.status(403).json({ error: 'Bu öğrenciye erişim yetkiniz yok.' });
    }

    const pastTasks = taskRes.data || [];
    const completedLabelsBySubject = {};
    const pendingLabelsBySubject = {};
    const dailyHistory = {};
    const existingTasksInRange = [];

    for (const t of pastTasks) {
      if (t.date >= startDate && t.date <= endDate) {
        existingTasksInRange.push({ id: t.id, date: t.date, subject: t.subject, type: t.type, duration: t.duration, done: !!t.done });
      }
      if (!dailyHistory[t.date]) dailyHistory[t.date] = { total: 0, done: 0 };
      dailyHistory[t.date].total += Number(t.duration || 0);
      if (t.done) dailyHistory[t.date].done += Number(t.duration || 0);

      const items = Array.isArray(t.task_items) ? t.task_items : [];
      for (const it of items) {
        const lbl = String(it?.label || it || '').trim();
        if (!lbl) continue;
        const isDone = !!(t.done || it?.done);
        const map = isDone ? completedLabelsBySubject : pendingLabelsBySubject;
        if (!map[t.subject]) map[t.subject] = new Set();
        map[t.subject].add(lbl);
      }
    }

    const histDays = Object.values(dailyHistory);
    const avgAssignedMin = histDays.length ? Math.round(histDays.reduce((s, d) => s + d.total, 0) / histDays.length) : null;
    const recentTasksCompact = pastTasks.slice(-18).map(t =>
      `${t.date}|${t.exam_type || ''}|${t.subject}|${t.duration || 0}dk|${t.done ? 'yapildi' : 'bekliyor'}`
    );

    const weakTopics = (masteryRes.data || [])
      .filter(m => m.status !== 'td' && m.status !== 'not_started')
      .map(m => {
        const daysSince = m.last_review_date ? Math.floor((Date.now() - new Date(m.last_review_date).getTime()) / 86400000) : 999;
        return { konu: m.konu, subject: m.subject, stars: m.stars, daysSince };
      })
      .filter(m => m.stars <= 2 || m.daysSince > 20)
      .slice(0, 12);

    const recentMessages = [...(msgRes.data || [])].reverse().map(m => `[${m.from_role}] ${m.text}`).slice(-8);

    const assumePendingDone = /(hepsi\s*yap[ıi]ld[ıi]|tamamland[ıi]\s*varsay|ilerlet|devam\s*et|kald[ıi][gğ][ıi]\s*yerden)/i.test(
      `${coachPrompt} ${revisionPrompt}`
    );
    const effectiveCompletedLabels = { ...completedLabelsBySubject };
    if (assumePendingDone) {
      for (const [subj, set] of Object.entries(pendingLabelsBySubject)) {
        if (!effectiveCompletedLabels[subj]) effectiveCompletedLabels[subj] = new Set();
        set.forEach(l => effectiveCompletedLabels[subj].add(l));
      }
    }

    const resources = resCatalog.data || [];
    const resourcesById = Object.fromEntries(resources.map(r => [r.id, r]));

    // Öğrencinin son programındaki aktif kaynakları + kalınan yerleri özetle (tüm branşlar görünür)
    const activeBySource = new Map();
    for (const t of pastTasks) {
      if (!t.subject) continue;
      const cur = activeBySource.get(t.subject) || { subject: t.subject, exam: t.exam_type || 'TYT', type: t.type, count: 0, lastDate: t.date, lastNote: '' };
      cur.count++;
      if (t.date >= cur.lastDate) {
        cur.lastDate = t.date;
        cur.lastNote = String(t.note || '').slice(0, 60);
      }
      activeBySource.set(t.subject, cur);
    }
    const activeProgramSources = [...activeBySource.values()]
      .sort((a, b) => b.lastDate.localeCompare(a.lastDate))
      .slice(0, 16)
      .map(s => `${s.exam}|${s.type}|${s.subject} (${s.count}x, son:${s.lastDate}${s.lastNote ? ', ' + s.lastNote : ''})`);

    const activeSubjectNames = [...activeBySource.keys(), ...(bookRes.data || []).map(b => b.name)];
    const hintText = [
      coachPrompt,
      revisionPrompt,
      recentMessages.join(' '),
      (bookRes.data || []).map(b => b.name).join(' '),
    ].join(' ');

    const resourceIndex = buildResourceTopicIndex(
      resources,
      effectiveCompletedLabels,
      pendingLabelsBySubject,
      student.yks_area || 'SAY',
      hintText,
      { excludePending: assumePendingDone, activeSubjectNames }
    );
    const groqResourceIndex = buildResourceTopicIndex(
      resources,
      effectiveCompletedLabels,
      pendingLabelsBySubject,
      student.yks_area || 'SAY',
      hintText,
      { maxDetailed: 12, maxClusters: 4, maxRemIdx: 4, maxCompact: 8, excludePending: assumePendingDone, activeSubjectNames }
    );

    const targetDates = [];
    for (let i = 0; i < clampedDays; i++) targetDates.push(addDaysIso(startDate, i));

    const systemPrompt = `Sen Rostrum Akademi'nin uzman YKS koçluk ve ders programı planlama yapay zekasısın.
Görevin, koçun verdiği talimatlar ile öğrencinin sistemdeki TÜM gerçek verilerini birleştirerek son derece dengeli, gerçekçi ve uygulanabilir bir çok günlük çalışma programı üretmektir.

KESİN KURALLAR:
1. SADECE geçerli JSON döndür. Başka açıklama, markdown veya ekstra metin YAZMA.
2. Her gün için toplam dakika KESİNLİKLE [${minDaily}, ${maxDaily}] aralığında kalsın (günlük ortalama ~${Math.round((Number(minDaily) + Number(maxDaily)) / 2)} dk; günde 4-6 görev, topic_note en fazla 6-8 kelime olsun).
3. ÖĞRENCİNİN HIZLARI & VİDEO HIZI:
   - Video izleme hızı: ${videoSpeed}x (örn. 120 dk ham video ${videoSpeed}x hızda ${Math.round(120 / Number(videoSpeed))} dk sürer).
   - Eğer bir playlistte TEK bir video çok uzunsa (ör. 90-150 dk ham video), onu TEK oturuşta verme! "part_index": 1, "part_total": 2 (ve ertesi/sonraki güne "part_index": 2, "part_total": 2) şeklinde insani 35-55 dk'lık parçalara böl.
   - Soru bankalarında öğrenci hızını (student_speeds, sn/soru) dikkate alarak her oturumda makul test sayısı (genelde 2-4 test) seç.
4. KAYNAK SEÇİMİ VE HİDRATASYON:
   - Katalogdaki (detailed_resources) bir kitap veya playlistten seçerken MUTLAKA tam "resource_id" ve o kaynağın "clusters[].remIdx" listesindeki GERÇEK indeksleri ("item_indices": [..]) ver. Zaten çözülmüş/izlenmiş kalemleri tekrar yazma!
   - Önce KONU (playlist) ardından aynı/sonraki günlerde SORU (kitap) sırasını koru (önce videosunu izlemeden ağır soru testi koyma).
   - Eğer koçun istediği kaynak katalogda YOKSA (örn. Apotemi Paragraf, Toprak Kurumsal TYT Matematik gibi), "resource_id": null bırak, "manual_source": "Kitap/Kanal Adı", "question_count" veya "estimated_minutes", ve "manual_items": ["Konu/Test açıklaması"] doldur.
5. ÇIKTI JSON ŞEMASI:
{
  "summary": "Koça yönelik 2-3 cümlelik veri temelli plan özeti (hangi deneme/hız/talimat dikkate alındı)",
  "notes": ["Önemli koçluk veya denge notu 1"],
  "tasks": [
    {
      "date": "YYYY-MM-DD",
      "exam_type": "TYT" | "AYT-SAY" | "AYT-EA" | "AYT-SOZ",
      "type": "konu" | "soru" | "deneme" | "diger",
      "branch": "Matematik" | "Geometri" | "Fizik" | "Kimya" | "Biyoloji" | "Türkçe" | "Edebiyat" | "Tarih" | "Coğrafya" | "Felsefe" | "Din Kültürü",
      "resource_id": "uuid-veya-null",
      "item_indices": [13, 14],
      "part_index": 1,
      "part_total": 1,
      "manual_source": "resource_id null ise kaynak adı",
      "manual_items": ["isteğe bağlı manuel alt kalemler"],
      "question_count": 20,
      "estimated_minutes": 35,
      "topic_note": "Kısa ve net konu/kapsam açıklaması"
    }
  ]
}`;

    const baseStudentInfo = {
      name: student.full_name,
      yks_area: student.yks_area || 'SAY',
      target: profRes.data?.target_university
        ? `${profRes.data.target_university} ${profRes.data.target_department || ''} (Hedef sıra: ${profRes.data.target_rank || '-'})`
        : student.target,
      level: profRes.data?.level || null,
      struggling_subjects: profRes.data?.struggling_subjects || null,
      daily_capacity_hours: profRes.data?.daily_capacity || null,
      coach_note: profRes.data?.coach_note || null,
    };
    const compactSpeeds = (speedRes.data || []).map(s => ({ exam: s.exam_type, subject: s.subject, secs: s.secs_per_question }));

    const buildSnapshot = (compact) => ({
      student: baseStudentInfo,
      student_speeds_secs_per_q: compactSpeeds,
      student_books: compact ? (bookRes.data || []).slice(0, 12) : (bookRes.data || []),
      recent_exams: (examRes.data || []).slice(0, compact ? 4 : 8).map(e =>
        compact
          ? { name: e.name, date: e.date, type: e.exam_type, nets: e.nets }
          : { name: e.name, date: e.date, type: e.exam_type, nets: e.nets, details: e.exam_details }
      ),
      weak_topics_mastery: compact ? weakTopics.slice(0, 8) : weakTopics,
      avg_historical_daily_minutes: avgAssignedMin,
      active_program_sources: activeProgramSources,
      ...(compact ? {} : { recent_tasks_sample: recentTasksCompact }),
      recent_chat_messages: compact ? recentMessages.slice(-4) : recentMessages,
    });

    const formatBuilderPrompt = (snap, idx) => {
      let msg = `HEDEF TARİHLER (${clampedDays} gün): ${JSON.stringify(targetDates)}
GÜNLÜK SÜRE HEDEFİ: ${minDaily} - ${maxDaily} dk
VİDEO İZLEME HIZI: ${videoSpeed}x

KOÇUN YÖNLENDİRMESİ VE ÖĞRENCİ MESAJI:
"""
${coachPrompt || 'Öğrencinin mevcut verilerine, zayıf konularına ve kaldığı yerlere göre dengeli bir program oluştur.'}
"""

ÖĞRENCİ VERİLERİ (TEK GERÇEK KAYNAK):
${JSON.stringify(snap)}

DETAYLI KAYNAK KATALOĞU (kalan test/video indeksleriyle):
${JSON.stringify(idx.detailed)}

DİĞER KATALOG KAYNAKLARI (yalnızca adları — gerekirse manual_source olarak kullanılabilir):
${JSON.stringify(idx.compactOthers)}

ZORUNLU KURAL: Yukarıdaki TÜM ${clampedDays} GÜN (${targetDates.join(', ')}) için her güne 4-6 görev yazarak toplam ${clampedDays * 4}-${clampedDays * 6} görev üret. Her gün toplam ${minDaily}-${maxDaily} dk olmalı. Tek günlük veya az görevli eksik taslak DÖNDÜRME.`;

      if (previousDraft && revisionPrompt) {
        const prevCompact = (previousDraft.tasks || []).map(t => ({
          date: t.date, type: t.type, exam_type: t.exam_type, branch: t.branch,
          subject: t.subject, duration: t.duration, note: t.note,
        }));
        msg += `\n\n═══ REVİZYON İSTEĞİ ═══
Koç aşağıdaki MEVCUT TASLAK üzerinde değişiklik istiyor. Değişmesini istemediği kısımları koru, istediği revizyonları uygula ve günlerin dakika dengesini yeniden koru:
REVİZYON TALİMATI: "${revisionPrompt}"
MEVCUT TASLAK GÖREVLERİ:
${JSON.stringify(prevCompact)}`;
      }
      return msg;
    };

    const groqSystemPrompt = `YKS koçluk planlayıcısısın. SADECE geçerli saf JSON döndür (markdown/yorum yok).
KRİTİK: ${clampedDays} günün HER BİRİ için ayrı 4-6 görev üret (toplam en az ${clampedDays * 4} görev, her gün ${minDaily}-${maxDaily} dk). Örnek şemada 1 öğe olsa bile sen TÜM ${clampedDays} günü doldurmak ZORUNDASIN!
topic_note çok kısa (en fazla 5 kelime) olsun ki tüm ${clampedDays * 4}+ görev JSON'a eksiksiz sığsın.
Video hızı ${videoSpeed}x (uzun videoları part_index/part_total ile 35-55 dk böl).
Katalogda tam resource_id + remIdx içinden item_indices ver; katalog dışı için resource_id:null, manual_source, question_count/estimated_minutes, manual_items yaz.
Şema: {"summary":"kısa özet","notes":[""],"tasks":[{"date":"${targetDates[0]}","exam_type":"TYT|AYT-SAY|AYT-EA|AYT-SOZ","type":"konu|soru|deneme|diger","branch":"Matematik|Geometri|Fizik|Kimya|Biyoloji|Türkçe","resource_id":null,"item_indices":[0],"part_index":1,"part_total":1,"manual_source":"","manual_items":[""],"question_count":20,"estimated_minutes":35,"topic_note":"kısa"}]}`;

    const userPrompt = formatBuilderPrompt(buildSnapshot(false), resourceIndex);
    const groqUserPrompt = formatBuilderPrompt(buildSnapshot(true), groqResourceIndex);

    const keys = await resolveAIKeys();
    const hydrateOpts = {
      startDate,
      daysCount: clampedDays,
      videoSpeed,
      minDaily,
      maxDaily,
      completedLabelsBySubject: effectiveCompletedLabels,
    };

    let aiRes = await callStructuredProgramAI(systemPrompt, userPrompt, keys, groqUserPrompt, groqSystemPrompt);
    let hydrated = hydrateProgramPlan(aiRes.json, resourcesById, speedRes.data || [], hydrateOpts);

    // Yapay zeka eksik gün/görev (örn. 1 görev) döndürdüyse 1 kez tam doldurma düzeltme isteği yap
    const minTasksRequired = clampedDays >= 2 ? clampedDays * 3 : 1;
    const minDaysRequired = clampedDays >= 2 ? Math.ceil(clampedDays * 0.6) : 1;
    const coveredDays = new Set(hydrated.tasks.map(t => t.date)).size;
    if (hydrated.tasks.length < minTasksRequired || coveredDays < minDaysRequired) {
      const fixSuffix = `\n\nDİKKAT: Önceki çıktın eksik kaldı (yalnızca ${hydrated.tasks.length} görev ve ${coveredDays}/${clampedDays} gün). Şimdi TÜM ${clampedDays} gün (${targetDates.join(', ')}) için her güne 4-6 görev ekleyerek EN AZ ${clampedDays * 4} görevli TAM JSON üret!`;
      try {
        const retryRes = await callStructuredProgramAI(
          systemPrompt,
          userPrompt + fixSuffix,
          keys,
          groqUserPrompt + fixSuffix,
          groqSystemPrompt
        );
        const retryHydrated = hydrateProgramPlan(retryRes.json, resourcesById, speedRes.data || [], hydrateOpts);
        if (retryHydrated.tasks.length > hydrated.tasks.length) {
          aiRes = retryRes;
          hydrated = retryHydrated;
        }
      } catch (_) {}
    }

    if (clampedDays >= 2 && hydrated.tasks.length < clampedDays * 2) {
      throw new Error(`Model (${aiRes.provider} / ${aiRes.model}) ${clampedDays} gün için yalnızca ${hydrated.tasks.length} görev üretebildi. Lütfen tekrar deneyin veya daha kararlı çıktı için Gemini/Anthropic anahtarı ekleyin.`);
    }

    return res.status(200).json({
      ...hydrated,
      provider: aiRes.provider,
      model: aiRes.model,
      existingCountInRange: existingTasksInRange.length,
      existingTasksInRange: existingTasksInRange.slice(0, 30),
    });
  } catch (err) {
    console.error('handleProgramBuilder error:', err);
    return res.status(500).json({ error: err.message || 'Program oluşturulamadı.' });
  }
}
