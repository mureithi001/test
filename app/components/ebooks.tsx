'use client';

import { useAuth } from '@/lib/useAuth';
import { ProtectedRoute } from './ProtectedRoute';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface eBook {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  featured: boolean;
}

const ebooks: eBook[] = [
  {
    id: 1,
    title: 'The Nyash Growth Guide',
    description: 'Comprehensive guide to natural breast enhancement',
    image: '/images/ebooks/nyash-guide.jpg',
    price: 200,
    category: 'Breast Enhancement',
    rating: 4.8,
    reviews: 658,
    featured: true
  },
  {
    id: 2,
    title: 'Hips Enlargement Handbook',
    description: 'Natural methods for bigger, curvier hips',
    image: '/images/ebooks/hips-guide.jpg',
    price: 200,
    category: 'Hips',
    rating: 4.9,
    reviews: 624,
    featured: true
  },
  {
    id: 3,
    title: 'Skin Glow Guide',
    description: 'Achieve natural, radiant skin',
    image: '/images/ebooks/skin-guide.jpg',
    price: 200,
    category: 'Skin Care',
    rating: 4.7,
    reviews: 687,
    featured: true
  },
  {
    id: 4,
    title: 'Natural Hair Bible',
    description: 'Comprehensive guide to healthy, beautiful natural hair',
    image: '/images/ebooks/hair-guide.jpg',
    price: 200,
    category: 'Hair Care',
    rating: 4.8,
    reviews: 643,
    featured: true
  }
];

export const EBooks = () => {
  const { user } = useAuth();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [cartItems, setCartItems] = useState<eBook[]>([]);
  const [sortOption, setSortOption] = useState<string>('featured');

  const filteredEbooks = ebooks.filter(ebook => 
    (activeCategory === 'All' || ebook.category === activeCategory) &&
    (sortOption === 'featured' ? ebook.featured : true)
  );

  // For shop section, only show 4 featured ebooks
  const shopEbooks = filteredEbooks.filter(e => e.featured).slice(0, 4);

  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-plum-900 mb-4">Our eBooks</h2>
          <p className="text-mauve-700 max-w-2xl mx-auto">
            Discover our collection of expert guides for natural beauty and wellness
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shopEbooks.map((ebook) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={ebook.image}
                  alt={ebook.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-plum-900 mb-2">{ebook.title}</h3>
                <p className="text-mauve-700 mb-4 line-clamp-3">{ebook.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="text-gold-900">⭐⭐⭐⭐⭐</div>
                    <span className="text-mauve-700 text-sm">{ebook.rating}/5 ({ebook.reviews} reviews)</span>
                  </div>
                  <span className="text-xl font-bold text-plum-900">KES {ebook.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setCartItems([...cartItems, ebook])}
                    className="bg-plum-900 text-white px-4 py-2 rounded-lg hover:bg-plum-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <Link
                    href={`/ebooks/${ebook.id}`}
                    className="px-4 py-2 bg-blush-50 text-mauve-700 rounded-lg hover:bg-blush-100 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="mt-12 p-6 bg-blush-50 rounded-lg">
            <h3 className="text-lg font-semibold text-plum-900 mb-4">Shopping Cart</h3>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 bg-white rounded-lg"
                >
                  <span>{item.title}</span>
                  <span>KES {item.price}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 border-t border-mauve-200">
                <span className="text-lg font-semibold text-plum-900">Total</span>
                <span className="text-lg font-bold text-mauve-700">
                  KES {cartItems.reduce((sum, item) => sum + item.price, 0)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default EBooks;
