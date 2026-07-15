'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock, Play, ArrowUpRight } from 'lucide-react'
import { CategoryBadge } from '@/components/ui/Badge'
import { fadeInUp } from '@/lib/animations/variants'
import type { PortfolioItem } from '@/types'
import type { ResolvedPortfolioMedia } from '@/lib/portfolio-media'

interface PortfolioCardProps {
  item: PortfolioItem
  media: ResolvedPortfolioMedia
  onOpen: () => void
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })
}

/** Premium portfolio card — fixed aspect image, hover zoom/glow/glass, conditional Play. */
export function PortfolioCard({ item, media, onOpen }: PortfolioCardProps) {
  const hasVideo = Boolean(media.video)

  return (
    <motion.article
      variants={fadeInUp}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-black-mid/40 shadow-lg shadow-black/40 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10"
    >
      {/* Media */}
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open details for ${item.title}`}
        className="relative block aspect-[4/5] w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
      >
        <Image
          src={media.image}
          alt={item.title}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4">
          <CategoryBadge category={item.category} size="sm" />
        </div>
        {item.featured && (
          <div className="absolute top-4 right-4 rounded-full bg-gold px-2.5 py-1 font-accent text-[0.6rem] font-bold uppercase tracking-wider text-black">
            Featured
          </div>
        )}

        {/* Duration pill */}
        {hasVideo && media.duration && (
          <span className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full glass px-2.5 py-1 font-accent text-[0.6rem] tracking-wider text-white">
            <Clock className="h-3 w-3" />
            {media.duration}
          </span>
        )}

        {/* Play affordance on hover */}
        {hasVideo && (
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/30 text-white transition-transform duration-300 group-hover:scale-110">
              <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
            </span>
          </span>
        )}
      </button>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="mb-2 font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-gold">
          {item.title}
        </h3>

        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-xs text-white/45">
          {item.location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {item.location}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {formatDate(item.date)}
          </span>
          {hasVideo && media.duration && (
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {media.duration}
            </span>
          )}
        </div>

        {item.description && (
          <p className="mb-4 line-clamp-2 font-sans text-sm leading-relaxed text-white/55">
            {item.description}
          </p>
        )}

        <div className="mb-5 flex flex-wrap gap-1.5">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-0.5 font-sans text-[0.7rem] text-white/40"
            >
              {tag}
            </span>
          ))}
          {item.tags.length > 3 && (
            <span className="px-1 py-0.5 font-sans text-[0.7rem] text-white/30">
              +{item.tags.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-3">
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-2.5 font-accent text-xs font-semibold uppercase tracking-wider text-gold transition-all duration-300 hover:bg-gold hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          >
            View Details
            <ArrowUpRight className="h-4 w-4" />
          </button>
          {hasVideo && (
            <button
              type="button"
              onClick={onOpen}
              aria-label={`Play preview of ${item.title}`}
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 font-accent text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              <Play className="h-3.5 w-3.5" fill="currentColor" />
              Preview
            </button>
          )}
        </div>
      </div>
    </motion.article>
  )
}
