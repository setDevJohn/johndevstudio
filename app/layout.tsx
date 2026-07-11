import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';
import { Toaster } from 'sonner';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Dev | Full Stack Developer',
  description:
    'Desenvolvedor Full Stack especialista em interfaces modernas, backend robusto e soluções escaláveis.',
  icons: {
    icon: [
      {
        url: '/logo.png',
      },
    ],
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html className="bg-[#0f1113]" lang="pt-BR">
      <body className="bg-[#0f1113] font-sans antialiased">
        {children}

        <Toaster duration={4000} position="top-right" closeButton richColors />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
