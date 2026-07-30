export default function Header() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '16px 18px',
        borderBottom: '1px solid var(--border)',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          background: 'var(--gradient)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
          flexShrink: 0,
          boxShadow: '0 4px 16px rgba(139,92,246,.35)',
        }}
      >
        🎓
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 14.5, fontWeight: 800, letterSpacing: -0.2 }}>Yapay Zeka Ders Asistanı</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: 'var(--green)',
              display: 'inline-block',
              animation: 'pulseDot 1.8s infinite',
            }}
          />
          <span style={{ fontSize: 11, color: 'var(--text-dim)', fontWeight: 600 }}>Çevrimiçi</span>
        </div>
      </div>
    </div>
  );
}
