// ═══════════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — AI KOÇLUK STÜDYOSU ANALİZ & PLANLAMA YARDIMCILARI
// Saf (DOM bağımsız) bağlam çıkarıcı, strateji şablonları ve analiz yardımcıları.
// ═══════════════════════════════════════════════════════════════

import { BLOCKER_LABELS, computeTaskResultMeta, computeTaskDurationMeta } from './weekly-report.js';

export const INTENSITY_PRESETS = [
  { id: 'light',    label: 'Hafif',   rangeLabel: '3–4 sa',     minDaily: 180, maxDaily: 240 },
  { id: 'balanced', label: 'Dengeli', rangeLabel: '4.5–5.5 sa', minDaily: 270, maxDaily: 330 },
  { id: 'intense',  label: 'Yoğun',   rangeLabel: '6–7 sa',     minDaily: 360, maxDaily: 420 },
];

export const COPILOT_MODES = [
  { id: 'student_feedback',    label: '🎯 Öğrenciye Geri Bildirim', shortLabel: 'Öğrenci Mesajı' },
  { id: 'parent_effort',       label: '👨‍👩‍👧 Veliye Çaba Özeti',      shortLabel: 'Veli Mesajı' },
  { id: 'recovery_motivation', label: '⚡ Toparlanma & Destek',     shortLabel: 'Motivasyon' },
];

export const AI_PROGRAM_PRESETS = [
  {
    id: 'continue',
    label: '⏩ Kaldığı Yerden İlerlet',
    desc: 'Aktif kaynaklarda sıradaki test ve videolardan devam eder.',
  },
  {
    id: 'feedback_remediation',
    label: '💬 Geri Bildirim Telafisi',
    desc: 'Öğrencinin zorlandığı, not bıraktığı ve düşük doğru çıkardığı konulara öncelik verir.',
  },
  {
    id: 'countdown_mastery',
    label: '📈 Kalan Gün & Konu İlerlemesi',
    desc: 'Sınava kalan güne göre konu haritasındaki aktif/zayıf konuları dengeler.',
  },
  {
    id: 'balanced_routine',
    label: '⚖️ Konu + Soru + Rutin',
    desc: 'Konu anlatımı sonrası soru bankası sırasını ve günlük paragraf/problem rutinini kurar.',
  },
  {
    id: 'exam_camp',
    label: '🔥 Deneme & Eksik Kampı',
    desc: 'Branş/genel denemeler ile eksik konulara nokta atışı tarama verir.',
  },
];

const BRANCH_PALETTE = [
  '#E8613A', '#3B82F6', '#10B981', '#8B5CF6',
  '#F59E0B', '#EC4899', '#06B6D4', '#84CC16',
];

/**
 * Sınava kalan gün sayısına göre stratejik dönem bilgisi üretir.
 */
export function getExamPhaseMeta(daysLeft) {
  const d = Math.max(0, Number(daysLeft) || 0);
  if (d > 180) {
    return {
      phaseKey: 'foundation',
      label: 'Temel & Konu İnşa Fazı',
      badgeText: 'Konu İnşa',
      strategyHint: 'Konu ilerlemesi + kademeli soru bankası + günlük paragraf/problem rutini.',
    };
  }
  if (d >= 90) {
    return {
      phaseKey: 'consolidation',
      label: 'Pekiştirme & Tamamlama Fazı',
      badgeText: 'Pekiştirme',
      strategyHint: 'Eksik konuları kapatma + KA bitmiş konularda yoğun soru taraması + aralıklı tekrar.',
    };
  }
  return {
    phaseKey: 'camp',
    label: 'Sınav Kampı & Deneme Fazı',
    badgeText: 'Deneme Kampı',
    strategyHint: 'Yoğun branş/genel deneme + geri bildirimlerdeki zorlanılan/yanlış konulara hızlı telafi.',
  };
}

/**
 * Günlük dk aralığını okunabilir saat metnine çevirir.
 */
