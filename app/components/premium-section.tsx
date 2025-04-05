'use client';

import { motion } from 'framer-motion';
import { useAuth } from '@/lib/useAuth';

const PremiumSection = () => {
  const { user } = useAuth();

  const premiumFeatures = [
    {
      color: 'bg-red-500',
      title: 'Exclusive Content',
      description: 'Access to premium guides, videos, and expert advice'
    },
    {
      color: 'bg-blue-500',
      title: 'Ad-Free Experience',
      description: 'Enjoy a clean, distraction-free browsing experience'
    },
    {
      color: 'bg-green-500',
      title: 'Priority Support',
      description: 'Get faster responses and personalized assistance'
    },
    {
      color: 'bg-purple-500',
      title: 'Private Community',
      description: 'Join our exclusive members-only community'
    }
  ];

  return (
    <div className="bg-plum-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-plum-900 mb-4">
            Premium Membership
          </h2>
          <p className="text-mauve-700 max-w-2xl mx-auto">
            Unlock exclusive content, ad-free browsing, and priority support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {premiumFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-plum-100 rounded-full mb-4">
                <div className={`w-6 h-6 rounded-full ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-plum-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-mauve-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-mauve-700 to-plum-900 hover:from-mauve-800 hover:to-plum-900 transition-colors"
          >
            Join Premium
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default PremiumSection;
