import type { MetadataRoute } from 'next'
import { getAllServiceRoutes } from '@/data/services'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://artistshubhamkhandelwal.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const serviceRoutes = getAllServiceRoutes().map((path) => ({
    path,
    priority: path.split('/').length > 3 ? 0.75 : 0.85,
    changeFrequency: 'monthly' as const,
  }))

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    ...serviceRoutes,
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
