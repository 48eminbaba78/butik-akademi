import { NextRequest } from 'next/server';
import { CopilotRuntime, GroqAdapter, copilotRuntimeNextJSAppRouterEndpoint } from '@copilotkit/runtime';
import Groq from 'groq-sdk';

// Yeni bir LLM sağlayıcı/anahtar icat edilmiyor — platformun geri kalanının
// (api/ai-chat.js) zaten kullandığı Groq + aynı model, CopilotKit'in resmi
// GroqAdapter'ı üzerinden bağlanıyor.
//
// İstemci/runtime kasıtlı olarak istek içinde kuruluyor (modül kapsamında değil):
// Next.js build sırasında route modüllerini env değişkenleri henüz set edilmemişken
// analiz edebiliyor, modül kapsamındaki bir Groq() çağrısı bu durumda build'i kırar.
function handle(req: NextRequest) {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const serviceAdapter = new GroqAdapter({ groq, model: 'llama-3.3-70b-versatile' });
  const runtime = new CopilotRuntime();

  return copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: '/api/copilotkit',
  }).handleRequest(req);
}

export async function POST(req: NextRequest) {
  return handle(req);
}
