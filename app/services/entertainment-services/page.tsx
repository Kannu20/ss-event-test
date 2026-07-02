import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { ServicePageLayout } from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = generatePageMetadata(pageSEO.servicesEntertainment)

export default function EntertainmentServicesPage() {
  return (
    <ServicePageLayout
      hero={{
        title: 'Entertainment Services',
        subtitle: 'Professional Artists, live bands, DJs, and celebrity performers — we source and manage world-class entertainment that makes your event unforgettable.',
        tag: 'Entertainment',
        image: '/images/entertainment.jpeg',
      }}
      breadcrumbs={[{ label: 'Entertainment Services' }]}
      schemaName="Entertainment Services"
      schemaDescription="Professional entertainment management including Artists, DJ services, live bands, celebrity management and artist booking for events."
      schemaUrl="/services/entertainment-services"
      intro={{
        label: 'Entertainment Division',
        title: 'Performances That',
        titleHighlight: 'Steal the Show',
        description: [
          'Entertainment is the heartbeat of any great event. A brilliant performer can transform a good event into a legendary one. At Artist Shubham Khandelwal , our entertainment division manages everything — from finding the perfect Artist who matches your event\'s tone to booking that celebrity performer your guests will talk about for years.',
          "With over a decade of industry relationships, we have access to performers, artists, and entertainers that other agencies simply can't reach. And more importantly, we know how to manage them professionally — ensuring they deliver their absolute best for your event.",
        ],
      }}
      subServices={[
        { icon: '🎙️', title: 'Professional Artists', description: 'Bilingual Artists who match your event\'s tone — from warm family hosts to high-energy corporate emcees. Vetted, trained, reliable.' },
        { icon: '🎧', title: 'DJ Services', description: 'Top DJs with premium equipment reading the crowd perfectly — Bollywood, commercial, EDM, fusion. For weddings and corporate events alike.' },
        { icon: '🎸', title: 'Live Bands', description: 'Versatile live bands for any occasion — Bollywood cover bands, jazz ensembles, folk performers, international acts and everything in between.' },
        { icon: '⭐', title: 'Celebrity Management', description: 'Access to Bollywood artists, musicians, comedians and regional celebrities. Full celebrity management from booking to performance.' },
        { icon: '🎪', title: 'Artist Booking', description: 'Classical dancers, folk performers, acrobats, magicians, comedians — we source and book any type of performer for your event.' },
        { icon: '💃', title: 'Dance Performances', description: 'Professional dance troupes — Bollywood, classical, contemporary, Bhangra, folk — for spectacular performance moments at your event.' },
      ]}
      processSteps={[
        { step: '01', title: 'Entertainment Brief', description: 'Understanding your event type, audience, tone and entertainment preferences.' },
        { step: '02', title: 'Artist Curation', description: 'Curated shortlist of entertainment options with profiles, videos, and pricing.' },
        { step: '03', title: 'Booking & Contracts', description: 'Full booking management, contracts, advances and all communication with artists.' },
        { step: '04', title: 'Event Day Management', description: 'On-site artist management, soundcheck coordination and performance oversight.' },
      ]}
      ctaTitle="Book Entertainment for Your Event"
    />
  )
}
