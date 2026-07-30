interface QuickActionsProps {
  onSend: (message: string) => void;
  weakSubjects: string[];
}

const btnStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  padding: '9px 10px',
  borderRadius: 10,
  border: '1px solid var(--border)',
  background: 'rgba(255,255,255,.03)',
  color: 'var(--text)',
  fontSize: 11.5,
  fontWeight: 600,
  cursor: 'pointer',
  textAlign: 'left',
  transition: 'border-color .15s, background .15s, transform .1s',
};

export default function QuickActions({ onSend, weakSubjects }: QuickActionsProps) {
  const weakList = weakSubjects.length > 0 ? weakSubjects.join(', ') : null;

  const actions: { icon: string; label: string; message: string; accent: 'purple' | 'orange' }[] = [
    {
      icon: '👉',
      label: 'Çözemediğim Soru Var',
      message:
        'Çözemediğim bir soru var. Sana fotoğrafını göndereceğim ya da yazacağım; Sokratik tarzda, adım adım ipuçları vererek çözmeme yardım eder misin?',
      accent: 'purple',
    },
    {
      icon: '📖',
      label: 'Konu Özeti Çıkar',
      message: 'Hangi konuyu en sade haliyle özetlememi istersin?',
      accent: 'orange',
    },
    {
      icon: '🎯',
      label: 'Zayıf Konuları Çalış',
      message: weakList
        ? `Zayıf olduğum derslerde (${weakList}) telafi çalışması yapmak istiyorum, bana yol gösterir misin?`
        : 'Zayıf olduğum konular üzerinde çalışıp pratik yapmak istiyorum. Hangi derslerden yardıma ihtiyacım olduğunu sorup pratik yapalım.',
      accent: 'purple',
    },
    {
      icon: '⚡',
      label: 'Hızlı Sınav Yap',
      message: 'Bana seçtiğim bir konudan 3 soruluk hızlı bir mini quiz yapar mısın? Soruları tek tek sor.',
      accent: 'orange',
    },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8,
        padding: '10px 14px',
        flexShrink: 0,
      }}
    >
      {actions.map((a) => (
        <button
          key={a.label}
          type="button"
          style={btnStyle}
          onClick={() => onSend(a.message)}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = a.accent === 'purple' ? 'var(--purple)' : 'var(--orange)';
            e.currentTarget.style.background = a.accent === 'purple' ? 'var(--purple-dim)' : 'var(--orange-dim)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.background = 'rgba(255,255,255,.03)';
          }}
        >
          <span>{a.icon}</span>
          <span>{a.label}</span>
        </button>
      ))}
    </div>
  );
}
