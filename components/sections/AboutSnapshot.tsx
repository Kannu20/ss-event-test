'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, MapPin, Star } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { Button } from '@/components/ui/Button'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations/variants'

const highlights = [
  { icon: Award, value: '500+', label: 'Events Delivered' },
  { icon: Users, value: '10+', label: 'Years of Excellence' },
  { icon: MapPin, value: '25+', label: 'Cities Covered' },
  { icon: Star, value: '4.9★', label: 'Average Rating' },
]

export function AboutSnapshot() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-black-soft overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Image collage */}
          <motion.div
            className="relative h-[500px] lg:h-[620px]"
            variants={fadeInLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Main image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=700&h=800&fit=crop&q=80"
                alt="SS Event luxury wedding setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating card — experience */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-black-mid border border-gold/20 rounded-xl p-5 shadow-gold-md"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-4xl font-display font-bold text-gold leading-none">10+</div>
              <div className="text-white/60 text-sm font-sans mt-1">Years of Excellence</div>
              <div className="w-8 h-0.5 bg-gold/40 mt-2" />
            </motion.div>

            {/* Floating card — award */}
            <motion.div
              className="absolute top-8 -right-8 bg-gold rounded-xl p-4 shadow-gold-md"
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Award className="w-6 h-6 text-black mb-1" />
              <div className="text-black text-xs font-accent font-bold tracking-wider uppercase">Award Winning</div>
            </motion.div>

            {/* Small accent image */}
            <div className="absolute -bottom-4 left-8 w-36 h-36 rounded-xl overflow-hidden border-2 border-black-soft shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=300&fit=crop&q=80"
                alt="Corporate event setup"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>Our Story</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-6"
            >
              Where Every Detail{' '}
              <GradientText>Tells a Story</GradientText>
            </motion.h2>

            <motion.div variants={fadeInUp}>
              <GoldOrnament className="mb-6" />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-white/65 font-sans leading-relaxed text-base md:text-lg mb-4"
            >
              Founded in 2014, SS Event has grown from a small Jaipur-based team into one of India&apos;s
              most sought-after full-service event management companies — trusted by families,
              Fortune 500 corporations, and celebrities alike.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-white/65 font-sans leading-relaxed text-base md:text-lg mb-10"
            >
              Our philosophy is simple: every event is unique, every client deserves our absolute best,
              and no detail is too small to perfect. We don&apos;t just manage events — we craft
              experiences that echo for generations.
            </motion.p>

            {/* Stats grid */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {highlights.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-black-mid/60 rounded-xl p-4 border border-white/5"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-gold text-xl leading-none">{value}</div>
                    <div className="text-white/50 text-xs font-sans mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex gap-4">
              <Button href="/about" variant="primary">
                Our Story
              </Button>
              <Button href="/portfolio" variant="ghost">
                View Portfolio
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
