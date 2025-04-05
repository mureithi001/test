import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClientWrapper } from './components/client-wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ZuriVibes - Natural Beauty Solutions',
  description: 'Discover natural beauty products and wellness solutions for a healthy lifestyle.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>
          <main className="min-h-screen bg-blush-50">
            {children}
          </main>
        </ClientWrapper>
      </body>
    </html>
  );
}
