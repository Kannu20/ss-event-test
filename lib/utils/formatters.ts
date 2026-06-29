/**
 * Format a number with commas and optional suffix
 * e.g. 1000 → "1,000" | 1500 → "1.5K"
 */
export function formatNumber(value: number, compact = false): string {
  if (compact && value >= 1000) {
    return `${(value / 1000).toFixed(value % 1000 === 0 ? 0 : 1)}K`
  }
  return new Intl.NumberFormat('en-IN').format(value)
}

/**
 * Format a date string to readable format
 * e.g. "2024-01-15" → "January 2024"
 */
export function formatDate(dateStr: string, format: 'full' | 'month-year' | 'short' = 'month-year'): string {
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return dateStr

  const options: Intl.DateTimeFormatOptions = {
    full: { day: 'numeric', month: 'long', year: 'numeric' },
    'month-year': { month: 'long', year: 'numeric' },
    short: { month: 'short', year: 'numeric' },
  }[format] as Intl.DateTimeFormatOptions

  return date.toLocaleDateString('en-IN', options)
}

/**
 * Truncate text to a max length with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trimEnd()}…`
}

/**
 * Convert a slug to a readable title
 * e.g. "wedding-events" → "Wedding Events"
 */
export function slugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Convert title to URL slug
 * e.g. "Wedding Events" → "wedding-events"
 */
export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

/**
 * Format phone for WhatsApp link
 * e.g. "+91 90585 26202" → "919999999999"
 */
export function formatPhoneForWhatsApp(phone: string): string {
  return phone.replace(/\D/g, '')
}

/**
 * Generate WhatsApp pre-filled message URL
 */
export function whatsAppUrl(phone: string, message?: string): string {
  const number = formatPhoneForWhatsApp(phone)
  const encodedMsg = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${number}${encodedMsg}`
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Linear interpolation
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t
}

/**
 * Map a value from one range to another
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin
}
