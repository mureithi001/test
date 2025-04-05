'use client';

import type { NextPage } from 'next';
import Link from "next/link";
import { useAuth } from '@/lib/useAuth';
import { getFeaturedEBooks } from '@/lib/supabase';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import Articles from '@/components/articles';
import EBooks from '@/components/ebooks';
import PremiumSection from '@/components/premium-section';
import EBooksSection from '@/components/ebooks-section';
import Footer from '@/components/footer';

const HeroCarousel = () => {
  const slides = [
    {
      title: 'Natural Beauty Solutions',
      description: 'Discover the power of natural ingredients for your skin and hair',
      image: '/images/carousel/beauty.jpg',
      cta: 'Explore Now',
      link: '/products',
    },
    {
      title: 'Organic Skincare',
      description: 'Nourish your skin with our carefully crafted organic products',
      image: '/images/carousel/skincare.jpg',
      cta: 'Shop Now',
      link: '/products/skincare',
    },
    {
      title: 'Herbal Remedies',
      description: 'Experience the healing power of nature with our herbal remedies',
      image: '/images/carousel/herbal.jpg',
      cta: 'Learn More',
      link: '/remedies',
    },
  ];

  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-plum-900 to-transparent" />
      <div className="carousel relative w-full h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="absolute inset-0"
          >
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl mb-6">{slide.description}</p>
                  <Link
                    href={slide.link}
                    className="inline-block bg-mauve-700 text-white px-6 py-2 rounded-lg hover:bg-mauve-800 transition-colors"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Page: NextPage = () => {
  const { user } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-blush-50">
        <main className="min-h-screen bg-blush-50">
          <HeroCarousel />
          <PremiumSection />
          <EBooksSection />
          <Articles />
          <EBooks />
          <Footer />
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default Page;
