'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-plum-900">
              ZuriVibes
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-sm ml-4 mr-4">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, products..."
                className="flex-1 px-3 py-1.5 border border-mauve-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-mauve-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-mauve-700 text-white rounded-r-lg hover:bg-mauve-800 transition-colors text-sm"
              >
                🔍
              </button>
            </form>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Link
              href="/login"
              className="px-3 py-1.5 border border-mauve-700 text-mauve-700 rounded-lg hover:bg-mauve-50 transition-colors text-sm"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-3 py-1.5 bg-mauve-700 text-white rounded-lg hover:bg-mauve-800 transition-colors text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
