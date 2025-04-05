'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/useAuth';

const PROTECTED_ROUTES = [
  '/dashboard',
  '/checkout',
  '/profile',
  '/payment',
  '/premium',
  '/search',
  '/subscription',
];

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user && PROTECTED_ROUTES.includes(pathname)) {
      router.push('/login');
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-plum-900"></div>
      </div>
    );
  }

  if (!user && PROTECTED_ROUTES.includes(pathname)) {
    return null;
  }

  return <>{children}</>;
}
