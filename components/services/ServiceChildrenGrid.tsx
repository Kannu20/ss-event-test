'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {items.map((child) => (
            <motion.div key={child.slug} variants={fadeInUp}>
              <Link
                href={servicePath(child)}
                className="group block h-full bg-black-mid/50 border border-white/5 rounded-2xl overflow-hidden hover:border-gold/25 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={child.heroImage}
                    alt={child.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-black/60 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-xl">
                    {child.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-white text-xl mb-2 group-hover:text-gold transition-colors duration-300">
                    {child.title}
                  </h3>
                  <p className="text-white/55 font-sans text-sm leading-relaxed mb-5">
                    {child.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold font-accent text-xs font-semibold tracking-wider uppercase group-hover:gap-3 transition-all">
                    Explore
                    <ArrowRight className="w-4 h-4" />
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
