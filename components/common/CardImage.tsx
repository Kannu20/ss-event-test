import { ResponsiveImage } from './ResponsiveImage'

interface CardImageProps {
  src: string
  alt: string
  /** Frame ratio — defaults to a comfortable 4/3 landscape card. */
  aspect?: string
  /** object-position focal point. */
  position?: string
  sizes?: string
  priority?: boolean
  className?: string
}

/**
 * Listing-card image. Shows the COMPLETE photo (object-contain) centred inside a
 * fixed-ratio frame on an elegant dark gradient, so portrait, landscape and
 * square photos all display in full — no cropping, no cut faces, no white gaps,
 * and every card keeps the same footprint.
 */
export function CardImage({
  src,
  alt,
  aspect = '4/3',
  position = 'center',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
  className,
}: CardImageProps) {
  return (
    <ResponsiveImage
      src={src}
      alt={alt}
      aspect={aspect}
      fit="contain"
      position={position}
      sizes={sizes}
      priority={priority}
      rounded
      containBg="bg-gradient-to-br from-black-mid to-black"
      className={className}
    />
  )
}
