'use client';

import { useAuth, AuthProvider } from '@/lib/useAuth';
import Navigation from './navigation';
import Footer from './footer';
import { usePathname } from 'next/navigation';

export function ClientWrapper({ children }: { children: React.ReactNode }): JSX.Element {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <AuthProvider>
      <>
        <Navigation />
        {children}
        <Footer />
      </>
    </AuthProvider>
  );
}
