'use client';

import { useAuth } from '@/lib/useAuth';
import ProtectedRoute from './ProtectedRoute';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
  slug: string;
}

const ebooks: eBook[] = [
  {
    id: 1,
    title: 'The Nyash Growth Guide',
    description: 'Comprehensive guide to natural breast enhancement',
    image: '/images/ebooks/nyash-guide.jpg',
    price: 20000,
    category: 'Breast Enhancement',
    rating: 4.8,
    reviews: 658,
    featured: true,
    slug: 'the-nyash-growth-guide'
  },
  {
    id: 2,
    title: 'Hips Enlargement Handbook',
    description: 'Natural methods for bigger, curvier hips',
    image: '/images/ebooks/hips-guide.jpg',
    price: 20000,
    category: 'Hips',
    rating: 4.9,
    reviews: 624,
    featured: true,
    slug: 'hips-enlargement-handbook'
  },
  {
    id: 3,
    title: 'Natural Skin Care Secrets',
    description: 'Holistic approach to beautiful skin',
    image: '/images/ebooks/skin-care.jpg',
    price: 15000,
    category: 'Skin Care',
    rating: 4.7,
    reviews: 687,
    featured: true,
    slug: 'natural-skin-secrets'
  },
  {
    id: 4,
    title: 'Hair Growth Bible',
    description: 'Natural techniques for thicker, healthier hair',
    image: '/images/ebooks/hair-guide.jpg',
    price: 18000,
    category: 'Hair Care',
    rating: 4.8,
    reviews: 643,
    featured: true,
    slug: 'natural-hair-bible'
  },
  {
    id: 5,
    title: 'Body Confidence Blueprint',
    description: 'Building self-esteem through natural beauty',
    image: '/images/ebooks/confidence-guide.jpg',
    price: 12000,
    category: 'Self-Improvement',
    rating: 4.6,
    reviews: 589,
    featured: false,
    slug: 'confidence-blueprint'
  }
];

interface EBook {
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  slug: string;
}

export const EBookCard = ({ title, description, image, price, rating, reviews, slug }: EBook) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-plum-900 mb-2">
          {title}
        </h3>
        <p className="text-mauve-700 mb-4">{description}</p>
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex items-center">
            {Array.from({ length: Math.floor(rating) }, (_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            {rating % 1 !== 0 && (
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
          </div>
          <span className="text-sm text-mauve-700">{rating.toFixed(1)} ({reviews} reviews)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-mauve-700">
            KES {price.toLocaleString()}
          </span>
          <Link
            href={`/ebooks/${slug}`}
            className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-mauve-700 hover:bg-mauve-800 transition-colors"
          >
            Get Access
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

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

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setSortOption('featured')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                sortOption === 'featured'
                  ? 'bg-mauve-700 text-white'
                  : 'bg-mauve-100 text-mauve-700 hover:bg-mauve-200'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setSortOption('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                sortOption === 'all'
                  ? 'bg-mauve-700 text-white'
                  : 'bg-mauve-100 text-mauve-700 hover:bg-mauve-200'
              }`}
            >
              All
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'All'
                  ? 'bg-mauve-700 text-white'
                  : 'bg-mauve-100 text-mauve-700 hover:bg-mauve-200'
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setActiveCategory('Breast Enhancement')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'Breast Enhancement'
                  ? 'bg-mauve-700 text-white'
                  : 'bg-mauve-100 text-mauve-700 hover:bg-mauve-200'
              }`}
            >
              Breast Enhancement
            </button>
            <button
              onClick={() => setActiveCategory('Hips')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'Hips'
                  ? 'bg-mauve-700 text-white'
                  : 'bg-mauve-100 text-mauve-700 hover:bg-mauve-200'
              }`}
            >
              Hips
            </button>
            <button
              onClick={() => setActiveCategory('Skin Care')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'Skin Care'
                  ? 'bg-mauve-700 text-white'
                  : 'bg-mauve-100 text-mauve-700 hover:bg-mauve-200'
              }`}
            >
              Skin Care
            </button>
            <button
              onClick={() => setActiveCategory('Hair Care')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'Hair Care'
                  ? 'bg-mauve-700 text-white'
                  : 'bg-mauve-100 text-mauve-700 hover:bg-mauve-200'
              }`}
            >
              Hair Care
            </button>
            <button
              onClick={() => setActiveCategory('Self-Improvement')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'Self-Improvement'
                  ? 'bg-mauve-700 text-white'
                  : 'bg-mauve-100 text-mauve-700 hover:bg-mauve-200'
              }`}
            >
              Self-Improvement
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shopEbooks.map((ebook) => (
            <EBookCard
              key={ebook.id}
              title={ebook.title}
              description={ebook.description}
              image={ebook.image}
              price={ebook.price}
              rating={ebook.rating}
              reviews={ebook.reviews}
              slug={ebook.slug}
            />
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
                  <span>KES {item.price.toLocaleString()}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4 border-t border-mauve-200">
                <span className="text-lg font-semibold text-plum-900">Total</span>
                <span className="text-lg font-bold text-mauve-700">
                  KES {cartItems.reduce((sum, item) => sum + item.price, 0).toLocaleString()}
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
