// ═══════════════════════════════════════════════════════════════
// ROSTRUM AKADEMI — AKILLI PROGRAM PLANLAYICI & HİDRATÖR
// Saf (side-effect'siz) yardımcı modül: api/ai-chat.js ve testler kullanır.
// ═══════════════════════════════════════════════════════════════

const TR_MONTHS = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
const TR_DAYS = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

export function summarizeLabels(labels, kind) {
  const SHORT_LEN = 16;
  const short = l => (l.length > SHORT_LEN ? l.slice(0, SHORT_LEN - 1) + '…' : l);
  const shown = labels.slice(0, 5).map(short);
  const counts = {};
  shown.forEach(s => { counts[s] = (counts[s] || 0) + 1; });
  const seen = new Set();
  const uniqueDisplay = [];
  shown.forEach(s => {
    if (seen.has(s)) return;
    seen.add(s);
    uniqueDisplay.push(counts[s] > 1 ? `${s} (×${counts[s]})` : s);
  });
  const extra = labels.length > 5 ? ` +${labels.length - 5}` : '';
  return `${labels.length} ${kind}: ${uniqueDisplay.join(', ')}${extra}`;
}

export function sanitizeJsonControlChars(str) {
  let out = '';
  let inString = false;
  let escaped = false;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (escaped) { out += ch; escaped = false; continue; }
    if (ch === '\\' && inString) { out += ch; escaped = true; continue; }
    if (ch === '"') { inString = !inString; out += ch; continue; }
    if (inString) {
      if (ch === '\n') out += '\\n';
      else if (ch === '\r') out += '\\r';
      else if (ch === '\t') out += '\\t';
      else out += ch;
    } else {
      out += ch;
    }
  }
  return out;
}

export function extractJsonObject(rawText) {
  const cleaned = String(rawText || '')
    .replace(/```json\s*/gi, '')
    .replace(/```\s*/g, '')
    .trim();
  const first = cleaned.indexOf('{');
  const last = cleaned.lastIndexOf('}');
  if (first === -1 || last === -1 || last <= first) {
    throw new Error('AI çıktısında geçerli JSON nesnesi bulunamadı.');
  }
  const slice = cleaned.slice(first, last + 1);
  const sanitized = sanitizeJsonControlChars(slice);
  try {
    return JSON.parse(sanitized);
  } catch (e) {
    // Trailing comma temizliği ile ikinci deneme
    return JSON.parse(sanitized.replace(/,\s*([}\]])/g, '$1'));
  }
}

function normTr(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/İ/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .trim();
}

