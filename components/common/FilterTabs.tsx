'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'

interface FilterTab<T extends string> {
  id: T
  label: string
  count?: number
}

interface FilterTabsProps<T extends string> {
  tabs: FilterTab<T>[]
  active: T
  onChange: (id: T) => void
  className?: string
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Full-width tabs */
  fullWidth?: boolean
}

/**
 * Animated filter tabs — used in Portfolio, Gallery, Videos, FAQs pages.
 * Active tab has a sliding gold underline indicator.
 */
export function FilterTabs<T extends string>({
  tabs,
  active,
  onChange,
  className,
  size = 'md',
  fullWidth = false,
}: FilterTabsProps<T>) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-2.5 text-base',
  }

  return (
    <div
      className={cn(
        'flex flex-wrap gap-2',
        fullWidth && 'w-full',
        className
      )}
      role="tablist"
      aria-label="Filter options"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              'relative font-accent tracking-wider uppercase transition-all duration-200',
              'rounded-full border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
              sizeClasses[size],
              isActive
                ? 'bg-gold/15 border-gold/40 text-gold'
                : 'bg-transparent border-black-light text-gray-400 hover:text-gray-200 hover:border-gray-600'
            )}
          >
            {/* Active background pill */}
            {isActive && (
              <motion.span
                layoutId="active-filter-tab"
                className="absolute inset-0 rounded-full bg-gold/10 border border-gold/30"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}

            <span className="relative z-10 flex items-center gap-1.5">
              {tab.label}
              {tab.count !== undefined && (
                <span
                  className={cn(
                    'rounded-full px-1.5 py-0.5 text-[0.6rem] font-sans',
                    isActive ? 'bg-gold/20 text-gold' : 'bg-black-light text-gray-500'
                  )}
                >
                  {tab.count}
                </span>
              )}
            </span>
          </button>
        )
      })}
    </div>
  )
}
