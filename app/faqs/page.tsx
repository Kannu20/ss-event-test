import type { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema, faqPageSchema } from '@/lib/seo/schema'
import { PageHero } from '@/components/common/PageHero'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { FAQsContent } from '@/components/common/FAQsContent'
import { faqs } from '@/lib/constants/faqs'

export const metadata: Metadata = generatePageMetadata(pageSEO.faqs)

export default function FAQsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'FAQs', url: '/faqs' }])} />
      <JsonLd data={faqPageSchema(faqs.map((f) => ({ question: f.question, answer: f.answer })))} />

      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about planning your event with Anchor Shubham Khandelwal . Can't find your answer? Contact us directly."
        tag="FAQs"
        image="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&h=800&fit=crop&q=80"
        breadcrumbs={[{ label: 'FAQs' }]}
      />

      <FAQsContent />

      {/* Contact strip */}
      <section className="py-12 bg-black-soft border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-sans mb-4">Still have questions? We&apos;re happy to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-black font-sans font-semibold px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-sans px-6 py-3 rounded-full hover:border-gold/40 hover:text-gold transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* <BookingCTAStrip /> */}
    </>
  )
}
