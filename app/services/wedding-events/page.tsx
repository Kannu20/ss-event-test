import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { ServicePageLayout } from '@/components/sections/ServicePageLayout'

export const metadata: Metadata = generatePageMetadata(pageSEO.servicesWedding)

export default function WeddingEventsPage() {
  return (
    <ServicePageLayout
      hero={{
        title: 'Wedding & Sangeet Anchoring',
        subtitle: 'Shubham takes the mic and turns every ritual into a moment — reading the room, warming the crowd, and keeping your celebration flowing from the first entrance to the last dance.',
        tag: 'Wedding Hosting',
        image: '/images/mehandi.jpeg',
      }}
      breadcrumbs={[{ label: 'Wedding & Sangeet Anchoring' }]}
      schemaName="Wedding & Sangeet Anchoring"
      schemaDescription="Professional wedding and sangeet anchoring by Artist Shubham Khandelwal — ceremony hosting, sangeet night anchoring, cocktail and reception compering, varmala hosting, live singing sets and interactive crowd games."
      schemaUrl="/services/wedding-events"
      intro={{
        label: 'Your Wedding Host',
        title: 'The Voice That Holds',
        titleHighlight: 'Your Big Day Together',
        description: [
          'Your wedding is the most important celebration of your life, and the person on the mic sets its energy. For 8+ years Shubham has hosted weddings and sangeet nights across Rajasthan and beyond, reading every crowd and giving each ritual the emotion it deserves.',
          'He hosts fluently in Hindi, English and Rajasthani, blends live singing with interactive games, and works to a custom script so no cue is missed. You stay present in your own love story while Shubham keeps every moment moving with warmth, timing and stage presence.',
        ],
      }}
      subServices={[
        { icon: '💍', title: 'Wedding Ceremony Hosting', description: 'Shubham anchors your ceremony with poise — announcing entrances, guiding guests through each ritual, and holding the emotion of every moment.' },
        { icon: '🎶', title: 'Sangeet Night Anchoring', description: 'High-energy sangeet hosting — introducing performances, running the dance-off, and keeping both families on their feet all night.' },
        { icon: '🥂', title: 'Cocktail & Reception Hosting', description: 'Polished reception compering — from the grand entrance to toasts and felicitations, delivered with charm and impeccable timing.' },
        { icon: '🌸', title: 'Varmala & Jaimala Compering', description: 'Shubham builds the drama of the jaimala moment, cueing the music and crowd so the couple gets the entrance they dreamed of.' },
        { icon: '💛', title: 'Haldi & Mehendi Hosting', description: 'Relaxed, playful hosting for the daytime functions — folk sing-alongs, family games and light-hearted banter that gets everyone involved.' },
        { icon: '🎤', title: 'Live Singing Sets', description: 'Live vocals woven into the celebration — romantic numbers for the couple and crowd favourites that turn guests into a chorus.' },
        { icon: '🎉', title: 'Interactive Crowd Games', description: 'Custom games and couple challenges that break the ice between families and keep the energy climbing between rituals.' },
        { icon: '📜', title: 'Custom Script & Run-of-Show', description: 'Every function scripted to your family, culture and timeline — names, cues and flow rehearsed so the day runs seamlessly.' },
      ]}
      processSteps={[
        { step: '01', title: 'Discovery Call', description: 'Shubham learns your story, families, rituals, languages and vibe so the hosting feels personal, not templated.' },
        { step: '02', title: 'Custom Script', description: 'A tailored run-of-show and script — entrances, cues, song moments and games — built around your ceremony timeline.' },
        { step: '03', title: 'Rehearsal & Coordination', description: 'Shubham aligns with your planner, DJ and family, rehearsing key cues so every announcement lands perfectly.' },
        { step: '04', title: 'Show Night', description: 'On the day, Shubham owns the mic — reading the room, adapting live, and keeping every moment flowing with energy.' },
      ]}
      ctaTitle="Check Shubham's Availability for Your Wedding"
    />
  )
}