function extractTopicGroup(label, resourceType) {
  const s = String(label || '').trim();
  if (resourceType === 'playlist') {
    if (s.includes('|')) {
      const parts = s.split('|').map(p => p.trim()).filter(Boolean);
      // Moz / Kamp tarzı videolarda konuyu taşıyan anlamlı parçayı seç
      const meaningful = parts.filter(p => !/^(tyt|ayt)\s*(matematik|fizik|kimya|biyoloji|geometri)/i.test(p)
        && !/^sayfa\s*\[/i.test(p)
        && !/^\d+\.\s*video/i.test(p)
        && !/mozakademi/i.test(p)
        && !/^\d{4}(\s*-\s*\d{4})?$/i.test(p)
        && !/dönem\s*\d{4}/i.test(p));
      if (meaningful.length) return meaningful[0].slice(0, 48);
    }
    return s.slice(0, 48);
  }
  // Book: genelde "Konu Adı - Test-1" veya "Bölüm > Konu - Test"
  const noTest = s.replace(/\s*-\s*(kazanım|oryantasyon|simülasyon|uygulama)?\s*test[-\s]*\d+.*$/i, '').trim();
  return noTest.slice(0, 52) || s.slice(0, 52);
}

function stripPartSuffix(label) {
  return String(label || '').replace(/\s*\(Bölüm\s*\d+\s*\/\s*\d+\)\s*$/i, '').trim();
}

const STOP_HINT_TOKENS = new Set([
  'tyt', 'ayt', 'soru', 'bankasi', 'banka', 'fasikulu', 'fasikul', 'kampi', 'kamp',
  'matematik', 'fizik', 'kimya', 'biyoloji', 'geometri', 'turkce', 'edebiyat',
  'tarih', 'cografya', 'felsefe', 'konu', 'video', 'kitap', 'ders', 'mevcut',
  'program', 'uzerinden', 'konulari', 'ilerlet', 'hepsi', 'yapildi', 'varsay',
  'devam', 'yeni', 'hafta', 'gunluk', 'gun', 'saat', 'dakika', 'olsun', 'ekle'
]);

/**
 * Kaynak kataloğunu (kitap & playlist) AI context'ine sığacak konu kümesi özetine dönüştürür.
 * Zaten tamamlanmış (done) test/videoları kalanlar listesinden düşer.
 */
export function buildResourceTopicIndex(resources, completedLabelsBySubject = {}, pendingLabelsBySubject = {}, yksArea = 'SAY', hintText = '', opts = {}) {
  const maxDetailed = Math.max(4, Number(opts.maxDetailed) || 18);
  const maxClusters = Math.max(3, Number(opts.maxClusters) || 12);
  const maxRemIdx = Math.max(2, Number(opts.maxRemIdx) || 8);
  const maxCompact = Math.max(0, opts.maxCompact ?? 35);
  const excludePending = !!opts.excludePending;
  const activeNamesNorm = Array.isArray(opts.activeSubjectNames)
    ? opts.activeSubjectNames.map(normTr).filter(Boolean)
    : [];

  const allowedExams = new Set(['TYT']);
  if (yksArea === 'EA') allowedExams.add('AYT-EA');
  else if (yksArea === 'SOZ' || yksArea === 'SÖZ') allowedExams.add('AYT-SOZ');
  else allowedExams.add('AYT-SAY');

  const hintNorm = normTr(hintText);
  const hintTokens = hintNorm
    .split(/[^a-z0-9]+/)
    .filter(w => w.length >= 3 && !STOP_HINT_TOKENS.has(w));

  const scored = [];
  for (const r of (resources || [])) {
    if (!r || !r.active) continue;
    if (r.exam_type && !allowedExams.has(r.exam_type)) continue;
    const tests = Array.isArray(r.tests) ? r.tests : [];
    if (!tests.length) continue;

    // Bu kaynağa ait tamamlanmış/bekleyen label kümelerini topla
    const doneSet = new Set();
    const pendingSet = new Set();
    for (const [subj, set] of Object.entries(completedLabelsBySubject)) {
      if (subj.includes(r.name)) set.forEach(l => doneSet.add(stripPartSuffix(l)));
    }
    for (const [subj, set] of Object.entries(pendingLabelsBySubject)) {
      if (subj.includes(r.name)) set.forEach(l => pendingSet.add(stripPartSuffix(l)));
    }

    // Konu kümeleri oluştur
    const clusters = [];
    let lastProgressedIdx = -1;
    for (let i = 0; i < tests.length; i++) {
      const it = tests[i];
      const lbl = String(it?.label || it || '').trim();
      if (!lbl || lbl === 'Private video' || lbl === 'Deleted video') continue;
      const units = Number(it?.soru || 0);
      const baseLbl = stripPartSuffix(lbl);
      const isDone = doneSet.has(baseLbl);
      const isPending = pendingSet.has(baseLbl);
      if (isDone || isPending) lastProgressedIdx = i;
      const skip = isDone || (excludePending && isPending);
      const grp = extractTopicGroup(lbl, r.resource_type).slice(0, 36);
      const last = clusters[clusters.length - 1];
      if (last && last.topic === grp) {
        last.endIdx = i;
        last.totalCount++;
        if (!skip) {
          last.remainingIndices.push(i);
          last.remainingUnits += units;
        }
        if (isPending) last.pendingCount++;
      } else {
        clusters.push({
          topic: grp,
          startIdx: i,
          endIdx: i,
          totalCount: 1,
          remainingIndices: skip ? [] : [i],
          remainingUnits: skip ? 0 : units,
          pendingCount: isPending ? 1 : 0,
        });
      }
    }

    const allRemClusters = clusters.filter(c => c.remainingIndices.length > 0);
    if (!allRemClusters.length) continue;

    // Öğrencinin kaldığı son indeksten sonraki konuları önceliklendir (eski atlanan tanıtım videolarını başa koyma)
    const forwardClusters = lastProgressedIdx >= 0
      ? allRemClusters.filter(c => c.remainingIndices.some(idx => idx > lastProgressedIdx))
      : allRemClusters;
    const earlierGaps = lastProgressedIdx >= 0
      ? allRemClusters.filter(c => !c.remainingIndices.some(idx => idx > lastProgressedIdx))
      : [];
    const remClusters = [...forwardClusters, ...earlierGaps];

    // Eşleşme skoru: gerçekte aktif kullanılan kaynaklar çok yüksek puan alır
    const rNameNorm = normTr(r.name);
    const haystack = normTr(`${r.name} ${r.publisher || ''}`);
    let score = r.coach_id ? 25 : 0;
    if (doneSet.size > 0 || pendingSet.size > 0) score += 180;
    if (rNameNorm.length >= 4 && activeNamesNorm.some(a => a.includes(rNameNorm) || rNameNorm.includes(a))) {
      score += 250;
    }
    for (const tok of hintTokens) {
      if (haystack.includes(tok)) score += 30;
    }

    scored.push({
      id: r.id,
      type: r.resource_type,
      exam: r.exam_type,
      subject: r.subject,
      publisher: r.publisher || '',
      name: r.name,
      totalItems: tests.length,
      doneCount: doneSet.size + (excludePending ? pendingSet.size : 0),
      score,
      remClusters
    });
  }

  scored.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, 'tr'));

  // Branş çeşitliliği: önce her (exam+subject) veya branştan en yüksek skorlu 1 kaynağı al, sonra kalanı skorla doldur
  const picked = [];
  const pickedIds = new Set();
  const seenBuckets = new Set();
  for (const r of scored) {
    if (picked.length >= maxDetailed) break;
    const bucket = `${r.exam || 'TYT'}::${r.subject}`;
    if (!seenBuckets.has(bucket)) {
      seenBuckets.add(bucket);
      picked.push(r);
      pickedIds.add(r.id);
    }
  }
  for (const r of scored) {
    if (picked.length >= maxDetailed) break;
    if (!pickedIds.has(r.id)) {
      picked.push(r);
      pickedIds.add(r.id);
    }
  }

  const detailed = picked.map(r => ({
    id: r.id,
    type: r.type,
    exam: r.exam,
    subject: r.subject,
    name: r.name,
    totalItems: r.totalItems,
    doneCount: r.doneCount,
    progressPct: r.totalItems > 0 ? Math.min(100, Math.round((r.doneCount / r.totalItems) * 100)) : 0,
    clusters: r.remClusters
      .slice(0, maxClusters)
      .map(c => ({
        topic: c.topic,
        remIdx: c.remainingIndices.slice(0, maxRemIdx),
        units: c.remainingUnits,
      }))
  }));

  const compactOthers = scored
    .filter(r => !pickedIds.has(r.id))
    .slice(0, maxCompact)
    .map(r => ({
      id: r.id,
      type: r.type,
      exam: r.exam,
      subject: r.subject,
      name: r.name
    }));

  return { detailed, compactOthers };
}

