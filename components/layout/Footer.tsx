import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react'
import { footerLinks } from '@/lib/constants/navigation'
import { GoldLine } from '@/components/ui/GoldLine'

const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER ?? ''
const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? ''
const email = process.env.NEXT_PUBLIC_EMAIL ?? ''
const address = process.env.NEXT_PUBLIC_ADDRESS ?? ''
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''

const socialIcons = {
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
}

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/artistshubhamkhandelwal/', icon: 'Instagram' as const },
  { label: 'Facebook', href: 'https://www.facebook.com/shubham.khandelwal.9883', icon: 'Facebook' as const },
  { label: 'WhatsApp', href: `https://wa.me/${whatsappNumber}`, icon: 'MessageCircle' as const },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black-soft border-t border-black-light" role="contentinfo">
      {/* Main CTA strip */}
      <div className="relative overflow-hidden bg-black-mid py-14 md:py-20">
        {/* Background gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 rounded-full bg-gold/8 blur-[80px] pointer-events-none" />

        <div className="container mx-auto relative z-10 text-center">
          <p className="font-accent text-xs tracking-widest uppercase text-gold mb-4">
            Start Planning Today
          </p>
          <h2 className="font-display text-display text-white mb-6 max-w-2xl mx-auto">
            Ready to Create Something{' '}
            <span className="text-gold-gradient">Extraordinary?</span>
          </h2>
          <p className="font-sans text-gray-400 max-w-xl mx-auto mb-10">
            Let&apos;s bring your vision to life. Book a free consultation and discover how Anchor Shubham Khandelwal  transforms your dream event into an unforgettable reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-black font-sans font-semibold text-sm rounded-md hover:bg-gold-light transition-all duration-300 hover:shadow-gold-md active:scale-[0.97]"
            >
              Book Free Consultation
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi! I'm interested in Anchor Shubham Khandelwal  services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-gold/30 text-gold font-sans font-medium text-sm rounded-md hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div className="container mx-auto py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group mb-5">
              <span className="font-display text-2xl font-bold text-white group-hover:text-gold transition-colors">SS</span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold text-gold-gradient">Event</span>
                <span className="font-accent text-[0.5rem] tracking-[0.25em] text-gray-500 uppercase mt-0.5">Premium Events</span>
              </div>
            </Link>

            <p className="font-sans text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              Full-service premium event management. Where moments become memories that last a lifetime.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon }) => {
                const Icon = socialIcons[icon]
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-black-light border border-black-light hover:border-gold/40 hover:bg-gold/8 hover:text-gold text-gray-400 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-accent text-xs tracking-widest uppercase text-gold mb-5">
              Quick Links
            </h3>
            <GoldLine className="mb-5 w-8" />
            <ul className="space-y-3">
              {footerLinks.quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm text-gray-400 hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-muted group-hover:bg-gold transition-colors duration-200 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-accent text-xs tracking-widest uppercase text-gold mb-5">
              Our Services
            </h3>
            <GoldLine className="mb-5 w-8" />
            <ul className="space-y-3">
              {footerLinks.services.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm text-gray-400 hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-muted group-hover:bg-gold transition-colors duration-200 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-accent text-xs tracking-widest uppercase text-gold mb-5">
              Contact Us
            </h3>
            <GoldLine className="mb-5 w-8" />
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-start gap-3 group"
                  aria-label={`Call us at ${phoneDisplay}`}
                >
                  <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-accent text-[0.6rem] tracking-widest uppercase text-gray-500 mb-0.5">Phone</p>
                    <p className="font-sans text-sm text-gray-300 group-hover:text-gold transition-colors">
                      {phoneDisplay}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-start gap-3 group"
                  aria-label={`Email us at ${email}`}
                >
                  <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-accent text-[0.6rem] tracking-widest uppercase text-gray-500 mb-0.5">Email</p>
                    <p className="font-sans text-sm text-gray-300 group-hover:text-gold transition-colors break-all">
                      {email}
                    </p>
                  </div>
                </a>
              </li>
              {address && (
                <li>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-accent text-[0.6rem] tracking-widest uppercase text-gray-500 mb-0.5">Address</p>
                      <p className="font-sans text-sm text-gray-300 leading-relaxed">
                        {address}
                      </p>
                    </div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black-light">
        <div className="container mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-gray-600">
            © {currentYear} Anchor Shubham Khandelwal . All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="font-sans text-xs text-gray-600 hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-sans text-xs text-gray-600 hover:text-gold transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
