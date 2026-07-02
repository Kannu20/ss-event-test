import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/seo/schema'
import { PageHero } from '@/components/common/PageHero'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { GalleryGrid } from '@/components/common/GalleryGrid'

export const metadata: Metadata = generatePageMetadata(pageSEO.gallery)

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Gallery', url: '/gallery' }])} />

      <PageHero
        title="On-Stage Gallery"
        subtitle="Hundreds of moments captured with Shubham on the mic. Browse the gallery and picture him hosting your celebration."
        tag="Gallery"
        image="/images/dark.jpeg"
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <GalleryGrid />
      {/* <BookingCTAStrip /> */}
    </>
  )
}
