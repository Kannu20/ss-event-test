'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { fadeInUp } from '@/lib/animations/variants'
import type { SectionVariant } from '@/types'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  variant?: SectionVariant
  /** Adds section-padding utility class */
  padded?: boolean
  /** Animate children when in view */
  animate?: boolean
  /** Once: triggers once; otherwise re-triggers every time */
  animateOnce?: boolean
}

const variantClasses: Record<SectionVariant, string> = {
  dark: 'bg-black',
  darker: 'bg-black-soft',
  cream: 'bg-cream text-black',
  transparent: 'bg-transparent',
}

export function SectionWrapper({
  children,
  className,
  id,
  variant = 'dark',
  padded = true,
  animate = true,
  animateOnce = true,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, {
    once: animateOnce,
    margin: '0px 0px -80px 0px',
  })

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        variantClasses[variant],
        padded && 'section-padding',
        'relative',
        className
      )}
    >
      {animate ? (
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </section>
  )
}

/**
 * Container with max-width and horizontal padding
 */
interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
}

const containerSizes = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
  '2xl': 'max-w-7xl',
  full: 'max-w-none',
}

export function Container({ children, className, size = '2xl' }: ContainerProps) {
  return (
    <div className={cn('container mx-auto', containerSizes[size], className)}>
      {children}
    </div>
  )
}