export function formatMinuteRangeHours(minDaily, maxDaily) {
  const fmt = m => {
    const num = Math.max(0, Number(m) || 0) / 60;
    return Number.isInteger(num) ? String(num) : num.toFixed(1).replace(/\.0$/, '');
  };
  return `≈ ${fmt(minDaily)} – ${fmt(maxDaily)} saat/gün`;
}

/**
 * Kaynak adını görev başlığından ("Branş - Kaynak Adı") ayrıştırır.
 */
function parseTaskSubjectParts(subjectStr) {
  const raw = String(subjectStr || '').trim();
  const idx = raw.indexOf(' - ');
  if (idx !== -1) {
    return { branch: raw.slice(0, idx).trim(), resourceName: raw.slice(idx + 3).trim() };
  }
  return { branch: raw, resourceName: raw };
}

/**
 * Öğrenci için AI Koçluk Stüdyosu bağlam özetini tek seferde hesaplar:
 * sınava kalan gün + konu haritası ilerlemesi + öğrenci konu geri bildirimleri + aktif kaynaklar + denemeler.
 */
export function computeStudentAIContext({
  student,
  examCountdown,
  allTasks = [],
  olderTasks = [],
  exams = [],
  speeds = [],
  masteryBySubject = {},
  topicListBySubject = {},
  alerts = [],
  todayIso = new Date().toISOString().slice(0, 10),
}) {
  const days = Number(examCountdown?.days || 0);
  const label = examCountdown?.label || student?.examProfile || 'YKS';
  const year = examCountdown?.year || '';
  const phase = getExamPhaseMeta(days);

  // 1. Konu haritası ilerleme durumu (konu_mastery + KONU_LISTESI)
  let totalTopics = 0;
  let tdCount = 0;
  let activeCount = 0;
  const weakTopics = [];
  const kaDoneTopics = [];
  const seenKeys = new Set();
  const todayMs = new Date(todayIso + 'T12:00:00Z').getTime();

  const inspectTopicRow = (subKey, konu, row) => {
    const uniq = `${subKey}::${konu}`;
    if (seenKeys.has(uniq)) return;
    seenKeys.add(uniq);
    totalTopics++;
    if (!row) return;
    const stars = Number(row.stars || 0);
    const status = row.status || 'not_started';
    const isTd = status === 'td' || stars >= 7;
    const daysSince = row.last_review_date
      ? Math.max(0, Math.floor((todayMs - new Date(row.last_review_date).getTime()) / 86400000))
      : null;

    if (isTd) {
      tdCount++;
      return;
    }
    if (status === 'active' || stars > 0 || row.ka_date) {
      activeCount++;
      const entry = { subject: subKey, konu, stars, status, kaDate: row.ka_date || null, daysSince };
      if ((stars > 0 && stars <= 3) || (daysSince !== null && daysSince >= 20)) {
        weakTopics.push(entry);
      }
      if (row.ka_date || (stars >= 3 && stars <= 6)) {
        kaDoneTopics.push(entry);
      }
    }
  };

  Object.entries(topicListBySubject || {}).forEach(([subKey, topics]) => {
    const subRows = masteryBySubject?.[subKey] || {};
    (topics || []).forEach(konu => inspectTopicRow(subKey, konu, subRows[konu] || null));
  });
  Object.entries(masteryBySubject || {}).forEach(([subKey, subRows]) => {
    Object.entries(subRows || {}).forEach(([konu, row]) => inspectTopicRow(subKey, konu, row));
  });

  weakTopics.sort((a, b) => (a.stars - b.stars) || ((b.daysSince || 0) - (a.daysSince || 0)));

  const masteryPct = totalTopics > 0 ? Math.round(((tdCount + activeCount * 0.4) / totalTopics) * 100) : 0;

  // 2. Son 14 gündeki çalıştığı konulara verdiği geri bildirimler
  const cutoffMs = todayMs - 14 * 86400000;
  const feedbackItems = [];
  let struggleCount = 0;
  let noteCount = 0;
  let lowAccCount = 0;

  const sortedTasksDesc = [...(allTasks || [])].sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
  for (const t of sortedTasksDesc) {
    const tMs = t.date ? new Date(t.date + 'T12:00:00Z').getTime() : 0;
    if (t.date && tMs < cutoffMs) continue;

    const fb = t.student_feedback || {};
    const stuNote = String(t.student_note || '').trim();
    const resultMeta = computeTaskResultMeta(t);
    const durMeta = computeTaskDurationMeta(t);

    const diff = Number(fb.difficulty || 0);
    const isHard = diff >= 4;
    const isStruggleStatus = fb.status === 'failed' || fb.status === 'partial';
    const hasBlocker = !!fb.blocker;
    const blockerText = fb.blocker ? (BLOCKER_LABELS[fb.blocker] || fb.blocker) : '';
    const isLowAcc = !!(resultMeta && resultMeta.accuracy !== null && resultMeta.accuracy < 65);
    const hasWrongTopics = !!(resultMeta && resultMeta.wrongTopics?.length > 0);
    const isOverrun = durMeta.overrunMin > 0;

    if (stuNote) noteCount++;
    if (isLowAcc) lowAccCount++;
    if (isHard || isStruggleStatus || hasBlocker || isLowAcc || hasWrongTopics || isOverrun) {
      struggleCount++;
    }

    if (stuNote || isHard || isStruggleStatus || hasBlocker || isLowAcc || hasWrongTopics || isOverrun) {
      const { branch, resourceName } = parseTaskSubjectParts(t.subject);
      const reasons = [];
      if (isStruggleStatus) reasons.push(fb.status === 'failed' ? 'Yapamadı' : 'Kısmen');
      if (blockerText) reasons.push(blockerText);
      if (isHard) reasons.push(diff >= 5 ? 'Çok Zor' : 'Zor');
      if (isLowAcc) reasons.push(`%${resultMeta.accuracy} doğruluk`);
      else if (hasWrongTopics) reasons.push(`${resultMeta.wrongTopics.slice(0, 2).join(', ')} yanlışı`);
      if (isOverrun) reasons.push(`+${durMeta.overrunMin} dk süre aşımı`);

      const topicLabel = t.note ? `${t.subject} (${t.note.slice(0, 32)})` : t.subject;
      const reasonStr = reasons.join(' · ') || (stuNote ? `Not: "${stuNote.slice(0, 48)}"` : 'Geri bildirim');
      feedbackItems.push({
        date: t.date || '',
        subject: t.subject || '',
        branch,
        resourceName,
        topicNote: t.note || '',
        status: fb.status || (t.done ? 'completed' : 'pending'),
        difficulty: diff,
        blocker: blockerText,
        studentNote: stuNote,
        accuracy: resultMeta?.accuracy ?? null,
        wrongTopics: resultMeta?.wrongTopics || [],
        overrunMin: durMeta.overrunMin,
        severity: (fb.status === 'failed' || fb.blocker === 'topic' || isLowAcc) ? 'critical' : 'warn',
        chipLabel: `${branch || resourceName}: ${reasonStr}`,
        promptHint: `${topicLabel} için öğrenci geri bildirimi [${reasonStr}${stuNote ? '; Öğrenci notu: "' + stuNote.slice(0, 90) + '"' : ''}] — bu konuya pekiştirici/telafi görev ekle.`,
      });
    }
  }

  // Birleşik tıklanabilir vurgu çipleri (önce kritik geri bildirimler, sonra zayıf konular)
  const highlights = [];
  const usedHighlightKey = new Set();
  for (const fi of feedbackItems) {
    const key = `${fi.branch}::${fi.topicNote.slice(0, 20)}`;
    if (usedHighlightKey.has(key)) continue;
    usedHighlightKey.add(key);
    highlights.push({
      kind: 'feedback',
      severity: fi.severity,
      chipLabel: fi.chipLabel,
      detail: fi.studentNote || fi.blocker || '',
      promptText: fi.promptHint,
    });
    if (highlights.length >= 6) break;
  }
  for (const wt of weakTopics) {
    if (highlights.length >= 8) break;
    highlights.push({
      kind: 'weak',
      severity: wt.stars <= 2 ? 'critical' : 'warn',
      chipLabel: `${wt.subject} · ${wt.konu} (${wt.stars}⭐)`,
      detail: wt.daysSince !== null ? `${wt.daysSince} gün önce` : 'Zayıf konu',
      promptText: `${wt.subject} — ${wt.konu} konusu (${wt.stars}⭐${wt.daysSince ? `, ${wt.daysSince} gündür tekrar edilmedi` : ''}) için programda pekiştirme ve tekrar görevi planla.`,
    });
  }

  // 3. Aktif kaynaklar (son görevler + geçmiş görevler)
  const resMap = new Map();
  const scanResTask = (t) => {
    if (!t?.subject) return;
    const { branch, resourceName } = parseTaskSubjectParts(t.subject);
    if (!resourceName || resourceName === branch) return;
    const items = Array.isArray(t.task_items) ? t.task_items : [];
    const entry = resMap.get(resourceName) || {
      name: resourceName,
      branch,
      subject: t.subject,
      taskCount: 0,
      doneCount: 0,
      assignedUnits: 0,
      doneUnits: 0,
      lastDate: '',
    };
    entry.taskCount++;
    if (t.done) entry.doneCount++;
    const unitSum = items.reduce((sum, it) => sum + (Number(it?.soru) || 0), 0);
    entry.assignedUnits += unitSum;
    if (t.done) entry.doneUnits += unitSum;
    if ((t.date || '') >= entry.lastDate) entry.lastDate = t.date || '';
    resMap.set(resourceName, entry);
  };
  (allTasks || []).forEach(scanResTask);
  (olderTasks || []).forEach(scanResTask);

  const activeResources = [...resMap.values()]
    .map(r => ({
      ...r,
      assignedPct: r.taskCount > 0 ? Math.round((r.doneCount / r.taskCount) * 100) : 0,
    }))
    .sort((a, b) => b.lastDate.localeCompare(a.lastDate) || b.taskCount - a.taskCount)
    .slice(0, 10);

  // 4. Deneme özeti
  const sortedExams = [...(exams || [])].sort((a, b) => String(a.date || '').localeCompare(String(b.date || '')));
  const sumNets = e => Number(Object.values(e?.nets || {}).reduce((acc, v) => acc + (Number(v) || 0), 0).toFixed(2));
  const latestExam = sortedExams.length ? sortedExams[sortedExams.length - 1] : null;
  const sameTypePrev = latestExam
    ? sortedExams.slice(0, -1).reverse().find(e => e.type === latestExam.type)
    : null;
  const latestNet = latestExam ? sumNets(latestExam) : null;
  const prevNet = sameTypePrev ? sumNets(sameTypePrev) : null;
  const deltaNet = (latestNet !== null && prevNet !== null) ? Number((latestNet - prevNet).toFixed(2)) : null;

  return {
    examCountdown: {
      days,
      year,
      label,
      phaseKey: phase.phaseKey,
      phaseLabel: phase.label,
      badgeText: phase.badgeText,
      strategyHint: phase.strategyHint,
    },
    masterySummary: {
      totalTopics,
      tdCount,
      activeCount,
      pct: masteryPct,
      weakTopics: weakTopics.slice(0, 8),
      kaDoneTopics: kaDoneTopics.slice(0, 8),
    },
    feedbackSummary: {
      struggleCount,
      noteCount,
      lowAccCount,
      items: feedbackItems.slice(0, 10),
      highlights,
    },
    activeResources,
    examSummary: {
      latestNet,
      prevNet,
      deltaNet,
      latestType: latestExam?.type || '',
      latestName: latestExam?.name || '',
      latestLabel: latestExam ? `${latestExam.type || 'Deneme'}: ${latestNet} net` : 'Deneme yok',
    },
    speedCount: (speeds || []).length,
    alertCount: (alerts || []).length,
  };
}

