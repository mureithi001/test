'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { ClerkProvider } from '@clerk/nextjs';
import Navbar from '@/components/navigation';
import { AuthProvider } from '@/lib/useAuth';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthProvider>
          <div className="min-h-screen flex flex-col bg-blush-50">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}
