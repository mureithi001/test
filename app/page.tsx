'use client';

import type { NextPage } from 'next';
import Link from "next/link";
import { getFeaturedEBooks } from '@/lib/supabase';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import Articles from '@/components/articles';
import EBooks from '@/components/ebooks';
import PremiumSection from '@/components/premium-section';
import EBooksSection from '@/components/ebooks-section';
import HeroCarousel from '@/components/hero-carousel';

const Page: NextPage = () => {
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
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default Page;
