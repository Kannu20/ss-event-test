import { cn } from '@/lib/utils/cn'

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
  gold?: boolean
}

export function Separator({ orientation = 'horizontal', className, gold = false }: SeparatorProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={cn(
          'w-px h-full',
          gold ? 'bg-gradient-to-b from-transparent via-gold/50 to-transparent' : 'bg-white/10',
          className
        )}
        role="separator"
        aria-orientation="vertical"
      />
    )
  }

  return (
    <div
      className={cn(
        'w-full h-px',
        gold ? 'bg-gradient-to-r from-transparent via-gold/50 to-transparent' : 'bg-white/10',
        className
      )}
      role="separator"
      aria-orientation="horizontal"
    />
  )
}
