'use client';

import { useAuth } from '@/lib/useAuth';
import ProtectedRoute from '@/components/ProtectedRoute';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PaymentPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('Please login to proceed with payment');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Mock payment processing - in a real app, this would integrate with a payment gateway
      console.log('Processing payment...');
      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess(true);
    } catch (err) {
      setError('Payment processing failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-blush-50">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h1 className="text-3xl font-bold text-plum-900 mb-8 text-center">
                {success ? 'Payment Successful' : 'Complete Payment'}
              </h1>

              {success ? (
                <div className="text-center">
                  <div className="mb-8">
                    <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h2 className="mt-3 text-xl font-semibold text-plum-900">
                      Payment Completed Successfully!
                    </h2>
                    <p className="mt-2 text-mauve-700">
                      Your payment has been processed successfully. You can now access your purchased content.
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/premium"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-plum-900 hover:bg-plum-800"
                    >
                      Access Premium Content
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {error && (
                    <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg">
                      {error}
                    </div>
                  )}

                  <div className="bg-blush-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-plum-900 mb-4">
                      Payment Details
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-mauve-700">Total Amount</span>
                        <span className="text-plum-900">KES 400</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-mauve-700">Payment Method</span>
                        <span className="text-plum-900">M-Pesa</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handlePayment} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-mauve-700 mb-1">
                        M-Pesa Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-2 border border-mauve-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve-500"
                        placeholder="Enter your M-Pesa phone number"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-plum-900 text-white py-3 px-6 rounded-lg hover:bg-plum-800 transition-colors"
                    >
                      {loading ? 'Processing Payment...' : 'Pay Now'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}
