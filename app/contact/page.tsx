import type { Metadata } from 'next'
import { generatePageMetadata, pageSEO } from '@/lib/seo/metadata'
import { JsonLd } from '@/components/common/JsonLd'
import { localBusinessSchema, breadcrumbSchema } from '@/lib/seo/schema'
import { PageHero } from '@/components/common/PageHero'
import { BookingCTAStrip } from '@/components/sections/BookingCTAStrip'
import { ContactForm } from '@/components/forms/ContactForm'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata(pageSEO.contact)

const PHONE = process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? '+91 98765 43210'
const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? 'Khandelwalshubham79@gmail.com'
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: PHONE,
    href: `tel:${PHONE}`,
    description: 'Call Shubham directly',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with Shubham',
    href: `https://wa.me/${WHATSAPP}?text=Hi Shubham, I'd like to check your availability for my event.`,
    description: 'Fastest way to check dates',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    description: 'Responds within 24 hours',
  },
  {
    icon: MapPin,
    label: 'Based In',
    value: 'Jaipur',
    href: '#map',
    description: 'Rajasthan · Available pan-India & destination',
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Booking now',
    href: '#',
    description: 'Secure your date early for peak season',
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }])} />

      <PageHero
        title="Book Shubham"
        subtitle="Planning an event? Check Shubham's availability and lock in your date. He personally responds within 24 hours."
        tag="Get In Touch"
        image="/images/about2.jpeg"
        className="object-contain"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Main content */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">
            {/* Left — contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-3xl text-white mb-8">
                Let&apos;s Check Your Date
              </h2>



              <div className="space-y-4 mb-10">
                {contactDetails.map((detail) => (
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={detail.external ? '_blank' : undefined}
                    rel={detail.external ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <detail.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs font-sans uppercase tracking-wide mb-0.5">{detail.label}</div>
                      <div className="text-white font-sans font-medium group-hover:text-gold transition-colors">{detail.value}</div>
                      <div className="text-white/35 text-xs font-sans mt-0.5">{detail.description}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <div className="border-t border-white/5 pt-8">
                <p className="text-white/40 text-sm font-sans mb-4">Follow Shubham on social media</p>
                <div className="flex gap-3">
                  {[
                    { label: 'Instagram', href: 'https://www.instagram.com/artistshubhamkhandelwal/' },
                    { label: 'Facebook', href: 'https://www.facebook.com/shubham.khandelwal.9883' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white/10 rounded-full text-xs font-sans text-white/50 hover:border-gold/40 hover:text-gold transition-all"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="bg-black-mid/50 border border-white/5 rounded-2xl p-6 md:p-8">
                <h3 className="font-sans font-semibold text-white text-xl mb-1">Send Your Booking Enquiry</h3>
                <p className="text-white/40 font-sans text-sm mb-6">Shubham responds within 24 hours.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section id="map" className="bg-black-soft">
        <div className="container mx-auto px-4 py-2">
          <div className="rounded-2xl overflow-hidden h-80 border border-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240500.6278026855!2d75.62574683476568!3d26.885115145593463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e1!3m2!1sen!2sin!4v1781330602407!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Artist Shubham Khandelwal — based in Jaipur, Rajasthan"
            />
          </div>
        </div>
      </section>

      <BookingCTAStrip
        title="Let's Make Your Celebration Extraordinary"
        subtitle="Tell Shubham your date and city — he replies within 24 hours to confirm availability."
      />
    </>
  )
}
