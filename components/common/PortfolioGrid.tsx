'use client'

import { useMemo, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ImageOff } from 'lucide-react'
import Link from 'next/link'
import { FilterTabs } from '@/components/common/FilterTabs'
import { PortfolioCard } from '@/components/portfolio/PortfolioCard'
import { PortfolioModal } from '@/components/portfolio/PortfolioModal'
import { portfolioItems } from '@/lib/constants/portfolio'
import { resolvePortfolioMedia } from '@/lib/portfolio-media'
import { staggerContainer } from '@/lib/animations/variants'
import type { PortfolioItem } from '@/types'

/** Friendly labels for the category filter (values still come from the data). */
const CATEGORY_LABELS: Record<string, string> = {
  wedding: 'Weddings',
  corporate: 'Corporate',
  social: 'Social',
  entertainment: 'Entertainment',
  production: 'Production',
}

function EmptyState() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-2xl border border-white/8 bg-black-mid/40 px-8 py-20 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold">
        <ImageOff className="h-7 w-7" />
      </div>
      <h3 className="mb-2 font-display text-2xl font-bold text-white">Nothing here yet</h3>
      <p className="mb-8 font-sans text-sm leading-relaxed text-white/55">
        There are no shows in this category right now. Explore all events, or tell Shubham about
        yours — it could be the next one featured here.
      </p>
      <Link
        href="/book-consultation"
        className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-gold/10 px-6 py-3 font-accent text-xs font-semibold uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-black"
      >
        Book a Consultation
      </Link>
    </div>
  )
}

export function PortfolioGrid() {
  const [active, setActive] = useState<string>('all')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Categories are derived from the data — never hardcoded.
  const tabs = useMemo(() => {
    const categories = Array.from(new Set(portfolioItems.map((p) => p.category)))
    return [
      { id: 'all', label: 'All Events', count: portfolioItems.length },
      ...categories.map((c) => ({
        id: c as string,
        label: CATEGORY_LABELS[c] ?? c,
        count: portfolioItems.filter((p) => p.category === c).length,
      })),
    ]
  }, [])

  const filtered: PortfolioItem[] = useMemo(
    () => (active === 'all' ? portfolioItems : portfolioItems.filter((p) => p.category === active)),
    [active]
  )

  const openAt = useCallback((i: number) => setOpenIndex(i), [])
  const close = useCallback(() => setOpenIndex(null), [])
  const prev = useCallback(
    () => setOpenIndex((c) => (c === null ? c : (c - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  )
  const next = useCallback(
    () => setOpenIndex((c) => (c === null ? c : (c + 1) % filtered.length)),
    [filtered.length]
  )

  const handleFilter = useCallback((id: string) => {
    setActive(id)
    setOpenIndex(null)
  }, [])

  return (
    <section className="section-padding bg-black">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        {/* Filters — premium pills, categories from data */}
        <div className="mb-10 flex justify-center md:mb-14">
          <FilterTabs
            tabs={tabs}
            active={active}
            onChange={handleFilter}
            size="lg"
            className="justify-center"
          />
        </div>

        {filtered.length > 0 ? (
          <motion.div
            key={active}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-8"
          >
            {filtered.map((item, i) => (
              <PortfolioCard
                key={item.id}
                item={item}
                media={resolvePortfolioMedia(item)}
                onOpen={() => openAt(i)}
              />
            ))}
          </motion.div>
        ) : (
          <EmptyState />
        )}
      </div>

      <PortfolioModal
        items={filtered}
        index={openIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  )
}
