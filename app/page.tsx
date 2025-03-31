import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Premium Content, Free to Start
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Access thousands of articles, tutorials, and digital products. Start
              with free content and upgrade to premium for exclusive access.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/pricing"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/blog"
                className="text-white px-8 py-3 rounded-lg font-semibold hover:text-white/80 transition-colors"
              >
                Explore Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-4xl text-indigo-600 mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Free Content</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access thousands of articles, tutorials, and resources for free.
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-4xl text-indigo-600 mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Premium Access</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Unlock exclusive content, advanced tutorials, and premium features.
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="text-4xl text-indigo-600 mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Marketplace</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sell or purchase digital products, templates, and more in our marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article cards will be populated dynamically */}
            {[1, 2, 3].map((article) => (
              <div
                key={article}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Sample Article Title
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Link
                    href="/blog/article-slug"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
