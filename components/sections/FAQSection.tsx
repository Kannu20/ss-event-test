'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { GradientText } from '@/components/ui/GradientText'
import { GoldOrnament } from '@/components/ui/GoldLine'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { faqs } from '@/lib/constants/faqs'
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'

const previewFaqs = faqs.slice(0, 6)

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-black-soft overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">
          {/* Left — heading */}
          <motion.div
            className="lg:col-span-2"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="sticky top-32">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-4">
                Got{' '}
                <GradientText>Questions?</GradientText>
              </h2>
              <GoldOrnament className="mb-6" />
              <p className="text-white/60 font-sans leading-relaxed mb-8">
                We&apos;ve answered the most common questions from our clients. Can&apos;t find what
                you&apos;re looking for?
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/faqs"
                  className="inline-flex items-center gap-2 text-gold font-accent text-sm font-semibold tracking-wider uppercase hover:gap-3 transition-all border-b border-gold/40 pb-1 hover:border-gold w-fit"
                >
                  View All FAQs
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-white/60 font-sans text-sm hover:text-white transition-colors"
                >
                  Contact us directly →
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            className="lg:col-span-3 space-y-3"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <Accordion type="single" collapsible>
              {previewFaqs.map((faq, i) => (
                <motion.div key={faq.id} variants={fadeInUp} custom={i}>
                  <AccordionItem value={faq.id} className="mb-3">
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
