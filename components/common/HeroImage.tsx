'use client'

import { useId } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils/cn'

/**
 * object-position values per breakpoint tier (used only in "cover" mode).
 * Accepts any valid CSS object-position value: 'center', 'top', '50% 20%', etc.
 */
export interface HeroImagePosition {
  /** < 768px */
  mobile?: string
  /** >= 768px */
  tablet?: string
  /** >= 1280px — covers 1366 / 1440 / 1536 laptop widths */
  laptop?: string
  /** >= 1650px */
  desktop?: string
  /** >= 1920px */
  desktopLarge?: string
}

/** Default positioning tuned for portrait, face-forward photography (cover mode). */
const DEFAULT_POSITION: Required<HeroImagePosition> = {
  mobile: 'center',
  tablet: 'center 5%',
  laptop: 'center 0%',
  desktop: 'center 8%',
  desktopLarge: 'center 10%',
}

interface HeroImageProps {
  src: string
  alt: string
  priority?: boolean
  sizes?: string
  className?: string
  position?: HeroImagePosition
  /**
   * 'cover'   — full-bleed, may crop (uses responsive object-position).
   * 'contain' — shows the COMPLETE photo, never cropped, with a blurred copy of
   *             the same image behind it so there are no empty gaps. Best for
   *             hero banners whose subject (a person) must never be cut.
   */
  fit?: 'cover' | 'contain'
}

/**
 * Reusable responsive hero background image.
 */
export function HeroImage({
  src,
  alt,
  priority = true,
  sizes = '100vw',
  className,
  position,
  fit = 'cover',
}: HeroImageProps) {
  // ── Contain mode: blurred backdrop + full (uncropped) foreground ──
  if (fit === 'contain') {
    return (
      <>
        {/* Blurred, zoomed copy fills the frame so there are never empty bars */}
        <Image
          src={src}
          alt=""
          aria-hidden
          fill
          priority={priority}
          sizes={sizes}
          quality={35}
          className="object-cover scale-110 blur-2xl opacity-40"
        />
        {/* The complete image — never cropped on any device */}
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn('object-contain', className)}
        />
      </>
    )
  }

  // ── Cover mode: full-bleed with responsive object-position ──
  const rawId = useId().replace(/[^a-zA-Z0-9]/g, '')
  const scopeClass = `hero-img-${rawId}`
  const varName = `--hero-pos-${rawId}`
  const pos = { ...DEFAULT_POSITION }
  for (const key of Object.keys(pos) as (keyof HeroImagePosition)[]) {
    const override = position?.[key]
    if (override) pos[key] = override
  }

  return (
    <>
      <style>{`
        .${scopeClass} { ${varName}: ${pos.mobile}; }
        @media (min-width: 768px) { .${scopeClass} { ${varName}: ${pos.tablet}; } }
        @media (min-width: 1280px) { .${scopeClass} { ${varName}: ${pos.laptop}; } }
        @media (min-width: 1650px) { .${scopeClass} { ${varName}: ${pos.desktop}; } }
        @media (min-width: 1920px) { .${scopeClass} { ${varName}: ${pos.desktopLarge}; } }
      `}</style>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn('object-cover', scopeClass, className)}
        style={{ objectPosition: `var(${varName})` }}
      />
    </>
  )
}
