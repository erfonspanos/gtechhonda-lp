import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import WhatsappButton from '@/components/ui/WhatsappButton';
import Script from 'next/script';

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
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TP32FTBS');
        `}
      </Script>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TP32FTBS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
        <WhatsappButton/>
      </body>
    </html>
  );
}
