'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedCounter } from '@/components/common/AnimatedCounter'
import { Calendar, MapPin, Star, Users } from 'lucide-react'
import { GoldLine } from '@/components/ui/GoldLine'

const stats = [
  {
    icon: Calendar,
    end: 1500,
    suffix: '+',
    label: 'Shows Hosted',
    description: 'Weddings, sangeets, corporate stages & live shows',
  },
  {
    icon: Star,
    end: 10,
    suffix: '+',
    label: 'Years on Stage',
    description: 'A career built one unforgettable event at a time',
  },
  {
    icon: MapPin,
    end: 50,
    suffix: '+',
    label: 'Cities Performed',
    description: 'Across Rajasthan, India & destination venues',
  },
  {
    icon: Users,
    end: 5,
    suffix: 'L+',
    label: 'Guests Entertained',
    description: 'Audiences moved, engaged and left cheering',
  },
]

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)' }}
    >
      {/* Top gold line */}
      <GoldLine className="absolute top-0 left-0 right-0 w-full" />

      {/* BG glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(212,175,55,0.06),transparent)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-gold" />
                </div>
              </div>
              <div className="flex items-baseline justify-center gap-0.5">
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  className="font-display font-bold text-4xl md:text-5xl text-gold"
                  delay={i * 0.12}
                />
              </div>
              <div className="font-sans font-semibold text-white text-sm md:text-base mt-1 mb-1.5">
                {stat.label}
              </div>
              <div className="text-white/40 text-xs font-sans max-w-[160px] mx-auto leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gold line */}
      <GoldLine className="absolute bottom-0 left-0 right-0 w-full" />
    </section>
  )
}
