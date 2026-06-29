import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/seo/schema'
import { BookingForm } from '@/components/forms/BookingForm'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { Shield, Clock, Phone, Star } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata(pageSEO.booking)

const trustSignals = [
  { icon: Shield, text: 'Free, no-obligation consultation' },
  { icon: Clock, text: 'Response within 24 hours' },
  { icon: Phone, text: 'Followed by a personal call from our team' },
  { icon: Star, text: '500+ successful events and counting' },
]

export default function BookConsultationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Book Consultation', url: '/book-consultation' }])} />

      <div className="min-h-screen bg-black pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16 max-w-5xl mx-auto">
            {/* Left — info */}
            <div className="lg:col-span-2">
              <div className="sticky top-32">
                <SectionLabel>Get Started</SectionLabel>
                <h1 className="font-display font-bold text-4xl leading-tight mt-4 mb-4">
                  Book Your Free{' '}
                  <GradientText>Consultation</GradientText>
                </h1>
                <p className="text-white/60 font-sans leading-relaxed mb-8">
                  Tell us about your event and we&apos;ll get back to you with a personalized proposal
                  within 24 hours. Absolutely free, no commitment required.
                </p>

                {/* Trust signals */}
                <div className="space-y-3 mb-8">
                  {trustSignals.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-white/65 font-sans text-sm">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>

                {/* Review snippet */}
                <div className="bg-black-mid/50 border border-white/5 rounded-xl p-5">
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-white/65 font-sans text-sm leading-relaxed italic mb-3">
                    &ldquo;Booking a consultation was the best first step. Within 24 hours we had a proposal and within a week we had our dream wedding planned.&rdquo;
                  </p>
                  <div className="text-white/40 text-xs font-sans">— Priya & Arjun, Wedding 2024</div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="bg-black-mid/50 border border-white/5 rounded-2xl p-6 md:p-8">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
