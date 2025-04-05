'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/useAuth';
import { useState } from 'react';
import { Button } from './ui/button';

interface NavigationProps {
  // Add any props that the Navigation component might receive
}

const Navigation = () => {
  const { user, signOut, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return (
    <nav className="navbar bg-glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center"
            >
              <span className="gradient-text text-2xl font-bold">
                ZuriVibes
              </span>
            </Link>

            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-plum-900 hover:text-rose-500 hover-glow transition-all duration-300"
              >
                Home
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-plum-900 hover:text-rose-500 hover-glow transition-all duration-300"
              >
                Products
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-plum-900 hover:text-rose-500 hover-glow transition-all duration-300"
              >
                Services
              </Link>

              <Link
                href="/ebooks"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-plum-900 hover:text-rose-500 hover-glow transition-all duration-300"
              >
                eBooks
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-plum-900 hover:text-rose-500 hover-glow transition-all duration-300"
              >
                Blog
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-plum-900 hover:text-rose-500 hover-glow transition-all duration-300"
              >
                About
              </Link>
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {loading ? (
              <div className="flex items-center space-x-4">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-plum-900"></div>
              </div>
            ) : (
              <div className="ml-3 relative">
                {user ? (
                  <>
                    <Button
                      onClick={handleSignOut}
                      variant="outline"
                      size="sm"
                      className="hover-glow transition-all duration-300"
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="hover-glow transition-all duration-300"
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="outline"
              size="sm"
              className="hover-glow transition-all duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-plum-900 hover:text-rose-500 hover-glow transition-all duration-300"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="block px-3 py-2 rounded-md text-base font-medium text-plum-900 hover:text-rose-500 hover-glow transition-all duration-300"
          >
            Products
          </Link>

          <Link
            href="/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-plum-900 hover:text-rose-500 hover-glow transition-all duration-300"
          >
            Services
          </Link>

          <Link
            href="/ebooks"
            className="block px-3 py-2 rounded-md text-base font-medium text-plum-900 hover:text-rose-500 hover-glow transition-all duration-300"
          >
            eBooks
          </Link>

          <Link
            href="/blog"
            className="block px-3 py-2 rounded-md text-base font-medium text-plum-900 hover:text-rose-500 hover-glow transition-all duration-300"
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-plum-900 hover:text-rose-500 hover-glow transition-all duration-300"
          >
            About
          </Link>
        </div>

        <div className="pt-4 pb-3 border-t border-mauve-700">
          <div className="px-2">
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-plum-900 mx-auto"></div>
            ) : (
              <div className="space-y-1">
                {user ? (
                  <>
                    <Button
                      onClick={handleSignOut}
                      variant="outline"
                      size="sm"
                      className="hover-glow transition-all duration-300"
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="hover-glow transition-all duration-300"
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
