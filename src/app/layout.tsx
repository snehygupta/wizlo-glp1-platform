import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Best White-Label GLP-1 Telehealth Platform in the US (2026)',
  description: 'A complete comparison guide to the 7 best white-label GLP-1 telehealth platforms for digital clinic operators in the US. Compare features, pricing, and LegitScript support.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
      <footer className='flex items-center justify-center w-full h-24 border-t text-emerald-700 font-semibold'>
        <a
          className='flex items-center justify-center'
          href='https://artifactbin.com?utm_source=template-repo&utm_campaign=oss'
          target='_blank'
          rel='noopener noreferrer'
        >
          Deployed by Artifact Bin
        </a>
      </footer>
    </html>
  );
}
