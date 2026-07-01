'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'

// Company names for text logos (premium feel)
const clients = [
  'TATA Group',
  'Reliance Industries',
  'Infosys',
  'Wipro',
  'Mahindra',
  'Bajaj Group',
  'HDFC Bank',
  'Piramal',
  'Sun Pharma',
  'L&T',
  'JSW Group',
  'Godrej',
]

export function ClientLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-16 bg-black-mid/30 border-y border-white/5 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp}>
            <SectionLabel>Trusted By</SectionLabel>
          </motion.div>
          <motion.p variants={fadeInUp} className="text-white/40 font-sans text-sm mt-2">
            Some of India&apos;s most respected names trust Anchor Shubham Khandelwal  for their most important celebrations
          </motion.p>
        </motion.div>

        {/* Logo strip — marquee effect */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center mx-8 min-w-[120px]"
              >
                <span className="font-accent font-bold text-sm tracking-[0.15em] uppercase text-white/25 hover:text-white/50 transition-colors duration-300 cursor-default">
                  {name}
                </span>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
