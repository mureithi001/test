'use client';

import { useAuth } from '@/lib/useAuth';
import ProtectedRoute from './ProtectedRoute';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Article {
  title: string;
  description: string;
  color: string;
  href: string;
  category: string;
}

const freeArticles: Article[] = [
  {
    title: 'How to Reduce Inner Thigh Darkness',
    description: 'Natural remedies and home treatments to lighten dark inner thighs',
    color: 'bg-mauve-700',
    href: '/articles/thighs',
    category: 'Skin Care'
  },
  {
    title: 'DIY Natural Skincare Recipes',
    description: 'Create your own effective skincare products at home',
    color: 'bg-plum-900',
    href: '/articles/skincare',
    category: 'DIY Beauty'
  },
  {
    title: 'Track Your Menstrual Cycle',
    description: 'Learn how to monitor and understand your menstrual cycle',
    color: 'bg-gold-900',
    href: '/articles/cycle',
    category: 'Health & Wellness'
  }
];

const lockedArticles: Article[] = [
  {
    title: 'Nyash Growth Secrets',
    description: 'Proven techniques for natural breast enhancement',
    color: 'bg-mauve-700',
    href: '/pricing',
    category: 'Breast Enhancement'
  },
  {
    title: 'Flat Tummy Guide',
    description: 'Step-by-step guide to achieve a flatter stomach',
    color: 'bg-plum-900',
    href: '/pricing',
    category: 'Body Shaping'
  },
  {
    title: 'Natural Ways to Tighten the Kitty',
    description: 'Safe and effective methods for vaginal tightening',
    color: 'bg-gold-900',
    href: '/pricing',
    category: 'Intimate Care'
  },
  {
    title: 'Firm Breasts After Birth',
    description: 'Post-pregnancy breast firming techniques',
    color: 'bg-mauve-700',
    href: '/pricing',
    category: 'Postnatal Care'
  },
  {
    title: 'Foods That Help Enlarge Your Hips',
    description: 'Nutrition guide for natural hip enhancement',
    color: 'bg-plum-900',
    href: '/pricing',
    category: 'Body Enhancement'
  },
  {
    title: 'Hormonal Harmony Glow-Up',
    description: 'Balance hormones for better skin and body',
    color: 'bg-gold-900',
    href: '/pricing',
    category: 'Hormonal Health'
  }
];

export const ArticleCard = ({ title, description, color, href, category }: Article) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <div className="relative h-48">
        <div className={`absolute inset-0 ${color} rounded-t-lg`}>
          {/* Color fill instead of image */}
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 uppercase mb-2">
          {category}
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Read Now
        </Link>
      </div>
    </motion.div>
  );
};

export default function Articles() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Featured Articles
      </h2>

      {/* Free Articles Section */}
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Free Articles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {freeArticles.map((article, index) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>

      {/* Locked Articles Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Premium Articles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lockedArticles.map((article, index) => (
            <div key={article.title} className="relative">
              <ArticleCard {...article} />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                🔒
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Unlock All Premium Content 🔒
          </Link>
        </div>
      </div>
    </div>
  );
}
