import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { ServicePageLayout } from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = generatePageMetadata(pageSEO.servicesWedding)

export default function WeddingEventsPage() {
  return (
    <ServicePageLayout
      hero={{
        title: 'Wedding Events',
        subtitle: 'From intimate ceremonies to grand destination weddings — every ritual, every detail, every emotion crafted to perfection.',
        tag: 'Wedding Services',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=800&fit=crop&q=80',
      }}
      breadcrumbs={[{ label: 'Wedding Events' }]}
      schemaName="Wedding Event Management"
      schemaDescription="Full-service wedding event management including destination weddings, Haldi, Mehendi, Sangeet, Reception, guest management and wedding décor."
      schemaUrl="/services/wedding-events"
      intro={{
        label: 'Wedding Specialists',
        title: 'Your Dream Wedding,',
        titleHighlight: 'Flawlessly Executed',
        description: [
          'Your wedding is the most important celebration of your life. At SS Event, we understand the weight of that responsibility — and we\'ve spent a decade perfecting the art of creating weddings that exceed every expectation.',
          'From the first planning meeting to the final farewell, our dedicated wedding team handles every detail with care, creativity, and complete professionalism. You get to be completely present in your own love story while we manage everything else.',
        ],
      }}
      subServices={[
        { icon: '💍', title: 'Complete Wedding Planning', description: 'End-to-end management from venue selection to day-of coordination. Your personal wedding manager guides you through every decision.' },
        { icon: '✈️', title: 'Destination Weddings', description: 'Dream weddings at palaces in Rajasthan, beaches in Goa, mountains in Himachal — we manage all logistics wherever you dream of celebrating.' },
        { icon: '💛', title: 'Haldi Ceremony', description: 'Vibrant, joyful Haldi ceremonies with marigold décor, folk music, and all the traditional elements that make this ritual special.' },
        { icon: '🌺', title: 'Mehendi Night', description: 'Beautiful Mehendi evenings with professional artists, floral décor, music, and a relaxed atmosphere perfect for pre-wedding bonding.' },
        { icon: '🎶', title: 'Sangeet Night', description: 'High-energy Sangeet ceremonies with professional anchors, choreography assistance, live bands and DJ, and spectacular lighting.' },
        { icon: '🥂', title: 'Grand Reception', description: 'Magnificent receptions that make a statement — from dramatic entrances to stunning décor, flawless catering and entertainment.' },
        { icon: '🏨', title: 'Guest Management', description: 'Comprehensive guest management including RSVP tracking, accommodation coordination, transportation, and hospitality for all guests.' },
        { icon: '🌸', title: 'Wedding Décor', description: 'In-house décor team creating stunning florals, thematic installations, lighting designs, and stage setups for every ceremony.' },
      ]}
      processSteps={[
        { step: '01', title: 'Vision Discovery', description: 'Deep consultation to understand your dream, preferences, budget and family requirements.' },
        { step: '02', title: 'Concept & Proposal', description: 'Customized wedding concept with mood boards, vendor recommendations and detailed quote.' },
        { step: '03', title: 'Planning & Coordination', description: 'Full-service planning over months — venue, vendors, timeline, rehearsals and family briefings.' },
        { step: '04', title: 'Flawless Execution', description: 'Dedicated on-site team for every ceremony, ensuring every moment unfolds as planned.' },
      ]}
      ctaTitle="Start Planning Your Perfect Wedding"
    />
  )
}
