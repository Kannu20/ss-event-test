import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { ServicePageLayout } from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = generatePageMetadata(pageSEO.servicesSocial)

export default function SocialEventsPage() {
  return (
    <ServicePageLayout
      hero={{
        title: 'Social Events',
        subtitle: "Birthdays, anniversaries, cultural programs — life's most joyful chapters deserve celebrations as extraordinary as the moments themselves.",
        tag: 'Social Celebrations',
        image: '/images/social1.jpeg',
      }}
      breadcrumbs={[{ label: 'Social Events' }]}
      schemaName="Social Event Management"
      schemaDescription="Premium social event management for birthday parties, anniversary celebrations, cultural programs and family gatherings."
      schemaUrl="/services/social-events"
      intro={{
        label: 'Social Celebrations',
        title: 'Every Milestone',
        titleHighlight: 'Perfectly Celebrated',
        description: [
          "Life's greatest joy is sharing its milestones with the people you love. Whether it's a child's first big birthday party, a grandparent's golden anniversary, a cultural festival, or a family reunion — these moments deserve to be celebrated in a way that creates lasting memories.",
          'Artist Shubham Khandelwal  brings the same passion and attention to detail to social events that we bring to weddings and corporate galas. No event is too small for our best effort — and no dream is too big for our creative team.',
        ],
      }}
      subServices={[
        { icon: '🎂', title: 'Birthday Parties', description: 'From children\'s themed parties to milestone adult birthdays — creative themes, stunning décor, entertainment and complete management.' },
        { icon: '💝', title: 'Anniversary Celebrations', description: 'Silver jubilees, golden anniversaries, and every year in between — romantic, heartfelt celebrations that honor love and togetherness.' },
        { icon: '🎭', title: 'Cultural Programs', description: 'Diwali celebrations, Ganesh festivals, Navratri events, and other cultural programs managed with authenticity and grandeur.' },
        { icon: '👨‍👩‍👧‍👦', title: 'Family Gatherings', description: 'Family reunions and get-togethers transformed into memorable events with great food, entertainment, and fun activities for all ages.' },
        { icon: '🎓', title: 'Graduation Parties', description: 'Celebratory parties for academic milestones — stylish, fun, and tailored to the graduate\'s personality.' },
        { icon: '🌟', title: 'Themed Events', description: 'Bollywood nights, retro parties, masquerade balls — any theme imaginable brought to life with professional décor and entertainment.' },
      ]}
      processSteps={[
        { step: '01', title: 'Your Vision', description: 'Share your ideas, preferences, guest list and budget. We\'ll guide you through the possibilities.' },
        { step: '02', title: 'Theme & Concept', description: 'Creative concept development with mood boards, venue options and vendor recommendations.' },
        { step: '03', title: 'Planning & Prep', description: 'Seamless planning — décor, catering, entertainment, photography and all logistics handled for you.' },
        { step: '04', title: 'Celebrate!', description: 'Our team manages everything on the day so you can simply enjoy the celebration.' },
      ]}
      ctaTitle="Let's Plan Your Celebration"
    />
  )
}