/**
 * Hazır strateji şablonundan öğrenci bağlamıyla zenginleştirilmiş program talimatı üretir.
 */
export function buildPresetInstruction(presetId, aiCtx, restDay = '') {
  const cd = aiCtx?.examCountdown;
  const ms = aiCtx?.masterySummary;
  const fb = aiCtx?.feedbackSummary;
  const restSuffix = restDay ? ` ${restDay} gününü hafif dinlenme / boş gün bırak.` : '';

  if (presetId === 'continue') {
    const names = (aiCtx?.activeResources || []).slice(0, 4).map(r => r.name).join(', ');
    return `Mevcut programda ilerlet (önceki bekleyenler tamamlandı varsay)${names ? `; aktif kaynaklardan (${names}) sıradaki test ve videolarla devam et` : ''}.${restSuffix}`.trim();
  }
  if (presetId === 'feedback_remediation') {
    const topIssues = (fb?.items || []).slice(0, 3).map(i => `${i.subject}${i.blocker ? ' (' + i.blocker + ')' : ''}`).join(', ');
    const weakList = (ms?.weakTopics || []).slice(0, 3).map(w => `${w.subject} - ${w.konu}`).join(', ');
    return `Öğrencinin son görev geri bildirimlerine göre telafi programı kur.${topIssues ? ` Özellikle zorlandığı başlıklar: ${topIssues}.` : ''}${weakList ? ` Zayıf konular: ${weakList}.` : ''} Anlaşılmayan konularda önce kısa konu anlatımı/tekrar ardından orta seviye soru bankası ver.${restSuffix}`.trim();
  }
  if (presetId === 'countdown_mastery') {
    const kaList = (ms?.kaDoneTopics || []).slice(0, 3).map(k => `${k.subject} - ${k.konu}`).join(', ');
    return `${cd?.label || 'YKS'} sınavına ${cd?.days || ''} gün kaldı (${cd?.phaseLabel || ''}). Konu ilerlemesi %${ms?.pct || 0} (${ms?.tdCount || 0} TD, ${ms?.activeCount || 0} aktif).${kaList ? ` Konu anlatımı bitmiş aktif konularda (${kaList}) doğrudan soru bankası taraması ver;` : ''} kalan sürede yüksek getirili eksik konulara ağırlık ver.${restSuffix}`.trim();
  }
  if (presetId === 'balanced_routine') {
    return `Her gün 20-25 dk Paragraf + Problem rutini ekle. Tüm derslerde önce konu anlatımı videosu, ardından ilgili testlerle dengeli konu + soru akışı kur; uzun videoları bölerek ver.${restSuffix}`.trim();
  }
  if (presetId === 'exam_camp') {
    return `Sınav temposu için branş denemeleri ve haftalık genel deneme günü planla. Deneme gününün ertesi gününe yanlış analiz ve zayıf konu telafi blokları koy.${restSuffix}`.trim();
  }
  return '';
}

