'use client'

import { cn } from '@/lib/utils/cn'
import { Star } from 'lucide-react'

const items = [
  '500+ Events Delivered',
  '10+ Years of Excellence',
  'Weddings · Corporate · Social',
  'Pan-India Operations',
  '25+ Cities',
  '100% Client Satisfaction',
  'Luxury Event Management',
  'Destination Weddings',
  'Celebrity Events',
]

interface MarqueeStripProps {
  className?: string
  variant?: 'gold' | 'dark'
}

export function MarqueeStrip({ className, variant = 'gold' }: MarqueeStripProps) {
  const doubled = [...items, ...items]

  return (
    <div
      className={cn(
        'overflow-hidden py-4 border-y',
        variant === 'gold'
          ? 'bg-gold border-gold/30'
          : 'bg-black-mid border-white/10',
        className
      )}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={cn(
              'inline-flex items-center gap-3 mx-6 font-accent text-sm font-semibold tracking-[0.15em] uppercase',
              variant === 'gold' ? 'text-black' : 'text-gold'
            )}
          >
            <Star className="w-3 h-3 fill-current flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
