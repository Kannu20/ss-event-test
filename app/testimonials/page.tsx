import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema, aggregateRatingSchema } from '@/lib/seo/schema'
import { PageHero } from '@/components/common/PageHero'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { TestimonialsFullGrid } from '@/components/common/TestimonialsFullGrid'

export const metadata: Metadata = generatePageMetadata(pageSEO.testimonials)

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Testimonials', url: '/testimonials' }])} />
      <JsonLd data={aggregateRatingSchema(4.9, 312)} />

      <PageHero
        title="What Our Clients Say"
        subtitle="Over 5000 events, 1000+ satisfied clients. Here's what they have to say about the Artist Shubham Khandelwal  experience."
        tag="Client Reviews"
        image="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&h=800&fit=crop&q=80"
        breadcrumbs={[{ label: 'Testimonials' }]}
      />

      <TestimonialsFullGrid />
      {/* <BookingCTAStrip /> */}
    </>
  )
}
