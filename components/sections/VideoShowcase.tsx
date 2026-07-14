'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'
import { brandLinks } from '@/lib/constants/brand'

const YOUTUBE_ID = brandLinks.showreelId
const THUMBNAIL = '/images/main.jpeg'

export function VideoShowcase() {
  const [playing, setPlaying] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #111111 0%, #0A0A0A 100%)' }}
    >
      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <SectionLabel className="text-gold ml-14 text-sm">The Showreel</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-4"
          >
            Ninety Seconds of{' '}
            <GradientText>Pure Energy</GradientText>
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <GoldOrnament className="justify-center mb-4" />
          </motion.div>
          <motion.p variants={fadeInUp} className="text-white/60 font-sans">
            Hit play and see what it looks like when Shubham takes the mic — the crowd, the
            singing, the moments that make a celebration unforgettable.
          </motion.p>
        </motion.div>

        {/* Featured video */}
        <motion.div
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-gold-lg group"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {!playing ? (
            <>
              <div className="relative aspect-video">
                <Image
                  src={THUMBNAIL}
                  alt="Artist Shubham Khandelwal official showreel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* Gold overlay text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center mb-6">
                    <p className="eyebrow mb-2">Official Showreel</p>
                    <h3 className="font-display font-bold text-white text-2xl md:text-3xl">
                      Artist Shubham Khandelwal — Live &amp; Unfiltered
                    </h3>
                  </div>

                  {/* Play button */}
                  <button
                    onClick={() => setPlaying(true)}
                    className="relative w-20 h-20 rounded-full bg-gold flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black"
                    aria-label="Play showreel video"
                  >
                    {/* Pulse ring */}
                    <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
                    <Play className="w-8 h-8 text-black fill-black ml-1" />
                  </button>

                  <p className="text-white/50 text-sm font-sans mt-4">3:45 min</p>
                </div>
              </div>
            </>
          ) : (
            <div className="aspect-video bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
                preload="metadata"
              >
                <source src="/videos/sangeet.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 text-gold font-accent text-sm font-semibold tracking-wider uppercase hover:gap-3 transition-all border-b border-gold/40 pb-1 hover:border-gold"
          >
            Browse All Videos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
