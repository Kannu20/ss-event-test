'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedCounter } from '@/components/common/AnimatedCounter'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'

const STATS = [
  { end: 1500, suffix: '+', label: 'Shows Hosted' },
  { end: 50, suffix: '+', label: 'Cities' },
  { end: 10, suffix: '+', label: 'Years Experience' },
  { end: 100, suffix: '%', label: 'Professional Hosting' },
]

/** Luxury statistics band shown directly beneath the portfolio hero. */
export function PortfolioStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-white/5 bg-black-soft"
      aria-label="Career statistics"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(212,175,55,0.08),transparent)] pointer-events-none" />
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 divide-white/5 md:divide-x"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={fadeInUp} className="md:px-4">
              <AnimatedCounter end={s.end} suffix={s.suffix} label={s.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