export function resolveSecsPerQuestion(studentSpeeds, examType, branch) {
  const normExam = examType || 'TYT';
  const bNorm = normTr(branch);
  const hit = (studentSpeeds || []).find(s =>
    (s.exam_type === normExam || (!normExam && s.exam_type === 'TYT')) &&
    normTr(s.subject) === bNorm
  );
  if (hit && Number(hit.secs_per_question) > 0) return Number(hit.secs_per_question);

  const tytHit = (studentSpeeds || []).find(s => s.exam_type === 'TYT' && normTr(s.subject) === bNorm);
  if (tytHit && Number(tytHit.secs_per_question) > 0) return Number(tytHit.secs_per_question);

  if (bNorm.includes('matematik') || bNorm.includes('geometri')) return normExam.startsWith('AYT') ? 180 : 150;
  if (bNorm.includes('turkce') || bNorm.includes('edebiyat')) return 70;
  return normExam.startsWith('AYT') ? 90 : 60;
}

function buildDateWindow(startDate, daysCount) {
  const [y, m, d] = startDate.split('-').map(Number);
  const dates = [];
  for (let i = 0; i < daysCount; i++) {
    const dt = new Date(Date.UTC(y, m - 1, d + i));
    dates.push(dt.toISOString().slice(0, 10));
  }
  return dates;
}

export function formatTrDateLabel(isoDate) {
  const [y, m, d] = isoDate.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return `${d} ${TR_MONTHS[dt.getUTCMonth()].slice(0, 3)} ${TR_DAYS[dt.getUTCDay()].slice(0, 3)}`;
}

function extractRawTaskList(aiJson) {
  if (Array.isArray(aiJson?.tasks) && aiJson.tasks.length) {
    return aiJson.tasks;
  }
  const dayContainers = aiJson?.days || aiJson?.schedule || aiJson?.program || aiJson?.plan;
  if (Array.isArray(dayContainers)) {
    const flattened = [];
    for (const entry of dayContainers) {
      if (Array.isArray(entry?.tasks)) {
        for (const t of entry.tasks) {
          flattened.push({ ...t, date: t?.date || entry?.date });
        }
      } else if (entry && (entry.subject || entry.branch || entry.resource_id || entry.manual_source)) {
        flattened.push(entry);
      }
    }
    if (flattened.length) return flattened;
  }
  return [];
}

function computePlanSummaries(tasks, { minDaily = 240, maxDaily = 360, initialWarnings = [], skipMinCheckDates = null } = {}) {
  const dailyMap = {};
  const branchMap = {};
  const warnings = [...initialWarnings];

  for (const t of (tasks || [])) {
    if (!dailyMap[t.date]) dailyMap[t.date] = { date: t.date, label: formatTrDateLabel(t.date), count: 0, minutes: 0 };
    dailyMap[t.date].count++;
    dailyMap[t.date].minutes += Number(t.duration) || 0;

    if (!branchMap[t.branch]) branchMap[t.branch] = { branch: t.branch, count: 0, minutes: 0 };
    branchMap[t.branch].count++;
    branchMap[t.branch].minutes += Number(t.duration) || 0;
  }

  const dailySummary = Object.values(dailyMap).sort((a, b) => a.date.localeCompare(b.date));
  for (const d of dailySummary) {
    if (d.minutes > maxDaily + 15) {
      warnings.push(`${d.label} günü ${d.minutes} dk (hedef üst sınırı ${maxDaily} dk'nın üzerinde).`);
    } else if (d.minutes < minDaily - 30 && !(skipMinCheckDates && skipMinCheckDates.has(d.date))) {
      warnings.push(`${d.label} günü ${d.minutes} dk (hedef alt sınırı ${minDaily} dk'nın altında).`);
    }
  }

  const branchSummary = Object.values(branchMap).sort((a, b) => b.minutes - a.minutes);
  return { dailySummary, branchSummary, warnings };
}

/**
 * AI JSON çıktısını gerçek Rostrum task payload'larına dönüştürür ve doğrular.
 */
