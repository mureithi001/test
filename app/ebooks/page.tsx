'use client';

import Link from 'next/link';
import { useState } from 'react';
import { eBooks } from '@/data/ebooks';

export default function EbooksPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);

  const categories = [...new Set(eBooks.map(ebook => ebook.category)), 'All'];

  const filteredEbooks = selectedCategory === 'All'
    ? eBooks
    : eBooks.filter(ebook => ebook.category === selectedCategory);

  const addToCart = (ebook) => {
    setCartItems(prev => [...prev, ebook]);
  };

  return (
    <main className="min-h-screen bg-blush-50">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-plum-900 mb-8">Digital Products</h1>

          {/* Categories Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-plum-900 text-white'
                      : 'bg-blush-100 text-plum-900 hover:bg-blush-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Ebooks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEbooks.map((ebook, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={ebook.image}
                    alt={ebook.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-plum-900 mb-2">
                    {ebook.title}
                  </h3>
                  <p className="text-mauve-700 mb-4 line-clamp-2">
                    {ebook.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-plum-900">
                      ${ebook.price}
                    </span>
                    <button
                      onClick={() => addToCart(ebook)}
                      className="bg-plum-900 text-white px-4 py-2 rounded-md hover:bg-plum-800"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          {cartItems.length > 0 && (
            <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-plum-900 mb-4">
                Cart Summary
              </h3>
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-mauve-700">{item.title}</span>
                    <span className="text-plum-900">${item.price}</span>
                  </div>
                ))}
                <div className="border-t border-blush-200 pt-4">
                  <div className="flex justify-between font-semibold">
                    <span className="text-plum-900">Total</span>
                    <span className="text-plum-900">
                      ${cartItems.reduce((acc, item) => acc + item.price, 0)}
                    </span>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="w-full mt-4 bg-plum-900 text-white px-4 py-2 rounded-md hover:bg-plum-800 block text-center"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
