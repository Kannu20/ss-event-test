import { forwardRef, type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

const cardVariants = cva(
  'relative overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-black-mid border border-black-light rounded-lg shadow-card hover:border-gold/20 hover:shadow-gold-sm hover:-translate-y-1',
        luxury: 'bg-black-mid border border-black-light rounded-xl shadow-card hover:border-gold/30 hover:shadow-gold-md hover:-translate-y-1.5',
        glass: 'glass border border-white/5 rounded-xl hover:border-gold/20',
        'gold-border': 'bg-black-mid border border-gold/30 rounded-lg shadow-gold-sm hover:shadow-gold-md hover:-translate-y-1',
        flat: 'bg-black-soft rounded-lg',
        transparent: 'bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  )
)
Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 pb-0', className)} {...props} />
  )
)
CardHeader.displayName = 'CardHeader'

const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6', className)} {...props} />
  )
)
CardBody.displayName = 'CardBody'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 pt-0 flex items-center gap-3', className)}
      {...props}
    />
  )
)
CardFooter.displayName = 'CardFooter'

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('font-display text-xl font-semibold text-white', className)}
      {...props}
    >
      {children}
    </h3>
  )
)
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('font-sans text-sm text-gray-400 leading-relaxed', className)}
      {...props}
    />
  )
)
CardDescription.displayName = 'CardDescription'

export { Card, CardHeader, CardBody, CardFooter, CardTitle, CardDescription, cardVariants }
