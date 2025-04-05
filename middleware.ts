import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@/lib/supabase';

const publicRoutes = ['/'];

const isPublicRoute = (path: string): boolean => {
  return publicRoutes.includes(path);
};

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();

  // If the route is public and the user is authenticated, redirect to dashboard
  if (isPublicRoute(request.nextUrl.pathname) && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // If the route is private and the user is not authenticated, redirect to login
  const privateRoutes = ['/dashboard', '/profile', '/premium'];
  if (privateRoutes.includes(request.nextUrl.pathname) && !session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If the user is trying to access signup/login while authenticated, redirect to dashboard
  if ((request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup') && session) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};