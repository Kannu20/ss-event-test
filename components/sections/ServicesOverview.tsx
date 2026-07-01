'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'

const services = [
  {
    title: 'Wedding Events',
    description: 'From intimate ceremonies to grand destination weddings — Haldi, Mehendi, Sangeet, Reception and everything in between.',
    image: '/images/wedding.jpeg',
    href: '/services/wedding-events',
    tags: ['Weddings', 'Destination', 'Décor'],
    accent: 'text-rose-300',
  },
  {
    title: 'Corporate Events',
    description: 'Conferences, product launches, award functions, and dealer meets executed with precision and professionalism.',
    image: '/images/corparate.jpeg',
    href: '/services/corporate-events',
    tags: ['Conferences', 'Launches', 'Gala'],
    accent: 'text-blue-300',
  },
  {
    title: 'Social Events',
    description: 'Birthdays, anniversaries, cultural programs, and family celebrations crafted to reflect your unique story.',
    image: '/images/social.jpeg',
    href: '/services/social-events',
    tags: ['Birthdays', 'Anniversaries', 'Cultural'],
    accent: 'text-purple-300',
  },
  {
    title: 'Entertainment Services',
    description: 'Professional anchors, DJ services, live bands, celebrity management, and artist booking for unforgettable performances.',
    image: '/images/entertainment.jpeg',
    href: '/services/entertainment-services',
    tags: ['Live Music', 'Anchors', 'Celebrities'],
    accent: 'text-amber-300',
  },
  {
    title: 'Production Setup',
    description: 'Stage design, LED walls, professional sound systems, lighting setups, photography, videography and drone coverage.',
    image: '/images/setup.jpeg',
    href: '/services/production-setup',
    tags: ['Stage', 'AV', 'Photography'],
    accent: 'text-cyan-300',
  },
]

export function ServicesOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-black overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <SectionLabel className="text-gold ml-14 text-sm">What We Do</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-4"
          >
            Full-Service{' '}
            <GradientText>Event Management</GradientText>
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <GoldOrnament className="justify-center mb-4" />
          </motion.div>
          <motion.p variants={fadeInUp} className="text-white/60 font-sans text-lg">
            Five specialized divisions, one team. We handle every aspect of your event
            so you can simply enjoy the celebration.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              custom={i}
              className={i === 0 ? 'md:col-span-2 xl:col-span-1' : ''}
            >
              <Link href={service.href} className="group block h-full">
                <div className="relative h-[360px] rounded-2xl overflow-hidden card-luxury">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap mb-3">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-accent font-semibold tracking-wider uppercase text-white/50 bg-white/5 border border-white/10 rounded-full px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/60 font-sans text-sm leading-relaxed line-clamp-2 mb-4">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-gold text-sm font-accent font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Explore Service
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Gold border on hover */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold/30 transition-colors duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gold font-accent font-semibold tracking-wider uppercase text-sm hover:gap-3 transition-all duration-300 border-b border-gold/40 pb-1 hover:border-gold"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