/**
 * Taslak görevlerdeki branş bazlı dakika ve yüzde dağılımını hesaplar.
 */
export function computeBranchDistribution(tasks = []) {
  const active = (tasks || []).filter(t => t && t.selected !== false);
  const byBranch = new Map();
  let totalMinutes = 0;

  for (const t of active) {
    const branch = String(t.branch || parseTaskSubjectParts(t.subject).branch || 'Diğer').trim() || 'Diğer';
    const min = Math.max(0, Number(t.duration) || 0);
    totalMinutes += min;
    const prev = byBranch.get(branch) || { branch, count: 0, minutes: 0 };
    prev.count += 1;
    prev.minutes += min;
    byBranch.set(branch, prev);
  }

  return [...byBranch.values()]
    .sort((a, b) => b.minutes - a.minutes)
    .map((item, i) => ({
      ...item,
      pct: totalMinutes > 0 ? Math.round((item.minutes / totalMinutes) * 100) : 0,
      color: BRANCH_PALETTE[i % BRANCH_PALETTE.length],
    }));
}

/**
 * Durum Analizi & Mesaj Asistanı için öğrencinin gerçek verileriyle topraklanmış prompt üretir.
 */
export function buildGroundedCopilotPrompt({
  mode = 'student_feedback',
  studentName,
  studentTarget,
  aiCtx,
  weekStats,
  recentExams = [],
  speedMap = {},
  alertTitles = [],
}) {
  const cd = aiCtx?.examCountdown || {};
  const ms = aiCtx?.masterySummary || {};
  const fb = aiCtx?.feedbackSummary || {};

  const modeInstruction = mode === 'parent_effort'
    ? 'HEDEF KİTLE: VELİ (WhatsApp bilgilendirme mesajı). Suçlayıcı ve kıyaslayıcı OLMAYAN, çaba odaklı kurumsal bir dille yaz.'
    : mode === 'recovery_motivation'
    ? 'HEDEF KİTLE: ÖĞRENCİ (Toparlanma & Odak desteği). Zorlandığı veya aksattığı konular için somut, uygulanabilir mikro adım ver; yargılamadan motive et.'
    : 'HEDEF KİTLE: ÖĞRENCİ (Haftalık Değerlendirme). Başarılarını takdir et, zorlandığı konuları net ve yapıcı aksiyona dönüştür.';

  const fbLines = (fb.items || []).slice(0, 6).map(i =>
    `- ${i.date} | ${i.subject}${i.topicNote ? ' (' + i.topicNote + ')' : ''} | Durum: ${i.status}${i.blocker ? ', Engel: ' + i.blocker : ''}${i.accuracy !== null ? ', Doğruluk: %' + i.accuracy : ''}${i.studentNote ? ', Öğrenci Notu: "' + i.studentNote + '"' : ''}`
  );

  const weakLines = (ms.weakTopics || []).slice(0, 6).map(w => `${w.subject} - ${w.konu} (${w.stars}⭐)`);

  return `Lütfen şu öğrencinin GERÇEK verilerine dayanarak koç analizi ve gönderilmeye hazır mesaj taslağı oluştur:
${modeInstruction}

Öğrenci: ${studentName}
Hedef: ${studentTarget || 'Belirtilmemiş'}
Sınava Kalan Gün: ${cd.days || '?'} gün (${cd.label || 'YKS'} · ${cd.phaseLabel || ''})
Haftalık Görev Durumu: %${weekStats?.pct || 0} (${weekStats?.done || 0}/${weekStats?.total || 0} görev, toplam ${Math.round((weekStats?.minutes || 0) / 60)} saat)
Konu İlerleme Durumu: Genel %${ms.pct || 0} · ${ms.tdCount || 0} TD (tamamlanan) · ${ms.activeCount || 0} aktif konu
Zayıf / Tekrar Gereken Konular: ${weakLines.length ? weakLines.join(', ') : 'Belirgin düşük yıldızlı konu yok'}
Öğrencinin Çalıştığı Konulara Verdiği Geri Bildirimler (Son 14 gün):
${fbLines.length ? fbLines.join('\n') : '- Son 14 günde olumsuz geri bildirim veya zorlanma kaydı yok.'}
Aktif Erken Uyarılar: ${alertTitles.length ? alertTitles.join(' | ') : 'Kritik uyarı yok'}
Son Denemeler: ${JSON.stringify(recentExams)}
Soru Hızları (sn/soru): ${JSON.stringify(speedMap)}

KESİN KURALLAR (YALNIZCA TÜRKÇE):
1. YALNIZCA yukarıdaki gerçek verilerden konuş; veride olmayan bir dersi veya aksamayı ASLA uydurma.
2. Analiz bölümünü koçun hızla tarayabileceği şekilde tam 3 satırla yapılandır:
   GÜÇLÜ: (en iyi giden ders/alışkanlık)
   DİKKAT: (gerçek uyarı, zorlanılan görev veya zayıf konu)
   AKSİYON: (sınava ${cd.days || ''} gün kalmışken bu hafta yapılacak en somut adım)
3. Çıktıyı tam olarak şu iki etiket arasında ver:
[ANALİZ]
GÜÇLÜ: ...
DİKKAT: ...
AKSİYON: ...
[TASLAK]
(Gönderilmeye hazır Türkçe mesaj metni)`;
}

