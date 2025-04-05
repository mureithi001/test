'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/useAuth';
import ProtectedRoute from '@/components/ProtectedRoute';
import { motion } from 'framer-motion';

const searchContent = [
  {
    title: 'How to Reduce Inner Thigh Darkness',
    type: 'Article',
    category: 'Skin Care',
    description: 'Natural remedies and home treatments to lighten dark inner thighs',
    color: 'bg-mauve-700',
    href: '/articles/thighs'
  },
  {
    title: 'DIY Natural Skincare Recipes',
    type: 'Article',
    category: 'DIY Beauty',
    description: 'Create your own effective skincare products at home',
    color: 'bg-plum-900',
    href: '/articles/skincare'
  },
  {
    title: 'The Nyash Growth Guide',
    type: 'EBook',
    category: 'Breast Enhancement',
    description: 'Comprehensive guide to natural breast enhancement',
    color: 'bg-mauve-700',
    href: '/ebooks/1'
  },
  {
    title: 'Hips Enlargement Handbook',
    type: 'EBook',
    category: 'Hips',
    description: 'Natural methods for bigger, curvier hips',
    color: 'bg-plum-900',
    href: '/ebooks/2'
  }
];

export default function SearchPage() {
  interface SearchResult {
    title: string;
    type: string;
    category: string;
    description: string;
    color: string;
    href: string;
  }

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    if (query) {
      setSearchQuery(query);
      handleSearch(query);
    }
  }, []);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      // Mock search - in a real app, this would query your database
      const filteredResults = searchContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-blush-50">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-plum-900 mb-8">Search Results</h1>

            {/* Search Bar */}
            <div className="mb-8">
              <form onSubmit={(e) => {
                e.preventDefault();
                handleSearch(searchQuery);
              }}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles, ebooks, and more..."
                    className="w-full px-4 py-2 border border-mauve-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bg-mauve-700 text-white px-4 py-2 rounded-lg hover:bg-mauve-800"
                  >
                    🔍
                  </button>
                </div>
              </form>
            </div>

            {/* Results */}
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mauve-700"></div>
              </div>
            ) : results.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-plum-900 mb-4">
                  No results found
                </h2>
                <p className="text-mauve-700">
                  Try adjusting your search terms or explore our categories
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((result, index) => (
                  <motion.div
                    key={result.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <div className="relative h-48">
                      <div className={`absolute inset-0 ${result.color} rounded-t-lg`}>
                        {/* Color fill instead of image */}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-plum-900 mb-2">
                        {result.title}
                      </h3>
                      <p className="text-sm text-mauve-700 mb-2">
                        {result.type} • {result.category}
                      </p>
                      <p className="text-mauve-700 line-clamp-2 mb-4">
                        {result.description}
                      </p>
                      <Link
                        href={result.href}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        View {result.type}
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}
