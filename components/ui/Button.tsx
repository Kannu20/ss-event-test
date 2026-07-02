import { forwardRef, type ButtonHTMLAttributes, type ArtistHTMLAttributes } from 'react'
import Link from 'next/link'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils/cn'

/* ─── Button Variants ───────────────────────── */
const buttonVariants = cva(
  // Base styles
  [
    'inline-flex items-center justify-center gap-2',
    'font-sans font-medium rounded-md',
    'transition-all duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black',
    'disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed',
    'active:scale-[0.97]',
    'relative overflow-hidden',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-gold text-black',
          'hover:bg-gold-light hover:shadow-gold-md',
          'active:bg-gold-mid',
        ],
        secondary: [
          'bg-transparent border border-gold/50 text-gold',
          'hover:bg-gold/10 hover:border-gold hover:shadow-gold-sm',
        ],
        ghost: [
          'bg-transparent text-gray-300',
          'hover:text-white hover:bg-black-light',
        ],
        destructive: [
          'bg-red-600 text-white',
          'hover:bg-red-500',
        ],
        dark: [
          'bg-black-light text-gray-200 border border-black-light',
          'hover:border-gold/30 hover:text-white',
        ],
        'outline-white': [
          'bg-transparent border border-white/30 text-white',
          'hover:bg-white/10 hover:border-white/60',
        ],
      },
      size: {
        sm: 'h-8 px-4 text-xs tracking-wide',
        md: 'h-10 px-5 text-sm',
        lg: 'h-12 px-7 text-sm tracking-wide',
        xl: 'h-14 px-10 text-base tracking-wide',
        icon: 'h-10 w-10 p-0',
        'icon-sm': 'h-8 w-8 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

type ButtonVariantProps = VariantProps<typeof buttonVariants>

/* ─── Button Props ──────────────────────────── */
type BaseProps = ButtonVariantProps & {
  className?: string
  children?: React.ReactNode
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; onClick?: () => void }

type ButtonAsLink = BaseProps &
  ArtistHTMLAttributes<HTMLArtistElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

/* ─── Button Component ──────────────────────── */
export const Button = forwardRef<HTMLButtonElement | HTMLArtistElement, ButtonProps>(
  (props, ref) => {
    const {
      variant,
      size,
      className,
      children,
      asChild,
      loading,
      leftIcon,
      rightIcon,
      href,
      ...rest
    } = props

    const classes = cn(buttonVariants({ variant, size }), className)

    const content = (
      <>
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : leftIcon}
        {children && <span>{children}</span>}
        {!loading && rightIcon}
      </>
    )

    if (href) {
      const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')

      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLArtistElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
            {...(rest as ArtistHTMLAttributes<HTMLArtistElement>)}
          >
            {content}
          </a>
        )
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLArtistElement>}
          href={href}
          className={classes}
          {...(rest as ArtistHTMLAttributes<HTMLArtistElement>)}
        >
          {content}
        </Link>
      )
    }

    if (asChild) {
      return (
        <Slot ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...rest}>
          {children}
        </Slot>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        disabled={loading || (rest as ButtonHTMLAttributes<HTMLButtonElement>).disabled}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { buttonVariants }
export type { ButtonProps }
