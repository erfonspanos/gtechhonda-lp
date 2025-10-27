import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Honda Service - Oficina Especializada em Honda',
  description: 'Oficina especializada em veículos Honda com mais de 15 anos de experiência. Manutenção, revisão e serviços especializados com tecnologia de ponta.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
