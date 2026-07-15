'use client'

import { useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Clock, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { CategoryBadge } from '@/components/ui/Badge'
import { resolvePortfolioMedia } from '@/lib/portfolio-media'
import type { PortfolioItem } from '@/types'

interface PortfolioModalProps {
  items: PortfolioItem[]
  index: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

function formatDateLong(date: string): string {
  return new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

/** Premium portfolio detail modal — media + metadata, keyboard + swipe navigation. */
export function PortfolioModal({ items, index, onClose, onPrev, onNext }: PortfolioModalProps) {
  const isOpen = index !== null
  const touchStartX = useRef<number | null>(null)

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onPrev()
      else if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    if (!isOpen) return
    window.addEventListener('keydown', handleKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prev
    }
  }, [isOpen, handleKey])

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) (delta > 0 ? onPrev() : onNext())
    touchStartX.current = null
  }

  const item = isOpen ? items[index as number] : null
  const media = item ? resolvePortfolioMedia(item) : null

  return (
    <AnimatePresence>
      {isOpen && item && media && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} details`}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-gold/40 hover:bg-white/15"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev / Next */}
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); onPrev() }}
                aria-label="Previous project"
                className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-gold/40 hover:bg-white/15 md:left-6"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onNext() }}
                aria-label="Next project"
                className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-gold/40 hover:bg-white/15 md:right-6"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Panel */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative grid max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-gold/10 bg-black-soft shadow-2xl md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Media */}
            <div className="relative aspect-[4/3] w-full bg-black md:aspect-auto md:h-full md:min-h-[420px]">
              {media.video ? (
                <video
                  key={media.video}
                  src={media.video}
                  poster={media.image}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={media.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              )}
            </div>

            {/* Details */}
            <div className="flex max-h-[88vh] flex-col overflow-y-auto p-6 md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <CategoryBadge category={item.category} size="md" />
                {item.featured && (
                  <span className="rounded-full bg-gold/15 px-2.5 py-1 font-accent text-[0.6rem] font-bold uppercase tracking-wider text-gold">
                    Featured
                  </span>
                )}
              </div>

              <h2 className="mb-4 font-display text-2xl font-bold leading-tight text-white md:text-3xl">
                {item.title}
              </h2>

              <div className="mb-6 flex flex-wrap gap-x-5 gap-y-2 font-sans text-sm text-white/50">
                {item.location && (
                  <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold" /> {item.location}</span>
                )}
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-gold" /> {formatDateLong(item.date)}</span>
                {media.duration && (
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-gold" /> {media.duration}</span>
                )}
              </div>

              {item.description && (
                <p className="mb-6 font-sans text-sm leading-relaxed text-white/65">{item.description}</p>
              )}

              {item.tags.length > 0 && (
                <div className="mb-8 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 font-sans text-xs text-white/45">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <Link
                href="/book-consultation"
                className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-5 py-3 font-accent text-xs font-semibold uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-black"
              >
                Plan a Similar Event
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
