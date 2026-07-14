'use client'

import { useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'
import type { MediaItem } from '@/data/services'
import { MediaGrid } from './MediaGrid'
import { MediaLightbox } from './MediaLightbox'

interface MediaGalleryProps {
  heading: string
  highlight: string
  media: MediaItem[]
}

/**
 * Unified gallery for mixed image + video media. Auto-detects each item's type
 * and renders it inside one responsive masonry grid, with a fullscreen
 * lightbox (keyboard + swipe navigation) for both images and videos.
 */
export function MediaGallery({ heading, highlight, media }: MediaGalleryProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [index, setIndex] = useState<number | null>(null)

  const open = useCallback((i: number) => setIndex(i), [])
  const close = useCallback(() => setIndex(null), [])
  const prev = useCallback(
    () => setIndex((c) => (c === null ? c : (c - 1 + media.length) % media.length)),
    [media.length]
  )
  const next = useCallback(
    () => setIndex((c) => (c === null ? c : (c + 1) % media.length)),
    [media.length]
  )

  if (!media || media.length === 0) return null

  return (
    <section className="section-padding bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-xl mx-auto mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <SectionLabel>Gallery</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold text-4xl md:text-5xl leading-tight"
          >
            {heading} <GradientText>{highlight}</GradientText>
          </motion.h2>
        </motion.div>

        <MediaGrid media={media} onOpen={open} />
      </div>

      <MediaLightbox media={media} index={index} onClose={close} onPrev={prev} onNext={next} />
    </section>
  )
}
