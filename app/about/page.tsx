import type { Metadata } from 'next'
import Image from 'next/image'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/common/JsonLd'
import { localBusinessSchema, breadcrumbSchema } from '@/lib/seo/schema'
import { PageHero } from '@/components/common/PageHero'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { Button } from '@/components/ui/Button'
import { StatsSection } from '@/components/sections/StatsSection'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { ClientLogos } from '@/components/sections/ClientLogos'
import { teamMembers, companyMilestones } from '@/lib/constants/team'
import { Award, CheckCircle, Instagram, Linkedin } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata(pageSEO.about)

const awards = [
  { year: '2024', title: 'Best Event Management Company', body: 'India Event Awards' },
  { year: '2023', title: 'Top Wedding Planner', body: 'The Wedding Brigade' },
  { year: '2022', title: 'Excellence in Corporate Events', body: 'Eventex Awards' },
  { year: '2021', title: 'Best Destination Wedding Planner', body: 'WedMeGood' },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about' }])} />

      <PageHero
        title="Crafting Extraordinary Experiences Since 2014"
        subtitle="We started with a dream — to redefine what event management means in India. A decade later, we've touched over 500 lives and counting."
        tag="Our Story"
        size="lg"
        image="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&h=800&fit=crop&q=80"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Brand Story */}
      <section className="section-padding bg-black-soft">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-4">
                Built on Passion,{' '}
                <GradientText>Driven by Excellence</GradientText>
              </h2>
              <GoldOrnament className="mb-6" />
              <p className="text-white/65 font-sans leading-relaxed mb-5">
                SS Event was born in 2014 from a simple but powerful belief: that every celebration —
                no matter the size or budget — deserves to be extraordinary. Founders Sanjay and
                Shreya Sharma started the company with three team members and a vision that every
                couple, every family, and every organization should have access to world-class event
                management.
              </p>
              <p className="text-white/65 font-sans leading-relaxed mb-5">
                Today, SS Event is one of India&apos;s most respected full-service event management
                companies, operating across 25+ cities with a team of 65+ dedicated professionals.
                We&apos;ve managed royal weddings in Udaipur, corporate summits for Fortune 500
                companies, birthday galas for Bollywood celebrities, and intimate family gatherings
                that meant the world to the people who mattered.
              </p>
              <p className="text-white/65 font-sans leading-relaxed mb-8">
                Our philosophy hasn&apos;t changed since day one: no templates, no copy-paste events.
                Every celebration is designed from scratch, personalized to reflect your story,
                and executed to perfection.
              </p>
              <Button href="/book-consultation" variant="primary">
                Work With Us
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop&q=80"
                alt="SS Event at a luxury wedding"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black-soft/90 backdrop-blur-sm border border-gold/20 rounded-xl p-4">
                  <div className="text-gold font-accent font-bold text-sm tracking-wider uppercase mb-1">Our Promise</div>
                  <p className="text-white/80 font-sans text-sm leading-relaxed">
                    &ldquo;We don&apos;t just manage events — we create memories that last a lifetime.&rdquo;
                  </p>
                  <div className="text-white/40 text-xs font-sans mt-2">— Sanjay Sharma, Founder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLabel>What Drives Us</SectionLabel>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4">
              Mission & <GradientText>Vision</GradientText>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black-mid/50 border border-gold/20 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <CheckCircle className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display font-bold text-white text-2xl mb-3">Our Mission</h3>
              <p className="text-white/60 font-sans leading-relaxed">
                To create extraordinary experiences that honor life&apos;s most important moments —
                with creativity, precision, and a deep commitment to exceeding every expectation.
              </p>
            </div>
            <div className="bg-black-mid/50 border border-white/5 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display font-bold text-white text-2xl mb-3">Our Vision</h3>
              <p className="text-white/60 font-sans leading-relaxed">
                To be India&apos;s most trusted and celebrated event management company —
                known not just for the events we create, but for the relationships we build
                and the joy we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Team */}
      <section className="section-padding bg-black-soft">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-14">
            <SectionLabel>The Team</SectionLabel>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-4">
              The People Behind the <GradientText>Magic</GradientText>
            </h2>
            <GoldOrnament className="justify-center mb-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {member.social.instagram && (
                      <a href={member.social.instagram} target="_blank" rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-black-soft/80 flex items-center justify-center text-white hover:text-gold transition-colors">
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-black-soft/80 flex items-center justify-center text-white hover:text-gold transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-sans font-semibold text-white text-lg mb-1 group-hover:text-gold transition-colors">{member.name}</h3>
                <p className="text-gold text-sm font-accent tracking-wide">{member.role}</p>
                <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                  {member.speciality.map((s) => (
                    <span key={s} className="text-xs font-sans text-white/35 border border-white/10 rounded-full px-2.5 py-0.5">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <SectionLabel>Our Journey</SectionLabel>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4">
              A Decade of <GradientText>Milestones</GradientText>
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent md:-translate-x-px" />
            <div className="space-y-12">
              {companyMilestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-black-mid/50 border border-white/5 rounded-xl p-5 inline-block text-left hover:border-gold/20 transition-colors">
                      <div className="text-gold font-accent font-bold text-2xl mb-1">{m.year}</div>
                      <h3 className="font-sans font-semibold text-white mb-2">{m.title}</h3>
                      <p className="text-white/55 font-sans text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-2.5 md:left-1/2 top-5 w-3 h-3 rounded-full bg-gold border-2 border-black md:-translate-x-1.5 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-black-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLabel>Recognition</SectionLabel>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4">
              Awards & <GradientText>Honours</GradientText>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {awards.map((award) => (
              <div key={award.title} className="bg-black-mid/50 border border-gold/15 rounded-xl p-6 text-center group hover:border-gold/35 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div className="text-gold/60 text-sm font-accent tracking-wide mb-2">{award.year}</div>
                <h3 className="font-sans font-semibold text-white text-base mb-1">{award.title}</h3>
                <p className="text-white/40 font-sans text-sm">{award.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
      <ClientLogos />
      {/* <BookingCTAStrip /> */}
    </>
  )
}
