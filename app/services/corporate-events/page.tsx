import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { ServicePageLayout } from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = generatePageMetadata(pageSEO.servicesCorporate)

export default function CorporateEventsPage() {
  return (
    <ServicePageLayout
      hero={{
        title: 'Corporate Events',
        subtitle: 'Professional events that elevate your brand, inspire your team, and impress your stakeholders — executed with military precision.',
        tag: 'Corporate Services',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=800&fit=crop&q=80',
      }}
      breadcrumbs={[{ label: 'Corporate Events' }]}
      schemaName="Corporate Event Management"
      schemaDescription="Professional corporate event management for conferences, product launches, award functions, dealer meets, annual meetings and team building events."
      schemaUrl="/services/corporate-events"
      intro={{
        label: 'Corporate Specialists',
        title: 'Where Business',
        titleHighlight: 'Meets Brilliance',
        description: [
          'Corporate events are high-stakes affairs that reflect directly on your brand. A flawless conference, a memorable product launch, or an inspiring annual gala — these are not just events, they\'re statements about who you are as an organization.',
          'Anchor Shubham Khandelwal \'s corporate division combines the precision of a project management firm with the creativity of an event design house. We\'ve managed events for Fortune 500 companies, government organizations, and India\'s fastest-growing startups — always delivering on time, on budget, and beyond expectation.',
        ],
      }}
      subServices={[
        { icon: '🎤', title: 'Conferences & Summits', description: 'Large-scale conferences managed end-to-end — venue, AV, speakers, hospitality, registration and all production requirements.' },
        { icon: '🚀', title: 'Product Launches', description: 'High-impact launch events that create buzz, generate media coverage and leave lasting brand impressions.' },
        { icon: '🏆', title: 'Award Functions', description: 'Prestigious award ceremonies with professional hosting, spectacular stage setups, and a production quality that honors every recipient.' },
        { icon: '🤝', title: 'Dealer Meets', description: 'Engaging dealer and distributor meets that motivate your sales network and celebrate top performers.' },
        { icon: '📊', title: 'Annual Meetings', description: 'AGMs, shareholder meetings, and board events managed with complete professionalism and appropriate gravitas.' },
        { icon: '⚡', title: 'Team Building Events', description: 'Custom team building programs — outdoor activities, leadership challenges, or creative workshops that bring teams together.' },
      ]}
      processSteps={[
        { step: '01', title: 'Brief & Discovery', description: 'Understanding your objectives, audience, brand guidelines and success metrics.' },
        { step: '02', title: 'Strategy & Concept', description: 'Event strategy, theme development, and detailed execution plan submitted within 48 hours.' },
        { step: '03', title: 'Full Management', description: 'End-to-end project management — venues, vendors, technology, logistics and guest experience.' },
        { step: '04', title: 'Day-of Execution', description: 'Full on-site management team ensuring every element runs to schedule.' },
      ]}
      ctaTitle="Let's Plan Your Next Corporate Event"
    />
  )
}
