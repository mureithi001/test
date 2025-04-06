'use client'

import { useAuth } from '@/lib/useAuth'
import ProtectedRoute from './ProtectedRoute'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Article {
  id: string
  title: string
  description: string
  publishedAt: string
}

const articles: Article[] = [
  {
    id: '1',
    title: 'Natural Skincare for Every Skin Type',
    description: 'Learn how to create a skincare routine that works for your unique skin type using natural ingredients.',
    publishedAt: '2025-04-01'
  },
  {
    id: '2',
    title: 'DIY Hair Care Recipes',
    description: 'Discover how to make your own hair care products using simple ingredients from your kitchen.',
    publishedAt: '2025-04-02'
  }
]

export default function Articles() {
  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-plum-900 mb-8">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blush-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-plum-900 mb-2">
                {article.title}
              </h3>
              <p className="text-mauve-700 mb-4">{article.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-mauve-600">
                  {new Date(article.publishedAt).toLocaleDateString()}
                </span>
                <Link
                  href={`/articles/${article.id}`}
                  className="text-plum-900 hover:text-plum-800 font-medium"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  )
}
