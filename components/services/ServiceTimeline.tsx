'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'
import type { ServiceFlowStep } from '@/data/services'

interface ServiceTimelineProps {
  heading: string
  highlight: string
  steps: ServiceFlowStep[]
}

export function ServiceTimeline({ heading, highlight, steps }: ServiceTimelineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-black-soft" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-4">
            <SectionLabel>Event Flow</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold text-4xl md:text-5xl leading-tight"
          >
            {heading} <GradientText>{highlight}</GradientText>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              variants={fadeInUp}
              className="relative text-center group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] right-[-40%] h-px bg-gradient-to-r from-gold/30 to-transparent z-10" />
              )}
              <div className="inline-flex w-16 h-16 rounded-full bg-gold/10 border border-gold/30 items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                <span className="font-accent font-bold text-gold text-lg">{step.step}</span>
              </div>
              <h3 className="font-sans font-semibold text-white text-lg mb-2">{step.title}</h3>
              <p className="text-white/55 font-sans text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
