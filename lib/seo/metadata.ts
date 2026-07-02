import type { Metadata } from 'next'
import type { PageSEO } from '@/types'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://artistshubhamkhandelwal.com'
const siteName = 'Artist Shubham Khandelwal'

/**
 * Generate page metadata with full OG/Twitter support
 */
export function generatePageMetadata(seo: PageSEO): Metadata {
  const { title, description, keywords, ogImage, canonical, noIndex } = seo

  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`
  const image = ogImage ?? '/images/main.jpeg'

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
    title: "Artist Shubham Khandelwal — Wedding Anchor & Event Host in Jaipur",
    description: "Award-winning wedding anchor, live singer and master of ceremonies based in Jaipur. Book Shubham Khandelwal for weddings, sangeets, corporate events and celebrity celebrations across Rajasthan.",
    keywords: ['wedding anchor Jaipur', 'wedding anchor Rajasthan', 'event host Jaipur', 'sangeet anchor', 'master of ceremonies', 'Artist Shubham Khandelwal'],
    canonical: '/',
  },
  about: {
    title: 'About Shubham Khandelwal — The Artist Behind the Mic',
    description: "Meet Shubham Khandelwal — an award-winning Jaipur wedding anchor, live singer and event host. His journey, stage presence, and why families and brands across Rajasthan trust him.",
    keywords: ['about Shubham Khandelwal', 'wedding anchor Jaipur', 'best anchor Rajasthan', 'event host biography'],
    canonical: '/about',
  },
  services: {
    title: 'What Shubham Hosts — Anchoring & Live Entertainment',
    description: 'From wedding and sangeet anchoring to corporate emceeing, live singing and show scripting — everything Shubham Khandelwal brings to your stage.',
    keywords: ['wedding anchor services', 'corporate emcee', 'sangeet anchor', 'live singer for events', 'event host services'],
    canonical: '/services',
  },
  servicesWedding: {
    title: 'Wedding & Sangeet Anchoring — Shubham Khandelwal',
    description: 'Wedding, sangeet, cocktail and reception hosting with live singing, crowd games and custom scripts. A wedding anchor who turns your functions into a show.',
    keywords: ['wedding anchor', 'sangeet anchor Jaipur', 'reception host', 'varmala compere', 'wedding emcee Rajasthan'],
    canonical: '/services/wedding-events',
  },
  servicesCorporate: {
    title: 'Corporate Hosting & Emceeing — Shubham Khandelwal',
    description: 'Professional corporate emcee for conferences, award nights, product launches and dealer meets. Bilingual hosting that keeps delegates engaged from start to finish.',
    keywords: ['corporate emcee Jaipur', 'award night host', 'conference anchor', 'product launch host', 'corporate event host'],
    canonical: '/services/corporate-events',
  },
  servicesSocial: {
    title: 'Private & Celebrity Event Hosting — Shubham Khandelwal',
    description: 'Birthdays, anniversaries, celebrity nights and college festivals hosted with warmth, wit and live entertainment.',
    keywords: ['birthday party host', 'anniversary anchor', 'celebrity event host', 'college festival anchor'],
    canonical: '/services/social-events',
  },
  servicesEntertainment: {
    title: 'Live Entertainment & Singing — Shubham Khandelwal',
    description: 'A host who also sings. Live singing sets, interactive crowd games and audience engagement that keep the energy soaring all night.',
    keywords: ['live singer for events', 'event entertainer Jaipur', 'interactive host', 'anchor with live singing'],
    canonical: '/services/entertainment-services',
  },
  servicesProduction: {
    title: 'Show Design & Scripting — Shubham Khandelwal',
    description: 'Custom event scripts and run-of-show design, rehearsed and coordinated so your celebration flows without a single dull moment.',
    keywords: ['event script writing', 'run of show', 'event flow design', 'emcee script'],
    canonical: '/services/production-setup',
  },
  videos: {
    title: 'Showreel & Videos — Artist Shubham Khandelwal',
    description: "Watch Shubham Khandelwal's official showreel and highlights — weddings, sangeets, corporate stages and live singing moments.",
    keywords: ['wedding anchor showreel', 'Shubham Khandelwal videos', 'anchor performance video', 'emcee showreel'],
    canonical: '/videos',
  },
  portfolio: {
    title: 'Portfolio — Shows Shubham Khandelwal Has Hosted',
    description: 'A look at the weddings, sangeets, corporate nights and celebrity events Shubham Khandelwal has anchored across Rajasthan and beyond.',
    keywords: ['wedding anchor portfolio', 'anchor work', 'event host portfolio', 'Shubham Khandelwal shows'],
    canonical: '/portfolio',
  },
  gallery: {
    title: 'Gallery — Artist Shubham Khandelwal on Stage',
    description: 'Photos of Shubham Khandelwal in action — weddings, sangeets, corporate stages, live performances and behind the scenes.',
    keywords: ['wedding anchor photos', 'event host gallery', 'Shubham Khandelwal stage photos'],
    canonical: '/gallery',
  },
  testimonials: {
    title: 'Client Reviews — Artist Shubham Khandelwal',
    description: 'Real reviews from couples, families and brands who booked Shubham Khandelwal to host their weddings, sangeets and corporate events.',
    keywords: ['Shubham Khandelwal reviews', 'wedding anchor reviews', 'event host testimonials', 'best anchor Jaipur reviews'],
    canonical: '/testimonials',
  },
  faqs: {
    title: 'FAQs — Booking Artist Shubham Khandelwal',
    description: 'Answers about booking Shubham Khandelwal — availability, languages, live singing, pricing and how to reserve your date.',
    keywords: ['book wedding anchor', 'anchor booking questions', 'wedding host FAQ', 'emcee pricing'],
    canonical: '/faqs',
  },
  contact: {
    title: 'Contact & Book Shubham Khandelwal',
    description: 'Check availability and book Shubham Khandelwal for your event. Reach him by phone, WhatsApp, Instagram or the booking form — replies within 24 hours.',
    keywords: ['book Shubham Khandelwal', 'contact wedding anchor Jaipur', 'hire event host', 'anchor availability'],
    canonical: '/contact',
  },
  booking: {
    title: 'Book Consultation — Artist Shubham Khandelwal',
    description: 'Tell Shubham about your event and check his availability. Share your date, city and type — he personally replies within 24 hours.',
    keywords: ['book wedding anchor consultation', 'hire event host', 'Shubham Khandelwal booking', 'check anchor availability'],
    canonical: '/book-consultation',
  },
} satisfies Record<string, PageSEO>
