'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { FilterTabs } from '@/components/common/FilterTabs'
import { galleryImages, galleryCategories } from '@/lib/constants/gallery'

const labelFor = (id: string) =>
  galleryCategories.find((c) => c.id === id)?.label ?? id

export function GalleryGrid() {
  const [active, setActive] = useState('all')
  const [index, setIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  const filtered =
    active === 'all' ? galleryImages : galleryImages.filter((img) => img.category === active)

  const open = useCallback((i: number) => setIndex(i), [])
  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(
    () => setIndex((c) => (c === null ? c : (c - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  )
  const next = useCallback(
    () => setIndex((c) => (c === null ? c : (c + 1) % filtered.length)),
    [filtered.length]
  )

  // Keyboard navigation + scroll lock while the lightbox is open
  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [index, close, prev, next])

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) (delta > 0 ? prev() : next())
    touchStartX.current = null
  }

  const current = index !== null ? filtered[index] : null

  return (
    <section className="section-padding bg-black">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        {/* Filter */}
        <div className="mb-10 flex justify-center md:mb-14">
          <FilterTabs tabs={galleryCategories} active={active} onChange={setActive} size="lg" className="justify-center" />
        </div>

        {/* Masonry — pure CSS columns (1 / 2 / 3 / 4). No Framer layout so columns never break. */}
        <div
          key={active}
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]"
        >
          {filtered.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3), ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => open(i)}
                aria-label={`View image: ${img.alt}`}
                className="group relative block w-full overflow-hidden rounded-xl border border-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="block h-auto w-full transition-transform duration-500 ease-luxury group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 font-accent text-[0.6rem] uppercase tracking-wider text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  {labelFor(img.category)}
                </span>
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-8 w-8 text-white/90" />
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-gold/40 hover:bg-white/15"
            >
              <X className="h-5 w-5" />
            </button>

            {filtered.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev() }}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-gold/40 hover:bg-white/15 md:left-6"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next() }}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-gold/40 hover:bg-white/15 md:right-6"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex max-h-[86vh] w-auto max-w-[92vw] flex-col items-center"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="92vw"
                priority
                className="h-auto max-h-[80vh] w-auto max-w-[92vw] rounded-xl object-contain"
              />
              <p className="mt-3 text-center font-sans text-sm text-white/60">
                {current.alt} · {labelFor(current.category)} ({(index as number) + 1}/{filtered.length})
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
