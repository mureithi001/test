'use client'

import { useAuth } from '@/lib/useAuth'
import ProtectedRoute from './ProtectedRoute'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface EBook {
  id: string
  title: string
  description: string
  coverImage: string
  price: number
}

const ebooks: EBook[] = [
  {
    id: '1',
    title: 'The Natural Beauty Guide',
    description: 'A comprehensive guide to achieving beautiful skin naturally.',
    coverImage: '/ebooks/beauty-guide.jpg',
    price: 29.99
  },
  {
    id: '2',
    title: 'DIY Skincare Recipes',
    description: 'Learn to make your own effective skincare products at home.',
    coverImage: '/ebooks/skincare-recipes.jpg',
    price: 19.99
  }
]

export default function EBooks() {
  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-plum-900 mb-8">
          Featured E-Books
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((ebook) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blush-50 p-6 rounded-lg shadow-sm"
            >
              <div className="relative h-48 w-full mb-4">
                <img
                  src={ebook.coverImage}
                  alt={ebook.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-plum-900 mb-2">
                {ebook.title}
              </h3>
              <p className="text-mauve-700 mb-4">{ebook.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-plum-900 font-bold">
                  ${ebook.price.toFixed(2)}
                </span>
                <Link
                  href={`/ebooks/${ebook.id}`}
                  className="text-plum-900 hover:text-plum-800 font-medium"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  )
}
