'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mic2, Users, Music, Languages, Sparkles, PenLine, Star, Clock, Heart,
  Camera, Award, Flame, Gift, Car, ShieldCheck, Zap, Smile, Briefcase,
  GraduationCap, type LucideIcon,
} from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'
import type { ServiceReason } from '@/data/services'

const iconMap: Record<string, LucideIcon> = {
  mic: Mic2,
  users: Users,
  music: Music,
  languages: Languages,
  sparkles: Sparkles,
  pen: PenLine,
  star: Star,
  clock: Clock,
  heart: Heart,
  camera: Camera,
  award: Award,
  flame: Flame,
  gift: Gift,
  car: Car,
  shield: ShieldCheck,
  zap: Zap,
  smile: Smile,
  briefcase: Briefcase,
  graduation: GraduationCap,
}

interface ServiceWhyChooseProps {
  heading: string
  highlight: string
  items: ServiceReason[]
}

export function ServiceWhyChoose({ heading, highlight, items }: ServiceWhyChooseProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)' }}
      ref={ref}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <SectionLabel className="text-gold text-sm">Why Choose Shubham</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-4"
          >
            {heading} <GradientText>{highlight}</GradientText>
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <GoldOrnament className="justify-center" />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {items.map((reason) => {
            const Icon = iconMap[reason.icon] ?? Sparkles
            return (
              <motion.div
                key={reason.title}
                variants={fadeInUp}
                className="group relative bg-black-mid/50 border border-white/5 rounded-2xl p-7 hover:border-gold/25 transition-all duration-500 hover:bg-black-mid/80 flex gap-5"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-white text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-white/55 font-sans text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
