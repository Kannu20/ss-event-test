import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/common/JsonLd'
import { localBusinessSchema, aggregateRatingSchema } from '@/lib/seo/schema'
import { HeroSection } from '@/components/sections/HeroSection'
import { MarqueeStrip } from '@/components/sections/MarqueeStrip'
import { AboutSnapshot } from '@/components/sections/AboutSnapshot'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { FeaturedEvents } from '@/components/sections/FeaturedEvents'
import { EventCategories } from '@/components/sections/EventCategories'
import { GalleryPreview } from '@/components/sections/GalleryPreview'
import { VideoShowcase } from '@/components/sections/VideoShowcase'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'
import { StatsSection } from '@/components/sections/StatsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactSection } from '@/components/sections/ContactSection'
// import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { ClientLogos } from '@/components/sections/ClientLogos'

export const metadata: Metadata = generatePageMetadata(pageSEO.home)

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={aggregateRatingSchema(4.9, 312)} />

      <HeroSection />
      <MarqueeStrip variant="dark" />
      <AboutSnapshot />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedEvents />
      <EventCategories />
      <GalleryPreview />
      <VideoShowcase />
      <TestimonialsCarousel />
      <ClientLogos />
      <FAQSection />
      <ContactSection />
      {/* <BookingCTAStrip /> */}
    </>
  )
}
