'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'
import type { ServiceFeature } from '@/data/services'

interface ServiceFeaturesProps {
  label?: string
  heading: string
  highlight: string
  items: ServiceFeature[]
}

export function ServiceFeatures({
  label = "What's Included",
  heading,
  highlight,
  items,
}: ServiceFeaturesProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <SectionLabel>{label}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold text-4xl md:text-5xl leading-tight"
          >
            {heading} <GradientText>{highlight}</GradientText>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="group bg-black-mid/50 border border-white/5 rounded-xl p-6 hover:border-gold/25 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-sans font-semibold text-white text-lg mb-2 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-white/55 font-sans text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
