'use client';

import { useEffect, useState } from 'react';
import { CopilotKit, useCopilotReadable, useCopilotAction } from '@copilotkit/react-core';
import { SupabaseClient } from '@supabase/supabase-js';
import { createBridgedSupabaseClient } from '../lib/supabaseClient';
import { getStudentContext, StudentContext } from '../lib/studentContext';
import { buildStudentSystemPrompt } from '../lib/systemPrompt';
import ChatPanel from '../components/ChatPanel';

// Ana vanilla JS uygulamasından (rostrumakademi.com) gelen kimlik/bağlam
// aktarım mesajının biçimi. Bkz. plan: src/ui.js içindeki initAIChatForRole().
interface BridgePayload {
  type: 'ROSTRUM_AI_AUTH';
  accessToken: string;
  studentId: string;
  coachId: string | null;
  studentName: string;
  yksArea: string;
}

const ALLOWED_ORIGINS = (process.env.NEXT_PUBLIC_ALLOWED_PARENT_ORIGINS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

function isAllowedOrigin(origin: string): boolean {
  if (ALLOWED_ORIGINS.length === 0) return true; // yerel geliştirme fallback
  return ALLOWED_ORIGINS.includes(origin);
}

export default function Page() {
  const [bridge, setBridge] = useState<BridgePayload | null>(null);
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);
  const [context, setContext] = useState<StudentContext | null>(null);
  const [status, setStatus] = useState<'waiting' | 'loading' | 'ready' | 'error'>('waiting');

  // 1) Ebeveyn pencereye "hazırım" sinyali gönder — ebeveyn sadece bu sinyali
  // aldıktan sonra kimlik/bağlam bilgisini postMessage ile yollar (iframe
  // "load" olayı React hydrate olmadan önce ateşlenebileceği için yarış
  // durumunu önler).
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!isAllowedOrigin(event.origin)) return;
      const data = event.data as BridgePayload;
      if (!data || data.type !== 'ROSTRUM_AI_AUTH' || !data.accessToken || !data.studentId) return;
      setBridge(data);
    };
    window.addEventListener('message', onMessage);
    window.parent.postMessage({ type: 'ROSTRUM_AI_READY' }, '*');
    return () => window.removeEventListener('message', onMessage);
  }, []);

  // 2) Kimlik geldiğinde: öğrencinin KENDİ JWT'siyle Supabase client'ı kur,
  // gerçek net/zayıf ders verisini çek.
  useEffect(() => {
    if (!bridge) return;
    setStatus('loading');
    const client = createBridgedSupabaseClient(bridge.accessToken);
    setSupabase(client);
    getStudentContext(client, bridge.studentId, bridge.studentName, bridge.yksArea)
      .then((ctx) => {
        setContext(ctx);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, [bridge]);

  if (status === 'waiting' || status === 'loading') {
    return <CenterMessage text="Bağlanıyor..." />;
  }
  if (status === 'error' || !bridge || !supabase || !context) {
    return <CenterMessage text="Bağlantı kurulamadı. Sayfayı yenilemeyi dene." />;
  }

  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      <AssistantInner context={context} supabase={supabase} studentId={bridge.studentId} coachId={bridge.coachId} />
    </CopilotKit>
  );
}

function AssistantInner({
  context,
  supabase,
  studentId,
  coachId,
}: {
  context: StudentContext;
  supabase: SupabaseClient;
  studentId: string;
  coachId: string | null;
}) {
  const weakList = context.weakSubjects.map((w) => `${w.subject} (son net: ${w.lastNet}, ortalama: ${w.avgNet})`).join(', ');

  useCopilotReadable({
    description: 'Sistem kuralları, bilgi tabanı ve öğrencinin gerçek, doğrulanmış akademik verileri',
    value: `${buildStudentSystemPrompt()}

════ ÖĞRENCİ BİLGİLERİ (GERÇEK, DOĞRULANMIŞ VERİ) ════
Ad: ${context.studentName}
YKS Alanı: ${context.yksArea}
${
  context.hasData
    ? `Son ${context.examType} denemesi toplam net: ${context.totalNet}
Zayıf dersler (son denemede 12 net altı): ${weakList || 'yok — tüm dersler 12 net üzerinde'}`
    : 'Öğrenci henüz deneme sonucu girmemiş — net/zayıf ders verisi yok, tahmin yürütme, sorarak öğren.'
}`,
  });

  useCopilotAction({
    name: 'addAssignmentToSchedule',
    description:
      'Öğrencinin kendi isteğiyle, zayıf olduğu bir konuda haftalık programına ek bir pratik görevi ekler. Bu, koçun programını DEĞİŞTİRMEZ — öğrencinin kendi eklediği ek bir görevdir. Sadece öğrenci açıkça bir konuda pratik/telafi eklemek istediğini belirtince kullan.',
    parameters: [
      { name: 'subject', type: 'string', description: 'Ders adı (ör. Matematik, Kimya)', required: true },
      { name: 'topic', type: 'string', description: 'Çalışılacak konu başlığı', required: true },
      { name: 'durationMinutes', type: 'number', description: 'Tahmini süre (dakika), belirtilmezse 30', required: false },
    ],
    handler: async ({ subject, topic, durationMinutes }: { subject: string; topic: string; durationMinutes?: number }) => {
      const dateStr = new Date().toISOString().slice(0, 10);
      const { error } = await supabase.from('tasks').insert({
        student_id: studentId,
        coach_id: coachId || null,
        date: dateStr,
        type: 'soru',
        subject,
        duration: durationMinutes || 30,
        note: `AI Ders Asistanı önerisi: ${topic}`,
        added_by_student: true,
      });
      if (error) return `Görev eklenemedi: ${error.message}`;
      return `"${topic}" konusunda ${subject} dersine bugünkü programına bir pratik görevi eklendi ✓`;
    },
  });

  const embedded = typeof window !== 'undefined' && window.location.search.includes('embed=1');

  return <ChatPanel weakSubjects={context.weakSubjects.map((w) => w.subject)} embedded={embedded} />;
}

function CenterMessage({ text }: { text: string }) {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--panel-solid)',
        color: 'var(--text-dim)',
        fontSize: 13,
      }}
    >
      {text}
    </div>
  );
}
