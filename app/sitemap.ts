import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ssevent.in'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/wedding-events', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/services/corporate-events', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/services/social-events', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/entertainment-services', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/production-setup', priority: 0.75, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.85, changeFrequency: 'weekly' as const },
    { path: '/gallery', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/videos', priority: 0.75, changeFrequency: 'weekly' as const },
    { path: '/testimonials', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/faqs', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/book-consultation', priority: 0.95, changeFrequency: 'yearly' as const },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
