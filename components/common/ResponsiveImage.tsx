import Image from 'next/image'
import { cn } from '@/lib/utils/cn'

interface ResponsiveImageProps {
  src: string
  alt: string
  /**
   * CSS aspect ratio for the frame, e.g. '4/5', '3/4', '16/9', '1/1'.
   * When omitted, the image fills its parent (which must be positioned + sized).
   */
  aspect?: string
  /**
   * 'cover' = fill the frame, cropping evenly (never distorts) — best for
   * uniform cards. 'contain' = show the whole image, letterboxed on a
   * background — best when no part of the photo may be cropped.
   */
  fit?: 'cover' | 'contain'
  /** object-position focal point, e.g. 'center', 'top', 'center 30%'. */
  position?: string
  /** Responsive sizes hint for Next/Image. */
  sizes?: string
  priority?: boolean
  quality?: number
  /** Classes for the wrapping frame. */
  className?: string
  /** Classes for the underlying <Image>. */
  imageClassName?: string
  /** Rounded frame (default true). */
  rounded?: boolean
  /** Background shown behind a 'contain' image (letterbox fill). */
  containBg?: string
}

/**
 * One image primitive for the whole site. It renders Next/Image with `fill`
 * inside an aspect-ratio frame, so portrait, landscape and square photos all
 * display without stretching or squashing — you only ever choose whether to
 * crop evenly (`cover`) or show the full frame (`contain`). Aspect ratio drives
 * height, so there are no arbitrary fixed pixel heights and no layout shift.
 */
export function ResponsiveImage({
  src,
  alt,
  aspect,
  fit = 'cover',
  position = 'center',
  sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw',
  priority = false,
  quality = 85,
  className,
  imageClassName,
  rounded = true,
  containBg = 'bg-black-mid',
}: ResponsiveImageProps) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden',
        rounded && 'rounded-2xl',
        fit === 'contain' && containBg,
        className
      )}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        priority={priority}
        {...(priority ? {} : { loading: 'lazy' as const })}
        className={cn(fit === 'cover' ? 'object-cover' : 'object-contain', imageClassName)}
        style={{ objectPosition: position }}
      />
    </div>
  )
}
