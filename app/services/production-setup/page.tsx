import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { ServicePageLayout } from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = generatePageMetadata(pageSEO.servicesProduction)

export default function ProductionSetupPage() {
  return (
    <ServicePageLayout
      hero={{
        title: 'Production Setup',
        subtitle: 'Cutting-edge stage design, LED walls, professional sound and lighting, photography, videography and drone coverage — all under one roof.',
        tag: 'Production Division',
        image: '/images/prod.jpeg',
      }}
      breadcrumbs={[{ label: 'Production Setup' }]}
      schemaName="Event Production Setup"
      schemaDescription="Professional event production including stage design, LED walls, sound systems, lighting setup, photography, videography and drone coverage."
      schemaUrl="/services/production-setup"
      intro={{
        label: 'Production Division',
        title: 'World-Class Production,',
        titleHighlight: 'Every Time',
        description: [
          'Behind every breathtaking event is a world-class production team. The stage, the lights, the sound — these elements don\'t just support your event, they define the emotional experience of every person in the room.',
          "Artist Shubham Khandelwal 's in-house production division owns and operates a comprehensive inventory of professional event production equipment — from massive LED walls and concert-grade sound systems to cinematic camera rigs and a professional drone fleet. We don't subcontract your production — we own it.",
        ],
      }}
      subServices={[
        { icon: '🏛️', title: 'Stage Design', description: 'Custom stage designs from intimate platforms to massive convention center stages. Modular, beautiful, structurally sound.' },
        { icon: '📺', title: 'LED Walls', description: 'High-resolution LED wall installations in any configuration — perfect for stages, conference backdrops, and immersive environments.' },
        { icon: '🔊', title: 'Sound Systems', description: 'Concert-grade line array sound systems for any venue size. Crystal clear audio for every seat in the house.' },
        { icon: '💡', title: 'Lighting Setup', description: 'Intelligent LED lighting, wash lights, spotlights, gobo projections, and atmospheric effects that transform any venue.' },
        { icon: '📸', title: 'Photography', description: 'Professional event photographers capturing candid moments, coverage shots, and portrait sessions for all types of events.' },
        { icon: '🎬', title: 'Videography', description: 'Cinematic videography teams producing highlight reels, documentary-style event films, and live streaming setups.' },
        { icon: '🚁', title: 'Drone Coverage', description: 'Licensed drone operators providing stunning aerial footage of outdoor events, venues and guest arrivals.' },
      ]}
      processSteps={[
        { step: '01', title: 'Technical Brief', description: 'Assessing venue, event type, audience size and technical requirements.' },
        { step: '02', title: 'Production Design', description: 'Stage layout, equipment specification, lighting plot and crew planning.' },
        { step: '03', title: 'Setup & Testing', description: 'Full rig and technical rehearsal completed before any guest arrives.' },
        { step: '04', title: 'Live Operation', description: 'Professional technical team operating all systems throughout the event.' },
      ]}
      ctaTitle="Let's Build Something Spectacular"
    />
  )
}
