import type { Metadata } from 'next'
import Image from 'next/image'
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
import { serviceTree, servicePath } from '@/data/services'

export const metadata: Metadata = generatePageMetadata(pageSEO.services)

const processSteps = [
  { step: '01', title: 'Discovery Call', description: 'A relaxed call where Shubham learns your event, families, languages and the vibe you want.' },
  { step: '02', title: 'Custom Script', description: 'A tailored run-of-show and script — entrances, cues, song moments and games built around your event.' },
  { step: '03', title: 'Rehearsal & Coordination', description: 'Shubham aligns with your planner, DJ and family, rehearsing the key cues so everything lands.' },
  { step: '04', title: 'Show Night', description: 'On stage, Shubham owns the mic — reading the room, adapting live and keeping every moment flowing.' },
]

/** Feature chips for a category: its sub-services, or its included-features as a fallback. */
function categoryHighlights(index: number): string[] {
  const cat = serviceTree[index]
  if (cat.children && cat.children.length > 0) {
    return cat.children.map((c) => c.navLabel)
  }
  return cat.features.items.map((f) => f.title)
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }])} />

      <PageHero
        title="What Shubham Hosts"
        subtitle="From weddings and parties to shows, corporate stages and school events — one artist on the mic, holding every kind of room together. Explore each service below."
        tag="Services"
        image="/images/sangeet.jpeg"
        size="lg"
        breadcrumbs={[{ label: 'Services' }]}
      />

      {serviceTree.map((service, i) => (
        <section
          key={service.slug}
          className={`section-padding ${i % 2 === 0 ? 'bg-black-soft' : 'bg-black'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 !== 0 ? 'lg:flex lg:flex-row-reverse' : ''}`}>
              <div className="relative rounded-2xl overflow-hidden h-[360px] md:h-[400px]">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-black/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>
              <div>
                <SectionLabel>{service.tag}</SectionLabel>
                <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-3 mb-4">
                  {service.title}
                </h2>
                <GoldOrnament className="mb-5" />
                <p className="text-white/65 font-sans leading-relaxed mb-7">{service.subtitle}</p>
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {categoryHighlights(i).map((f) => (
                    <div key={f} className="flex items-center gap-2 text-white/70 text-sm font-sans">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <Button href={servicePath(service)} variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
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
              Check Shubham&apos;s Availability
            </Button>
          </div>
        </div>
      </section>

      <StatsSection />
      <TestimonialsCarousel />
      <BookingCTAStrip />
    </>
  )
}
