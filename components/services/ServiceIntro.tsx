'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { GoldOrnament } from '@/components/ui/GoldLine'
import { Button } from '@/components/ui/Button'
import { staggerContainer, fadeInUp, fadeInRight } from '@/lib/animations/variants'

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919057526202'

interface ServiceIntroProps {
  label: string
  heading: string
  highlight: string
  paragraphs: string[]
  image: string
  imageAlt: string
  /** Service name used in the WhatsApp prefilled message */
  serviceName: string
}

export function ServiceIntro({
  label,
  heading,
  highlight,
  paragraphs,
  image,
  imageAlt,
  serviceName,
}: ServiceIntroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-black-soft" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp}>
              <SectionLabel>{label}</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-4"
            >
              {heading} <GradientText>{highlight}</GradientText>
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <GoldOrnament className="mb-6" />
            </motion.div>
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="text-white/65 font-sans leading-relaxed mb-4"
              >
                {para}
              </motion.p>
            ))}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mt-8">
              <Button href="/book-consultation" variant="primary">
                Book Consultation
              </Button>
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi Shubham, I'd like to know more about ${serviceName}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-full px-5 py-2.5 font-sans font-medium text-sm hover:bg-[#25D366]/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative h-[360px] md:h-[440px] rounded-2xl overflow-hidden"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
