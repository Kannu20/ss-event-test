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
        title="Shubham's Portfolio"
        subtitle="900+ shows across 30+ cities. A glimpse of the stages Shubham has hosted — from grand palace weddings to landmark corporate nights."
        tag="On Stage"
        image="/images/wedding.jpeg"
        breadcrumbs={[{ label: 'Portfolio' }]}
      />

      <PortfolioGrid />
      {/* <BookingCTAStrip /> */}
    </>
  )
}
