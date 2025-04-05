'use client';

import { useAuth } from '@/lib/useAuth';
import ProtectedRoute from '@/components/ProtectedRoute';
import { motion } from 'framer-motion';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-blush-50">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-plum-900 mb-8">Your Profile</h1>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Profile Information */}
                <div>
                  <h2 className="text-xl font-semibold text-plum-900 mb-4">
                    Profile Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-mauve-700">
                        Email
                      </label>
                      <p className="mt-1 text-mauve-700">
                        {user?.email || 'Email not available'}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-mauve-700">
                        Account Type
                      </label>
                      <p className="mt-1 text-mauve-700">
                        {user?.user_metadata?.subscription_type || 'Free'}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-mauve-700">
                        Member Since
                      </label>
                      <p className="mt-1 text-mauve-700">
                        {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Account Actions */}
                <div>
                  <h2 className="text-xl font-semibold text-plum-900 mb-4">
                    Account Actions
                  </h2>
                  <div className="space-y-4">
                    <Link
                      href="/profile/edit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full justify-center"
                    >
                      Edit Profile
                    </Link>
                    <Link
                      href="/profile/change-password"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full justify-center"
                    >
                      Change Password
                    </Link>
                    <Link
                      href="/profile/subscription"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 w-full justify-center"
                    >
                      Manage Subscription
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold text-plum-900 mb-4">
                Recent Activity
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-mauve-700">
                        Last Login
                      </h3>
                      <p className="text-sm text-mauve-500">
                        {user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : 'Never'}
                      </p>
                    </div>
                    <div className="text-sm text-mauve-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-mauve-700">
                        Last Article Read
                      </h3>
                      <p className="text-sm text-mauve-500">
                        {user?.user_metadata?.last_article || 'No articles read yet'}
                      </p>
                    </div>
                    <div className="text-sm text-mauve-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
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
