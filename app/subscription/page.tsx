'use client';

import { useAuth } from '@/lib/useAuth';
import React from 'react';
import Link from 'next/link';
import ProtectedRoute from '@/components/ProtectedRoute';
import { motion } from 'framer-motion';

const subscriptionPlans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'Access to free articles',
      'Basic support',
      'Monthly updates',
      'Limited resources',
    ],
    buttonText: 'Start Free',
    buttonLink: '/articles',
  },
  {
    name: 'Premium',
    price: '$9.99/month',
    features: [
      'Unlimited article access',
      'Advanced guides',
      'Priority support',
      'Weekly updates',
      'Exclusive content',
      'Downloadable resources',
    ],
    buttonText: 'Subscribe Now',
    buttonLink: '/premium',
  },
  {
    name: 'Pro',
    price: '$19.99/month',
    features: [
      'All Premium features',
      'Personal coaching',
      'Custom content',
      'Priority access',
      'Monthly Q&A sessions',
      'Lifetime access',
    ],
    buttonText: 'Get Pro',
    buttonLink: '/premium/pro',
  },
];

export default function SubscriptionPage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-blush-50">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-plum-900 mb-8">Subscription Plans</h1>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {subscriptionPlans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-blush-50 p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-semibold text-plum-900 mb-4">
                      {plan.name}
                    </h3>
                    <p className="text-3xl font-bold text-plum-900 mb-4">
                      {plan.price}
                    </p>
                    <div className="space-y-2 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-mauve-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={plan.buttonLink}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full justify-center"
                    >
                      {plan.buttonText}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current Subscription */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-plum-900 mb-4">
                Your Current Subscription
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-mauve-700">
                      Current Plan
                    </label>
                    <p className="mt-1 text-mauve-700">
                      {user?.user_metadata?.subscription_type || 'Free'}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mauve-700">
                      Next Billing Date
                    </label>
                    <p className="mt-1 text-mauve-700">
                      {user?.user_metadata?.next_billing_date || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mauve-700">
                      Status
                    </label>
                    <span className={`mt-1 px-2 py-1 rounded-full text-xs font-medium ${
                      user?.user_metadata?.subscription_status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {user?.user_metadata?.subscription_status || 'Free'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}
