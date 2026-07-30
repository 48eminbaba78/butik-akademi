'use client';

import { useEffect, useRef, useState } from 'react';
import { useCopilotChat } from '@copilotkit/react-core';
import { Role, TextMessage } from '@copilotkit/runtime-client-gql';
import Header from './Header';
import Disclaimer from './Disclaimer';
import QuickActions from './QuickActions';

interface ChatPanelProps {
  weakSubjects: string[];
  embedded?: boolean;
}

export default function ChatPanel({ weakSubjects, embedded }: ChatPanelProps) {
  const { visibleMessages, appendMessage, isLoading } = useCopilotChat();
  const [input, setInput] = useState('');
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [visibleMessages, isLoading]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    appendMessage(new TextMessage({ content: trimmed, role: Role.User }));
    setInput('');
  };

  const hasStarted = visibleMessages.length > 0;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        background: 'var(--panel)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {!embedded && <Header />}
      {!hasStarted && <Disclaimer />}

      <div ref={listRef} style={{ flex: 1, overflowY: 'auto', padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {!hasStarted && (
          <div style={{ textAlign: 'center', padding: '18px 8px', color: 'var(--text-dim)', fontSize: 12.5, animation: 'fadeUp .3s ease' }}>
            Merhaba! Bir soru sor ya da aşağıdaki hızlı işlemlerden birini seç.
          </div>
        )}
        {visibleMessages.map((m: any) => {
          const isUser = m.role === Role.User || m.role === 'user';
          if (!m.content) return null;
          return (
            <div
              key={m.id}
              style={{
                alignSelf: isUser ? 'flex-end' : 'flex-start',
                maxWidth: '86%',
                padding: '9px 12px',
                borderRadius: isUser ? '14px 14px 3px 14px' : '14px 14px 14px 3px',
                background: isUser ? 'var(--gradient)' : 'rgba(255,255,255,.05)',
                border: isUser ? 'none' : '1px solid var(--border)',
                color: isUser ? '#fff' : 'var(--text)',
                fontSize: 13,
                lineHeight: 1.55,
                whiteSpace: 'pre-wrap',
                animation: 'fadeUp .25s ease',
              }}
            >
              {m.content}
            </div>
          );
        })}
        {isLoading && (
          <div
            style={{
              alignSelf: 'flex-start',
              padding: '9px 14px',
              borderRadius: '14px 14px 14px 3px',
              background: 'rgba(255,255,255,.05)',
              border: '1px solid var(--border)',
              display: 'flex',
              gap: 4,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--text-dim)',
                  animation: `pulseDot 1s ${i * 0.15}s infinite`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <QuickActions onSend={send} weakSubjects={weakSubjects} />

      <div style={{ display: 'flex', gap: 8, padding: '10px 14px 14px', flexShrink: 0 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              send(input);
            }
          }}
          placeholder="Bir soru sor..."
          style={{
            flex: 1,
            padding: '10px 14px',
            borderRadius: 12,
            border: '1px solid var(--border)',
            background: 'rgba(255,255,255,.04)',
            color: 'var(--text)',
            fontSize: 13,
            outline: 'none',
          }}
        />
        <button
          type="button"
          onClick={() => send(input)}
          disabled={!input.trim() || isLoading}
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            border: 'none',
            background: 'var(--gradient)',
            color: '#fff',
            fontSize: 16,
            cursor: input.trim() ? 'pointer' : 'default',
            opacity: input.trim() ? 1 : 0.4,
            flexShrink: 0,
          }}
        >
          ➜
        </button>
      </div>
    </div>
  );
}
