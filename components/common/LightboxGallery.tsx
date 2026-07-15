'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { overlayVariants, scaleIn } from '@/lib/animations/variants'
import { CategoryBadge } from '@/components/ui/Badge'
import type { GalleryImage } from '@/types'

interface LightboxGalleryProps {
  images: GalleryImage[]
  className?: string
  /** Number of columns on desktop */
  columns?: 2 | 3 | 4
  /** Gap between images */
  gap?: 'sm' | 'md' | 'lg'
}

const columnClasses = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-2 sm:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
}

const gapClasses = {
  sm: 'gap-2',
  md: 'gap-3 md:gap-4',
  lg: 'gap-4 md:gap-6',
}

/**
 * Masonry-style gallery with lightbox viewer.
 * Supports keyboard navigation (arrow keys, escape).
 * Used on /gallery and service sub-pages.
 */
export function LightboxGallery({
  images,
  className,
  columns = 3,
  gap = 'md',
}: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const open = (index: number) => setActiveIndex(index)
  const close = () => setActiveIndex(null)
  const prev = useCallback(() => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex - 1 + images.length) % images.length)
  }, [activeIndex, images.length])
  const next = useCallback(() => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex + 1) % images.length)
  }, [activeIndex, images.length])

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeIndex, prev, next])

  // Prevent body scroll when open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeIndex])

  const activeImage = activeIndex !== null ? images[activeIndex] : null

  return (
    <>
      {/* Grid */}
      <div className={cn('grid', columnClasses[columns], gapClasses[gap], className)}>
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => open(index)}
            className="relative group aspect-square overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes={
                columns === 4
                  ? '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
                  : '(max-width: 640px) 50vw, 33vw'
              }
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100" />
            </div>
            {/* Category badge */}
            {image.category && (
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="rounded-full bg-black/50 px-2.5 py-1 font-accent text-[0.6rem] uppercase tracking-wider text-white backdrop-blur-sm">
                  {image.category}
                </span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
              onClick={close}
            />

            {/* Image container */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 pointer-events-none"
              onClick={close}
            >
              <div
                className="relative max-w-5xl w-full pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-elevated">
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    className="object-contain"
                    priority
                    sizes="100vw"
                  />
                </div>

                {/* Caption */}
                {activeImage.caption && (
                  <p className="mt-3 text-center font-sans text-sm text-gray-400">
                    {activeImage.caption}
                  </p>
                )}

                {/* Counter */}
                <p className="absolute -top-10 left-0 font-accent text-xs tracking-widest text-gray-500">
                  {(activeIndex ?? 0) + 1} / {images.length}
                </p>

                {/* Close */}
                <button
                  onClick={close}
                  className="absolute -top-10 right-0 w-9 h-9 flex items-center justify-center rounded-full bg-black-light text-gray-400 hover:text-white hover:bg-gold/20 transition-all duration-200"
                  aria-label="Close lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-black-light/80 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-gold/20 transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-black-light/80 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-gold/20 transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
