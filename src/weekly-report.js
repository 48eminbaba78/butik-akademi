// ═══════════════════════════════════════════════
// ROSTRUM AKADEMI — HAFTALIK RAPOR ANALİZ MOTORU
// Saf (DOM bağımsız) istatistik, filtreleme, sıralama ve mesaj taslağı yardımcıları.
// ═══════════════════════════════════════════════

export const DIFF_META = {
  1: { label: 'Çok Kolay', cls: 'diff-1' },
  2: { label: 'Kolay', cls: 'diff-2' },
  3: { label: 'Orta', cls: 'diff-3' },
  4: { label: 'Zor', cls: 'diff-4' },
  5: { label: 'Çok Zor', cls: 'diff-5' },
};

export const BLOCKER_LABELS = {
  time: 'Zamanı yetmedi',
  topic: 'Konuyu anlayamadı',
  hard: 'Kaynak çok zordu',
  moti: 'Motivasyon yok',
};

export const TYPE_META = {
  soru: { label: 'Soru', full: 'Soru Bankası', cls: 'type-soru' },
  konu: { label: 'Konu', full: 'Konu Anlatımı', cls: 'type-konu' },
  deneme: { label: 'Deneme', full: 'Deneme', cls: 'type-deneme' },
  diger: { label: 'Diğer', full: 'Diğer', cls: 'type-diger' },
};

/**
 * HTML attribute bağlamları için güvenli kaçış (" ve ' dahil).
 */
