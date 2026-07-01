import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/seo/schema'
import { PageHero } from '@/components/common/PageHero'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { PortfolioGrid } from '@/components/common/PortfolioGrid'

export const metadata: Metadata = generatePageMetadata(pageSEO.portfolio)

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Portfolio', url: '/portfolio' }])} />

      <PageHero
        title="Our Portfolio"
        subtitle="5K+ events across India. Here's a glimpse at our finest work — from royal palace weddings to landmark corporate events."
        tag="Our Work"
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=800&fit=crop&q=80"
        breadcrumbs={[{ label: 'Portfolio' }]}
      />

      <PortfolioGrid />
      {/* <BookingCTAStrip /> */}
    </>
  )
}
