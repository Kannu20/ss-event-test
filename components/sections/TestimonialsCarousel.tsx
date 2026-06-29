'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { testimonials } from '@/lib/constants/testimonials'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'

const featured = testimonials.filter((t) => t.featured).slice(0, 6)

export function TestimonialsCarousel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((dir: number) => {
    setDirection(dir)
    setCurrent((p) => (p + dir + featured.length) % featured.length)
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => go(1), 6000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [go])

  const reset = (dir: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    go(dir)
    intervalRef.current = setInterval(() => go(1), 6000)
  }

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.35 } }),
  }

  const t = featured[current]

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden bg-black-soft"
    >
      {/* BG gold glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <SectionLabel className="text-gold ml-14 text-sm">Testimonials</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-4"
          >
            What Our{' '}
            <GradientText>Clients Say</GradientText>
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <GoldOrnament className="justify-center" />
          </motion.div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto"
        >
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                <div className="bg-black-mid/50 border border-white/5 rounded-2xl p-8 md:p-10 h-full flex flex-col">
                  {/* Quote icon */}
                  <Quote className="w-10 h-10 text-gold/30 mb-6 flex-shrink-0" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="font-sans text-white/80 text-lg md:text-xl leading-relaxed flex-1 italic mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-black-light flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center text-gold font-display font-bold text-xl">
                        {t.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-white">{t.name}</div>
                      <div className="text-white/50 text-sm font-sans">{t.role} · {t.location}</div>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs font-accent font-semibold tracking-wider uppercase text-gold/60 border border-gold/20 rounded-full px-3 py-1">
                        {t.eventType}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-gold w-6' : 'bg-white/20 w-2 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => reset(-1)}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-gold/50 hover:text-gold transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => reset(1)}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-gold/50 hover:text-gold transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-gold font-accent text-sm font-semibold tracking-wider uppercase hover:gap-3 transition-all border-b border-gold/40 pb-1 hover:border-gold"
          >
            Read All Reviews
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