/**
 * AI servisi çevrimdışı veya erişilemez olduğunda sabit metin yerine öğrencinin GERÇEK verisinden dürüst yedek yanıt üretir.
 */
export function buildCopilotFallbackReply({ mode = 'student_feedback', studentName, studentTarget, aiCtx, weekStats }) {
  const cd = aiCtx?.examCountdown || {};
  const ms = aiCtx?.masterySummary || {};
  const fb = aiCtx?.feedbackSummary || {};
  const topIssue = fb.items?.[0];
  const topWeak = ms.weakTopics?.[0];

  const strongTxt = weekStats?.pct >= 70
    ? `Bu hafta görevlerin %${weekStats.pct}'sini (${weekStats.done}/${weekStats.total}) tamamlayarak istikrarlı bir tempo yakaladı.`
    : `${ms.tdCount || 0} tamamlanan ve ${ms.activeCount || 0} aktif konu ile %${ms.pct || 0} konu ilerlemesi kaydedildi.`;

  const attentionTxt = topIssue
    ? `${topIssue.subject}${topIssue.blocker ? ' (' + topIssue.blocker + ')' : ''}${topIssue.studentNote ? ` — "${topIssue.studentNote}"` : ''} geri bildiriminde zorlanma görüldü.`
    : topWeak
    ? `${topWeak.subject} · ${topWeak.konu} (${topWeak.stars}⭐) konusunda tekrar ihtiyacı var.`
    : `${cd.label || 'Sınav'} için ${cd.days || '?'} gün kaldı; haftalık tempo yakından takip edilmeli.`;

  const actionTxt = topIssue
    ? `Önümüzdeki haftanın ilk günlerine ${topIssue.branch || topIssue.subject} telafi ve orta seviye pekiştirme bloğu ekleyin.`
    : `Bir sonraki görüşmede ${ms.activeCount || 0} aktif konunun soru bankası taramalarını planlayın.`;

  let draft;
  if (mode === 'parent_effort') {
    draft = `Merhaba Değerli Velimiz 👋\n\n${studentName} bu hafta programındaki çalışmalarının %${weekStats?.pct || 0}'sini (${weekStats?.done || 0}/${weekStats?.total || 0} görev) tamamladı. Sınava ${cd.days || '?'} gün kala genel konu ilerlememiz %${ms.pct || 0} seviyesinde.${topIssue ? ` ${topIssue.branch || topIssue.subject} başlığında biraz zorlandığını paylaştı; bu haftaki programda ek pekiştirme desteğiyle konuyu oturtacağız.` : ' Düzenli çalışması netlere de olumlu yansımaya devam edecektir.'}\n\nDesteğiniz için teşekkür ederiz.`;
  } else if (mode === 'recovery_motivation') {
    draft = `Merhaba ${studentName} 👋\n\nSınava ${cd.days || '?'} gün kaldı ve şu ana kadar konu haritasında %${ms.pct || 0} ilerledik. Bu hafta görevlerin %${weekStats?.pct || 0}'sini tamamladın.${topIssue ? ` Özellikle ${topIssue.subject} çalışmandaki geri bildirimini gördüm — zorlandığın noktada yalnız değilsin, bu hafta adım adım tekrar ve orta düzey testlerle üzerinden geçeceğiz.` : ''}\n\nKüçük ama düzenli adımlarla bu haftayı birlikte toparlıyoruz! 💪`;
  } else {
    draft = `Merhaba ${studentName} 👋\n\n${studentTarget ? `${studentTarget} hedefin` : 'Sınav hedefin'} için sınava ${cd.days || '?'} gün kala bu hafta görevlerinin %${weekStats?.pct || 0}'sini tamamladın. Konu ilerlemen %${ms.pct || 0} (${ms.tdCount || 0} tamamlanan konu) düzeyinde.${topIssue ? `\n\n📌 ${topIssue.subject} göreviyle ilgili paylaştığın geri bildirimi inceledim; önümüzdeki haftanın ilk günlerinde bu konuyu pekiştirecek özel bloklar ekliyorum.` : ''}\n\nAynen devam! 🚀`;
  }

  return `[ANALİZ]\nGÜÇLÜ: ${strongTxt}\nDİKKAT: ${attentionTxt}\nAKSİYON: ${actionTxt}\n[TASLAK]\n${draft}`;
}

