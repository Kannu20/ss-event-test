'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'
import { mediaDimensions } from '@/data/mediaDimensions'
import type { MediaItem } from '@/data/services'

interface MediaCardProps {
  item: MediaItem
  onOpen: () => void
}

const FALLBACK = { w: 4, h: 3 }
const SIZES = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'

/**
 * A single masonry card. Renders an image, or a video's poster with a play
 * badge. Natural aspect ratio (width:100% + height:auto) means nothing is ever
 * cropped or stretched, and baked dimensions prevent layout shift.
 */
export function MediaCard({ item, onOpen }: MediaCardProps) {
  const isVideo = item.type === 'video'
  // For a video we show its poster in the grid (an optimised still).
  const displaySrc = isVideo ? item.poster ?? item.src : item.src
  const dim = mediaDimensions[displaySrc] ?? FALLBACK

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={isVideo ? `Play video: ${item.alt}` : `View image: ${item.alt}`}
      className="group relative block w-full overflow-hidden rounded-xl border border-white/5 bg-black-mid/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
    >
      <Image
        src={displaySrc}
        alt={item.alt}
        width={dim.w}
        height={dim.h}
        sizes={SIZES}
        loading="lazy"
        className="w-full h-auto block transition-transform duration-700 ease-luxury group-hover:scale-105"
      />

      {/* Hover wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Gold ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5 group-hover:ring-gold/40 transition-all duration-500" />

      {isVideo && (
        <>
          {/* Play badge */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm border border-white/30 text-white transition-all duration-300 group-hover:bg-gold group-hover:text-black group-hover:scale-110">
              <Play className="w-6 h-6 translate-x-0.5" fill="currentColor" />
            </span>
          </div>
          {/* Video tag */}
          <span className="pointer-events-none absolute top-3 left-3 font-accent text-[0.6rem] tracking-widest uppercase text-white bg-black/50 backdrop-blur-sm border border-white/15 rounded-full px-2.5 py-1">
            Video
          </span>
        </>
      )}
    </button>
  )
}
