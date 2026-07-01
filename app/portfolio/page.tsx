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
        image="/images/wedding.jpeg"
        breadcrumbs={[{ label: 'Portfolio' }]}
      />

      <PortfolioGrid />
      {/* <BookingCTAStrip /> */}
    </>
  )
}
