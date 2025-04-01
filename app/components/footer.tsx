'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-blush-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-plum-900 mb-4">
              ZuriVibes
            </h3>
            <p className="text-mauve-700">
              Your natural glow-up guide. Discover tips, products, and community support for your beauty journey.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-plum-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-mauve-700 hover:text-plum-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-mauve-700 hover:text-plum-900 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace"
                  className="text-mauve-700 hover:text-plum-900 transition-colors"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-mauve-700 hover:text-plum-900 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-mauve-700 hover:text-plum-900 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-plum-900 mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gold-900 hover:text-plum-900 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-1.927c-2.526 0-2.875.012-3.957.068-1.628.108-2.26 1.058-2.369 2.369-.056.982-.068 1.431-.068 3.957 0 2.526.012 2.875.068 3.957.109 1.628 1.058 2.26 2.369 2.369.982.056 1.431.068 3.957.068 2.526 0 2.875-.012 3.957-.068 1.628-.109 2.26-1.058 2.369-2.369.056-.982.068-1.431.068-3.957 0-2.526-.012-2.875-.068-3.957-.109-1.628-1.058-2.26-2.369-2.369-.982-.056-1.431-.068-3.957-.068z" />
                  <path d="M12 9c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gold-900 hover:text-plum-900 transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.54 7.14c-.22-.14-.48-.2-1.47-.2-1.83 0-3.16 1.1-4.08 2.25-1.04-1.23-2.33-2.3-4.2-2.3-1.84 0-2.27 1.06-2.4 2.92-.14 2.02.8 3.84 2.5 4.48 1.7.64 3.48.96 5.46.96 2.07 0 3.84-.32 5.58-.96 1.7-.64 2.64-2.46 2.5-4.48-.14-1.86-.56-2.92-2.4-2.92zm-9.58 7.14c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gold-900 hover:text-plum-900 transition-colors"
              >
                <span className="sr-only">TikTok</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-1.927c-2.526 0-2.875.012-3.957.068-1.628.108-2.26 1.058-2.369 2.369-.056.982-.068 1.431-.068 3.957 0 2.526.012 2.875.068 3.957.109 1.628 1.058 2.26 2.369 2.369.982.056 1.431.068 3.957.068 2.526 0 2.875-.012 3.957-.068 1.628-.109 2.26-1.058 2.369-2.369.056-.982.068-1.431.068-3.957 0-2.526-.012-2.875-.068-3.957-.109-1.628-1.058-2.26-2.369-2.369-.982-.056-1.431-.068-3.957-.068z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gold-900 hover:text-plum-900 transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-1.927c-2.526 0-2.875.012-3.957.068-1.628.108-2.26 1.058-2.369 2.369-.056.982-.068 1.431-.068 3.957 0 2.526.012 2.875.068 3.957.109 1.628 1.058 2.26 2.369 2.369.982.056 1.431.068 3.957.068 2.526 0 2.875-.012 3.957-.068 1.628-.109 2.26-1.058 2.369-2.369.056-.982.068-1.431.068-3.957 0-2.526-.012-2.875-.068-3.957-.109-1.628-1.058-2.26-2.369-2.369-.982-.056-1.431-.068-3.957-.068z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-plum-900 mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-mauve-700 hover:text-plum-900 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-mauve-700 hover:text-plum-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-mauve-700 hover:text-plum-900 transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blush-200">
          <div className="flex justify-center gap-4 mb-4">
            <span className="text-gold-900"> Flutterwave</span>
            <span className="text-gold-900"> Mpesa</span>
            <span className="text-gold-900"> PayPal</span>
          </div>
          <p className="text-center text-mauve-700">
            {new Date().getFullYear()} ZuriVibes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
