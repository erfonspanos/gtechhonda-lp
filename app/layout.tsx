import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import WhatsappButton from '@/components/ui/WhatsappButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'G-Tech Honda - Oficina Especializada em Honda',
  description: 'A única oficina em Fortaleza 100% especializada em veículos Honda. Mais de 15 anos de experiência em manutenção, revisão e serviços de ponta exclusivamente para a marca.',
  icons: {
    icon: '/logo-gtech.png', // Usa a logo que está em public/logo-gtech.png
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}
        <WhatsappButton/>
      </body>
    </html>
  );
}
