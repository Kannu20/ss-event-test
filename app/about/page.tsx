import type { Metadata } from 'next'
import Image from 'next/image'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/common/JsonLd'
import { personSchema, breadcrumbSchema } from '@/lib/seo/schema'
import { PageHero } from '@/components/common/PageHero'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { Button } from '@/components/ui/Button'
import { StatsSection } from '@/components/sections/StatsSection'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { ClientLogos } from '@/components/sections/ClientLogos'
import { Award, CheckCircle, Mic, Music, Languages, Sparkles } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata(pageSEO.about)

const awards = [
  { year: '2023', title: 'Best Actor in Jaipur', body: 'Forever Star India Awards (FSIA)' },
  { year: '1500+', title: 'Shows Hosted', body: 'Weddings, corporate stages & live shows' },
  { year: 'MBA', title: 'MBA · M.Com', body: 'A performer with a business mind' },
  { year: '3', title: 'Languages on Stage', body: 'Hindi · English · Rajasthani' },
]

const journey = [
  {
    year: 'The Spark',
    title: 'A Boy Who Loved the Mic',
    description: 'Growing up in Jaipur, Shubham was always the one narrating, singing and getting everyone to join in. What began as school stages and family functions quickly became a calling — the crowd, the cue, the moment.',
  },
  {
    year: 'The Craft',
    title: 'Learning to Read a Room',
    description: 'Show after show, Shubham sharpened the instinct that sets a great host apart — knowing exactly when to lift the energy, when to slow down for emotion, and how to make every guest feel part of the moment.',
  },
  {
    year: 'The Recognition',
    title: 'Best Actor in Jaipur, 2023',
    description: 'His stage presence earned him the Best Actor in Jaipur honour at the Forever Star India Awards (FSIA) in 2023 — a nod to the performer behind the microphone.',
  },
  {
    year: 'Today',
    title: '1500+ Shows and Counting',
    description: "With 10+ years on stage, 50+ cities and 5 Lakh+ guests entertained, Shubham is one of Rajasthan's most trusted wedding anchors, corporate hosts and live entertainers — and he still treats every show like the biggest of his life.",
  },
]

const brings = [
  { icon: Mic, title: 'Stage Presence', body: 'A commanding yet warm presence on the mic. Shubham owns the stage without ever stealing the spotlight from the people the day is really about.', highlight: true },
  { icon: Sparkles, title: 'Audience Connection', body: 'He reads the room and adapts live — pulling shy guests in, sparking laughter, and turning a seated audience into a celebration that feels alive.' },
  { icon: Music, title: 'Live Singing', body: 'Not just a host — a performer. Shubham weaves live vocals into the evening, turning key moments into sing-alongs the whole crowd remembers.' },
  { icon: Languages, title: 'Multilingual Hosting', body: 'Fluent hosting in Hindi, English and Rajasthani lets Shubham connect with every generation in the room, switching languages to keep everyone engaged.', highlight: true },
]

const trustPoints = [
  'Custom-scripted for your event — never a copy-paste run-of-show',
  'Reads the room live and adapts on the spot',
  'Hosts fluently in Hindi, English and Rajasthani',
  'Award-winning performer with live singing built in',
  'Coordinates smoothly with your planner, DJ and family',
  'Treats every show like the biggest of his career',
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About Shubham', url: '/about' }])} />

      <PageHero
        title="Meet Artist Shubham Khandelwal"
        subtitle="Jaipur-based wedding anchor, corporate host and live entertainer — the voice behind some of Rajasthan's most memorable celebrations."
        tag="About Shubham"
        image="/images/about1.jpeg"
        breadcrumbs={[{ label: 'About Shubham' }]}
      />

      {/* Brand Story */}
      <section className="section-padding bg-black-soft">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>The Artist</SectionLabel>
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-4">
                Built for the Stage,{' '}
                <GradientText>Driven by the Crowd</GradientText>
              </h2>
              <GoldOrnament className="mb-6" />
              <p className="text-white/65 font-sans leading-relaxed mb-5">
                Shubham Khandelwal is a Jaipur-based professional anchor, live stage performer and
                master of ceremonies who has spent 10+ years doing the one thing he loves most
                — holding a room together. From grand weddings and sangeet nights to corporate
                award ceremonies and celebrity events, he hosts in Hindi, English and Rajasthani
                with a warmth and energy that makes every guest feel included.
              </p>
              <p className="text-white/65 font-sans leading-relaxed mb-5">
                What sets Shubham apart is his instinct on stage. He reads the room in real time
                — sensing when to build the energy, when to slow down for an emotional moment,
                and when to pull the whole crowd into a song or a game. That instinct, sharpened
                across 1500+ shows in 50+ cities, is why families and brands trust him with their
                most important moments.
              </p>
              <p className="text-white/65 font-sans leading-relaxed mb-8">
                An award-winning performer — Best Actor in Jaipur at the Forever Star India Awards
                2023 — with an MBA and M.Com behind him, Shubham brings both heart and discipline
                to the mic. No two events are alike, so no two scripts are either. Every show is
                written, rehearsed and performed for you.
              </p>
              <Button href="/book-consultation" variant="primary">
                Book Shubham
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/about.jpeg"
                alt="Artist Shubham Khandelwal hosting on stage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black-soft/90 backdrop-blur-sm border border-gold/20 rounded-xl p-4">
                  <div className="text-gold font-accent font-bold text-sm tracking-wider uppercase mb-1">His Promise</div>
                  <p className="text-white/80 font-sans text-sm leading-relaxed">
                    &ldquo;Give me the mic, and I&apos;ll give your guests a night they talk about for years.&rdquo;
                  </p>
                  <div className="text-white/40 text-xs font-sans mt-2">— Shubham Khandelwal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What He Brings to the Stage */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center">
              <SectionLabel>On Stage</SectionLabel>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4">
              What Shubham <GradientText>Brings</GradientText>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {brings.map((b) => (
              <div
                key={b.title}
                className={`bg-black-mid/50 rounded-2xl p-8 ${b.highlight ? 'border border-gold/20' : 'border border-white/5'}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                  <b.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-3">{b.title}</h3>
                <p className="text-white/60 font-sans leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Journey */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <SectionLabel>His Journey</SectionLabel>
            </div>

            <h2 className="text-center font-display font-bold text-4xl md:text-5xl leading-tight">
              From Family Stages to <GradientText>Center Stage</GradientText>
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent md:-translate-x-px" />
            <div className="space-y-12">
              {journey.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-black-mid/50 border border-white/5 rounded-xl p-5 inline-block text-left hover:border-gold/20 transition-colors">
                      <div className="text-gold font-accent font-bold text-xl mb-1">{m.year}</div>
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

      {/* Recognition */}
      <section className="section-padding bg-black-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">

            <SectionLabel>Recognition</SectionLabel>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4">
              Awards & <GradientText>Credentials</GradientText>
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

      {/* Why Clients Trust Him */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="flex justify-center mb-4">
            <SectionLabel>Why Book Shubham</SectionLabel>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4">
              Why Families &amp; Brands <GradientText>Trust Him</GradientText>
            </h2>
            <GoldOrnament className="justify-center mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 bg-black-mid/40 border border-white/5 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-white/70 font-sans text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
      <ClientLogos />
      <BookingCTAStrip
        title="Book Artist Shubham Khandelwal Today"
        subtitle="Check his availability for your date — he replies personally within 24 hours."
      />
    </>
  )
}
