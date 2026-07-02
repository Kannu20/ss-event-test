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
const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? 'hello@ssevent.in'
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: PHONE,
    href: `tel:${PHONE}`,
    description: 'Mon–Sun, 9am–8pm',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: `https://wa.me/${WHATSAPP}?text=Hi, I'd like to enquire about your event services.`,
    description: 'Quick responses',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    description: 'We reply within 24hrs',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Jaipur',
    href: '#map',
    description: 'Rajasthan, India',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon–Sun',
    href: '#',
    description: '9:00am – 8:00pm IST',
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }])} />

      <PageHero
        title="Get In Touch"
        subtitle="Have a vision? We'd love to bring it to life. Reach out for a free consultation — no commitment required."
        tag="Contact Us"
        image="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&h=800&fit=crop&q=80"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Main content */}
      <section className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">
            {/* Left — contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-display font-bold text-3xl text-white mb-8">
                Let&apos;s Start a Conversation
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
                <p className="text-white/40 text-sm font-sans mb-4">Follow us on social media</p>
                <div className="flex gap-3">
                  {[
                    { label: 'Instagram', href: 'https://instagram.com/ssevent' },
                    { label: 'Facebook', href: 'https://facebook.com/ssevent' },
                    { label: 'YouTube', href: 'https://youtube.com/@ssevent' },
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
                <h3 className="font-sans font-semibold text-white text-xl mb-1">Send Us a Message</h3>
                <p className="text-white/40 font-sans text-sm mb-6">We respond within 24 hours, guaranteed.</p>
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
              title="Artist Shubham Khandelwal  office location in Jaipur"
            />
          </div>
        </div>
      </section>

      {/* <BookingCTAStrip
        title="Ready to Start Planning?"
        subtitle="Book a free 30-minute consultation with our event specialists."
      /> */}
    </>
  )
}
