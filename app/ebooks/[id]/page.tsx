'use client';

import Link from 'next/link';
import { useAuth } from '@/lib/useAuth';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Ebook {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  coverImage: string;
  content: string;
  author: string;
  publishedDate: string;
}

export default function EbookDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { user } = useAuth();
  const [ebook, setEbook] = useState<Ebook | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEbook = async () => {
      try {
        const { data, error } = await supabase
          .from('ebooks')
          .select('*')
          .eq('id', params.id)
          .single();

        if (error) throw error;
        setEbook(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load ebook');
      } finally {
        setLoading(false);
      }
    };

    fetchEbook();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-plum-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
          <p className="text-red-500">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!ebook) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Not Found</h1>
          <p className="text-red-500">Ebook not found</p>
          <Link
            href="/ebooks"
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Back to Ebooks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-blush-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/3"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-96">
                <img
                  src={ebook.coverImage}
                  alt={ebook.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-plum-900 mb-2">
                  {ebook.title}
                </h2>
                <p className="text-mauve-700 mb-4">{ebook.description}</p>
                <p className="text-plum-900 font-semibold">
                  ${ebook.price.toFixed(2)}
                </p>
                <Link
                  href="/checkout"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-plum-900 hover:bg-plum-800"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-2/3"
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-plum-900 mb-4">Table of Contents</h2>
              <div className="space-y-4">
                {/* Add table of contents */}
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-plum-900 mb-4">About the Author</h2>
                <p className="text-mauve-700">
                  {ebook.author}
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-plum-900 mb-4">Published</h2>
                <p className="text-mauve-700">
                  {new Date(ebook.publishedDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-plum-900 mb-4">Related Ebooks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add related ebooks */}
          </div>
        </div>
      </div>
    </main>
  );
}
