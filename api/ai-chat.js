// ═══════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — AI KOÇ ASİSTANI (Vercel Serverless Function)
// Endpoint: /api/ai-chat
// Groq API proxy (llama-3.3-70b) — hızlı ve ücretsiz
// ═══════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';

const SB_URL = process.env.SUPABASE_URL || 'https://imyhenrwmsmyikpollur.supabase.co';
const SB_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlteWhlbnJ3bXNteWlrcG9sbHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNDE3ODYsImV4cCI6MjA5NTcxNzc4Nn0._ySJ5ArD1GYthyitHjdyEjLaUhextIwEqpRoF5ScI34';
const db = createClient(SB_URL, SB_KEY);

// ── Sunucu Taraflı Topraklama (Grounding) ─────────────────
// Client'ın gönderdiği context'e GÜVENİLMEZ. Çağıranın JWT'siyle (RLS altında)
// gerçek öğrenci listesi + son denemeler DB'den çekilir; model yalnızca bu
// doğrulanmış veriye dayanır. Kayıtlı olmayan isim → analiz reddedilir.
async function buildVerifiedContext(req) {
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

  try {
    const { messages, context, userRole, imageBase64, mimeType, text } = req.body;

    // ── Görsel varsa Gemini Vision kullan ───────────────────
    if (imageBase64) {
      let GEMINI_KEY = process.env.GEMINI_API_KEY;
      if (!GEMINI_KEY) {
        try {
          const { data } = await db.from('platform_settings').select('value').eq('key', 'ai_settings').maybeSingle();
          GEMINI_KEY = data?.value?.gemini_api_key;
        } catch(e) {}
      }
      if (!GEMINI_KEY) return res.status(500).json({ error: 'Gemini API anahtarı yapılandırılmamış.' });

      const sysPrompt = buildVisionPrompt(context, userRole);
      const userText = text || 'Bu soruda takıldım, yardımcı olur musun?';
      const contents = [
        { role: 'user', parts: [
          { inline_data: { mime_type: mimeType || 'image/jpeg', data: imageBase64 } },
          { text: userText }
        ]}
      ];
      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: sysPrompt }] },
            contents,
            generationConfig: { temperature: 0.4, maxOutputTokens: 2048 }
          }) }
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
    const grounding = await buildVerifiedContext(req);

    // ── Sistem Promptu ──────────────────────────────────────
    const systemPrompt = buildSystemPrompt(context, userRole, grounding);

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
        model: 'llama-3.3-70b-versatile',
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
      model: 'llama-3.3-70b-versatile',
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

// ── Sistem Promptu Oluşturucu ─────────────────────────────
function buildSystemPrompt(context, userRole, grounding) {
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
6. Kaygılı öğrenci vakası anlatılırsa 5 nörobilişsel tekniği koça uygulama diliyle aktar.`;
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
