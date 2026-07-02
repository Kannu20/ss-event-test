'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { ContactForm } from '@/components/forms/ContactForm'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations/variants'

const PHONE = process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? '+91 90575 26202'
const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? 'Khandelwalshubham79@gmail.com'
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919057526202'

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: PHONE,
    href: `tel:${PHONE}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    href: `https://wa.me/${WHATSAPP}?text=Hi Shubham, I'd like to check your availability for my event.`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Jaipur, India',
    href: '/contact',
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-black overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* Left — info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Get In Touch</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-4"
            >
              Let&apos;s Make Your{' '}
              <GradientText>Celebration</GradientText>
              <br />Extraordinary
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <GoldOrnament className="mb-6" />
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-white/60 font-sans leading-relaxed text-lg mb-10"
            >
              Tell Shubham about your event — the date, the city, the vibe you want. He personally
              reviews every enquiry and replies within 24 hours to check availability.
            </motion.p>

            {/* Contact cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={fadeInUp}
                  className="group bg-black-mid/60 border border-white/5 rounded-xl p-5 hover:border-gold/25 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="text-white/40 text-xs font-sans mb-1">{info.label}</div>
                  <div className="text-white font-sans text-sm font-medium group-hover:text-gold transition-colors duration-300">
                    {info.value}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="bg-black-mid/50 border border-white/5 rounded-2xl p-6 md:p-8">
              <h3 className="font-sans font-semibold text-white text-xl mb-2">Send Us a Message</h3>
              <p className="text-white/50 text-sm font-sans mb-6">We respond within 24 hours, guaranteed.</p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
