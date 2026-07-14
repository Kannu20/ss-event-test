'use client'

import { useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { mediaDimensions } from '@/data/mediaDimensions'
import type { MediaItem } from '@/data/services'

interface MediaLightboxProps {
  media: MediaItem[]
  index: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function MediaLightbox({ media, index, onClose, onPrev, onNext }: MediaLightboxProps) {
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
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, handleKey])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) {
      if (delta > 0) onPrev()
      else onNext()
    }
    touchStartX.current = null
  }

  const item = isOpen ? media[index as number] : null
  const isVideo = item?.type === 'video'
  const posterDim = item ? mediaDimensions[item.poster ?? ''] : undefined
  const imgDim = item ? mediaDimensions[item.src] : undefined
  const dim = (isVideo ? mediaDimensions[item!.src] : imgDim) ?? posterDim ?? { w: 1600, h: 1200 }

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Media viewer"
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/15 hover:border-gold/40 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 font-accent text-xs tracking-widest uppercase text-white/60">
            {(index as number) + 1} / {media.length}
          </div>

          {/* Prev */}
          {media.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev() }}
              aria-label="Previous"
              className="absolute left-3 md:left-6 z-20 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/15 hover:border-gold/40 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next */}
          {media.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext() }}
              aria-label="Next"
              className="absolute right-3 md:right-6 z-20 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/15 text-white hover:bg-white/15 hover:border-gold/40 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Content */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-4 max-w-[92vw] max-h-[86vh] flex items-center justify-center"
            style={{ aspectRatio: `${dim.w} / ${dim.h}` }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {isVideo ? (
              <video
                src={item.src}
                poster={item.poster}
                controls
                autoPlay
                muted
                playsInline
                preload="auto"
                className="max-w-[92vw] max-h-[86vh] w-auto h-auto rounded-lg bg-black"
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                width={dim.w}
                height={dim.h}
                sizes="92vw"
                className="max-w-[92vw] max-h-[86vh] w-auto h-auto object-contain rounded-lg"
                priority
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
