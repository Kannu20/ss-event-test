'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Phone, MessageCircle, Play } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { GoldLine } from '@/components/ui/GoldLine'
import { HeroImage } from '@/components/common/HeroImage'
import { brand, heroBadges, brandLinks, whatsappMessage } from '@/lib/constants/brand'

const PHONE = brandLinks.phoneDisplay
const PHONE2 = brandLinks.phoneDisplay2
const WHATSAPP = brandLinks.whatsapp

// Rotating professional identities
const identities = brand.identities

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const wordRef = useRef<HTMLSpanElement>(null)
  const wordIndexRef = useRef(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0.9])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  // Identity cycling animation
  useEffect(() => {
    const el = wordRef.current
    if (!el) return
    const cycle = () => {
      wordIndexRef.current = (wordIndexRef.current + 1) % identities.length
      el.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
      el.style.opacity = '0'
      el.style.transform = 'translateY(-12px)'
      setTimeout(() => {
        el.textContent = identities[wordIndexRef.current]
        el.style.transform = 'translateY(12px)'
        el.style.opacity = '0'
        requestAnimationFrame(() => {
          el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        })
      }, 420)
    }
    el.textContent = identities[0]
    const id = setInterval(cycle, 2600)
    return () => clearInterval(id)
  }, [])

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  }
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      aria-label="Hero section"
    >
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <HeroImage
          src="/images/main.jpeg"
          alt="Artist Shubham Khandelwal hosting a live celebration on stage"
          priority
          sizes="100vw"
          position={{
            mobile: 'center',
            tablet: 'center 15%',
            laptop: 'center 10%',
            desktop: 'center 16%',
            desktopLarge: 'center 18%',
          }}
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />
      {/* Cinematic bottom-to-top gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

      {/* Gold radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(212,175,55,0.14),transparent)]" />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ y: contentY }}
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.div variants={item} className="flex items-center justify-center gap-3 mb-6">
          <GoldLine className="w-12 hidden sm:block" />
          <span className="eyebrow">{brand.role}</span>
          <GoldLine className="w-12 hidden sm:block" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-display font-bold leading-[1.05] tracking-tight mb-6"
        >
          <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            The Voice Behind Rajasthan&apos;s
          </span>
          <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3">
            Most Memorable Celebrations
          </span>
          {/* Rotating identity */}
          <span className="block text-2xl sm:text-3xl md:text-4xl font-sans font-light tracking-wide text-white/70">
            <span className="text-white/50">Your </span>
            <span ref={wordRef} className="text-gold-gradient font-display font-semibold inline-block">
              Wedding Anchor
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="font-sans text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Award-winning anchor, live stage performer and master of ceremonies. From grand sangeet
          nights to corporate stages, Shubham reads the room, works the crowd and turns
          your event into a celebration people talk about for years.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/book-consultation" variant="primary" size="lg">
            Book Consultation
          </Button>
          <Button href="/videos" variant="ghost" size="lg">
            <Play className="w-4 h-4 mr-2 inline fill-current" />
            Watch Showreel
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-12 text-white/45 text-sm font-sans"
        >
          {heroBadges.map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold" />
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Quick contact strip */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3"
      >
        <a
          href={`tel:${PHONE}`}
          className="flex items-center gap-2 bg-black-soft/80 border border-white/10 rounded-full px-4 py-2.5 text-white/70 hover:text-gold hover:border-gold/40 transition-all duration-300 text-sm font-sans backdrop-blur-sm"
        >
          <Phone className="w-3.5 h-3.5" />
          {PHONE} / {PHONE2}
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black-soft/80 border border-white/10 rounded-full px-4 py-2.5 text-white/70 hover:text-green-400 hover:border-green-400/40 transition-all duration-300 text-sm font-sans backdrop-blur-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Check Availability
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs font-sans tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  )
}
