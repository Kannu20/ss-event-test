import type { PortfolioItem } from '@/types'

/**
 * Portfolio media resolver.
 *
 * Each portfolio item now carries its own coverImage, video and duration, so
 * this simply returns the item's media. The category fallbacks below are pure
 * insurance for any future item that ships without media — they never override
 * an item that already has its own assets.
 */

export interface ResolvedPortfolioMedia {
  image: string
  video?: string
  duration?: string
}

interface FallbackVideo {
  src: string
  duration: string
}

/** One on-brand image per category (existing /public/images assets only). */
const FALLBACK_IMAGE: Record<PortfolioItem['category'], string> = {
  wedding: '/images/sangeet.jpeg',
  corporate: '/images/corparate.jpeg',
  social: '/images/anniversary.jpeg',
  entertainment: '/images/show.jpeg',
  production: '/images/prod.jpeg',
}

/** One video per category (existing /public/videos assets; corporate/production have none). */
const FALLBACK_VIDEO: Partial<Record<PortfolioItem['category'], FallbackVideo>> = {
  wedding: { src: '/videos/sangeet.mp4', duration: '1:12' },
  social: { src: '/videos/anniversary.mp4', duration: '0:40' },
  entertainment: { src: '/videos/live-show.mp4', duration: '1:08' },
}

export function resolvePortfolioMedia(item: PortfolioItem): ResolvedPortfolioMedia {
  // Prefer the item's own media; fall back to a category default only if missing.
  const image = item.coverImage || FALLBACK_IMAGE[item.category] || '/images/main.jpeg'
  const fallback = FALLBACK_VIDEO[item.category]
  const video = item.video ?? fallback?.src
  const duration = item.duration ?? fallback?.duration

  return { image, video, duration }
}
