/**
 * JSON-LD Schema Markup helpers for Artist Shubham Khandelwal
 * Improves Google rich results and SEO signals.
 */

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://artistshubhamkhandelwal.com'

const socialProfiles = [
  'https://www.instagram.com/artistshubhamkhandelwal/',
  'https://www.facebook.com/shubham.khandelwal.9883',
  'https://www.youtube.com/@artistshubhamkhandelwal',
]

/** Person schema — the primary entity for this personal-brand site */
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shubham Khandelwal',
    alternateName: 'Artist Shubham Khandelwal',
    url: baseUrl,
    image: `${baseUrl}/images/aboutme.jpeg`,
    jobTitle: 'Wedding Anchor, Live Entertainer & Event Host',
    description:
      'Jaipur-based professional wedding anchor, live stage performer and master of ceremonies. Award-winning host for weddings, sangeets, corporate events and celebrity celebrations across Rajasthan and India.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    telephone: [process.env.NEXT_PUBLIC_PHONE_NUMBER, process.env.NEXT_PUBLIC_PHONE_NUMBER_2],
    email: process.env.NEXT_PUBLIC_EMAIL,
    knowsLanguage: ['Hindi', 'English', 'Rajasthani'],
    award: 'Best Actor in Jaipur — Forever Star India Awards, 2023',
    sameAs: socialProfiles,
    knowsAbout: [
      'Wedding Anchoring',
      'Master of Ceremonies',
      'Corporate Emceeing',
      'Live anchoring',
      'Event Hosting',
    ],
  }
}

/** LocalBusiness / service-provider schema — used on the contact page */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#business`,
    name: 'Artist Shubham Khandelwal',
    description:
      'Professional wedding anchor, live entertainer and event host based in Jaipur, Rajasthan — available for weddings, corporate events and private celebrations across India.',
    url: baseUrl,
    image: `${baseUrl}/images/main.jpeg`,
    telephone: [process.env.NEXT_PUBLIC_PHONE_NUMBER, process.env.NEXT_PUBLIC_PHONE_NUMBER_2],
    email: process.env.NEXT_PUBLIC_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'State', name: 'Rajasthan' },
      { '@type': 'Country', name: 'India' },
    ],
    priceRange: '₹₹₹',
    openingHours: 'Mo-Su 09:00-21:00',
    sameAs: socialProfiles,
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding & Sangeet Anchoring' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Hosting & Emceeing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private & Celebrity Events' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Live Entertainment & anchoring' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Show Design & Scripting' } },
    ],
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
    serviceType: name,
    provider: {
      '@type': 'Person',
      name: 'Shubham Khandelwal',
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

/** Serialize schema data for use with JsonLd component */
export function serializeSchema(data: Record<string, unknown>): string {
  return JSON.stringify(data)
}
