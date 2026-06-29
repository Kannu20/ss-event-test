/* ─────────────────────────────────────────────
   SS Event — Global TypeScript Types
   ───────────────────────────────────────────── */

// ─── Service Types ───────────────────────────
export type ServiceCategory =
  | 'wedding'
  | 'corporate'
  | 'social'
  | 'entertainment'
  | 'production'

export interface ServiceSubItem {
  label: string
  href: string
}

export interface ServiceCategoryConfig {
  id: ServiceCategory
  label: string
  href: string
  icon: string
  shortDesc: string
  items: ServiceSubItem[]
}

export interface Service {
  id: string
  slug: string
  name: string
  category: ServiceCategory
  description: string
  shortDesc: string
  icon: string
  image: string
  subServices: string[]
  featured: boolean
  order: number
}

// ─── Navigation Types ────────────────────────
export interface NavSubItem {
  label: string
  href: string
}

export interface NavDropdownGroup {
  label: string
  href: string
  icon?: string
  items: NavSubItem[]
}

export interface NavItem {
  label: string
  href: string
  hasDropdown?: boolean
  dropdownGroups?: NavDropdownGroup[]
}

// ─── Testimonial Types ───────────────────────
export interface Testimonial {
  id: string
  name: string
  avatar?: string
  role: string
  location?: string
  eventType: ServiceCategory
  rating: number
  quote: string
  date: string
  platform?: 'google' | 'weddingwire' | 'instagram' | 'internal'
  featured?: boolean
}

// ─── Portfolio Types ─────────────────────────
export interface PortfolioItem {
  id: string
  title: string
  category: ServiceCategory
  coverImage: string
  images?: string[]
  date: string
  location: string
  description?: string
  tags: string[]
  featured?: boolean
}

// ─── Stats Types ─────────────────────────────
export interface StatItem {
  id: string
  value: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
  icon?: string
}

// ─── FAQ Types ───────────────────────────────
export type FAQCategory =
  | 'general'
  | 'wedding'
  | 'corporate'
  | 'booking'
  | 'pricing'

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: FAQCategory
  featured?: boolean
}

// ─── Form Types ──────────────────────────────
export type EventTypeOption = ServiceCategory

export interface ContactFormData {
  name: string
  phone: string
  email: string
  eventType: EventTypeOption
  eventDate?: string
  message: string
}

export interface BookingFormData {
  // Step 1
  eventType: EventTypeOption
  // Step 2
  eventDate: string
  venue?: string
  guestCount?: string
  city: string
  // Step 3
  name: string
  phone: string
  email: string
  // Step 4
  message?: string
  budget?: string
}

export interface BookingStep {
  id: number
  title: string
  description: string
  fields: string[]
}

// ─── UI Types ────────────────────────────────
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export type BadgeVariant = 'gold' | 'dark' | 'outline' | 'glass'

export type SectionVariant = 'dark' | 'darker' | 'cream' | 'transparent'

// ─── SEO Types ───────────────────────────────
export interface PageSEO {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
  noIndex?: boolean
}

// ─── Gallery Types ───────────────────────────
export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: ServiceCategory
  width?: number
  height?: number
  caption?: string
}

// ─── Video Types ─────────────────────────────
export interface VideoItem {
  id: string
  title: string
  thumbnail: string
  videoUrl?: string
  youtubeId?: string
  category: ServiceCategory
  duration?: string
  featured?: boolean
}

// ─── Breadcrumb Types ────────────────────────
export interface BreadcrumbItem {
  label: string
  href?: string
}

// ─── Component Props Helpers ─────────────────
export interface ClassNameProp {
  className?: string
}

export interface ChildrenProp {
  children: React.ReactNode
}
