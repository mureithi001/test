'use client'

import { motion } from 'framer-motion'
import EBooks from './ebooks'

export default function EBooksSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-plum-900 text-center mb-8">
          Featured E-Books
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <EBooks />
        </motion.div>
      </div>
    </section>
  )
}
