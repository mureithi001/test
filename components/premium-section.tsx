'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PremiumSection() {
  return (
    <section className="bg-blush-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-plum-900 text-center mb-8">
          Premium Membership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-plum-900 mb-4">
              Basic
            </h3>
            <p className="text-2xl font-bold text-plum-900 mb-4">
              Free
            </p>
            <ul className="space-y-2 text-mauve-700 mb-4">
              <li>Access to free articles</li>
              <li>Basic support</li>
              <li>Monthly updates</li>
            </ul>
            <Link
              href="/articles"
              className="w-full bg-plum-900 text-white py-3 px-6 rounded-lg hover:bg-plum-800 transition-colors"
            >
              Start Free
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-plum-900 mb-4">
              Premium
            </h3>
            <p className="text-2xl font-bold text-plum-900 mb-4">
              $9.99/month
            </p>
            <ul className="space-y-2 text-mauve-700 mb-4">
              <li>Unlimited article access</li>
              <li>Advanced guides</li>
              <li>Priority support</li>
              <li>Weekly updates</li>
              <li>Exclusive content</li>
            </ul>
            <Link
              href="/premium"
              className="w-full bg-plum-900 text-white py-3 px-6 rounded-lg hover:bg-plum-800 transition-colors"
            >
              Subscribe Now
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-plum-900 mb-4">
              Pro
            </h3>
            <p className="text-2xl font-bold text-plum-900 mb-4">
              $19.99/month
            </p>
            <ul className="space-y-2 text-mauve-700 mb-4">
              <li>All Premium features</li>
              <li>Personal coaching</li>
              <li>Custom content</li>
              <li>Priority access</li>
              <li>Monthly Q&A sessions</li>
              <li>Lifetime access</li>
            </ul>
            <Link
              href="/premium/pro"
              className="w-full bg-plum-900 text-white py-3 px-6 rounded-lg hover:bg-plum-800 transition-colors"
            >
              Get Pro
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