export function hydrateProgramPlan(aiJson, resourcesById = {}, studentSpeeds = [], options = {}) {
  const startDate = options.startDate;
  const daysCount = Math.max(1, Math.min(21, Number(options.daysCount) || 7));
  const videoSpeed = Number(options.videoSpeed) || 1.5;
  const minDaily = Number(options.minDaily) || 240;
  const maxDaily = Number(options.maxDaily) || 360;
  const completedLabelsBySubject = options.completedLabelsBySubject || {};

  const targetDateList = startDate ? buildDateWindow(startDate, daysCount) : [];
  const validDates = targetDateList.length ? new Set(targetDateList) : null;
  const rawTasks = extractRawTaskList(aiJson);

  const hydratedTasks = [];
  const warnings = [];
  const usedItems = new Set();
  let remappedCount = 0;

  for (let rawIdx = 0; rawIdx < rawTasks.length; rawIdx++) {
    const rt = rawTasks[rawIdx];
    let date = String(rt?.date || '').slice(0, 10);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      if (targetDateList.length) {
        date = targetDateList[rawIdx % targetDateList.length];
        remappedCount++;
      } else {
        continue;
      }
    } else if (validDates && !validDates.has(date)) {
      // Gelecek/farklı bir başlangıç tarihinde model bugünün tarihini döndürdüyse pencereye hizala
      date = targetDateList[remappedCount % targetDateList.length];
      remappedCount++;
    }

    const type = ['konu', 'soru', 'deneme', 'diger'].includes(rt.type) ? rt.type : 'konu';
    const examType = String(rt.exam_type || 'TYT').trim();
    const branch = String(rt.branch || 'Genel').trim();
    const res = rt.resource_id ? resourcesById[rt.resource_id] : null;

    if (res) {
      const tests = Array.isArray(res.tests) ? res.tests : [];
      const doneSet = new Set();
      for (const [subj, set] of Object.entries(completedLabelsBySubject)) {
        if (subj.includes(res.name)) set.forEach(l => doneSet.add(stripPartSuffix(l)));
      }

      // item_indices veya item_range çöz
      let indices = [];
      if (Array.isArray(rt.item_indices)) {
        indices = rt.item_indices.map(Number).filter(n => Number.isInteger(n) && n >= 0 && n < tests.length);
      } else if (Array.isArray(rt.item_range) && rt.item_range.length === 2) {
        const [a, b] = rt.item_range.map(Number);
        for (let k = Math.max(0, a); k <= Math.min(tests.length - 1, b); k++) indices.push(k);
      }

      // İndeks boşsa topic_query ile eşleştirmeyi dene
      if (!indices.length && rt.topic_query) {
        const qNorm = normTr(rt.topic_query);
        for (let k = 0; k < tests.length && indices.length < 4; k++) {
          const lbl = String(tests[k]?.label || tests[k] || '');
          if (normTr(lbl).includes(qNorm) && !doneSet.has(stripPartSuffix(lbl))) indices.push(k);
        }
      }

      const partIdx = Number(rt.part_index) || 0;
      const partTotal = Number(rt.part_total) || 0;
      const isSplitVideo = res.resource_type === 'playlist' && indices.length === 1 && partTotal > 1 && partIdx >= 1 && partIdx <= partTotal;

      const taskItems = [];
      for (const idx of indices) {
        const t = tests[idx];
        const rawLabel = String(t?.label || t || '').trim();
        if (!rawLabel || rawLabel === 'Private video' || rawLabel === 'Deleted video') continue;
        if (doneSet.has(stripPartSuffix(rawLabel))) continue;

        const dedupeKey = isSplitVideo ? `${res.id}::${idx}::${partIdx}/${partTotal}` : `${res.id}::${idx}`;
        if (usedItems.has(dedupeKey)) continue;
        usedItems.add(dedupeKey);

        let unit = Number(t?.soru || 0);
        let finalLabel = rawLabel;
        if (isSplitVideo) {
          unit = Math.max(1, Math.round(unit / partTotal));
          finalLabel = `${rawLabel} (Bölüm ${partIdx}/${partTotal})`;
        }

        taskItems.push({
          label: finalLabel,
          url: t?.url || '',
          soru: unit
        });
      }

      if (!taskItems.length) {
        // Fallback: manuel görev olarak düşsün ki koçun istediği konu kaybolmasın
        const fallbackDur = Math.max(10, Math.min(240, Number(rt.estimated_minutes || rt.duration) || 40));
        hydratedTasks.push({
          date,
          type,
          exam_type: examType,
          branch,
          subject: `${branch} - ${res.name}`,
          duration: fallbackDur,
          note: String(rt.topic_note || rt.note || res.name).trim(),
          task_items: [{ label: String(rt.topic_note || rt.topic_query || res.name).trim(), url: '', soru: 0 }],
          source_kind: 'catalog_fallback'
        });
        continue;
      }

      const totalUnits = taskItems.reduce((a, b) => a + (Number(b.soru) || 0), 0);
      let duration;
      if (type === 'konu' || res.resource_type === 'playlist') {
        duration = totalUnits > 0
          ? Math.max(10, Math.round(totalUnits / videoSpeed))
          : Math.max(15, Number(rt.estimated_minutes || rt.duration) || 40);
      } else {
        const secsPerQ = resolveSecsPerQuestion(studentSpeeds, examType, branch);
        duration = totalUnits > 0
          ? Math.max(10, Math.round((totalUnits * secsPerQ) / 60))
          : Math.max(15, Number(rt.estimated_minutes || rt.duration) || 35);
      }

      const autoSummary = summarizeLabels(
        taskItems.map(i => i.label),
        (type === 'konu' || res.resource_type === 'playlist') ? 'video' : 'test'
      );
      const note = (isSplitVideo && rt.topic_note)
        ? String(rt.topic_note).trim()
        : (rt.topic_note ? `${autoSummary} · ${String(rt.topic_note).trim()}` : autoSummary);

      hydratedTasks.push({
        date,
        type: res.resource_type === 'playlist' ? 'konu' : type,
        exam_type: examType,
        branch,
        subject: `${branch} - ${res.name}`,
        duration,
        note,
        task_items: taskItems,
        source_kind: 'catalog',
        resource_id: res.id
      });
    } else {
      // Katalog dışı / Manuel kaynak (örn: Apotemi Paragraf, Toprak Kurumsal)
      const manualName = String(rt.manual_source || rt.resource_name || 'Genel Çalışma').trim();
      const qCount = Number(rt.question_count) || 0;
      const secsPerQ = resolveSecsPerQuestion(studentSpeeds, examType, branch);
      let duration = Number(rt.estimated_minutes || rt.duration) || 0;
      if (!duration && qCount > 0 && type === 'soru') {
        duration = Math.max(10, Math.round((qCount * secsPerQ) / 60));
      }
      if (!duration) duration = 35;

      const items = Array.isArray(rt.manual_items) && rt.manual_items.length
        ? rt.manual_items.map(lbl => ({ label: String(lbl).trim(), url: '', soru: 0 })).filter(x => x.label)
        : [{ label: String(rt.topic_note || manualName).trim(), url: '', soru: qCount }];

      hydratedTasks.push({
        date,
        type,
        exam_type: examType,
        branch,
        subject: `${branch} - ${manualName}`,
        duration: Math.max(10, Math.min(240, Math.round(duration))),
        note: String(rt.topic_note || rt.note || manualName).trim(),
        task_items: items,
        source_kind: 'manual'
      });
    }
  }

  if (remappedCount > 0) {
    warnings.push(`${remappedCount} görevin tarihi seçili başlangıç penceresine otomatik hizalandı.`);
  }

  const { dailySummary, branchSummary, warnings: finalWarnings } = computePlanSummaries(hydratedTasks, {
    minDaily,
    maxDaily,
    initialWarnings: warnings,
  });

  return {
    summary: String(aiJson?.summary || '').trim(),
    notes: Array.isArray(aiJson?.notes) ? aiJson.notes.map(String) : [],
    tasks: hydratedTasks,
    dailySummary,
    branchSummary,
    warnings: finalWarnings,
    usedItemKeys: [...usedItems],
  };
}

