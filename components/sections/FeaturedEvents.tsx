'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { Badge } from '@/components/ui/Badge'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'

const events = [
  {
    id: 1,
    title: 'Palace Sangeet — 800 guests on their feet',
    location: 'Udaipur, Rajasthan',
    date: 'November 2024',
    category: 'Sangeet Anchoring',
    image: '/images/sangeet.jpeg',
    span: 'lg:col-span-2 lg:row-span-2',
    height: 'h-[500px]',
  },
  {
    id: 2,
    title: 'Annual Awards Night — Emcee',
    location: 'Jaipur, Rajasthan',
    date: 'October 2024',
    category: 'Corporate Host',
    image: '/images/corporate3.png',
    span: '',
    height: 'h-[240px]',
  },
  {
    id: 3,
    title: 'Milestone Birthday — Live anchoring Set',
    location: 'Jaipur, Rajasthan',
    date: 'September 2024',
    category: 'Private Event',
    image: '/images/birthday1.jpeg',
    span: '',
    height: 'h-[240px]',
  },
  {
    id: 4,
    title: 'Desert Wedding Reception — Bilingual Hosting',
    location: 'Jaisalmer, Rajasthan',
    date: 'August 2024',
    category: 'Reception Hosting',
    image: '/images/sangeet1.jpeg',
    span: 'lg:col-span-2',
    height: 'h-[240px]',
  },
]

export function FeaturedEvents() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-black-soft overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div className="max-w-xl">
            <motion.div variants={fadeInUp}>
              <SectionLabel>Our Work</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-3"
            >
              Featured{' '}
              <GradientText>Events</GradientText>
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <GoldOrnament className="mb-3" />
            </motion.div>
            <motion.p variants={fadeInUp} className="text-white/60 font-sans">
              A glimpse at some of the stages Shubham has recently lit up across Rajasthan.
            </motion.p>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-gold font-accent text-sm font-semibold tracking-wider uppercase hover:gap-3 transition-all border-b border-gold/40 pb-1 hover:border-gold"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              variants={fadeInUp}
              custom={i}
              className={event.span}
            >
              <Link href="/portfolio" className="group block">
                <div className={`relative ${event.height} rounded-2xl overflow-hidden`}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <Badge variant="gold" className="w-fit mb-2 text-xs">
                      {event.category}
                    </Badge>
                    <h3 className="font-display font-bold text-white text-lg md:text-xl leading-snug mb-2 group-hover:text-gold transition-colors duration-300">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/50 text-xs font-sans">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </span>
                    </div>
                  </div>

                  {/* Border on hover */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold/30 transition-colors duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
