'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ProtectedRoute from '../components/ProtectedRoute';

export default function AboutPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-blush-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-mauve-700 to-plum-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                ZuriVibes
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Your Natural Glow-Up Guide
              </p>
              <p className="text-lg max-w-3xl mx-auto">
                🌟 Not just a blog. A glow-up plug for every woman ready to feel beautiful—naturally.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-plum-900 mb-4">
              Our Story
            </h2>
            <p className="text-mauve-700 mb-8">
              ZuriVibes was born from a simple idea: every woman deserves to feel beautiful and confident in her own skin—naturally.
            </p>
            <p className="text-mauve-700 mb-8">
              We know the struggle of trying countless products and remedies that promise results but deliver disappointment. That's why we created ZuriVibes—to be your trusted guide on your natural glow-up journey.
            </p>
          </div>

          {/* What We Do Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-plum-900 mb-8 text-center">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blush-50 p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4 text-gold-900">🔍</div>
                <h3 className="text-xl font-semibold text-plum-900 mb-2">Honest Reviews</h3>
                <p className="text-mauve-700">
                  We test everything ourselves and only recommend what actually works.
                </p>
              </div>
              <div className="bg-blush-50 p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4 text-gold-900">🌟</div>
                <h3 className="text-xl font-semibold text-plum-900 mb-2">Natural Solutions</h3>
                <p className="text-mauve-700">
                  We focus on natural methods that are safe and effective for your body.
                </p>
              </div>
              <div className="bg-blush-50 p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4 text-gold-900">👥</div>
                <h3 className="text-xl font-semibold text-plum-900 mb-2">Community Support</h3>
                <p className="text-mauve-700">
                  Join our community of women supporting each other's glow-up journeys.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-plum-900 mb-8 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blush-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-plum-900 mb-4">Transparency</h3>
                <p className="text-mauve-700">
                  We never hide behind fancy marketing. You get the real truth about what works and what doesn't.
                </p>
              </div>
              <div className="bg-blush-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-plum-900 mb-4">Affordability</h3>
                <p className="text-mauve-700">
                  We believe in making natural beauty accessible to everyone. That's why our eBooks start at just KES 200.
                </p>
              </div>
              <div className="bg-blush-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-plum-900 mb-4">Community</h3>
                <p className="text-mauve-700">
                  We're more than just a blog. We're a community of women supporting each other's glow-up journeys.
                </p>
              </div>
              <div className="bg-blush-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-plum-900 mb-4">Natural First</h3>
                <p className="text-mauve-700">
                  We believe in harnessing the power of nature to achieve beautiful results.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-plum-900 mb-8">
              Join Our Community
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="/articles"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-mauve-700 hover:bg-mauve-800"
              >
                📖 Read Free Articles
              </a>
              <a
                href="/premium"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-plum-900 hover:bg-plum-800"
              >
                🔓 Subscribe to Premium - KES 100
              </a>
              <a
                href="/ebooks"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-mauve-700 hover:bg-mauve-800"
              >
                📚 Grab Your First eBook - KES 200
              </a>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
