'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { Breadcrumb, type BreadcrumbItem } from './Breadcrumb'
import { HeroImage, type HeroImagePosition } from './HeroImage'
import { staggerContainer, fadeInUp, fadeInDown } from '@/lib/animations/variants'

interface PageHeroProps {
  title: string
  subtitle?: string
  /** Background image URL */
  image?: string
  /** Optional gradient overlay color */
  overlayIntensity?: 'light' | 'medium' | 'heavy'
  breadcrumbs?: BreadcrumbItem[]
  className?: string
  /** Tag shown above the title (e.g. "Our Services") */
  tag?: string
  children?: React.ReactNode
  /** Height of the hero */
  size?: 'sm' | 'md' | 'lg'
  /** object-position override for mobile (< 768px) */
  imagePositionMobile?: string
  /** object-position override for tablet (>= 768px) */
  imagePositionTablet?: string
  /** object-position override for laptop (>= 1280px, covers 1366/1440/1536) */
  imagePositionLaptop?: string
  /** object-position override for desktop (>= 1650px) */
  imagePositionDesktop?: string
  /** 'contain' (default) shows the complete photo with a blurred backdrop; 'cover' fills full-bleed. */
  fit?: 'cover' | 'contain'
}

/**
 * Responsive height per size preset — grows across mobile, tablet, laptop,
 * desktop and large-desktop tiers so wide/short laptop viewports show more
 * of a portrait hero image vertically instead of cropping the subject.
 */
const sizeClasses = {
  sm: 'min-h-[30vh] md:min-h-[35vh] min-[1280px]:min-h-[40vh] min-[1650px]:min-h-[46vh] min-[1920px]:min-h-[52vh]',
  md: 'min-h-[40vh] md:min-h-[50vh] min-[1280px]:min-h-[56vh] min-[1650px]:min-h-[65vh] min-[1920px]:min-h-[73vh]',
  lg: 'min-h-[55vh] md:min-h-[60vh] min-[1280px]:min-h-[68vh] min-[1650px]:min-h-[80vh] min-[1920px]:min-h-[90vh]',
}

const overlayClasses = {
  light: 'from-black/40 via-black/50 to-black/70',
  medium: 'from-black/60 via-black/65 to-black/80',
  heavy: 'from-black/75 via-black/80 to-black/90',
}

/**
 * Shared hero section for all inner pages (about, services, portfolio, etc.)
 * Features: parallax-ready background image, animated title, breadcrumb navigation.
 */
export function PageHero({
  title,
  subtitle,
  image,
  overlayIntensity = 'medium',
  breadcrumbs,
  className,
  tag,
  children,
  size = 'md',
  imagePositionMobile,
  imagePositionTablet,
  imagePositionLaptop,
  imagePositionDesktop,
  fit = 'contain',
}: PageHeroProps) {
  const imagePosition: HeroImagePosition = {
    mobile: imagePositionMobile,
    tablet: imagePositionTablet,
    laptop: imagePositionLaptop,
    desktop: imagePositionDesktop,
    desktopLarge: imagePositionDesktop,
  }

  return (
    <section
      className={cn(
        'relative flex items-end pb-12 md:pb-16 pt-28 md:pt-32 overflow-hidden bg-black-soft',
        sizeClasses[size],
        className
      )}
    >
      {/* Background Image */}
      {image && (
        <>
          <HeroImage src={image} alt={title} priority sizes="100vw" position={imagePosition} fit={fit} />
          {/* Gradient overlay */}
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-t',
              overlayClasses[overlayIntensity]
            )}
          />
        </>
      )}

      {/* Background pattern (when no image) */}
      {!image && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03] bg-noise" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-black-light" />
          {/* Subtle gold glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 rounded-full bg-gold/5 blur-[80px]" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.div variants={fadeInDown} className="mb-4">
              <Breadcrumb items={breadcrumbs} />
            </motion.div>
          )}

          {/* Tag */}
          {tag && (
            <motion.p
              variants={fadeInUp}
              className="font-accent text-xs tracking-[0.25em] uppercase text-gold mb-3 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              {tag}
            </motion.p>
          )}

          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="font-display text-display md:text-4.5xl text-white leading-tight"
          >
            {title}
          </motion.h1>

          {/* Gold line */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1, originX: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 h-px w-16 bg-gold-gradient"
          />

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={fadeInUp}
              className="mt-5 font-sans text-base md:text-lg text-gray-300 max-w-xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Optional additional content */}
          {children && (
            <motion.div variants={fadeInUp} className="mt-8">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
