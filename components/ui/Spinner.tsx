import { cn } from '@/lib/utils/cn'

interface SpinnerProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  color?: 'gold' | 'white' | 'current'
}

const sizes = {
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-10 h-10 border-3',
}

const colors = {
  gold: 'border-gold/30 border-t-gold',
  white: 'border-white/30 border-t-white',
  current: 'border-current/30 border-t-current',
}

export function Spinner({ className, size = 'md', color = 'gold' }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        'rounded-full animate-spin',
        sizes[size],
        colors[color],
        className
      )}
    />
  )
}
