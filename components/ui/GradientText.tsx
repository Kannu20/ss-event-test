import { cn } from '@/lib/utils/cn'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  /** Gradient direction */
  direction?: 'horizontal' | 'diagonal' | 'radial'
  /** Use white-to-gold instead of gold-to-gold */
  fromWhite?: boolean
  /** Render as block-level element */
  asBlock?: boolean
}

/**
 * Gold gradient text component.
 * Applies a multi-stop gold gradient via CSS background-clip.
 *
 * @example
 * <h1>Where Moments Become <GradientText>Memories</GradientText></h1>
 */
export function GradientText({
  children,
  className,
  direction = 'diagonal',
  fromWhite = false,
  asBlock = false,
}: GradientTextProps) {
  const gradients = {
    horizontal: fromWhite
      ? 'linear-gradient(90deg, #FFFFFF 0%, #F5D98B 50%, #D4AF37 100%)'
      : 'linear-gradient(90deg, #F5D98B 0%, #D4AF37 50%, #B8960C 100%)',
    diagonal: fromWhite
      ? 'linear-gradient(135deg, #FFFFFF 0%, #F5D98B 40%, #D4AF37 100%)'
      : 'linear-gradient(135deg, #F5D98B 0%, #D4AF37 50%, #B8960C 100%)',
    radial: 'radial-gradient(circle, #F5D98B 0%, #D4AF37 60%, #8B7000 100%)',
  }

  const Tag = asBlock ? 'span' : 'span'

  return (
    <Tag
      className={cn(
        asBlock ? 'block' : 'inline',
        className
      )}
      style={{
        background: gradients[direction],
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </Tag>
  )
}
