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
  return JSON.parse(sanitizeJsonControlChars(slice));
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

  const allowedExams = new Set(['TYT']);
  if (yksArea === 'EA') allowedExams.add('AYT-EA');
  else if (yksArea === 'SOZ' || yksArea === 'SÖZ') allowedExams.add('AYT-SOZ');
  else allowedExams.add('AYT-SAY');

  const hintNorm = normTr(hintText);
  const hintTokens = hintNorm.split(/[^a-z0-9]+/).filter(w => w.length >= 3);

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
    for (let i = 0; i < tests.length; i++) {
      const it = tests[i];
      const lbl = String(it?.label || it || '').trim();
      if (!lbl || lbl === 'Private video' || lbl === 'Deleted video') continue;
      const units = Number(it?.soru || 0);
      const baseLbl = stripPartSuffix(lbl);
      const isDone = doneSet.has(baseLbl);
      const isPending = pendingSet.has(baseLbl);
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

    // Eşleşme skoru (koçun talimatında veya koçun özel kaynağında geçiyorsa öne al)
    const haystack = normTr(`${r.name} ${r.publisher || ''} ${r.subject}`);
    let score = r.coach_id ? 20 : 0;
    if (doneSet.size > 0 || pendingSet.size > 0) score += 25;
    for (const tok of hintTokens) {
      if (haystack.includes(tok)) score += 18;
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
      clusters
    });
  }

  scored.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, 'tr'));

  const detailed = scored.slice(0, maxDetailed).map(r => ({
    id: r.id,
    type: r.type,
    exam: r.exam,
    subject: r.subject,
    name: r.name,
    doneCount: r.doneCount,
    clusters: r.clusters
      .filter(c => c.remainingIndices.length > 0)
      .slice(0, maxClusters)
      .map(c => ({
        topic: c.topic,
        remIdx: c.remainingIndices.slice(0, maxRemIdx),
        units: c.remainingUnits,
      }))
  })).filter(r => r.clusters.length > 0);

  const compactOthers = scored.slice(maxDetailed, maxDetailed + maxCompact).map(r => ({
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
  const validDates = new Set();
  for (let i = 0; i < daysCount; i++) {
    const dt = new Date(Date.UTC(y, m - 1, d + i));
    validDates.add(dt.toISOString().slice(0, 10));
  }
  return validDates;
}

export function formatTrDateLabel(isoDate) {
  const [y, m, d] = isoDate.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return `${d} ${TR_MONTHS[dt.getUTCMonth()].slice(0, 3)} ${TR_DAYS[dt.getUTCDay()].slice(0, 3)}`;
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

  const validDates = startDate ? buildDateWindow(startDate, daysCount) : null;
  const rawTasks = Array.isArray(aiJson?.tasks) ? aiJson.tasks : [];

  const hydratedTasks = [];
  const warnings = [];
  const usedItems = new Set();

  for (const rt of rawTasks) {
    const date = String(rt.date || '').slice(0, 10);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;
    if (validDates && !validDates.has(date)) {
      warnings.push(`${date} tarihi hedef aralık dışında kaldığı için atlandı.`);
      continue;
    }

    const type = ['konu', 'soru', 'deneme', 'diger'].includes(rt.type) ? rt.type : 'konu';
    const examType = String(rt.exam_type || 'TYT').trim();
    const branch = String(rt.branch || 'Genel').trim();
    const res = rt.resource_id ? resourcesById[rt.resource_id] : null;

    if (res) {
      const tests = Array.isArray(res.tests) ? res.tests : [];
      const doneSet = new Set();
      for (const [subj, set] of Object.entries(completedLabelsBySubject)) {
        if (subj.includes(res.name)) set.forEach(l => doneSet.add(l));
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
          if (normTr(lbl).includes(qNorm) && !doneSet.has(lbl)) indices.push(k);
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
        if (doneSet.has(rawLabel)) continue;

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

  // Günlük ve branş özetleri
  const dailyMap = {};
  const branchMap = {};
  for (const t of hydratedTasks) {
    if (!dailyMap[t.date]) dailyMap[t.date] = { date: t.date, label: formatTrDateLabel(t.date), count: 0, minutes: 0 };
    dailyMap[t.date].count++;
    dailyMap[t.date].minutes += t.duration;

    if (!branchMap[t.branch]) branchMap[t.branch] = { branch: t.branch, count: 0, minutes: 0 };
    branchMap[t.branch].count++;
    branchMap[t.branch].minutes += t.duration;
  }

  const dailySummary = Object.values(dailyMap).sort((a, b) => a.date.localeCompare(b.date));
  for (const d of dailySummary) {
    if (d.minutes > maxDaily + 15) {
      warnings.push(`${d.label} günü ${d.minutes} dk (hedef üst sınırı ${maxDaily} dk'nın üzerinde).`);
    } else if (d.minutes < minDaily - 30) {
      warnings.push(`${d.label} günü ${d.minutes} dk (hedef alt sınırı ${minDaily} dk'nın altında).`);
    }
  }

  const branchSummary = Object.values(branchMap).sort((a, b) => b.minutes - a.minutes);

  return {
    summary: String(aiJson?.summary || '').trim(),
    notes: Array.isArray(aiJson?.notes) ? aiJson.notes.map(String) : [],
    tasks: hydratedTasks,
    dailySummary,
    branchSummary,
    warnings
  };
}
