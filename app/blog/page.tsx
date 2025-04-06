'use client'

import Link from "next/link"
import { ClerkProvider } from "@clerk/nextjs"
import { supabase } from '../lib/supabase'
import { useAuth } from '../lib/useAuth'
import { useEffect, useState } from "react"

interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  is_premium: boolean
  created_at: string
}

interface User {
  id: string;
  subscription?: {
    status: 'active' | 'canceled' | 'past_due'
  };
}

export default function BlogPage() {
  const { user, loading: userLoading } = useAuth();
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  const subscription = user?.subscription;
  const hasActiveSubscription = subscription?.status === 'active'

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await supabase
          .from('articles')
          .select('*')
          .order('created_at', { ascending: false })
        
        if (data) {
          setArticles(data)
        }
      } catch (error) {
        console.error('Error fetching articles:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (loading || userLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 h-64 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Blog
        </h1>
        {user && (
          <Link
            href="/blog/new"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Write Article
          </Link>
        )}
      </div>

      {articles.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400 text-center py-12">
          No articles available yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    Read more →
                  </Link>
                  {article.is_premium && !hasActiveSubscription && (
                    <span className="text-sm text-yellow-600">Premium</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