/**
 * [ANALİZ] ve [TASLAK] etiketli Copilot çıktısını yapılandırılmış kartlara ayırır.
 */
export function parseCopilotStructuredReply(reply) {
  const text = String(reply || '').trim();
  const aIdx = text.indexOf('[ANALİZ]');
  const dIdx = text.indexOf('[TASLAK]');

  let analysisRaw = '';
  let draft = text;

  if (aIdx !== -1 && dIdx !== -1) {
    if (aIdx < dIdx) {
      analysisRaw = text.slice(aIdx + 8, dIdx).trim();
      draft = text.slice(dIdx + 8).trim();
    } else {
      draft = text.slice(dIdx + 8, aIdx).trim();
      analysisRaw = text.slice(aIdx + 8).trim();
    }
  } else if (aIdx !== -1) {
    analysisRaw = text.slice(aIdx + 8).trim();
    draft = '';
  }

  const pickLine = (prefix) => {
    const m = analysisRaw.match(new RegExp(`^\\s*(?:[-*]\\s*)?${prefix}\\s*:\\s*(.+)$`, 'im'));
    return m ? m[1].trim() : '';
  };

  return {
    analysis: {
      strong: pickLine('GÜÇLÜ'),
      attention: pickLine('DİKKAT'),
      action: pickLine('AKSİYON'),
      raw: analysisRaw || 'Öğrenci performans ve konu geri bildirimleri analiz edildi.',
    },
    draft: draft || 'Taslak üretilemedi.',
  };
}

