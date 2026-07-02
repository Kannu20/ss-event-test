import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/seo/schema'
import { PageHero } from '@/components/common/PageHero'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { Button } from '@/components/ui/Button'
import { StatsSection } from '@/components/sections/StatsSection'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'

export const metadata: Metadata = generatePageMetadata(pageSEO.services)

const serviceDetails = [
  {
    title: 'Wedding & Sangeet Anchoring',
    tagline: 'The Voice That Holds Your Big Day Together',
    description: 'Shubham takes the mic and turns every ritual into a moment — hosting ceremonies, sangeet nights, cocktails and receptions across Rajasthan and beyond. Fluent in Hindi, English and Rajasthani, he reads the room, weaves in live singing, and keeps your celebration flowing from the first entrance to the last dance.',
    image: '/images/hero.jpeg',
    href: '/services/wedding-events',
    features: ['Ceremony Hosting', 'Sangeet Anchoring', 'Cocktail & Reception', 'Varmala Compering', 'Haldi & Mehendi', 'Live Singing', 'Crowd Games', 'Custom Script'],
  },
  {
    title: 'Corporate Hosting & Emceeing',
    tagline: 'The Host Who Keeps the Room With You',
    description: 'Shubham hosts conferences, award nights, product launches, annual days and dealer meets with the composure your brand demands. As your emcee he keeps the agenda tight, briefs speakers, lands key messages and holds delegates engaged — hosting seamlessly in both Hindi and English.',
    image: '/images/corparate.jpeg',
    href: '/services/corporate-events',
    features: ['Conferences & Summits', 'Product Launches', 'Award Nights', 'Dealer Meets', 'Annual Days', 'Bilingual Hosting'],
  },
  {
    title: 'Private & Celebrity Events',
    tagline: 'The Life of Every Celebration',
    description: 'From milestone birthdays and anniversaries to celebrity nights, college festivals and cultural shows, Shubham hosts and performs — reading the crowd, running interactive games and weaving in live singing so hosts can relax and enjoy their own party.',
    image: '/images/social1.jpeg',
    href: '/services/social-events',
    features: ['Milestone Birthdays', 'Anniversaries', 'Celebrity Nights', 'College Festivals', 'Cultural Shows', 'Live Entertainment'],
  },
  {
    title: 'Live Entertainment & Singing',
    tagline: 'The Performer Your Guests Remember',
    description: 'Shubham is the artist on stage — live singing, interactive games and non-stop audience engagement. Fronting the band and DJ as your anchor and entertainer in one, he reads the crowd in real time and lifts the energy exactly when it is needed. You book the artist himself, not an agency.',
    image: '/images/entertainment.jpeg',
    href: '/services/entertainment-services',
    features: ['Live Singing Sets', 'Interactive Games', 'Audience Engagement', 'Front-Man Anchoring', 'Band & DJ Coordination', 'Energy & Flow'],
  },
  {
    title: 'Show Design & Scripting',
    tagline: 'A Show That Flows Effortlessly',
    description: 'The difference between a good event and an unforgettable one lives in the script, the timing and the flow. Shubham writes custom event scripts, designs the run-of-show, and rehearses every cue — coordinating with the couple, planner and DJ so the evening unfolds exactly as imagined.',
    image: '/images/prod.jpeg',
    href: '/services/production-setup',
    features: ['Custom Scripts', 'Run-of-Show Design', 'Flow & Segments', 'Cue Planning', 'Rehearsals', 'Coordination'],
  },
]

const processSteps = [
  { step: '01', title: 'Discovery Call', description: 'A relaxed call where Shubham learns your event, families, languages and the vibe you want.' },
  { step: '02', title: 'Custom Script', description: 'A tailored run-of-show and script — entrances, cues, song moments and games built around your event.' },
  { step: '03', title: 'Rehearsal & Coordination', description: 'Shubham aligns with your planner, DJ and family, rehearsing the key cues so everything lands.' },
  { step: '04', title: 'Show Night', description: 'On stage, Shubham owns the mic — reading the room, adapting live and keeping every moment flowing.' },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }])} />

      <PageHero
        title="What Shubham Hosts"
        subtitle="Five ways Shubham takes the mic — from wedding anchoring to corporate emceeing and live singing. One artist, on stage, holding your room together."
        tag="Services"
        image="/images/entertainment.jpeg"
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Services detail sections */}
      {serviceDetails.map((service, i) => (
        <section
          key={service.title}
          className={`section-padding ${i % 2 === 0 ? 'bg-black-soft' : 'bg-black'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 !== 0 ? 'lg:flex lg:flex-row-reverse' : ''}`}>
              <div className="relative rounded-2xl overflow-hidden h-[380px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div>
                <SectionLabel>{service.tagline}</SectionLabel>
                <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-3 mb-4">
                  {service.title}
                </h2>
                <GoldOrnament className="mb-5" />
                <p className="text-white/65 font-sans leading-relaxed mb-7">{service.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-white/70 text-sm font-sans">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <Button href={service.href} variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore {service.title}
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="section-padding bg-black-soft">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-14">
            <SectionLabel>How Shubham Works</SectionLabel>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4">
              From Brief to <GradientText>Standing Ovation</GradientText>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.step} className="relative text-center group">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] right-[-40%] h-px bg-gradient-to-r from-gold/30 to-transparent z-10" />
                )}
                <div className="relative inline-flex w-16 h-16 rounded-full bg-gold/10 border border-gold/30 items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <span className="font-accent font-bold text-gold text-lg">{step.step}</span>
                </div>
                <h3 className="font-sans font-semibold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-white/55 font-sans text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/book-consultation" variant="primary" size="lg">
              Check Shubham's Availability
            </Button>
          </div>
        </div>
      </section>

      <StatsSection />
      <TestimonialsCarousel />
      {/* <BookingCTAStrip /> */}
    </>
  )
}
