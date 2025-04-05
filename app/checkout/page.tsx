'use client';

import { useAuth } from '@/lib/useAuth';
import ProtectedRoute from '@/components/ProtectedRoute';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CheckoutPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Please login to proceed with checkout');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Mock checkout - in a real app, this would create a Stripe checkout session
      console.log('Creating checkout session...');
      // Redirect to payment page
      window.location.href = '/payment';
    } catch (err) {
      setError('Failed to create checkout session');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-blush-50">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-plum-900 mb-8 text-center">
              Checkout
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Cart Summary */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-plum-900 mb-4">
                  Cart Summary
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-mauve-700">Nyash Growth Guide</span>
                    <span className="text-plum-900">KES 200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mauve-700">Hips Enlargement Handbook</span>
                    <span className="text-plum-900">KES 200</span>
                  </div>
                  <div className="border-t border-blush-200 pt-4">
                    <div className="flex justify-between font-semibold">
                      <span className="text-plum-900">Total</span>
                      <span className="text-plum-900">KES 400</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkout Form */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-plum-900 mb-6">
                  Payment Information
                </h2>

                {error && (
                  <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-mauve-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-mauve-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-mauve-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-mauve-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve-500"
                      placeholder="Enter your email"
                      defaultValue={user?.email}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-mauve-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-mauve-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve-500"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-mauve-700 mb-1">
                      Payment Method
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-mauve-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve-500"
                    >
                      <option value="">Select payment method</option>
                      <option value="mpesa">M-Pesa</option>
                      <option value="card">Credit/Debit Card</option>
                      <option value="bank">Bank Transfer</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-plum-900 text-white py-3 px-6 rounded-lg hover:bg-plum-800 transition-colors"
                  >
                    {loading ? 'Processing...' : 'Complete Purchase'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}
