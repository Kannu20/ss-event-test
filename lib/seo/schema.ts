/**
 * JSON-LD Schema Markup helpers for Artist Shubham Khandelwal 
 * Improves Google rich results and SEO signals
 */

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ssevent.in'

/** LocalBusiness schema — for /contact page */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Artist Shubham Khandelwal ',
    description:
      'Full-service premium event management company specializing in weddings, corporate events, social celebrations, entertainment services and production setup.',
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    image: `${baseUrl}/og-image.jpg`,
    telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER,
    email: process.env.NEXT_PUBLIC_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    priceRange: '₹₹₹₹',
    openingHours: 'Mo-Su 09:00-20:00',
    sameAs: [
      'https://instagram.com/ssevent',
      'https://facebook.com/ssevent',
      'https://youtube.com/@ssevent',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Event Management Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Event Management' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Event Management' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Event Management' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Entertainment Services' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Production Setup' } },
      ],
    },
  }
}

/** Service schema — for individual service pages */
export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${baseUrl}${url}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Artist Shubham Khandelwal ',
      url: baseUrl,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  }
}

/** FAQPage schema — for /faqs page */
export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

/** BreadcrumbList schema — for inner pages */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, url }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: `${baseUrl}${url}`,
    })),
  }
}

/** AggregateRating schema — for testimonials page */
export function aggregateRatingSchema(ratingValue: number, reviewCount: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Artist Shubham Khandelwal ',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  }
}

/** Serialize schema data for use with JsonLd component */
export function serializeSchema(data: Record<string, unknown>): string {
  return JSON.stringify(data)
}