function _parseIsoUtcMs(iso) {
  if (!iso || !/^\d{4}-\d{2}-\d{2}$/.test(String(iso))) return null;
  const [y, m, d] = String(iso).split('-').map(Number);
  return Date.UTC(y, m - 1, d);
}

function _fmtUtcIso(utcMs) {
  const dt = new Date(utcMs);
  const y = dt.getUTCFullYear();
  const m = String(dt.getUTCMonth() + 1).padStart(2, '0');
  const d = String(dt.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Hedef tarihin (YYYY-MM-DD) mevcut hafta başlangıcına göre hafta farkını (offset) hesaplar.
 */
export function computeWeekOffsetForDate(targetDateIso, currentWeekStartDate) {
  const targetMs = _parseIsoUtcMs(targetDateIso);
  if (targetMs === null || !(currentWeekStartDate instanceof Date) || Number.isNaN(currentWeekStartDate.getTime())) {
    return 0;
  }
  const baseMs = Date.UTC(
    currentWeekStartDate.getFullYear(),
    currentWeekStartDate.getMonth(),
    currentWeekStartDate.getDate()
  );
  const diffDays = Math.round((targetMs - baseMs) / 86400000);
  return Math.floor(diffDays / 7);
}

/**
 * AI taslak görevlerini takvim haftalarına (weekOffset) göre özetler.
 */
export function summarizeDraftWeeks(tasks = [], currentWeekStartDate) {
  if (!(currentWeekStartDate instanceof Date) || Number.isNaN(currentWeekStartDate.getTime())) {
    return [];
  }
  const baseMs = Date.UTC(
    currentWeekStartDate.getFullYear(),
    currentWeekStartDate.getMonth(),
    currentWeekStartDate.getDate()
  );
  const byOffset = new Map();

  for (const t of (tasks || [])) {
    if (!t?.date) continue;
    const targetMs = _parseIsoUtcMs(t.date);
    if (targetMs === null) continue;
    const diffDays = Math.round((targetMs - baseMs) / 86400000);
    const offset = Math.floor(diffDays / 7);

    let bucket = byOffset.get(offset);
    if (!bucket) {
      const startMs = baseMs + offset * 7 * 86400000;
      const endMs = startMs + 6 * 86400000;
      bucket = {
        offset,
        startIso: _fmtUtcIso(startMs),
        endIso: _fmtUtcIso(endMs),
        totalCount: 0,
        selectedCount: 0,
        minutes: 0,
      };
      byOffset.set(offset, bucket);
    }

    bucket.totalCount += 1;
    if (t.selected !== false) {
      bucket.selectedCount += 1;
      bucket.minutes += Math.max(0, Number(t.duration) || 0);
    }
  }

  return [...byOffset.values()].sort((a, b) => a.offset - b.offset);
}
