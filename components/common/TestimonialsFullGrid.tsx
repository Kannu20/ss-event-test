'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { FilterTabs } from '@/components/common/FilterTabs'
import { testimonials } from '@/lib/constants/testimonials'

const RATING_SUMMARY = { average: 4.9, total: 312, breakdown: [300, 9, 3, 0, 0] }

const categories = [
  { id: 'all', label: 'All Reviews' },
  { id: 'wedding', label: 'Weddings' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'social', label: 'Social Events' },
]

export function TestimonialsFullGrid() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? testimonials
    : testimonials.filter((t) => t.eventType === active)

  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4">
        {/* Rating summary */}
        <div className="bg-black-mid/50 border border-white/5 rounded-2xl p-8 max-w-2xl mx-auto text-center mb-14">
          <div className="font-display font-bold text-6xl text-gold mb-2">{RATING_SUMMARY.average}</div>
          <div className="flex items-center justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`w-6 h-6 ${i < Math.round(RATING_SUMMARY.average) ? 'text-gold fill-gold' : 'text-white/20'}`} />
            ))}
          </div>
          <p className="text-white/50 font-sans text-sm">Based on {RATING_SUMMARY.total}+ reviews</p>

          {/* Rating bars */}
          <div className="mt-6 space-y-2 max-w-xs mx-auto">
            {RATING_SUMMARY.breakdown.map((count, i) => {
              const star = 5 - i
              const pct = Math.round((count / RATING_SUMMARY.total) * 100)
              return (
                <div key={star} className="flex items-center gap-3 text-xs font-sans">
                  <span className="text-white/50 w-4">{star}★</span>
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-white/30 w-8">{pct}%</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Filter */}
        <div className="flex justify-center mb-10">
          <FilterTabs tabs={categories} active={active} onChange={setActive} />
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((t) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-black-mid/50 border border-white/5 rounded-2xl p-6 hover:border-gold/20 transition-colors duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="w-6 h-6 text-gold/25 mb-3" />
                <p className="text-white/75 font-sans text-sm leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <div className="font-sans font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs font-sans mt-0.5">{t.role} · {t.location}</div>
                  </div>
                  <span className="text-xs font-accent font-semibold tracking-wider uppercase text-gold/50 border border-gold/20 rounded-full px-2.5 py-1 capitalize">
                    {t.eventType}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/40 font-sans">No reviews in this category yet.</div>
        )}
      </div>
    </section>
  )
}