function _parseSubjectParts(subjectStr) {
  const raw = String(subjectStr || '').trim();
  const idx = raw.indexOf(' - ');
  if (idx !== -1) {
    return { branch: raw.slice(0, idx).trim() || 'Genel', name: raw.slice(idx + 3).trim() };
  }
  return { branch: raw || 'Genel', name: raw };
}

/**
 * AI yanıtı eksik gün/görev döndürdüğünde veya zaman aşımı yaklaştığında
 * öğrencinin gerçek katalog kaynakları, hızları, konu ilerlemesi ve geri bildirimleriyle
 * çok günlük hedefi ([minDaily, maxDaily]) tamamlar.
 */
export function ensureCompleteProgramSchedule(hydrated, opts = {}) {
  const startDate = opts.startDate;
  const daysCount = Math.max(1, Math.min(21, Number(opts.daysCount) || 7));
  if (!startDate) return hydrated;

  const minDaily = Math.max(30, Number(opts.minDaily) || 240);
  const maxDaily = Math.max(minDaily, Number(opts.maxDaily) || 360);
  const targetDaily = Math.round((minDaily + maxDaily) / 2);
  const videoSpeed = Number(opts.videoSpeed) || 1.5;
  const resourcesById = opts.resourcesById || {};
  const detailedResources = Array.isArray(opts.detailedResources) ? opts.detailedResources : [];
  const studentSpeeds = opts.studentSpeeds || [];
  const completedLabelsBySubject = opts.completedLabelsBySubject || {};
  const priorityRemediationTopics = Array.isArray(opts.priorityRemediationTopics) ? opts.priorityRemediationTopics : [];
  const weakTopics = Array.isArray(opts.weakTopics) ? opts.weakTopics : [];
  const activeManualSources = Array.isArray(opts.activeManualSources) ? opts.activeManualSources : [];
  const restDay = normTr(opts.restDay || '');
  const examCountdown = opts.examCountdown || {};
  const topicProgress = opts.topicProgress || {};

  const targetDateList = buildDateWindow(startDate, daysCount);
  const tasks = [...(hydrated?.tasks || [])];
  const usedItems = new Set(hydrated?.usedItemKeys || []);
  const pendingSplitByDate = new Map();

  // Halihazırda programa koyulmuş bölünmemiş veya kısmi görevlerden sonraki indeksleri koru
  const doneCacheByResId = new Map();
  const getDoneSetForRes = (res) => {
    if (doneCacheByResId.has(res.id)) return doneCacheByResId.get(res.id);
    const set = new Set();
    for (const [subj, labels] of Object.entries(completedLabelsBySubject)) {
      if (subj.includes(res.name)) labels.forEach(l => set.add(stripPartSuffix(l)));
    }
    doneCacheByResId.set(res.id, set);
    return set;
  };

  // Telafi öncelikli branşlar
  const priorityBranches = new Set();
  for (const pt of priorityRemediationTopics) {
    const br = normTr(String(pt || '').split(/[-–·(]/)[0]);
    if (br) priorityBranches.add(br);
  }
  for (const wt of weakTopics) {
    const br = normTr(String(wt?.subject || '').replace(/^(tyt|ayt|ydt)\s+/i, ''));
    if (br) priorityBranches.add(br);
  }

  // Katalog kaynak imleçleri (playlist önce veya soru bankası sırayla)
  const catalogCursors = [];
  const seenResIds = new Set();
  for (const dr of detailedResources) {
    const res = resourcesById[dr.id];
    if (!res || seenResIds.has(res.id)) continue;
    const tests = Array.isArray(res.tests) ? res.tests : [];
    if (!tests.length) continue;
    seenResIds.add(res.id);
    const startIdx = Number.isInteger(dr?.clusters?.[0]?.remIdx?.[0]) ? dr.clusters[0].remIdx[0] : 0;
    catalogCursors.push({
      res,
      tests,
      cursor: Math.max(0, startIdx),
      wrapped: false,
      isPriority: priorityBranches.has(normTr(res.subject)),
    });
  }
  // Öncelikli dersleri ve konu anlatım (playlist) kaynaklarını üste taşı
  catalogCursors.sort((a, b) => {
    if (a.isPriority !== b.isPriority) return a.isPriority ? -1 : 1;
    if (a.res.resource_type !== b.res.resource_type) return a.res.resource_type === 'playlist' ? -1 : 1;
    return 0;
  });

  // Manuel aktif kaynaklar (katalog dışı, örn. Apotemi Paragraf)
  const catalogNameNorms = catalogCursors.map(c => normTr(c.res.name));
  const manualPool = [];
  const seenManualNames = new Set();
  for (const src of activeManualSources) {
    const subjStr = typeof src === 'string' ? src : src?.subject;
    if (!subjStr) continue;
    const { branch, name } = _parseSubjectParts(subjStr);
    const nNorm = normTr(name);
    if (!nNorm || seenManualNames.has(nNorm)) continue;
    if (catalogNameNorms.some(cn => cn.includes(nNorm) || nNorm.includes(cn))) continue;
    seenManualNames.add(nNorm);
    const mType = (src?.type && ['konu', 'soru', 'deneme', 'diger'].includes(src.type))
      ? src.type
      : (/kamp|video|ders/i.test(name) ? 'konu' : 'soru');
    const isRoutine = /(paragraf|problem|rutin)/i.test(`${branch} ${name}`);
    manualPool.push({
      branch,
      name,
      exam_type: src?.exam || 'TYT',
      type: mType,
      isRoutine,
      isPriority: isRoutine || priorityBranches.has(normTr(branch)),
    });
  }
  manualPool.sort((a, b) => (a.isPriority === b.isPriority ? 0 : a.isPriority ? -1 : 1));

  // Telafi / konu haritası yedek konu başlıkları
  const fallbackTopicPool = [
    ...priorityRemediationTopics.map(pt => ({ raw: String(pt), isRemediation: true })),
    ...weakTopics.map(w => ({ raw: `${w.subject} - ${w.konu}`, konu: w.konu, stars: w.stars, isRemediation: true })),
  ];
  let fallbackCursor = 0;

  const pullNextFromCursor = (entry, maxAllowedMin, dayIdx) => {
    const res = entry.res;
    const tests = entry.tests;
    const doneSet = getDoneSetForRes(res);
    const totalLen = tests.length;
    if (!totalLen) return null;

    // İmleci kullanılmamış sıradaki öğeye ilerlet
    let scanned = 0;
    while (scanned < totalLen) {
      if (entry.cursor >= totalLen) {
        if (entry.wrapped) return null;
        entry.cursor = 0;
        entry.wrapped = true;
      }
      const idx = entry.cursor;
      const item = tests[idx];
      const lbl = String(item?.label || item || '').trim();
      const key = `${res.id}::${idx}`;
      if (lbl && lbl !== 'Private video' && lbl !== 'Deleted video' && !doneSet.has(stripPartSuffix(lbl)) && !usedItems.has(key)) {
        break;
      }
      entry.cursor++;
      scanned++;
    }
    if (scanned >= totalLen) return null;

    const isPlaylist = res.resource_type === 'playlist';
    if (isPlaylist) {
      const idx = entry.cursor++;
      const item = tests[idx];
      const lbl = String(item?.label || item || '').trim();
      const rawDur = Number(item?.soru || 0);
      const adjDur = rawDur > 0 ? Math.max(15, Math.round(rawDur / videoSpeed)) : 40;
      const key = `${res.id}::${idx}`;

      if (adjDur > 55) {
        const parts = Math.min(3, Math.ceil(adjDur / 45));
        const chunkDur = Math.max(25, Math.round(adjDur / parts));
        const unitPerPart = Math.max(1, Math.round((rawDur || 45) / parts));
        usedItems.add(`${key}::1/${parts}`);
        for (let p = 2; p <= parts; p++) {
          const targetDayIdx = dayIdx + (p - 1);
          if (targetDayIdx < targetDateList.length) {
            const targetDs = targetDateList[targetDayIdx];
            const splitKey = `${key}::${p}/${parts}`;
            usedItems.add(splitKey);
            if (!pendingSplitByDate.has(targetDs)) pendingSplitByDate.set(targetDs, []);
            pendingSplitByDate.get(targetDs).push({
              date: targetDs,
              type: 'konu',
              exam_type: res.exam_type || 'TYT',
              branch: res.subject,
              subject: `${res.subject} - ${res.name}`,
              duration: chunkDur,
              note: `${lbl} (Bölüm ${p}/${parts})`,
              task_items: [{ label: `${lbl} (Bölüm ${p}/${parts})`, url: item?.url || '', soru: unitPerPart }],
              source_kind: 'catalog',
              resource_id: res.id,
            });
          }
        }
        return {
          date: targetDateList[dayIdx],
          type: 'konu',
          exam_type: res.exam_type || 'TYT',
          branch: res.subject,
          subject: `${res.subject} - ${res.name}`,
          duration: chunkDur,
          note: `${lbl} (Bölüm 1/${parts})${entry.isPriority ? ' · Telafi odağı' : ''}`,
          task_items: [{ label: `${lbl} (Bölüm 1/${parts})`, url: item?.url || '', soru: unitPerPart }],
          source_kind: 'catalog',
          resource_id: res.id,
        };
      }

      const nextIdx = entry.cursor;
      if (adjDur <= 35 && nextIdx < totalLen) {
        const nextItem = tests[nextIdx];
        const nextLbl = String(nextItem?.label || nextItem || '').trim();
        const nextKey = `${res.id}::${nextIdx}`;
        const nextRawDur = Number(nextItem?.soru || 0);
        const nextAdjDur = nextRawDur > 0 ? Math.max(15, Math.round(nextRawDur / videoSpeed)) : 35;
        if (nextLbl && nextLbl !== 'Private video' && nextLbl !== 'Deleted video'
          && !doneSet.has(stripPartSuffix(nextLbl)) && !usedItems.has(nextKey)
          && adjDur + nextAdjDur <= Math.min(65, maxAllowedMin + 10)) {
          entry.cursor++;
          usedItems.add(key);
          usedItems.add(nextKey);
          return {
            date: targetDateList[dayIdx],
            type: 'konu',
            exam_type: res.exam_type || 'TYT',
            branch: res.subject,
            subject: `${res.subject} - ${res.name}`,
            duration: adjDur + nextAdjDur,
            note: `${summarizeLabels([lbl, nextLbl], 'video')}${entry.isPriority ? ' · Telafi odağı' : ''}`,
            task_items: [
              { label: lbl, url: item?.url || '', soru: rawDur },
              { label: nextLbl, url: nextItem?.url || '', soru: nextRawDur },
            ],
            source_kind: 'catalog',
            resource_id: res.id,
          };
        }
      }

      usedItems.add(key);
      return {
        date: targetDateList[dayIdx],
        type: 'konu',
        exam_type: res.exam_type || 'TYT',
        branch: res.subject,
        subject: `${res.subject} - ${res.name}`,
        duration: adjDur,
        note: `${summarizeLabels([lbl], 'video')}${entry.isPriority ? ' · Telafi odağı' : ''}`,
        task_items: [{ label: lbl, url: item?.url || '', soru: rawDur }],
        source_kind: 'catalog',
        resource_id: res.id,
      };
    }

    // Soru bankası: 1–4 testi hedef süreye sığacak şekilde paketle
    const secsPerQ = resolveSecsPerQuestion(studentSpeeds, res.exam_type || 'TYT', res.subject);
    const chosenItems = [];
    let estTotalMin = 0;
    const capMin = Math.max(30, Math.min(65, maxAllowedMin + 10));

    while (chosenItems.length < 4 && entry.cursor < totalLen) {
      const idx = entry.cursor;
      const item = tests[idx];
      const lbl = String(item?.label || item || '').trim();
      const key = `${res.id}::${idx}`;
      if (!lbl || lbl === 'Private video' || lbl === 'Deleted video' || doneSet.has(stripPartSuffix(lbl)) || usedItems.has(key)) {
        entry.cursor++;
        if (chosenItems.length > 0) break;
        continue;
      }
      const soru = Number(item?.soru || 0);
      const itemMin = soru > 0 ? Math.max(8, Math.round((soru * secsPerQ) / 60)) : 15;
      if (chosenItems.length > 0 && estTotalMin + itemMin > capMin) break;
      usedItems.add(key);
      chosenItems.push({ label: lbl, url: item?.url || '', soru });
      estTotalMin += itemMin;
      entry.cursor++;
    }

    if (!chosenItems.length) return null;
    const duration = Math.max(15, Math.min(90, estTotalMin));
    const summaryLbl = summarizeLabels(chosenItems.map(i => i.label), 'test');
    return {
      date: targetDateList[dayIdx],
      type: 'soru',
      exam_type: res.exam_type || 'TYT',
      branch: res.subject,
      subject: `${res.subject} - ${res.name}`,
      duration,
      note: `${summaryLbl}${entry.isPriority ? ' · Öncelikli konu' : ''}`,
      task_items: chosenItems,
      source_kind: 'catalog',
      resource_id: res.id,
    };
  };

  const restDateSet = new Set();
  const tasksByDate = new Map();
  targetDateList.forEach(ds => tasksByDate.set(ds, []));
  for (const t of tasks) {
    if (tasksByDate.has(t.date)) tasksByDate.get(t.date).push(t);
  }

  for (let dayIdx = 0; dayIdx < targetDateList.length; dayIdx++) {
    const ds = targetDateList[dayIdx];
    const dt = new Date(ds + 'T12:00:00Z');
    const dayNameTr = TR_DAYS[dt.getUTCDay()];
    const isRest = !!(restDay && normTr(dayNameTr) === restDay);
    if (isRest) restDateSet.add(ds);

    const dayList = tasksByDate.get(ds) || [];
    // Önce önceki günden devreden bölünmüş video parçalarını yerleştir
    const queuedSplits = pendingSplitByDate.get(ds) || [];
    for (const sp of queuedSplits) {
      dayList.push(sp);
    }

    let dayMin = dayList.reduce((s, t) => s + (Number(t.duration) || 0), 0);

    // Dinlenme gününde en fazla 1 hafif tekrar görevi ekle, tam yükleme yapma
    if (isRest) {
      if (dayList.length === 0) {
        const routine = manualPool.find(m => m.isRoutine) || manualPool[0];
        if (routine) {
          dayList.push({
            date: ds,
            type: routine.type,
            exam_type: routine.exam_type,
            branch: routine.branch,
            subject: `${routine.branch} - ${routine.name}`,
            duration: 30,
            note: 'Dinlenme günü hafif rutin / tekrar',
            task_items: [{ label: `${routine.name} (Hafif tekrar)`, url: '', soru: 20 }],
            source_kind: 'manual',
          });
        }
      }
      tasksByDate.set(ds, dayList);
      continue;
    }

    let guard = 0;
    while (dayMin < minDaily && dayList.length < 8 && guard < 25) {
      guard++;
      const remainToMax = Math.max(25, maxDaily - dayMin);
      const remainToTarget = Math.max(25, targetDaily - dayMin);
      const branchesToday = new Set(dayList.map(t => normTr(t.branch)));
      const sourcesToday = new Set(dayList.map(t => normTr(t.subject)));

      let addedTask = null;

      // 1. Günlük rutin / aktif manuel kaynaklardan günde en fazla 1 kez seç (öncelik henüz eklenmemiş branşlar)
      const manualCand = manualPool.find(m =>
        (m.isRoutine || dayIdx % 2 === 0 || !branchesToday.has(normTr(m.branch)))
        && !sourcesToday.has(normTr(`${m.branch} - ${m.name}`))
      );
      if (manualCand && (!branchesToday.has(normTr(manualCand.branch)) || dayList.length < 2)) {
        const dur = Math.min(remainToMax, manualCand.isRoutine ? 30 : 40);
        addedTask = {
          date: ds,
          type: manualCand.type,
          exam_type: manualCand.exam_type,
          branch: manualCand.branch,
          subject: `${manualCand.branch} - ${manualCand.name}`,
          duration: Math.max(20, dur),
          note: manualCand.isRoutine ? 'Günlük rutin (20 soru / tarama)' : 'Aktif kaynak devam çalışması',
          task_items: [{ label: `${manualCand.name} — sıradaki test/bölüm`, url: '', soru: 20 }],
          source_kind: 'manual',
        };
      }

      // 2. Katalog kaynaklarından henüz bugünde işlenmemiş branşa öncelik vererek seç
      if (!addedTask) {
        const cursorIdx = catalogCursors.findIndex(c => !branchesToday.has(normTr(c.res.subject)));
        const fallbackCursorIdx = cursorIdx !== -1 ? cursorIdx : 0;
        for (let pass = 0; pass < catalogCursors.length && !addedTask; pass++) {
          const i = (fallbackCursorIdx + pass) % catalogCursors.length;
          const entry = catalogCursors[i];
          if (sourcesToday.has(normTr(`${entry.res.subject} - ${entry.res.name}`))) continue;
          const candidate = pullNextFromCursor(entry, remainToTarget, dayIdx);
          if (candidate) {
            // Rotasyon: kullanılmış kaynağı kuyruğun sonuna kaydır ki diğer dersler de sıraya girsin
            catalogCursors.push(catalogCursors.splice(i, 1)[0]);
            addedTask = candidate;
          }
        }
      }

      // 3. Yedek: Öğrencinin telafi/zayıf konularından odak bloğu
      if (!addedTask && dayMin < minDaily) {
        const fb = fallbackTopicPool.length ? fallbackTopicPool[fallbackCursor++ % fallbackTopicPool.length] : null;
        let br = 'Genel';
        let subjTitle = 'Genel Tekrar';
        let noteTxt = 'Konu özeti ve karma soru çözümü';
        if (fb) {
          const parsed = _parseSubjectParts(fb.raw);
          br = parsed.branch.replace(/^(tyt|ayt|ydt)\s+/i, '').trim() || parsed.branch;
          subjTitle = `${br} - Zayıf Konu Telafisi`;
          noteTxt = `${parsed.name || fb.konu || fb.raw} · Telafi & tekrar`;
        } else {
          const coreBranches = ['Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Geometri'];
          br = coreBranches[(dayIdx + dayList.length) % coreBranches.length];
          subjTitle = `${br} - Konu Pekiştirme`;
        }
        const needToMin = Math.max(0, minDaily - dayMin);
        const dur = Math.max(25, Math.min(60, remainToMax, Math.max(needToMin, Math.min(45, remainToTarget))));
        addedTask = {
          date: ds,
          type: 'soru',
          exam_type: 'TYT',
          branch: br,
          subject: subjTitle,
          duration: dur,
          note: noteTxt,
          task_items: [{ label: noteTxt, url: '', soru: 20 }],
          source_kind: 'planner_remediation',
        };
      }

      if (!addedTask) break;
      dayList.push(addedTask);
      dayMin += Number(addedTask.duration) || 0;
    }

    tasksByDate.set(ds, dayList);
  }

  const finalTasks = [];
  for (const ds of targetDateList) {
    finalTasks.push(...(tasksByDate.get(ds) || []));
  }

  const { dailySummary, branchSummary, warnings } = computePlanSummaries(finalTasks, {
    minDaily,
    maxDaily,
    initialWarnings: (hydrated?.warnings || []).filter(w => !/hedef alt sınırı/.test(w)),
    skipMinCheckDates: restDateSet,
  });

  let summary = String(hydrated?.summary || '').trim();
  const notes = Array.isArray(hydrated?.notes) ? [...hydrated.notes] : [];
  if (!summary || summary.length < 25) {
    const daysLeftTxt = examCountdown?.days_left ? `${examCountdown.exam_label || 'Sınav'}'a ${examCountdown.days_left} gün kala` : 'Hedef tarihler için';
    const remTxt = priorityRemediationTopics.length
      ? `; öğrenci geri bildirimlerindeki ${priorityRemediationTopics.slice(0, 2).join(', ')} başlıklarına öncelik verilerek`
      : '';
    const tdTxt = Number.isFinite(topicProgress?.completed_td_count)
      ? ` (${topicProgress.completed_td_count} tamamlanan konu gözetilerek)`
      : '';
    summary = `${daysLeftTxt}${remTxt} ${targetDateList.length} günlük dengeli çalışma programı oluşturuldu${tdTxt}.`;
  }

  return {
    summary,
    notes,
    tasks: finalTasks,
    dailySummary,
    branchSummary,
    warnings,
  };
}
