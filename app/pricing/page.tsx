'use client';

import { useAuth } from '@/lib/useAuth';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PricingPage() {
  const { user } = useAuth();
  const router = useRouter();

  const prices = {
    monthly: 'monthly_plan',
    yearly: 'yearly_plan',
  };

  const handleCheckout = async (priceId: string) => {
    if (!user) {
      router.push('/login');
      return;
    }

    try {
      // Mock checkout - in a real app, this would create a Stripe checkout session
      console.log('Creating checkout session for:', priceId);
      router.push('/premium');
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  return (
    <div className="min-h-screen bg-blush-50">
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-plum-900 mb-8 text-center">
            Choose Your Plan
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Monthly Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-2xl font-semibold text-plum-900 mb-4">
                Monthly Plan
              </h2>
              <p className="text-4xl font-bold text-mauve-700 mb-6">
                KES 100 / month
              </p>
              <ul className="space-y-2 text-mauve-700 mb-6">
                <li>Access to all premium content</li>
                <li>Unlimited article downloads</li>
                <li>Priority support</li>
                <li>Monthly Q&A sessions</li>
              </ul>
              <button
                onClick={() => handleCheckout(prices.monthly)}
                className="w-full bg-mauve-700 hover:bg-mauve-800 text-white py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe Monthly
              </button>
            </motion.div>

            {/* Yearly Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-2xl font-semibold text-plum-900 mb-4">
                Yearly Plan
              </h2>
              <p className="text-4xl font-bold text-mauve-700 mb-6">
                KES 999 / year
              </p>
              <div className="text-mauve-700 mb-6">
                <span className="text-2xl">Save 20%</span>
                <span className="text-sm ml-2 line-through">KES 1,249</span>
              </div>
              <ul className="space-y-2 text-mauve-700 mb-6">
                <li>Access to all premium content</li>
                <li>Unlimited article downloads</li>
                <li>Priority support</li>
                <li>Monthly Q&A sessions</li>
                <li>Exclusive content</li>
                <li>Personal coaching sessions</li>
              </ul>
              <button
                onClick={() => handleCheckout(prices.yearly)}
                className="w-full bg-mauve-700 hover:bg-mauve-800 text-white py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe Yearly
              </button>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-plum-900 mb-8 text-center">
              What You Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-blush-50 p-6 rounded-lg"
              >
                <div className="text-3xl text-mauve-700 mb-4">📚</div>
                <h3 className="text-xl font-semibold text-plum-900 mb-2">
                  Premium Content
                </h3>
                <p className="text-mauve-700">
                  Access all premium articles, guides, and resources
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-blush-50 p-6 rounded-lg"
              >
                <div className="text-3xl text-mauve-700 mb-4">⭐</div>
                <h3 className="text-xl font-semibold text-plum-900 mb-2">
                  Priority Support
                </h3>
                <p className="text-mauve-700">
                  Get priority access to our expert support team
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-blush-50 p-6 rounded-lg"
              >
                <div className="text-3xl text-mauve-700 mb-4">👥</div>
                <h3 className="text-xl font-semibold text-plum-900 mb-2">
                  Community Access
                </h3>
                <p className="text-mauve-700">
                  Join our exclusive community of members
                </p>
              </motion.div>
            </div>
          </div>

          {/* Call to Action Section */}
          {!user && (
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-plum-900 mb-4">
                Ready to Upgrade?
              </h3>
              <p className="text-mauve-700 mb-6">
                Create an account to access premium content and features
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/login"
                  className="px-6 py-3 bg-mauve-700 text-white rounded-lg hover:bg-mauve-800 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-6 py-3 border border-mauve-700 text-mauve-700 rounded-lg hover:bg-mauve-50 transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
