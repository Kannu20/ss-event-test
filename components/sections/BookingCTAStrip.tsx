'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GoldLine } from '@/components/ui/GoldLine'

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919876543210'
const PHONE = process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? '+91 98765 43210'

interface BookingCTAStripProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  showWhatsApp?: boolean
}

export function BookingCTAStrip({
  title = 'Ready to Create Something Extraordinary?',
  subtitle = 'Book a free consultation with our event specialists. No commitment required.',
  primaryLabel = 'Book Free Consultation',
  primaryHref = '/book-consultation',
  showWhatsApp = true,
}: BookingCTAStripProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 md:py-20"
      style={{ background: 'linear-gradient(135deg, #111111 0%, #1A1A1A 50%, #111111 100%)' }}
    >
      {/* Gold top line */}
      <GoldLine className="absolute top-0 left-0 right-0 w-full" />

      {/* BG glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_100%_at_50%_100%,rgba(212,175,55,0.1),transparent)] pointer-events-none" />

      {/* Gold bottom line */}
      <GoldLine className="absolute bottom-0 left-0 right-0 w-full" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {title}
          </h2>
          <p className="text-white/60 font-sans text-lg mb-10">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={primaryHref} variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              {primaryLabel}
            </Button>

            {showWhatsApp && (
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi, I'd like to enquire about your event services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-full px-6 py-3.5 font-sans font-medium text-base hover:bg-[#25D366]/20 hover:border-[#25D366]/60 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            )}

            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors font-sans text-sm"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
