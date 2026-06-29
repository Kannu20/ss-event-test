import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, MessageCircle } from 'lucide-react'
import { PageHero } from '@/components/common/PageHero'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { Button } from '@/components/ui/Button'
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { GalleryPreview } from '@/components/sections/GalleryPreview'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema, serviceSchema } from '@/lib/seo/schema'
import type { BreadcrumbItem } from '@/types'

interface SubService {
  icon: string
  title: string
  description: string
}

interface ProcessStep {
  step: string
  title: string
  description: string
}

interface ServicePageLayoutProps {
  hero: {
    title: string
    subtitle: string
    tag: string
    image: string
  }
  breadcrumbs: BreadcrumbItem[]
  schemaName: string
  schemaDescription: string
  schemaUrl: string
  intro: {
    label: string
    title: string
    titleHighlight: string
    description: string[]
  }
  subServices: SubService[]
  processSteps: ProcessStep[]
  galleryImages?: string[]
  ctaTitle?: string
}

export function ServicePageLayout({
  hero,
  breadcrumbs,
  schemaName,
  schemaDescription,
  schemaUrl,
  intro,
  subServices,
  processSteps,
  ctaTitle,
}: ServicePageLayoutProps) {
  const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/services' },
        ...breadcrumbs.map((b) => ({ name: b.label, url: b.href ?? '#' })),
      ])} />
      <JsonLd data={serviceSchema(schemaName, schemaDescription, schemaUrl)} />

      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
        tag={hero.tag}
        image={hero.image}
        breadcrumbs={[{ label: 'Services', href: '/services' }, ...breadcrumbs]}
      />

      {/* Intro */}
      <section className="section-padding bg-black-soft">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>{intro.label}</SectionLabel>
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-4">
                {intro.title}{' '}
                <GradientText>{intro.titleHighlight}</GradientText>
              </h2>
              <GoldOrnament className="mb-6" />
              {intro.description.map((para, i) => (
                <p key={i} className="text-white/65 font-sans leading-relaxed mb-4">{para}</p>
              ))}
              <div className="flex gap-3 mt-8">
                <Button href="/book-consultation" variant="primary">Book Consultation</Button>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hi, I'd like to know more about ${schemaName}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-full px-5 py-2.5 font-sans font-medium text-sm hover:bg-[#25D366]/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="relative h-[420px] rounded-2xl overflow-hidden">
              <Image
                src={hero.image}
                alt={hero.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services grid */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-14">
            <SectionLabel>What&apos;s Included</SectionLabel>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4">
              Our <GradientText>Specializations</GradientText>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {subServices.map((s) => (
              <div key={s.title} className="group bg-black-mid/50 border border-white/5 rounded-xl p-6 hover:border-gold/25 transition-all duration-300">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-sans font-semibold text-white text-lg mb-2 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-white/55 font-sans text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-black-soft">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-14">
            <SectionLabel>How It Works</SectionLabel>
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
                <div className="inline-flex w-16 h-16 rounded-full bg-gold/10 border border-gold/30 items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <span className="font-accent font-bold text-gold text-lg">{step.step}</span>
                </div>
                <h3 className="font-sans font-semibold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-white/55 font-sans text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GalleryPreview />
      <TestimonialsCarousel />
      <BookingCTAStrip
        title={ctaTitle ?? `Ready to Plan Your ${schemaName}?`}
        subtitle="Book a free consultation with our specialists. We'll get back to you within 24 hours."
      />
    </>
  )
}
