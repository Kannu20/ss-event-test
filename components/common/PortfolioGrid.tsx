'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, Tag } from 'lucide-react'
import { FilterTabs } from '@/components/common/FilterTabs'
import { Badge } from '@/components/ui/Badge'
import { portfolioItems } from '@/lib/constants/portfolio'

const categories = [
  { id: 'all', label: 'All Events' },
  { id: 'wedding', label: 'Weddings' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'social', label: 'Social' },
]

const categoryBadgeMap: Record<string, 'gold' | 'dark' | 'glass' | 'outline'> = {
  wedding: 'gold',
  corporate: 'glass',
  social: 'outline',
  entertainment: 'dark',
  production: 'dark',
}

export function PortfolioGrid() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === active)

  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4">
        {/* Filter */}
        <div className="flex justify-center mb-12">
          <FilterTabs
            tabs={categories}
            active={active}
            onChange={setActive}
          />
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group bg-black-mid/50 border border-white/5 rounded-2xl overflow-hidden hover:border-gold/20 transition-colors duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant={categoryBadgeMap[item.category] ?? 'dark'} className="capitalize">
                      {item.category}
                    </Badge>
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-gold text-black text-xs font-accent font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/55 font-sans text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-4 text-white/40 text-xs font-sans mb-4">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(item.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 text-xs font-sans text-white/35 border border-white/10 rounded-full px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="text-xs font-sans text-white/30 px-2.5 py-0.5">
                        +{item.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-white/40 font-sans">
            No events found in this category.
          </div>
        )}
      </div>
    </section>
  )
}
