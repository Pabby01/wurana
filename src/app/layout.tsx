import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import MainLayout from '@/components/layout/MainLayout';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Wurana - Decentralized Artisan Marketplace',
  description: 'Connect with skilled artisans globally on the Solana blockchain',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
