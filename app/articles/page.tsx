'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const articles = [
  {
    title: 'How to Reduce Inner Thigh Darkness',
    content: `
      <h2>Introduction</h2>
      <p>Dark inner thighs can be a common concern for many women. This guide will help you understand the causes and provide natural solutions to lighten them.</p>

      <h2>Causes of Dark Inner Thighs</h2>
      <ul>
        <li>Friction from tight clothing</li>
        <li>Hormonal changes</li>
        <li>Genetics</li>
        <li>Poor hygiene</li>
      </ul>

      <h2>Natural Remedies</h2>
      <ol>
        <li>
          <h3>Lemon Juice Treatment</h3>
          <p>Mix lemon juice with honey and apply to the area. Leave for 15 minutes then rinse.</p>
        </li>
        <li>
          <h3>Aloe Vera Gel</h3>
          <p>Apply fresh aloe vera gel daily for natural lightening.</p>
        </li>
        <li>
          <h3>Coconut Oil Massage</h3>
          <p>Massage coconut oil to reduce friction and moisturize the skin.</p>
        </li>
      </ol>

      <h2>Prevention Tips</h2>
      <ul>
        <li>Wear loose-fitting clothing</li>
        <li>Keep the area clean and dry</li>
        <li>Moisturize regularly</li>
        <li>Avoid harsh chemicals</li>
      </ul>
    `
  },
  {
    title: 'DIY Natural Skincare Recipes',
    content: `
      <h2>Introduction</h2>
      <p>Create your own effective skincare products using natural ingredients.</p>

      <h2>Face Mask Recipes</h2>
      <ol>
        <li>
          <h3>Avocado and Honey Mask</h3>
          <p>Mash half an avocado and mix with 1 tablespoon of honey. Apply and leave for 20 minutes.</p>
        </li>
        <li>
          <h3>Cucumber and Yogurt Mask</h3>
          <p>Blend cucumber with plain yogurt and apply to face. Rinse after 15 minutes.</p>
        </li>
      </ol>

      <h2>Body Scrubs</h2>
      <ol>
        <li>
          <h3>Sugar and Olive Oil Scrub</h3>
          <p>Mix sugar with olive oil for a gentle exfoliant. Use in the shower 2-3 times a week.</p>
        </li>
        <li>
          <h3>Coffee and Coconut Oil Scrub</h3>
          <p>Combine coffee grounds with coconut oil for a revitalizing scrub.</p>
        </li>
      </ol>

      <h2>Tips for Natural Skincare</h2>
      <ul>
        <li>Always patch test new products</li>
        <li>Use fresh ingredients</li>
        <li>Store in airtight containers</li>
        <li>Adjust recipes based on skin type</li>
      </ul>
    `
  },
  {
    title: 'Track Your Menstrual Cycle',
    content: `
      <h2>Introduction</h2>
      <p>Understanding your menstrual cycle can help you manage your health better.</p>

      <h2>Key Phases of the Cycle</h2>
      <ol>
        <li>
          <h3>Menstrual Phase (Days 1-5)</h3>
          <p>Bleeding occurs as the uterus sheds its lining.</p>
        </li>
        <li>
          <h3>Follicular Phase (Days 6-14)</h3>
          <p>Ovaries prepare to release an egg.</p>
        </li>
        <li>
          <h3>Ovulation (Day 14)</h3>
          <p>Egg is released from the ovary.</p>
        </li>
        <li>
          <h3>Luteal Phase (Days 15-28)</h3>
          <p>Uterus prepares for potential pregnancy.</p>
        </li>
      </ol>

      <h2>Tracking Methods</h2>
      <ol>
        <li>
          <h3>Calendar Method</h3>
          <p>Mark the first day of each period to track cycle length.</p>
        </li>
        <li>
          <h3>Basal Body Temperature</h3>
          <p>Track temperature changes to identify ovulation.</p>
        </li>
        <li>
          <h3>Cervical Mucus</h3>
          <p>Monitor changes in cervical fluid to detect fertile days.</p>
        </li>
      </ol>

      <h2>Tips for Cycle Tracking</h2>
      <ul>
        <li>Be consistent with tracking</li>
        <li>Record any symptoms</li>
        <li>Consult a healthcare provider</li>
        <li>Use apps for easier tracking</li>
      </ul>
    `
  }
];

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-blush-50">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-plum-900 mb-8">Free Articles</h1>

          {/* Article List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {articles.map((article) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-plum-900 mb-2">
                    {article.title}
                  </h3>
                  <button
                    onClick={() => setSelectedArticle(article.title)}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Read Article
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Article Content */}
          {selectedArticle && (
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-plum-900 mb-6">
                {selectedArticle}
              </h2>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-mauve-700 hover:text-plum-900 mb-6"
              >
                ← Back to Articles
              </button>
              <div
                dangerouslySetInnerHTML={{ __html: articles.find(a => a.title === selectedArticle)?.content || '' }}
                className="prose max-w-none"
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
