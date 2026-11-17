import { SupabaseClient } from '@supabase/supabase-js';

// EXAM_DEFS ve netColor eşikleri, ana vanilla JS uygulamasıyla (src/state.js,
// src/helpers.js) BİREBİR aynı tutuluyor ki iki taraf da aynı öğrenci için
// aynı "zayıf ders" sonucunu üretsin.
const EXAM_DEFS: Record<string, string[]> = {
  TYT: ['Türkçe', 'Matematik', 'Fen', 'Sosyal'],
  'AYT-SAY': ['Matematik', 'Fizik', 'Kimya', 'Biyoloji'],
  'AYT-EA': ['Matematik', 'Edebiyat', 'Tarih', 'Coğrafya'],
  'AYT-SOZ': ['Edebiyat', 'Tarih1', 'Tarih2', 'Coğrafya1', 'Coğrafya2', 'Felsefe', 'Din'],
  LGS: ['Türkçe', 'Matematik', 'Fen', 'İnkılap', 'Din', 'İngilizce'],
  KPSS: ['Genel Yetenek', 'Genel Kültür'],
  ALES: ['Sayısal', 'Sözel'],
  YDT: ['İngilizce'],
};

const EXAM_SORU: Record<string, Record<string, number>> = {
  TYT: { Türkçe: 40, Matematik: 40, Fen: 20, Sosyal: 20 },
  'AYT-SAY': { Matematik: 40, Fizik: 14, Kimya: 13, Biyoloji: 13 },
  'AYT-EA': { Matematik: 40, Edebiyat: 24, Tarih: 10, Coğrafya: 6 },
  'AYT-SOZ': { Edebiyat: 24, Tarih1: 10, Coğrafya1: 6, Tarih2: 11, Coğrafya2: 11, Felsefe: 12, Din: 6 },
  LGS: { Türkçe: 20, Matematik: 20, Fen: 20, İnkılap: 10, Din: 10, İngilizce: 10 },
  KPSS: { 'Genel Yetenek': 60, 'Genel Kültür': 60 },
  ALES: { Sayısal: 50, Sözel: 50 },
  YDT: { İngilizce: 80 },
};

function netColor(v: number, maxQ = 40): 'good' | 'mid' | 'low' {
  const ratio = v / Math.max(maxQ, 1);
  if (ratio >= 0.50) return 'good';
  if (ratio >= 0.30) return 'mid';
  return 'low';
}

export interface StudentContext {
  hasData: boolean;
  studentName: string;
  yksArea: string;
  examType: string | null;
  totalNet: number | null;
  weakSubjects: { subject: string; lastNet: number; avgNet: number }[];
}

interface ExamRow {
  name: string;
  date: string;
  exam_type: string;
  nets: Record<string, number>;
}

export async function getStudentContext(
  supabase: SupabaseClient,
  studentId: string,
  studentName: string,
  yksArea: string
): Promise<StudentContext> {
  const empty: StudentContext = { hasData: false, studentName, yksArea, examType: null, totalNet: null, weakSubjects: [] };

  const { data: exams, error } = await supabase
    .from('exams')
    .select('name,date,exam_type,nets')
    .eq('student_id', studentId)
    .order('date', { ascending: false });

  if (error || !exams || exams.length === 0) return empty;

  const rows = exams as ExamRow[];
  const lastExam = rows[0];
  const fields = EXAM_DEFS[lastExam.exam_type] || [];
  if (fields.length === 0) return empty;

  const sameTypeExams = rows.filter((e) => e.exam_type === lastExam.exam_type);

  const avgs = fields.map((f) => {
    const vals = sameTypeExams.map((e) => Number(e.nets?.[f] || 0));
    const avg = vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0;
    const last = Number(lastExam.nets?.[f] || 0);
    const maxQ = EXAM_SORU[lastExam.exam_type]?.[f] || 40;
    return { subject: f, lastNet: last, avgNet: Math.round(avg * 10) / 10, color: netColor(last, maxQ) };
  });

  const totalNet = Math.round(fields.reduce((s, f) => s + Number(lastExam.nets?.[f] || 0), 0) * 10) / 10;
  const weakSubjects = avgs.filter((a) => a.color === 'low').map(({ subject, lastNet, avgNet }) => ({ subject, lastNet, avgNet }));

  return { hasData: true, studentName, yksArea, examType: lastExam.exam_type, totalNet, weakSubjects };
}
