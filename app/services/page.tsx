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
    title: 'Wedding Events',
    tagline: 'Your Dream Wedding, Flawlessly Executed',
    description: 'From the first consultation to the final farewell, Artist Shubham Khandelwal  manages every aspect of your wedding journey. Our wedding specialists combine deep cultural knowledge with modern design sensibilities to create celebrations that honor your traditions while reflecting your unique story.',
    image: '/images/hero.jpeg',
    href: '/services/wedding-events',
    features: ['Wedding Planning', 'Destination Weddings', 'Haldi & Mehendi', 'Sangeet Night', 'Grand Reception', 'Guest Management', 'Wedding Décor', 'Floral Design'],
  },
  {
    title: 'Corporate Events',
    tagline: 'Where Business Meets Brilliance',
    description: 'Corporate events demand a different skill set — precision logistics, professional execution, and the ability to impress stakeholders at the highest level. Our corporate division has managed events for India\'s most respected companies, delivering experiences that reflect your brand\'s values.',
    image: '/images/corparate.jpeg',
    href: '/services/corporate-events',
    features: ['Conferences & Summits', 'Product Launches', 'Award Functions', 'Dealer Meets', 'Annual Meetings', 'Team Building'],
  },
  {
    title: 'Social Events',
    tagline: 'Celebrate Every Chapter of Your Story',
    description: 'Life\'s most joyful moments deserve to be celebrated in style. Whether it\'s a milestone birthday, a silver anniversary, or a cultural program, our social events team brings the same level of creativity and dedication that we bring to weddings — tailored to your budget and vision.',
    image: '/images/social1.jpeg',
    href: '/services/social-events',
    features: ['Birthday Parties', 'Anniversary Celebrations', 'Cultural Programs', 'Family Gatherings', 'Festive Events'],
  },
  {
    title: 'Entertainment Services',
    tagline: 'Performances That Steal the Show',
    description: 'Entertainment is the soul of any event. Artist Shubham Khandelwal \'s entertainment division manages the full spectrum — from sourcing and booking top-tier performers to on-site coordination. Our industry relationships mean we can book artists others simply can\'t access.',
    image: '/images/entertainment.jpeg',
    href: '/services/entertainment-services',
    features: ['Professional Artists', 'DJ Services', 'Live Bands', 'Celebrity Management', 'Artist Booking', 'Dance Performances'],
  },
  {
    title: 'Production Setup',
    tagline: 'World-Class Production, Executed to Perfection',
    description: 'Behind every spectacular event is a world-class production team. Artist Shubham Khandelwal \'s in-house production division handles everything from stage design and LED walls to professional photography and cinematic videography — ensuring your event looks as magnificent as it feels.',
    image: '/images/prod.jpeg',
    href: '/services/production-setup',
    features: ['Stage Design', 'LED Walls', 'Sound Systems', 'Lighting Setup', 'Photography', 'Videography', 'Drone Coverage'],
  },
]

const processSteps = [
  { step: '01', title: 'Consultation', description: 'Free discovery call to understand your vision, requirements and budget.' },
  { step: '02', title: 'Proposal', description: 'Customized event proposal with concept, timeline and detailed quote within 48 hours.' },
  { step: '03', title: 'Planning', description: 'End-to-end planning — venue, vendors, logistics, décor, entertainment and more.' },
  { step: '04', title: 'Execution', description: 'Seamless on-site management by a dedicated team. You simply enjoy the event.' },
]

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }])} />

      <PageHero
        title="Full-Service Event Management"
        subtitle="Five specialized divisions. One seamless team. We handle every aspect of your event so you can simply be present."
        tag="Our Services"
        image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=800&fit=crop&q=80"
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
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4">
              Our <GradientText>Process</GradientText>
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
              Start With a Free Consultation
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
