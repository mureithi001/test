'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
  {
    title: 'How to Grow Your Nyash Naturally',
    description: 'Discover natural techniques to enhance your curves',
    image: '/images/nyash.jpg',
    buttons: [
      { text: 'Read Free Tips', href: '/tips/nyash' },
      { text: 'Unlock Premium 🔒', href: '/premium/nyash' }
    ]
  },
  {
    title: 'Firm Breasts Without Surgery',
    description: 'Natural methods to achieve firmer, healthier breasts',
    image: '/images/breasts.jpg',
    buttons: [
      { text: 'Read Free Tips', href: '/tips/breasts' },
      { text: 'Unlock Premium 🔒', href: '/premium/breasts' }
    ]
  },
  {
    title: 'Reduce Thigh Darkness',
    description: 'Natural remedies for darker inner thighs',
    image: '/images/thighs.jpg',
    buttons: [
      { text: 'Read Free Tips', href: '/tips/thighs' },
      { text: 'Unlock Premium 🔒', href: '/premium/thighs' }
    ]
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px]">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-blush-50">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl">
                    {slide.description}
                  </p>
                  <div className="flex gap-4">
                    {slide.buttons.map((button, idx) => (
                      <a
                        key={idx}
                        href={button.href}
                        className={`inline-flex items-center px-6 py-3 rounded-md transition-colors ${
                          idx === 0
                            ? 'bg-white text-plum-900 hover:bg-blush-50'
                            : 'bg-mauve-700 text-white hover:bg-mauve-800'
                        }`}
                      >
                        {button.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-colors ${
              index === currentSlide
                ? 'bg-mauve-700'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
