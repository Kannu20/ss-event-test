import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/seo/schema'
import { PageHero } from '@/components/common/PageHero'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { VideosGrid } from '@/components/common/VideosGrid'

export const metadata: Metadata = generatePageMetadata(pageSEO.videos ?? {
  title: 'Event Videos | Artist Shubham Khandelwal ',
  description: 'Watch highlight reels and event showcases from Artist Shubham Khandelwal .',
  keywords: ['event videos', 'wedding highlights', 'corporate event video'],
  canonical: '/videos',
})

export default function VideosPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Videos', url: '/videos' }])} />

      <PageHero
        title="Event Videos & Highlights"
        subtitle="From cinematic wedding films to corporate event showreels — watch the magic we create, in motion."
        tag="Video Gallery"
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=800&fit=crop&q=80"
        breadcrumbs={[{ label: 'Videos' }]}
      />

      <VideosGrid />
      {/* <BookingCTAStrip /> */}
    </>
  )
}
