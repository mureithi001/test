'use client';

import Link from 'next/link';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="footer bg-plum-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div className="newsletter-form">
            <h3 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input bg-mauve-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve-500"
              />
              <Button
                type="submit"
                className="newsletter-btn bg-mauve-500 text-white rounded-lg hover:bg-mauve-600 transition-colors hover-glow transition-all duration-300"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/products"
                className="text-mauve-200 hover:text-white hover-glow transition-all duration-300"
              >
                Products
              </Link>
              <Link
                href="/services"
                className="text-mauve-200 hover:text-white hover-glow transition-all duration-300"
              >
                Services
              </Link>
              <Link
                href="/ebooks"
                className="text-mauve-200 hover:text-white hover-glow transition-all duration-300"
              >
                eBooks
              </Link>
              <Link
                href="/blog"
                className="text-mauve-200 hover:text-white hover-glow transition-all duration-300"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-mauve-200 hover:text-white hover-glow transition-all duration-300"
              >
                About
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-mauve-200">
                <span className="font-semibold">Email:</span> info@zurivibes.com
              </p>
              <p className="text-mauve-200">
                <span className="font-semibold">Phone:</span> +254 700 123 456
              </p>
              <p className="text-mauve-200">
                <span className="font-semibold">Address:</span> Nairobi, Kenya
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="social-links">
              <a
                href="#"
                className="social-icon hover-glow transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="social-icon hover-glow transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="social-icon hover-glow transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="social-icon hover-glow transition-all duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-mauve-700/50 mt-12 pt-8 text-center text-mauve-200">
          <p>&copy; {new Date().getFullYear()} ZuriVibes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
