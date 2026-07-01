'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'

const categories = [
  {
    title: 'Wedding Planning',
    count: '300+ weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=700&fit=crop&q=80',
    href: '/services/wedding-events',
    className: 'col-span-1 row-span-2',
    height: 'h-full min-h-[400px]',
  },
  {
    title: 'Corporate Events',
    count: '150+ events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=400&fit=crop&q=80',
    href: '/services/corporate-events',
    className: 'col-span-2',
    height: 'h-48',
  },
  {
    title: 'Social Celebrations',
    count: '200+ celebrations',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop&q=80',
    href: '/services/social-events',
    className: '',
    height: 'h-48',
  },
  {
    title: 'Production & Stage',
    count: '5K+ setups',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=300&fit=crop&q=80',
    href: '/services/production-setup',
    className: '',
    height: 'h-48',
  },
]

export function EventCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-black overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-xl mx-auto mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <SectionLabel className="text-gold ml-14 text-sm">Event Categories</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4"
          >
            Every Occasion,{' '}
            <GradientText>Perfected</GradientText>
          </motion.h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={fadeInUp}
              custom={i}
              className={cat.className}
            >
              <Link href={cat.href} className="group block h-full">
                <div className={`relative ${cat.height} rounded-2xl overflow-hidden`}>
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="text-gold text-xs font-accent font-semibold tracking-wider uppercase mb-1">
                      {cat.count}
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-white text-xl group-hover:text-gold transition-colors duration-300">
                        {cat.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-gold/0 group-hover:text-gold/80 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold/25 transition-colors duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
