import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/seo/schema'
import { PageHero } from '@/components/common/PageHero'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { VideosGrid } from '@/components/common/VideosGrid'

export const metadata: Metadata = generatePageMetadata(pageSEO.videos)

export default function VideosPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Videos', url: '/videos' }])} />

      <PageHero
        title="Showreel & Highlights"
        subtitle="From wedding-stage anchoring to live anchoring sets — watch Shubham work the crowd, in motion."
        tag="Watch Shubham"
        image="/images/main.jpeg"
        breadcrumbs={[{ label: 'Videos' }]}
      />

      <VideosGrid />
      {/* <BookingCTAStrip /> */}
    </>
  )
}
