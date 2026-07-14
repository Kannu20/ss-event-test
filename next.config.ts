import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async redirects() {
    return [
      // Old flat service routes -> new nested taxonomy (preserve SEO / inbound links)
      { source: '/services/corporate-events', destination: '/services/events/corporate-events', permanent: true },
      { source: '/services/social-events', destination: '/services/events/social-events', permanent: true },
      { source: '/services/entertainment-services', destination: '/services/shows/live-shows', permanent: true },
      { source: '/services/production-setup', destination: '/services', permanent: true },
    ]
  },
}

export default nextConfig
