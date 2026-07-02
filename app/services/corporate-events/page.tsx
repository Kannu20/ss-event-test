import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { ServicePageLayout } from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = generatePageMetadata(pageSEO.servicesCorporate)

export default function CorporateEventsPage() {
  return (
    <ServicePageLayout
      hero={{
        title: 'Corporate Hosting & Emceeing',
        subtitle: 'Shubham hosts conferences, award nights and product launches with the composure and polish your brand demands — keeping the agenda tight and every delegate engaged.',
        tag: 'Corporate Hosting',
        image: '/images/corparate.jpeg',
      }}
      breadcrumbs={[{ label: 'Corporate Hosting & Emceeing' }]}
      schemaName="Corporate Hosting & Emceeing"
      schemaDescription="Professional corporate emcee and host Artist Shubham Khandelwal — conferences, award nights, product launches, annual days and dealer meets, with bilingual hosting and tight agenda flow."
      schemaUrl="/services/corporate-events"
      intro={{
        label: 'Your Corporate Emcee',
        title: 'The Host Who Keeps',
        titleHighlight: 'The Room With You',
        description: [
          'A corporate stage reflects directly on your brand, and the emcee holds it together. Shubham has hosted conferences, award nights, launches and dealer meets across 30+ cities, keeping agendas on time while the audience stays with him, not their phones.',
          'An award-winning performer (Best Actor in Jaipur, FSIA 2023) with an MBA background, he hosts confidently in Hindi and English, briefs speakers, smooths over live hiccups, and lands your key messages with clarity and energy from opening line to closing note.',
        ],
      }}
      subServices={[
        { icon: '🎤', title: 'Conferences & Summits', description: 'Shubham anchors the full agenda — introducing speakers, managing transitions and keeping delegates engaged across long days.' },
        { icon: '🚀', title: 'Product Launches', description: 'A launch host who builds anticipation, delivers the reveal with impact, and keeps the room and media locked in on your message.' },
        { icon: '🏆', title: 'Award Nights', description: 'Polished award-ceremony hosting — reading citations, cueing winners and giving every recipient their moment with warmth and gravitas.' },
        { icon: '🤝', title: 'Dealer & Channel Meets', description: 'Energetic hosting for dealer and distributor meets — recognising top performers and keeping your network motivated and engaged.' },
        { icon: '📊', title: 'Annual Days & Townhalls', description: 'Shubham hosts annual days, townhalls and family days, balancing corporate polish with the fun that gets teams cheering.' },
        { icon: '🌐', title: 'Bilingual Hosting', description: 'Seamless hosting in Hindi and English, switching languages to connect with a mixed audience of leadership, staff and partners.' },
      ]}
      processSteps={[
        { step: '01', title: 'Brief & Discovery', description: 'Shubham learns your objectives, audience, brand tone and key messages so the hosting serves your goals.' },
        { step: '02', title: 'Agenda & Script', description: 'A detailed run-of-show and emcee script — speaker intros, links, cues and timings mapped to your agenda.' },
        { step: '03', title: 'Rehearsal & Coordination', description: 'Shubham coordinates with your team, speakers and AV, rehearsing cues so the show runs to the minute.' },
        { step: '04', title: 'Show Day', description: 'On stage, Shubham keeps the flow tight, adapts to live changes, and holds the audience from open to close.' },
      ]}
      ctaTitle="Book Shubham to Host Your Corporate Event"
    />
  )
}
