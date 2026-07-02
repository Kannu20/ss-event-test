import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { ServicePageLayout } from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = generatePageMetadata(pageSEO.servicesEntertainment)

export default function EntertainmentServicesPage() {
  return (
    <ServicePageLayout
      hero={{
        title: 'Live Entertainment & Singing',
        subtitle: 'Shubham is the artist on stage — live singing, interactive games and non-stop audience engagement, fronting the band and DJ to keep your crowd on their feet.',
        tag: 'Live Entertainment',
        image: '/images/entertainment.jpeg',
      }}
      breadcrumbs={[{ label: 'Live Entertainment & Singing' }]}
      schemaName="Live Entertainment & Singing"
      schemaDescription="Live entertainer and singer Artist Shubham Khandelwal — live singing sets, interactive games, audience engagement and front-man anchoring alongside bands and DJs."
      schemaUrl="/services/entertainment-services"
      intro={{
        label: 'The Artist On Stage',
        title: 'The Performer Your',
        titleHighlight: 'Guests Remember',
        description: [
          'Entertainment is the heartbeat of any great event, and Shubham is the one delivering it live. He is the singer and front-man on the mic — performing crowd favourites, running interactive games, and pulling the whole room into the moment.',
          "Award-winning and 900+ shows deep, Shubham fronts the band and DJ as your anchor and entertainer in one, reading the crowd in real time and lifting the energy exactly when it's needed. You don't book an agency for someone else — you book the artist himself.",
        ],
      }}
      subServices={[
        { icon: '🎤', title: 'Live Singing Sets', description: 'Shubham performs live vocals — Bollywood, romantic and crowd favourites — turning listeners into a singing, cheering audience.' },
        { icon: '🎉', title: 'Interactive Games', description: 'Signature couple challenges, family face-offs and crowd games that break the ice and keep everyone involved.' },
        { icon: '🙌', title: 'Audience Engagement', description: 'Shubham works the room, sparks call-and-response moments and keeps every guest feeling part of the show.' },
        { icon: '🎧', title: 'Front-Man Anchoring', description: 'As the on-stage anchor, Shubham fronts the DJ and band, cueing tracks and driving the floor as the face of the night.' },
        { icon: '🎸', title: 'Band & DJ Coordination', description: 'Shubham coordinates live with your musicians and DJ so vocals, music and hosting stay perfectly in sync.' },
        { icon: '🔥', title: 'Energy & Flow', description: 'He controls the tempo of the evening — building highs, easing between segments and never letting the energy dip.' },
      ]}
      processSteps={[
        { step: '01', title: 'Entertainment Brief', description: 'Shubham learns your event type, audience and vibe to shape the right mix of singing, games and hosting.' },
        { step: '02', title: 'Set & Flow Design', description: 'A tailored set list and engagement plan — song moments, games and energy peaks mapped to your evening.' },
        { step: '03', title: 'Sound & Rehearsal', description: 'Soundcheck and cue rehearsal with your band and DJ so the live performance runs flawlessly.' },
        { step: '04', title: 'Live Performance', description: 'Shubham takes the stage — singing, hosting and engaging the crowd from the first number to the last.' },
      ]}
      ctaTitle="Book Shubham to Perform at Your Event"
    />
  )
}
