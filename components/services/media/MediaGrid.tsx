'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'
import type { MediaItem } from '@/data/services'
import { MediaCard } from './MediaCard'

interface MediaGridProps {
  media: MediaItem[]
  onOpen: (index: number) => void
}

/**
 * Pinterest-style masonry using pure CSS multi-columns. Each card avoids
 * breaking across columns and keeps its natural height — so portrait,
 * landscape, square and wide media all sit together without cropping.
 */
export function MediaGrid({ media, onOpen }: MediaGridProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"
    >
      {media.map((item, i) => (
        <motion.div
          key={`${item.src}-${i}`}
          variants={fadeInUp}
          className="mb-4 break-inside-avoid"
        >
          <MediaCard item={item} onOpen={() => onOpen(i)} />
        </motion.div>
      ))}
    </motion.div>
  )
}
