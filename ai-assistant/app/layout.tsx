import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Yapay Zeka Ders Asistanı — Rostrum Akademi',
  description: 'Rostrum Akademi öğrenci paneli için AI ders asistanı widget’ı',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
