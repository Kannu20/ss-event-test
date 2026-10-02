'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { Button } from '@/components/ui/Button'
import { luxuryTransition } from '@/lib/animations/variants'

type Shot = {
  src: string
  alt: string
  caption: string
  orientation: 'landscape' | 'portrait'
  /** Tailwind classes controlling placement in the md+ 12-column grid */
  className: string
  sizes: string
}

// Real event photographs (web-sized copies in /public/images/stage).
// Captions describe only what is visible in each frame.
const shots: Shot[] = [
  {
    src: '/images/stage/runway.jpg',
    alt: 'Artist Shubham Khandelwal walking the runway at a fashion and pageant show',
    caption: 'Fashion Show Runway',
    orientation: 'landscape',
    className: 'md:col-span-8 md:row-span-2',
    sizes: '(max-width: 768px) 100vw, 66vw',
  },
  {
    src: '/images/stage/media.jpg',
    alt: 'Artist Shubham Khandelwal giving a media interview at a pageant event',
    caption: 'Media Interaction',
    orientation: 'landscape',
    className: 'md:col-span-4',
    sizes: '(max-width: 768px) 100vw, 33vw',
  },
  {
    src: '/images/stage/award-trophy.jpg',
    alt: 'Artist Shubham Khandelwal presenting an award on stage',
    caption: 'Award Ceremony',
    orientation: 'landscape',
    className: 'md:col-span-4',
    sizes: '(max-width: 768px) 100vw, 33vw',
  },
  {
    src: '/images/stage/pageant-group.jpg',
    alt: 'Artist Shubham Khandelwal on stage with crowned participants during a pageant event',
    caption: 'Pageant Stage',
    orientation: 'portrait',
    className: 'md:col-span-4',
    sizes: '(max-width: 768px) 100vw, 33vw',
  },
  {
    src: '/images/stage/host-stage.jpg',
    alt: 'Artist Shubham Khandelwal hosting a grand stage event with a microphone',
    caption: 'Live Event Hosting',
    orientation: 'portrait',
    className: 'md:col-span-4',
    sizes: '(max-width: 768px) 100vw, 33vw',
  },
  {
    src: '/images/stage/award-plaque.jpg',
    alt: 'Artist Shubham Khandelwal felicitating a guest at an award function',
    caption: 'Special Event Appearance',
    orientation: 'portrait',
    className: 'md:col-span-4',
    sizes: '(max-width: 768px) 100vw, 33vw',
  },
  {
    src: '/images/stage/stage-guests.jpg',
    alt: 'Artist Shubham Khandelwal on stage with guests at a professional event',
    caption: 'On Stage',
    orientation: 'landscape',
    className: 'md:col-span-8',
    sizes: '(max-width: 768px) 100vw, 66vw',
  },
]

const experiences = [
  'Pageants & Fashion Shows',
  'Award Ceremonies',
  'Celebrity Events',
  'Corporate & Brand Events',
  'Large-Scale Stage Shows',
  'Live Entertainment',
  'Media & Press Interactions',
]

export function BigStage() {
  return (
    <section
      className="section-padding bg-black overflow-hidden"
      aria-labelledby="big-stage-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-14">
          <SectionLabel>Host • Anchor • Stage Performer • Event Presenter</SectionLabel>
          <h2
            id="big-stage-heading"
            className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-3"
          >
            Beyond Weddings — <GradientText>The Big Stage</GradientText>
          </h2>
          <GoldOrnament className="mb-4" />
          <p className="font-display italic text-gold-light/90 text-xl md:text-2xl mb-4">
            From Grand Pageants to Award Nights, Shubham Owns the Stage.
          </p>
          <p className="text-white/60 font-sans leading-relaxed">
            Artist Shubham Khandelwal brings professional stage presence, audience engagement and
            live entertainment to large-scale pageants, award ceremonies, celebrity events,
            corporate shows and premium stage productions. A Jaipur-based event host, experienced
            in hosting grand-scale shows and professional stage events across Rajasthan and
            beyond.
          </p>
        </div>

        {/* Editorial photo composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {shots.map((shot, i) => (
            <motion.figure
              key={shot.src}
              className={`group relative overflow-hidden rounded-2xl bg-black-soft m-0 ${
                shot.orientation === 'portrait' ? 'aspect-[2/3]' : 'aspect-[3/2]'
              } ${shot.className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ ...luxuryTransition, delay: (i % 3) * 0.08 }}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes={shot.sizes}
                quality={80}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
              <figcaption className="absolute left-4 bottom-4 right-4 flex items-center gap-2 font-accent text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white/90">
                <span className="w-5 h-px bg-gold" aria-hidden="true" />
                {shot.caption}
              </figcaption>
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold/30 transition-colors duration-300 pointer-events-none" />
            </motion.figure>
          ))}

          {/* Experience categories */}
          <motion.div
            className="md:col-span-4 flex flex-col justify-center rounded-2xl border border-gold/20 bg-black-soft p-6 md:p-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={luxuryTransition}
          >
            <h3 className="font-display font-bold text-2xl text-white mb-4">
              Grand Stage Experiences
            </h3>
            <ul className="space-y-3">
              {experiences.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-white/70 font-sans text-sm md:text-base"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-6">
            Planning a Grand Event?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Book Shubham for Your Event
            </Button>
            <Button href="#gallery" variant="secondary" size="lg" className="w-full sm:w-auto">
              View Event Gallery
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
