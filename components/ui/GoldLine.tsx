import { cn } from '@/lib/utils/cn'

interface GoldLineProps {
  className?: string
  orientation?: 'horizontal' | 'vertical'
  width?: string
  animate?: boolean
}

/**
 * Decorative gold gradient line.
 * Used as section dividers, card accents, and ornamental elements.
 */
export function GoldLine({
  className,
  orientation = 'horizontal',
  width,
  animate = false,
}: GoldLineProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={cn(
          'w-px bg-gradient-to-b from-transparent via-gold to-transparent',
          animate && 'animate-fade-in',
          className
        )}
        style={width ? { height: width } : undefined}
        aria-hidden="true"
      />
    )
  }

  return (
    <div
      className={cn(
        'h-px bg-gold-gradient',
        animate && 'animate-line-reveal',
        className
      )}
      style={width ? { width } : { width: '60px' }}
      aria-hidden="true"
    />
  )
}

/**
 * Gold ornament with lines on both sides — "◆ section title ◆" effect
 */
interface GoldOrnamentProps {
  children?: React.ReactNode
  className?: string
}

export function GoldOrnament({ children, className }: GoldOrnamentProps) {
  return (
    <div className={cn('flex items-center gap-4', className)} aria-hidden="true">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/50" />
      <span className="text-gold text-xs">◆</span>
      {children}
      <span className="text-gold text-xs">◆</span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/50" />
    </div>
  )
}
