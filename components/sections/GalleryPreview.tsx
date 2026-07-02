'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Images } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'

const previewImages = [
  {
    src: '/images/wedding.jpeg',
    alt: 'Luxury wedding mandap',
    className: 'row-span-2',
  },
  {
    src: '/images/corparate.jpeg',
    alt: 'Corporate conference setup',
    className: '',
  },
  {
    src: '/images/birthday.jpeg',
    alt: 'Outdoor wedding ceremony',
    className: '',
  },
  {
    src: '/images/hero.jpeg',
    alt: 'Elegant reception hall',
    className: 'row-span-2',
  },
  {
    src: '/images/setup.jpeg',
    alt: 'Birthday party decoration',
    className: '',
  },
  {
    src: '/images/sangeet.jpeg',
    alt: 'Stage production setup',
    className: '',
  },
]

export function GalleryPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-black overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div>
            <motion.div variants={fadeInUp}>
              <SectionLabel>Gallery</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4"
            >
              Moments We&apos;ve{' '}
              <GradientText>Captured</GradientText>
            </motion.h2>
          </div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-gold font-accent text-sm font-semibold tracking-wider uppercase hover:gap-3 transition-all border-b border-gold/40 pb-1 hover:border-gold"
            >
              <Images className="w-4 h-4" />
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px]"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {previewImages.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${img.className}`}
            >
              <Link href="/gallery">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center">
                    <Images className="w-4 h-4 text-black" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
