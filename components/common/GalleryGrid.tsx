'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { FilterTabs } from '@/components/common/FilterTabs'
import { galleryImages, galleryCategories } from '@/lib/constants/gallery'
import type { GalleryImage } from '@/types'

export function GalleryGrid() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({ open: false, index: 0 })

  const filtered = active === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === active)

  const openLightbox = (index: number) => {
    setLightbox({ open: true, index })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox({ open: false, index: 0 })
    document.body.style.overflow = ''
  }

  const prev = () => setLightbox((s) => ({ ...s, index: (s.index - 1 + filtered.length) % filtered.length }))
  const next = () => setLightbox((s) => ({ ...s, index: (s.index + 1) % filtered.length }))

  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4">
        {/* Filter */}
        <div className="flex justify-center mb-12">
          <FilterTabs
            tabs={galleryCategories}
            active={active}
            onChange={setActive}
          />
        </div>

        {/* Masonry-style grid */}
        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid mb-3"
              >
                <div
                  className="relative overflow-hidden rounded-xl cursor-pointer group"
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox.index]?.src ?? ''}
                alt={filtered[lightbox.index]?.alt ?? ''}
                width={1200}
                height={800}
                className="w-full h-full object-contain rounded-xl max-h-[85vh]"
                sizes="100vw"
              />
              <p className="text-center text-white/50 text-sm font-sans mt-3">
                {filtered[lightbox.index]?.alt} ({lightbox.index + 1}/{filtered.length})
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
