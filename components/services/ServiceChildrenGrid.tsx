'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { CardImage } from '@/components/common/CardImage'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'
import { servicePath, type ServiceNode } from '@/data/services'

interface ServiceChildrenGridProps {
  categoryTitle: string
  items: ServiceNode[]
}

export function ServiceChildrenGrid({ categoryTitle, items }: ServiceChildrenGridProps) {
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
            <SectionLabel>Explore</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold text-4xl md:text-5xl leading-tight"
          >
            {categoryTitle} <GradientText>Services</GradientText>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {items.map((child) => (
            <motion.div key={child.slug} variants={fadeInUp} className="h-full">
              <Link
                href={servicePath(child)}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gold/10 bg-black-mid/40 p-3 shadow-lg shadow-black/40 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/10"
              >
                {/* Image — complete photo, never cropped (object-contain on dark) */}
                <div className="relative">
                  <CardImage src={child.heroImage} alt={child.title} aspect="4/3" />
                  <div className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-black/60 text-xl backdrop-blur-sm">
                    {child.icon}
                  </div>
                </div>

                {/* Content — equal heights via flex + line-clamp, button pinned to bottom */}
                <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <h3 className="mb-2 font-display text-xl font-semibold text-white transition-colors duration-300 group-hover:text-gold">
                    {child.title}
                  </h3>
                  <p className="mb-5 line-clamp-3 font-sans text-sm leading-relaxed text-white/55">
                    {child.subtitle}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 font-accent text-xs font-semibold uppercase tracking-wider text-gold transition-all group-hover:gap-3">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
