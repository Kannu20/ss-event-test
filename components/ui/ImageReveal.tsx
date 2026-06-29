'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface ImageRevealProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  containerClassName?: string
  priority?: boolean
  /** Animation delay in seconds */
  delay?: number
  /** Scale inner image slightly for parallax feel */
  scaleOnReveal?: boolean
  objectFit?: 'cover' | 'contain'
}

/**
 * Image with a mask-reveal animation.
 * The image slides in from left as the container clips from left to right.
 * Triggers when the element enters the viewport.
 */
export function ImageReveal({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  containerClassName,
  priority = false,
  delay = 0,
  scaleOnReveal = true,
  objectFit = 'cover',
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden', containerClassName)}
    >
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-full"
      >
        <motion.div
          initial={scaleOnReveal ? { scale: 1.1 } : { scale: 1 }}
          animate={isInView ? { scale: 1 } : { scale: scaleOnReveal ? 1.1 : 1 }}
          transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
          className={cn('w-full h-full', fill && 'absolute inset-0')}
        >
          <Image
            src={src}
            alt={alt}
            {...(fill ? { fill: true } : { width: width ?? 800, height: height ?? 600 })}
            className={cn(
              objectFit === 'cover' ? 'object-cover' : 'object-contain',
              'w-full h-full',
              className
            )}
            priority={priority}
            sizes={fill ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' : undefined}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
