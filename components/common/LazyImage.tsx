'use client'

import { useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import { cn } from '@/lib/utils/cn'
import { Skeleton } from '@/components/ui/Skeleton'

interface LazyImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  containerClassName?: string
  /** Show a skeleton while loading */
  skeleton?: boolean
  /** Zoom on hover */
  zoom?: boolean
  /** Rounded corners */
  rounded?: boolean
}

/**
 * Image wrapper with:
 * - Loading skeleton
 * - Fade-in on load
 * - Optional hover zoom effect
 */
export function LazyImage({
  containerClassName,
  className,
  skeleton = true,
  zoom = false,
  rounded = false,
  alt,
  ...props
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        rounded && 'rounded-xl',
        containerClassName
      )}
    >
      {/* Skeleton */}
      {skeleton && !loaded && !error && (
        <Skeleton className="absolute inset-0 w-full h-full" rounded="none" />
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black-mid">
          <div className="text-center text-gray-600">
            <div className="text-4xl mb-2">🖼️</div>
            <p className="text-xs">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Image */}
      <Image
        alt={alt}
        className={cn(
          'transition-all duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
          zoom && 'group-hover:scale-110',
          className
        )}
        onLoad={() => setLoaded(true)}
        onError={() => { setLoaded(true); setError(true) }}
        {...props}
      />
    </div>
  )
}
