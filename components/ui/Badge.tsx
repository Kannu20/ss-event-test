import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'
import type { ServiceCategory } from '@/types'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 font-accent text-xs tracking-wider uppercase rounded-full transition-colors duration-200',
  {
    variants: {
      variant: {
        gold: 'bg-gold/15 text-gold border border-gold/30',
        dark: 'bg-black-light text-gray-300 border border-black-light',
        outline: 'bg-transparent text-gray-300 border border-gray-700',
        glass: 'glass text-white',
        success: 'bg-success/15 text-green-400 border border-green-800/30',
        cream: 'bg-cream text-black-soft',
      },
      size: {
        sm: 'px-2.5 py-0.5 text-[0.6rem]',
        md: 'px-3 py-1 text-xs',
        lg: 'px-4 py-1.5 text-xs',
      },
    },
    defaultVariants: {
      variant: 'gold',
      size: 'md',
    },
  }
)

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode
  className?: string
  dot?: boolean
}

export function Badge({ variant, size, className, children, dot }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)}>
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
      )}
      {children}
    </span>
  )
}

/* ─── Category Badge ─────────────────────────
   Auto-color badge for service categories
   ───────────────────────────────────────────── */
const categoryConfig: Record<ServiceCategory, { label: string; className: string }> = {
  wedding: { label: 'Wedding', className: 'bg-rose-950/40 text-rose-300 border border-rose-900/40' },
  corporate: { label: 'Corporate', className: 'bg-blue-950/40 text-blue-300 border border-blue-900/40' },
  social: { label: 'Social', className: 'bg-purple-950/40 text-purple-300 border border-purple-900/40' },
  entertainment: { label: 'Entertainment', className: 'bg-amber-950/40 text-amber-300 border border-amber-900/40' },
  production: { label: 'Production', className: 'bg-emerald-950/40 text-emerald-300 border border-emerald-900/40' },
}

interface CategoryBadgeProps {
  category: ServiceCategory
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function CategoryBadge({ category, className, size = 'sm' }: CategoryBadgeProps) {
  const config = categoryConfig[category]
  return (
    <span
      className={cn(
        'inline-flex items-center font-accent tracking-wider uppercase rounded-full border',
        size === 'sm' ? 'px-2.5 py-0.5 text-[0.6rem]' : size === 'md' ? 'px-3 py-1 text-xs' : 'px-4 py-1.5 text-xs',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  )
}

export { badgeVariants }