export function escAttr(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Türkçe karakter duyarlı arama normalizasyonu.
 */
export function normalizeTr(str) {
  return String(str || '')
    .replace(/[İIı]/g, 'i')
    .replace(/[Şş]/g, 's')
    .replace(/[Ğğ]/g, 'g')
    .replace(/[Üü]/g, 'u')
    .replace(/[Öö]/g, 'o')
    .replace(/[Çç]/g, 'c')
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Dakika değerini kısa Türkçe süre metnine çevirir.
 */
export function formatShortDuration(mins) {
  const n = Math.round(Number(mins) || 0);
  if (n <= 0) return '0 dk';
  if (n < 60) return `${n} dk`;
  const h = Math.floor(n / 60);
  const m = n % 60;
  return m === 0 ? `${h} sa` : `${h} sa ${m} dk`;
}

/**
 * Görevin tamamlama durumunu tek biçimli rozet metasına çevirir.
 */
export function getTaskStatusMeta(task, todayDs) {
  const fb = task?.student_feedback || {};
  const fbStatus = fb.status;

  if (task?.done || fbStatus === 'completed' || fbStatus === 'done') {
    return { code: 'completed', label: 'Tamam', icon: '✓', cls: 'st-completed', weight: 4 };
  }
  if (fbStatus === 'partial') {
    return { code: 'partial', label: 'Kısmen', icon: '◐', cls: 'st-partial', weight: 3 };
  }
  if (fbStatus === 'failed') {
    return { code: 'failed', label: 'Yapamadı', icon: '✕', cls: 'st-failed', weight: 1 };
  }
  if (task?.date && todayDs && task.date < todayDs) {
    return { code: 'missed', label: 'Eksik', icon: '✗', cls: 'st-missed', weight: 2 };
  }
  return { code: 'pending', label: 'Planlı', icon: '⏳', cls: 'st-pending', weight: 2.5 };
}

/**
 * Görevin D/Y/B sonucu, net, doğruluk % ve yanlış konu özetini hesaplar.
 */
export function computeTaskResultMeta(task) {
  const res = task?.student_result;
  if (!res || typeof res !== 'object') return null;

  const dogru = Math.max(0, Number(res.dogru || 0));
  const yanlis = Math.max(0, Number(res.yanlis || 0));
  const bos = Math.max(0, Number(res.bos || 0));
  const total = dogru + yanlis + bos;
  const wrongTopics = Array.isArray(res.yanlis_konular)
    ? res.yanlis_konular.filter(Boolean).map(x => String(x).trim()).filter(Boolean)
    : [];

  if (total > 0) {
    const net = dogru - yanlis / 4;
    const netLabel = Number.isInteger(net) ? String(net) : String(Number(net.toFixed(2)));
    const accuracy = Math.round((dogru / total) * 100);
    const tone = accuracy >= 75 ? 'good' : accuracy >= 50 ? 'mid' : 'low';
    return { dogru, yanlis, bos, total, net, netLabel, accuracy, tone, wrongTopics };
  }

  if (wrongTopics.length > 0) {
    return { dogru: 0, yanlis: 0, bos: 0, total: 0, net: 0, netLabel: '0', accuracy: null, tone: 'low', wrongTopics };
  }

  return null;
}

/**
 * Görevin gerçekleşen / planlanan süre ve süre aşımı bilgisini hesaplar.
 */
export function computeTaskDurationMeta(task) {
  const spentMin = Math.max(0, Math.round(Number(task?.student_feedback?.time_spent || 0)));
  const plannedMin = Math.max(0, Math.round(Number(task?.duration || 0)));
  const isLogged = spentMin > 0;
  const effectiveMin = isLogged ? spentMin : plannedMin;
  const overrunMin = (isLogged && plannedMin > 0 && spentMin >= plannedMin * 1.35 && (spentMin - plannedMin) >= 15)
    ? (spentMin - plannedMin)
    : 0;
  return { spentMin, plannedMin, isLogged, effectiveMin, overrunMin };
}

/**
 * Arama sorgusundaki tüm kelimelerin görev alanlarıyla Türkçe-duyarlı eşleşmesini kontrol eder.
 */
export function matchesWeeklyQuery(task, query) {
  const q = normalizeTr(query);
  if (!q) return true;
  const words = q.split(/\s+/).filter(Boolean);
  if (words.length === 0) return true;

  const typeInfo = TYPE_META[task?.type];
  const itemText = Array.isArray(task?.task_items)
    ? task.task_items.map(it => (typeof it === 'string' ? it : (it?.label || ''))).join(' ')
    : '';
  const wrongTopicsText = Array.isArray(task?.student_result?.yanlis_konular)
    ? task.student_result.yanlis_konular.join(' ')
    : '';
  const blockerKey = task?.student_feedback?.blocker || '';
  const blockerText = blockerKey ? (BLOCKER_LABELS[blockerKey] || blockerKey) : '';

  const haystack = normalizeTr([
    task?.subject || '',
    task?.note || '',
    task?.student_note || '',
    task?.exam || '',
    typeInfo ? `${typeInfo.label} ${typeInfo.full}` : (task?.type || ''),
    itemText,
    wrongTopicsText,
    blockerText,
  ].join(' '));

  return words.every(w => haystack.includes(w));
}

/**
 * Bir haftalık görev dizisi için özet KPI'lar, dağılımlar, engeller ve yanlış konuları hesaplar.
 */
export function computeWeeklyReportStats(weekTasks, todayDs) {
  const tasks = Array.isArray(weekTasks) ? weekTasks : [];
  const totalTasks = tasks.length;

  let completedCount = 0;
  let partialCount = 0;
  let failedCount = 0;
  let missedCount = 0;
  let pendingCount = 0;

  let focusSum = 0;
  let focusCount = 0;
  let lowFocusCount = 0;

  const diffCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  let diffTotal = 0;
  let hardCount = 0;

  let notedCount = 0;
  let issueCount = 0;

  let totalPlannedMin = 0;
  let totalLoggedMin = 0;
  let loggedTaskCount = 0;
  let totalCompletedPlannedMin = 0;

  let totalCorrect = 0;
  let totalWrong = 0;
  let totalBlank = 0;

  const blockers = [];
  const topicFreq = new Map();

  for (const t of tasks) {
    const st = getTaskStatusMeta(t, todayDs);
    if (st.code === 'completed') completedCount++;
    else if (st.code === 'partial') partialCount++;
    else if (st.code === 'failed') failedCount++;
    else if (st.code === 'missed') missedCount++;
    else pendingCount++;

    const fb = t?.student_feedback || {};
    const focusVal = Number(fb.focus || 0);
    if (focusVal > 0) {
      focusSum += focusVal;
      focusCount++;
      if (focusVal <= 2) lowFocusCount++;
    }

    const diffVal = Number(fb.difficulty || 0);
    if (diffVal >= 1 && diffVal <= 5 && diffCounts[diffVal] !== undefined) {
      diffCounts[diffVal]++;
      diffTotal++;
      if (diffVal >= 4) hardCount++;
    }

    const hasNote = String(t?.student_note || '').trim().length > 0;
    if (hasNote) notedCount++;

    const blockerKey = fb.blocker || '';
    if (st.code !== 'completed' || blockerKey) issueCount++;

    const durMeta = computeTaskDurationMeta(t);
    totalPlannedMin += durMeta.plannedMin;
    if (durMeta.isLogged) {
      totalLoggedMin += durMeta.spentMin;
      loggedTaskCount++;
    }
    if (st.code === 'completed') {
      totalCompletedPlannedMin += durMeta.plannedMin;
    }

    if (blockerKey) {
      blockers.push({
        taskId: t?._id || '',
        date: t?.date || '',
        subject: t?.subject || '',
        reason: BLOCKER_LABELS[blockerKey] || blockerKey,
        note: t?.student_note || '',
      });
    }

    const resMeta = computeTaskResultMeta(t);
    if (resMeta) {
      totalCorrect += resMeta.dogru;
      totalWrong += resMeta.yanlis;
      totalBlank += resMeta.bos;
      for (const topic of resMeta.wrongTopics) {
        topicFreq.set(topic, (topicFreq.get(topic) || 0) + 1);
      }
    }
  }

  const totalSolved = totalCorrect + totalWrong + totalBlank;
  const totalNet = (totalCorrect - totalWrong / 4).toFixed(2);
  const accuracyPct = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;
  const completionRate = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
  const avgFocus = focusCount > 0 ? (focusSum / focusCount).toFixed(1) : null;

  const wrongTopics = [...topicFreq.entries()]
    .map(([topic, count]) => ({ topic, count }))
    .sort((a, b) => (b.count - a.count) || a.topic.localeCompare(b.topic, 'tr'));

  return {
    totalTasks,
    completedCount,
    partialCount,
    failedCount,
    missedCount,
    pendingCount,
    completionRate,
    avgFocus,
    focusCount,
    lowFocusCount,
    diffCounts,
    diffTotal,
    hardCount,
    notedCount,
    issueCount,
    totalPlannedMin,
    totalLoggedMin,
    loggedTaskCount,
    totalCompletedPlannedMin,
    totalSolved,
    totalCorrect,
    totalWrong,
    totalBlank,
    totalNet,
    accuracyPct,
    blockers,
    wrongTopics,
    quickCounts: {
      all: totalTasks,
      hard: hardCount,
      noted: notedCount,
      issues: issueCount,
      low_focus: lowFocusCount,
      completed: completedCount,
    },
  };
}

/**
 * Haftalık görevleri hızlı filtre, kategori, zorluk, arama sorgusu ve sıralama ölçütüne göre filtreler & sıralar.
 */
export function filterAndSortWeeklyTasks(weekTasks, opts = {}, todayDs) {
  const tasks = Array.isArray(weekTasks) ? weekTasks : [];
  const {
    quickFilter = 'all',
    category = 'all',
    difficulty = 'all',
    search = '',
    sort = 'date',
  } = opts || {};

  const filtered = tasks.filter(t => {
    if (category !== 'all' && t?.type !== category) return false;

    if (difficulty !== 'all' && Number(t?.student_feedback?.difficulty || 0) !== Number(difficulty)) {
      return false;
    }

    if (quickFilter === 'hard') {
      if (Number(t?.student_feedback?.difficulty || 0) < 4) return false;
    } else if (quickFilter === 'noted') {
      if (!String(t?.student_note || '').trim()) return false;
    } else if (quickFilter === 'issues') {
      const st = getTaskStatusMeta(t, todayDs);
      if (st.code === 'completed' && !t?.student_feedback?.blocker) return false;
    } else if (quickFilter === 'low_focus') {
      const fc = Number(t?.student_feedback?.focus || 0);
      if (!(fc > 0 && fc <= 2)) return false;
    } else if (quickFilter === 'completed') {
      const st = getTaskStatusMeta(t, todayDs);
      if (st.code !== 'completed') return false;
    }

    if (search && String(search).trim()) {
      if (!matchesWeeklyQuery(t, search)) return false;
    }

    return true;
  });

  const tieBreak = (a, b) => {
    const d = String(a?.date || '').localeCompare(String(b?.date || ''));
    if (d !== 0) return d;
    return String(a?.subject || '').localeCompare(String(b?.subject || ''), 'tr');
  };

  const list = [...filtered];
  if (sort === 'date_desc') {
    list.sort((a, b) => {
      const d = String(b?.date || '').localeCompare(String(a?.date || ''));
      if (d !== 0) return d;
      return String(a?.subject || '').localeCompare(String(b?.subject || ''), 'tr');
    });
  } else if (sort === 'alpha') {
    list.sort((a, b) => {
      const s = String(a?.subject || '').localeCompare(String(b?.subject || ''), 'tr');
      if (s !== 0) return s;
      return String(a?.date || '').localeCompare(String(b?.date || ''));
    });
  } else if (sort === 'status') {
    list.sort((a, b) => (getTaskStatusMeta(b, todayDs).weight - getTaskStatusMeta(a, todayDs).weight) || tieBreak(a, b));
  } else if (sort === 'status_incomplete') {
    list.sort((a, b) => (getTaskStatusMeta(a, todayDs).weight - getTaskStatusMeta(b, todayDs).weight) || tieBreak(a, b));
  } else if (sort === 'result') {
    list.sort((a, b) => {
      const rA = computeTaskResultMeta(a);
      const rB = computeTaskResultMeta(b);
      const hasA = rA && rA.total > 0 ? 1 : 0;
      const hasB = rB && rB.total > 0 ? 1 : 0;
      if (hasB !== hasA) return hasB - hasA;
      if (rA && rB) {
        if (rB.net !== rA.net) return rB.net - rA.net;
        if (rB.total !== rA.total) return rB.total - rA.total;
      }
      return tieBreak(a, b);
    });
  } else if (sort === 'duration') {
    list.sort((a, b) => {
      const dA = computeTaskDurationMeta(a);
      const dB = computeTaskDurationMeta(b);
      if (dB.effectiveMin !== dA.effectiveMin) return dB.effectiveMin - dA.effectiveMin;
      return tieBreak(a, b);
    });
  } else if (sort === 'focus') {
    list.sort((a, b) => {
      const fA = Number(a?.student_feedback?.focus || 0);
      const fB = Number(b?.student_feedback?.focus || 0);
      if (fB !== fA) return fB - fA;
      return tieBreak(a, b);
    });
  } else if (sort === 'focus_asc') {
    list.sort((a, b) => {
      const fA = Number(a?.student_feedback?.focus || 0);
      const fB = Number(b?.student_feedback?.focus || 0);
      if (fA <= 0 && fB > 0) return 1;
      if (fB <= 0 && fA > 0) return -1;
      if (fA !== fB) return fA - fB;
      return tieBreak(a, b);
    });
  } else if (sort === 'difficulty') {
    list.sort((a, b) => {
      const dA = Number(a?.student_feedback?.difficulty || 0);
      const dB = Number(b?.student_feedback?.difficulty || 0);
      if (dB !== dA) return dB - dA;
      return tieBreak(a, b);
    });
  } else {
    list.sort(tieBreak);
  }

  return list;
}

/**
 * Görevin sonucuna, zorluğuna, engeline ve öğrenci notuna göre koça hızlı mesaj taslağı üretir.
 */
export function buildCoachTaskMessageDraft(studentName, task, todayDs) {
  const first = String(studentName || '').trim().split(/\s+/)[0];
  const greet = first ? `Selam ${first},` : 'Selam,';
  const taskLabel = String(task?.subject || 'görevin').trim();

  const st = getTaskStatusMeta(task, todayDs);
  const diff = Number(task?.student_feedback?.difficulty || 0);
  const blocker = task?.student_feedback?.blocker || '';
  const blockerText = blocker ? (BLOCKER_LABELS[blocker] || blocker) : '';
  const res = computeTaskResultMeta(task);
  const note = String(task?.student_note || '').trim();
  const shortNote = note.length > 75 ? note.slice(0, 72) + '...' : note;

  if (st.code === 'failed' || st.code === 'missed') {
    const whyPart = blockerText ? ` ("${blockerText}" sebebiyle)` : '';
    return `${greet} "${taskLabel}" görevini${whyPart} tamamlayamadığını gördüm. Takıldığın noktaları kısaca yazar mısın, birlikte planlayalım?`;
  }

  if (st.code === 'partial') {
    const whyPart = blockerText ? ` (${blockerText})` : '';
    return `${greet} "${taskLabel}" görevini kısmen tamamlamışsın${whyPart}. Kalan kısmı nasıl bölüp bitirebileceğimizi birlikte netleştirelim.`;
  }

  if (diff >= 4 || (res && res.wrongTopics.length > 0)) {
    const notePart = shortNote ? ` ("${shortNote}")` : '';
    const topicPart = res?.wrongTopics?.length
      ? ` Özellikle ${res.wrongTopics.slice(0, 3).join(', ')} kısımlarında`
      : '';
    return `${greet} "${taskLabel}" çalışmasında biraz zorlandığını${notePart}${topicPart} gördüm. Takıldığın yerlerin üzerinden birlikte geçelim mi?`;
  }

  if (note) {
    return `${greet} "${taskLabel}" görevi için yazdığın "${shortNote}" notunu okudum. Birlikte üzerinden geçmemizi ister misin?`;
  }

  if (res && res.total > 0) {
    return `${greet} "${taskLabel}" sonucunu (${res.dogru}D ${res.yanlis}Y · ${res.netLabel} net) inceledim. Nasıl geçti, değerlendirmek ister misin?`;
  }

  return `${greet} "${taskLabel}" görevinle ilgili değerlendirme yapmak istedim, nasıl gitti?`;
}
