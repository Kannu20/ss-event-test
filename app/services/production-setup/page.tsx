import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { ServicePageLayout } from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = generatePageMetadata(pageSEO.servicesProduction)

export default function ProductionSetupPage() {
  return (
    <ServicePageLayout
      hero={{
        title: 'Show Design & Scripting',
        subtitle: 'Behind a seamless event is a well-designed show. Shubham scripts your run-of-show, designs the flow, and rehearses every cue so the evening unfolds exactly as imagined.',
        tag: 'Show Design',
        image: '/images/prod.jpeg',
      }}
      breadcrumbs={[{ label: 'Show Design & Scripting' }]}
      schemaName="Show Design & Scripting"
      schemaDescription="Event show design and scripting by Artist Shubham Khandelwal — custom event scripts, run-of-show and flow design, rehearsals and coordination with the couple, planner and DJ."
      schemaUrl="/services/production-setup"
      intro={{
        label: 'The Script Behind the Show',
        title: 'A Show That',
        titleHighlight: 'Flows Effortlessly',
        description: [
          'The difference between a good event and an unforgettable one is often invisible — it lives in the script, the timing and the flow. Shubham designs the anchoring blueprint for your event so every entrance, performance and announcement lands at exactly the right beat.',
          "Drawing on 900+ shows, he writes custom scripts, maps the run-of-show, and rehearses the key moments with everyone involved. It's not about stages or equipment — it's about crafting the sequence of moments that makes your guests feel every high point of the night.",
        ],
      }}
      subServices={[
        { icon: '📜', title: 'Custom Event Scripts', description: 'Shubham writes a bespoke script for your event — announcements, links, names and cues, tailored to your family, brand and culture.' },
        { icon: '🗺️', title: 'Run-of-Show Design', description: 'A minute-by-minute run-of-show mapping every entrance, ritual, performance and speech into a smooth, logical flow.' },
        { icon: '🎬', title: 'Flow & Segment Design', description: 'Thoughtful sequencing of the evening — where to place the energy peaks, the emotional moments and the natural breathers.' },
        { icon: '🎯', title: 'Cue & Moment Planning', description: 'Every music cue, entrance and surprise planned and timed so the big moments hit exactly as you pictured them.' },
        { icon: '🔁', title: 'Rehearsals', description: 'Shubham rehearses the critical cues and transitions with the family, hosts and performers so nothing feels improvised.' },
        { icon: '🤝', title: 'Coordination', description: 'He coordinates closely with the couple, planner and DJ, aligning the script with everyone so the show runs as one.' },
      ]}
      processSteps={[
        { step: '01', title: 'Discovery Call', description: 'Shubham learns your event, priorities, must-have moments and the people involved on stage.' },
        { step: '02', title: 'Script & Flow', description: 'He drafts the custom script and run-of-show, refining the sequence and timing with you.' },
        { step: '03', title: 'Rehearsal & Coordination', description: 'Key cues are rehearsed and aligned with the couple, planner and DJ so every handoff is smooth.' },
        { step: '04', title: 'Show Night', description: 'The script comes alive on stage — Shubham drives the flow while staying ready to adapt in the moment.' },
      ]}
      ctaTitle="Let Shubham Script Your Show"
    />
  )
}
