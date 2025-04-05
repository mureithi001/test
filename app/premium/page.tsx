'use client';

import { useAuth } from '@/lib/useAuth';
import ProtectedRoute from '@/components/ProtectedRoute';
import { motion } from 'framer-motion';

const premiumContent = {
  title: 'Premium Content',
  content: `
    <h2>Welcome to Premium Content</h2>
    <p>Thank you for choosing our premium membership. Here you'll find exclusive content and advanced guides.</p>

    <h3>Available Premium Content</h3>
    <ul>
      <li>Nyash Growth Secrets</li>
      <li>Breast Firming Techniques</li>
      <li>Intimate Care Guide</li>
      <li>Hip Enlargement Tips</li>
      <li>Hormonal Balance Guide</li>
    </ul>

    <h3>How to Access Content</h3>
    <ol>
      <li>Click on any category above</li>
      <li>Read the detailed guides</li>
      <li>Follow the step-by-step instructions</li>
    </ol>

    <h3>Member Benefits</h3>
    <ul>
      <li>Unlimited access to all guides</li>
      <li>Exclusive community support</li>
      <li>Regular content updates</li>
      <li>Priority customer support</li>
    </ul>
  `
};

export default function PremiumPage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-blush-50">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-plum-900 mb-8">Premium Content</h1>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div
                dangerouslySetInnerHTML={{ __html: premiumContent.content }}
                className="prose max-w-none"
              />
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-semibold text-plum-900 mb-4">
                Premium Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Nyash Growth', 'Breast Firming', 'Intimate Care', 'Hip Enlargement', 'Hormonal Balance'].map((category) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-plum-900 mb-2">
                        {category}
                      </h3>
                      <p className="text-mauve-700 mb-4">
                        Get expert guidance and proven techniques
                      </p>
                      <Link
                        href={`/premium/${category.toLowerCase().replace(' ', '-')}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        View Guide
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}
