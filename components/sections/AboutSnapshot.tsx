'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Mic2, Music, Languages } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { Button } from '@/components/ui/Button'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { fadeInUp, fadeInLeft, staggerContainer } from '@/lib/animations/variants'

const highlights = [
  { icon: Mic2, value: '900+', label: 'Shows Hosted' },
  { icon: Award, value: 'Award', label: 'Best Actor, Jaipur' },
  { icon: Music, value: 'Live', label: 'Singing & Hosting' },
  { icon: Languages, value: '3', label: 'Languages On Stage' },
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
                src="/images/aboutme.jpeg"
                alt="Artist Shubham Khandelwal on stage engaging the crowd"
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
              <div className="text-4xl font-display font-bold text-gold leading-none">8+</div>
              <div className="text-white/60 text-sm font-sans mt-1">Years on Stage</div>
              <div className="w-8 h-0.5 bg-gold/40 mt-2" />
            </motion.div>

            {/* Floating card — award */}
            <motion.div
              className="absolute top-8 -right-8 bg-gold rounded-xl p-4 shadow-gold-md max-w-[180px]"
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Award className="w-6 h-6 text-black mb-1" />
              <div className="text-black text-xs font-accent font-bold tracking-wider uppercase leading-tight">
                Best Actor in Jaipur — FSIA 2023
              </div>
            </motion.div>

            {/* Small accent image */}
            <div className="absolute -bottom-4 left-8 w-36 h-36 rounded-xl overflow-hidden border-2 border-black-soft shadow-xl">
              <Image
                src="/images/entertainment.jpeg"
                alt="Shubham Khandelwal performing live"
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
              <SectionLabel>Meet the Artist</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-6"
            >
              Not Just a Host —{' '}
              <GradientText>an Experience</GradientText>
            </motion.h2>

            <motion.div variants={fadeInUp}>
              <GoldOrnament className="mb-6" />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-white/70 font-sans leading-relaxed text-base md:text-lg mb-4"
            >
              Shubham Khandelwal is a Jaipur-based wedding anchor, live singer and stage
              performer who has spent the last eight years doing one thing better than almost
              anyone in Rajasthan — making a room feel something. Recognised as
              &ldquo;Best Actor in Jaipur&rdquo; at the Forever Star India Awards, he brings the
              instincts of a performer and the polish of a professional emcee to every stage.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-white/60 font-sans leading-relaxed text-base md:text-lg mb-10"
            >
              He hosts in Hindi, English and Rajasthani, sings live when the moment calls for it,
              and writes a custom script for every event — because no two celebrations, and no two
              families, are ever the same. When Shubham holds the mic, guests stop checking their
              phones and start looking at the stage.
            </motion.p>

            {/* Highlights grid */}
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
                His Story
              </Button>
              <Button href="/videos" variant="ghost">
                Watch Showreel
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
