'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const slides = [
  {
    title: 'Natural Beauty Solutions',
    description: 'Discover the power of natural ingredients for your skin and hair',
    image: '/hero-1.jpg'
  },
  {
    title: 'DIY Skincare Recipes',
    description: 'Create your own effective skincare products at home',
    image: '/hero-2.jpg'
  },
  {
    title: 'Expert Guidance',
    description: 'Get personalized advice from our beauty experts',
    image: '/hero-3.jpg'
  }
]

export default function HeroCarousel() {
  return (
    <div className="relative h-[600px]">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  {slide.description}
                </p>
                <a
                  href="/premium"
                  className="bg-plum-900 text-white px-8 py-4 rounded-lg hover:bg-plum-800 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
