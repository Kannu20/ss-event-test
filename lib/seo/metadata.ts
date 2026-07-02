import type { Metadata } from 'next'
import type { PageSEO } from '@/types'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ssevent.in'
const siteName = 'Artist Shubham Khandelwal '

/**
 * Generate page metadata with full OG/Twitter support
 */
export function generatePageMetadata(seo: PageSEO): Metadata {
  const { title, description, keywords, ogImage, canonical, noIndex } = seo

  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`
  const image = ogImage ?? '/og-image.jpg'

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    ...(canonical && { alternates: { canonical: `${baseUrl}${canonical}` } }),
    ...(noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      title: fullTitle,
      description,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  }
}

/* ─── Page-specific SEO configs ─────────────── */

export const pageSEO = {
  home: {
    title: 'Artist Shubham Khandelwal  — Premium Event Management Company',
    description: 'Full-service premium event management for weddings, corporate events, social celebrations, entertainment services and production setup. Creating unforgettable memories.',
    keywords: ['event management company', 'wedding planner', 'corporate event management', 'luxury events', 'Artist Shubham Khandelwal '],
    canonical: '/',
  },
  about: {
    title: 'About Artist Shubham Khandelwal  — Our Story & Vision',
    description: 'Learn about Artist Shubham Khandelwal  — a decade of crafting premium events. Our team, values, and commitment to making every event extraordinary.',
    keywords: ['about Artist Shubham Khandelwal ', 'event management company', 'event planners', 'event management team'],
    canonical: '/about',
  },
  services: {
    title: 'Event Management Services — Artist Shubham Khandelwal ',
    description: 'Explore our full spectrum of event management services — weddings, corporate events, social celebrations, entertainment, and production setup.',
    keywords: ['event management services', 'wedding services', 'corporate event services', 'entertainment services', 'production setup'],
    canonical: '/services',
  },
  servicesWedding: {
    title: 'Wedding Event Management Services — Artist Shubham Khandelwal ',
    description: 'Comprehensive wedding event management — planning, destination weddings, Haldi, Mehendi, Sangeet, Reception, guest management and décor.',
    keywords: ['wedding event management', 'wedding planner', 'destination wedding', 'sangeet event', 'mehendi', 'haldi ceremony'],
    canonical: '/services/wedding-events',
  },
  servicesCorporate: {
    title: 'Corporate Event Management Services — Artist Shubham Khandelwal ',
    description: 'Professional corporate event management — conferences, product launches, award functions, dealer meets, team building events.',
    keywords: ['corporate event management', 'conference management', 'product launch event', 'award function', 'corporate events'],
    canonical: '/services/corporate-events',
  },
  servicesSocial: {
    title: 'Social Event Management Services — Artist Shubham Khandelwal ',
    description: 'Memorable social event management — birthday parties, anniversary celebrations, cultural programs, and family events.',
    keywords: ['social event management', 'birthday party planning', 'anniversary celebration', 'cultural event management'],
    canonical: '/services/social-events',
  },
  servicesEntertainment: {
    title: 'Entertainment Services — Artist Shubham Khandelwal ',
    description: 'Premium entertainment services — professional Artists, DJ, live bands, celebrity management, and artist booking for events.',
    keywords: ['entertainment services', 'event Artist', 'DJ services', 'live band booking', 'celebrity management', 'artist booking'],
    canonical: '/services/entertainment-services',
  },
  servicesProduction: {
    title: 'Event Production Setup Services — Artist Shubham Khandelwal ',
    description: 'Complete event production setup — stage design, LED walls, sound systems, lighting, photography, videography, and drone coverage.',
    keywords: ['event production setup', 'stage design', 'LED wall rental', 'event sound system', 'event lighting', 'event photography'],
    canonical: '/services/production-setup',
  },
  videos: {
    title: 'Event Videos & Highlights — Artist Shubham Khandelwal ',
    description: 'Watch our event highlight reels — weddings, corporate events, social celebrations and entertainment productions by Artist Shubham Khandelwal .',
    keywords: ['event videos', 'wedding highlights', 'event videography', 'Artist Shubham Khandelwal  videos', 'corporate event video'],
    canonical: '/videos',
  },
  portfolio: {
    title: 'Event Portfolio — Artist Shubham Khandelwal ',
    description: 'Explore our portfolio of premium events — weddings, corporate events, social celebrations and entertainment experiences.',
    keywords: ['event portfolio', 'wedding portfolio', 'corporate event portfolio', 'Artist Shubham Khandelwal  portfolio'],
    canonical: '/portfolio',
  },
  gallery: {
    title: 'Event Gallery — Artist Shubham Khandelwal ',
    description: 'Browse our gallery of beautiful events — weddings, corporate celebrations, social gatherings and more.',
    keywords: ['event gallery', 'wedding gallery', 'event photos', 'Artist Shubham Khandelwal  gallery'],
    canonical: '/gallery',
  },
  testimonials: {
    title: 'Client Testimonials & Reviews — Artist Shubham Khandelwal ',
    description: 'Read what our clients say about Artist Shubham Khandelwal . Real reviews from wedding couples, corporate clients, and social event hosts.',
    keywords: ['Artist Shubham Khandelwal  reviews', 'event management testimonials', 'client reviews', 'wedding planner reviews'],
    canonical: '/testimonials',
  },
  faqs: {
    title: 'Frequently Asked Questions — Artist Shubham Khandelwal ',
    description: 'Find answers to common questions about Artist Shubham Khandelwal  services, booking process, pricing, and event management.',
    keywords: ['event management FAQ', 'Artist Shubham Khandelwal  questions', 'wedding planning FAQ', 'event booking FAQ'],
    canonical: '/faqs',
  },
  contact: {
    title: 'Contact Artist Shubham Khandelwal  — Get In Touch',
    description: 'Contact Artist Shubham Khandelwal  for your event management needs. Reach us by phone, email, or visit our office.',
    keywords: ['contact Artist Shubham Khandelwal ', 'event management contact', 'book event management', 'event planner contact'],
    canonical: '/contact',
  },
  booking: {
    title: 'Book Free Consultation — Artist Shubham Khandelwal ',
    description: 'Book a free consultation with Artist Shubham Khandelwal . Tell us about your event and get a customized proposal within 24 hours.',
    keywords: ['book event consultation', 'event planning consultation', 'Artist Shubham Khandelwal  booking', 'free event consultation'],
    canonical: '/book-consultation',
  },
} satisfies Record<string, PageSEO>
