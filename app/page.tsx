'use client';

import type { NextPage } from 'next';
import Link from "next/link";
import HeroCarousel from '@/components/hero-carousel';
import Articles from '@/components/articles';
import { EBooks } from '@/components/ebooks';
import Navigation from '@/components/navigation';
import { useAuth } from '@/lib/useAuth';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { motion } from 'framer-motion';

const Page: NextPage = () => {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-blush-50">
        <Navigation />
        <main className="min-h-screen bg-blush-50">
          <HeroCarousel />
          <Articles />

          {/* Digital Products Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-16">
                <EBooks />
              </div>
              <div className="text-center">
                <Link
                  href="/ebooks"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-mauve-700 hover:bg-mauve-800 transition-colors"
                >
                  View All eBooks →
                </Link>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-blush-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl text-mauve-700 mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-plum-900 mb-2">Free Content</h3>
                  <p className="text-mauve-700">
                    Access thousands of articles, tutorials, and resources for free.
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl text-mauve-700 mb-4">⭐</div>
                  <h3 className="text-xl font-semibold text-plum-900 mb-2">Premium Access</h3>
                  <p className="text-mauve-700">
                    Unlock exclusive content, advanced tutorials, and premium features.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-blush-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-plum-900 mb-4">
                  What Our Community Says
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Testimonial 1 */}
                <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-gold-900 text-2xl">⭐⭐⭐⭐⭐</div>
                  <p className="text-mauve-700 mb-4">
                    "I've tried so many beauty products that didn't work, but ZuriVibes' natural approach finally gave me the results I wanted. Their honest reviews and community support made all the difference!"
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center">
                      <span className="text-gold-900">A</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-plum-900">Amina</h3>
                      <p className="text-mauve-700">@aminaglowup</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-gold-900 text-2xl">⭐⭐⭐⭐⭐</div>
                  <p className="text-mauve-700 mb-4">
                    "The ZuriVibes community is like a sisterhood. We support each other's glow-up journeys and celebrate every success. Plus, their natural solutions really work!"
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center">
                      <span className="text-gold-900">N</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-plum-900">Nia</h3>
                      <p className="text-mauve-700">@niaglow</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white p-6 rounded-lg shadow-sm relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-gold-900 text-2xl">⭐⭐⭐⭐⭐</div>
                  <p className="text-mauve-700 mb-4">
                    "I was skeptical about natural beauty solutions, but ZuriVibes changed my mind. Their detailed reviews and community support have been invaluable in my journey to natural beauty."
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center">
                      <span className="text-gold-900">S</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-plum-900">Sarah</h3>
                      <p className="text-mauve-700">@sarahsbeautyjourney</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/community"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-mauve-700 hover:bg-mauve-800"
                >
                  Join Our Community →
                </Link>
              </div>
            </div>
          </section>

          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-mauve-700 to-plum-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Premium Content, Free to Start
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Access thousands of articles, tutorials, and digital products. Start
                  with free content and upgrade to premium for exclusive access.
                </p>
                <div className="flex justify-center gap-4">
                  <Link
                    href="/pricing"
                    className="bg-white text-mauve-700 px-8 py-3 rounded-lg font-semibold hover:bg-blush-50 transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/blog"
                    className="text-white px-8 py-3 rounded-lg font-semibold hover:text-white/80 transition-colors"
                  >
                    Explore Blog
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-blush-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl text-mauve-700 mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-plum-900 mb-2">Free Content</h3>
                  <p className="text-mauve-700">
                    Access thousands of articles, tutorials, and resources for free.
                  </p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl text-mauve-700 mb-4">⭐</div>
                  <h3 className="text-xl font-semibold text-plum-900 mb-2">Premium Access</h3>
                  <p className="text-mauve-700">
                    Unlock exclusive content, advanced tutorials, and premium features.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Articles Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-plum-900 mb-12">
                Latest Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((article) => (
                  <div
                    key={article}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-plum-900 mb-2">
                        Sample Article Title
                      </h3>
                      <p className="text-mauve-700 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <Link
                        href="/blog/article-slug"
                        className="text-mauve-700 hover:text-plum-900"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default Page;
