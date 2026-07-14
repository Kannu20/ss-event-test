'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mic2, Users, Music, Languages, Sparkles, PenLine
} from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { Button } from '@/components/ui/Button'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'

const reasons = [
  {
    icon: Mic2,
    title: 'Commanding Stage Presence',
    description: 'The moment Shubham takes the mic, the room settles and every eye turns to the stage. ten years of performing have made confidence his default setting.',
  },
  {
    icon: Users,
    title: 'Real Audience Engagement',
    description: 'He reads the crowd in real time — pulling shy guests in, keeping the energy high, and making sure grandparents and cousins alike feel part of the moment.',
  },
  {
    icon: Music,
    title: 'Live Singing',
    description: 'A host who can also sing. When the moment deserves goosebumps, Shubham puts down the script and delivers a live performance guests never expect.',
  },
  {
    icon: Languages,
    title: 'Multilingual Hosting',
    description: 'Fluent hosting in Hindi, English and Rajasthani — switching effortlessly so every guest, from close family to corporate delegates, feels spoken to.',
  },
  {
    icon: PenLine,
    title: 'Custom-Written Scripts',
    description: 'No recycled one-liners. Every wedding, sangeet and corporate show gets a script built around your story, your people and your run-of-show.',
  },
  {
    icon: Sparkles,
    title: 'Interactive Entertainment',
    description: 'Games, banter, crowd interaction and surprise moments — Shubham designs the flow so the celebration never dips and never drags.',
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)' }}
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <SectionLabel className="text-gold mr-1 text-sm">Why Book Shubham</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-4"
          >
            What Sets Him{' '}
            <GradientText>Apart</GradientText>
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <GoldOrnament className="justify-center mb-4" />
          </motion.div>
          <motion.p variants={fadeInUp} className="text-white/60 font-sans text-lg">
            Anyone can read announcements off a card. Booking Shubham means booking a performer
            who turns your event into a show — and your guests into an audience that stays.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              custom={i}
              className="group relative bg-black-mid/50 border border-white/5 rounded-2xl p-7 hover:border-gold/25 transition-all duration-500 hover:bg-black-mid/80"
            >
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gold/10 to-transparent" />
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                <reason.icon className="w-6 h-6 text-gold" />
              </div>

              <h3 className="font-sans font-semibold text-white text-lg mb-3 group-hover:text-gold transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-white/55 font-sans text-sm leading-relaxed">
                {reason.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/30 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Button href="/book-consultation" variant="primary" size="lg">
            Check Shubham&apos;s Availability
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
