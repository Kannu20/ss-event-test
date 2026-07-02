import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { ServicePageLayout } from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = generatePageMetadata(pageSEO.servicesSocial)

export default function SocialEventsPage() {
  return (
    <ServicePageLayout
      hero={{
        title: 'Private & Celebrity Events',
        subtitle: 'Birthdays, anniversaries, celebrity nights and college festivals — Shubham hosts and performs, turning your guest list into one buzzing, connected crowd.',
        tag: 'Private Hosting',
        image: '/images/social1.jpeg',
      }}
      breadcrumbs={[{ label: 'Private & Celebrity Events' }]}
      schemaName="Private & Celebrity Event Hosting"
      schemaDescription="Host and live entertainer Artist Shubham Khandelwal for private and celebrity events — birthdays, anniversaries, celebrity nights, college festivals and cultural shows."
      schemaUrl="/services/social-events"
      intro={{
        label: 'Your Event Host',
        title: 'The Life Of',
        titleHighlight: 'Every Celebration',
        description: [
          "Life's best milestones are made unforgettable by the person carrying the room. From milestone birthdays and anniversaries to celebrity nights, college festivals and cultural shows, Shubham hosts with the energy, humour and warmth that pulls every guest in.",
          "An award-winning live entertainer who has performed for 5 Lakh+ guests, Shubham reads the crowd, weaves in live singing and interactive games, and keeps the celebration flowing so hosts can relax and enjoy their own party.",
        ],
      }}
      subServices={[
        { icon: '🎂', title: 'Milestone Birthdays', description: 'From first birthdays to grand 50ths, Shubham hosts with games, sing-alongs and moments that put the star of the day centre stage.' },
        { icon: '💝', title: 'Anniversary Celebrations', description: 'Heartfelt anniversary hosting — storytelling, live romantic numbers and toasts that honour a lifetime of togetherness.' },
        { icon: '⭐', title: 'Celebrity Nights', description: 'A confident, polished host for celebrity and VIP evenings — managing the stage, the crowd and the moment with ease.' },
        { icon: '🎓', title: 'College Festivals', description: 'High-octane festival hosting that keeps a young crowd roaring — anchoring performances, contests and prize moments.' },
        { icon: '🎭', title: 'Cultural Shows', description: 'Shubham compères cultural evenings and community programmes, introducing acts and holding the audience between performances.' },
        { icon: '🎉', title: 'Live Entertainment', description: 'Live singing sets and interactive audience games built into the evening so the energy never dips.' },
      ]}
      processSteps={[
        { step: '01', title: 'Discovery Call', description: 'Shubham learns the occasion, guest of honour, crowd and mood so the hosting fits your celebration.' },
        { step: '02', title: 'Custom Flow', description: 'A tailored run-of-show — games, song moments and special surprises mapped to your evening.' },
        { step: '03', title: 'Coordination', description: 'Shubham aligns with your DJ, venue and family so every cue and surprise lands on time.' },
        { step: '04', title: 'Show Time', description: 'On the mic, Shubham reads the room, adapts live and keeps your guests entertained all night.' },
      ]}
      ctaTitle="Book Shubham for Your Celebration"
    />
  )
}
