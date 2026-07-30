import { SupabaseClient } from '@supabase/supabase-js';

// EXAM_DEFS ve netColor eşikleri, ana vanilla JS uygulamasıyla (src/state.js,
// src/helpers.js) BİREBİR aynı tutuluyor ki iki taraf da aynı öğrenci için
// aynı "zayıf ders" sonucunu üretsin.
const EXAM_DEFS: Record<string, string[]> = {
  TYT: ['Türkçe', 'Matematik', 'Fen', 'Sosyal'],
  'AYT-SAY': ['Matematik', 'Fizik', 'Kimya', 'Biyoloji'],
  'AYT-EA': ['Matematik', 'Edebiyat', 'Tarih', 'Coğrafya'],
  'AYT-SOZ': ['Edebiyat', 'Tarih1', 'Tarih2', 'Coğrafya1', 'Coğrafya2', 'Felsefe', 'Din'],
};

function netColor(v: number): 'good' | 'mid' | 'low' {
  if (v >= 20) return 'good';
  if (v >= 12) return 'mid';
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
    return { subject: f, lastNet: last, avgNet: Math.round(avg * 10) / 10, color: netColor(last) };
  });

  const totalNet = Math.round(fields.reduce((s, f) => s + Number(lastExam.nets?.[f] || 0), 0) * 10) / 10;
  const weakSubjects = avgs.filter((a) => a.color === 'low').map(({ subject, lastNet, avgNet }) => ({ subject, lastNet, avgNet }));

  return { hasData: true, studentName, yksArea, examType: lastExam.exam_type, totalNet, weakSubjects };
}
