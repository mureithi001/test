'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/useAuth';

interface Review {
  id: number;
  name: string;
  profileImage: string;
  review: string;
  rating: number;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah N.',
    profileImage: '/images/profiles/sarah.jpg',
    review: 'The Nyash Growth Guide has been a game-changer for me! The natural methods really work and I\'ve seen amazing results in just a few months.',
    rating: 5,
    date: 'Mar 15, 2025'
  },
  {
    id: 2,
    name: 'Amina K.',
    profileImage: '/images/profiles/amina.jpg',
    review: 'I was skeptical about natural methods, but the Hips Enlargement Handbook proved me wrong. The exercises are easy to follow and the results are visible!',
    rating: 4.8,
    date: 'Apr 1, 2025'
  },
  {
    id: 3,
    name: 'Wambui M.',
    profileImage: '/images/profiles/wambui.jpg',
    review: 'The Skin Care Secrets guide has completely transformed my skin. The natural ingredients and routines have made my skin glow like never before!',
    rating: 4.9,
    date: 'Mar 28, 2025'
  }
];

const eBooks = [
  {
    id: 1,
    title: 'The Nyash Growth Guide',
    description: 'Comprehensive guide to natural breast enhancement',
    image: '/images/ebooks/nyash-guide.jpg',
    price: 20000,
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
    price: 20000,
    category: 'Hips',
    rating: 4.9,
    reviews: 624,
    featured: true
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
    featured: true
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
    featured: true
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
    featured: false
  }
];

const EBooksSection = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* eBooks Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-plum-900 mb-4">Our Expert Guides</h2>
          <p className="text-mauve-700 max-w-2xl mx-auto">
            Discover our collection of expert guides for natural beauty and wellness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eBooks.map((ebook) => (
            <motion.div
              key={ebook.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={ebook.image}
                  alt={ebook.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-plum-900 mb-2">
                  {ebook.title}
                </h3>
                <p className="text-mauve-700 mb-4">{ebook.description}</p>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {Array.from({ length: Math.floor(ebook.rating) }, (_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    {ebook.rating % 1 !== 0 && (
                      <svg
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-mauve-700">{ebook.rating.toFixed(1)} ({ebook.reviews} reviews)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-mauve-700">
                    KES {ebook.price.toLocaleString()}
                  </span>
                  <Link
                    href={`/ebooks/${ebook.id}`}
                    className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-mauve-700 hover:bg-mauve-800 transition-colors"
                  >
                    Get Access
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-blush-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-plum-900 mb-4">What Our Community Says</h2>
            <p className="text-mauve-700 max-w-2xl mx-auto">
              Real experiences from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={review.profileImage}
                        alt={review.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-plum-900">{review.name}</h3>
                      <div className="flex items-center">
                        {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        {review.rating % 1 !== 0 && (
                          <svg
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )}
                        <span className="ml-2 text-sm text-mauve-700">{review.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-mauve-700 mb-4">{review.review}</p>
                  <p className="text-sm text-mauve-500">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EBooksSection;
