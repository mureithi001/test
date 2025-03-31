'use client'

import Link from "next/link"
import { useSession } from "next-auth/react"
import { supabase } from "@/lib/supabase"
import { Session } from "@/types/session"

export default async function BlogPage() {
  const session = await useSession()
  
  // Fetch articles from Supabase
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Blog
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles?.map((article) => (
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
                {article.is_premium && (!session || session.data?.user?.subscription?.status !== 'active') && (
                  <span className="text-sm text-yellow-600">Premium</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
