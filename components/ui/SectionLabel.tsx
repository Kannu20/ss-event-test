import { cn } from '@/lib/utils/cn'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  /** Show small gold dot before text */
  dot?: boolean
  /** Center the label with ornamental lines */
  centered?: boolean
}

/**
 * Eyebrow / section label component.
 * Rendered as uppercase spaced text in the accent font (Josefin Sans).
 * Used before section headings throughout the site.
 *
 * @example
 * <SectionLabel>Our Services</SectionLabel>
 */
export function SectionLabel({
  children,
  className,
  dot = true,
  centered = false,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        'font-accent text-xs tracking-[0.25em] uppercase text-gold',
        'flex items-center gap-2',
        centered && 'justify-center',
        className
      )}
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
      )}
      {children}
    </p>
  )
}
