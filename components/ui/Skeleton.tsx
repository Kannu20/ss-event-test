import { cn } from '@/lib/utils/cn'

interface SkeletonProps {
  className?: string
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  style?: React.CSSProperties
}

export function Skeleton({ className, rounded = 'md', style }: SkeletonProps) {
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  }

  return (
    <div
      className={cn(
        'bg-black-light animate-pulse',
        'relative overflow-hidden',
        'after:absolute after:inset-0',
        'after:bg-gradient-to-r after:from-transparent after:via-white/5 after:to-transparent',
        'after:animate-shimmer after:bg-[length:200%_100%]',
        roundedClasses[rounded],
        className
      )}
      style={style}
      aria-hidden="true"
      role="presentation"
    />
  )
}

/* ─── Preset skeletons for common patterns ── */

export function SkeletonCard() {
  return (
    <div className="bg-black-mid border border-black-light rounded-xl p-6 space-y-4">
      <Skeleton className="h-48 w-full" rounded="lg" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-2/3" />
      <Skeleton className="h-9 w-28 mt-2" rounded="md" />
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }, (_, i) => (
        <Skeleton
          key={i}
          className="h-3"
          style={{ width: i === lines - 1 ? '60%' : '100%' } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
