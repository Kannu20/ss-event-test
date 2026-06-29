'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useCounter } from '@/hooks/useCounter'
import { cn } from '@/lib/utils/cn'
import { formatNumber } from '@/lib/utils/formatters'

interface AnimatedCounterProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  label?: string
  description?: string
  className?: string
  valueClassName?: string
  labelClassName?: string
  /** Compact number format: 1000 → 1K */
  compact?: boolean
  /** Icon component to show above the number */
  icon?: React.ReactNode
}

/**
 * Animated number counter that rolls up when it enters the viewport.
 * Used in the Statistics section.
 */
export function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  prefix,
  suffix,
  label,
  description,
  className,
  valueClassName,
  labelClassName,
  compact = false,
  icon,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  const count = useCounter({
    start,
    end: isInView ? end : start,
    duration,
    delay,
  })

  const formattedValue = compact
    ? `${count >= 1000 ? (count / 1000).toFixed(0) : count}${count >= 1000 ? 'K' : ''}`
    : formatNumber(count)

  return (
    <div
      ref={ref}
      className={cn('flex flex-col items-center text-center gap-2', className)}
    >
      {icon && (
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gold/10 border border-gold/20 text-gold mb-1">
          {icon}
        </div>
      )}

      <div
        className={cn(
          'font-display font-bold text-white',
          'text-4xl md:text-5xl lg:text-6xl',
          'leading-none tracking-tight',
          valueClassName
        )}
        aria-live="polite"
        aria-atomic="true"
      >
        {prefix && <span className="text-gold">{prefix}</span>}
        <span className="text-gold-gradient">{formattedValue}</span>
        {suffix && <span className="text-gold">{suffix}</span>}
      </div>

      {label && (
        <p
          className={cn(
            'font-sans font-medium text-white text-sm md:text-base',
            labelClassName
          )}
        >
          {label}
        </p>
      )}

      {description && (
        <p className="font-sans text-xs text-gray-500 max-w-[120px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
