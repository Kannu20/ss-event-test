import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/seo/schema'
import { PageHero } from '@/components/common/PageHero'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { TestimonialsFullGrid } from '@/components/common/TestimonialsFullGrid'

export const metadata: Metadata = generatePageMetadata(pageSEO.testimonials)

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Testimonials', url: '/testimonials' }])} />

      <PageHero
        title="What Clients Say About Shubham"
        subtitle="1500+ shows and 5 Lakh+ guests entertained. Here's what couples, families and brands say about having Shubham on the mic."
        tag="Client Reviews"
        image="/images/about2.jpeg"
        breadcrumbs={[{ label: 'Testimonials' }]}
      />

      <TestimonialsFullGrid />
      {/* <BookingCTAStrip /> */}
    </>
  )
}
