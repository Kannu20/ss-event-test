'use client'

import { useRef } from 'react'
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
import { staggerContainer, fadeInUp } from '@/lib/animations/variants'
import type { ServiceFAQ as ServiceFAQItem } from '@/data/services'

interface ServiceFAQProps {
  serviceName: string
  faqs: ServiceFAQItem[]
}

export function ServiceFAQ({ serviceName, faqs }: ServiceFAQProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-black-soft overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">
          <motion.div
            className="lg:col-span-2"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="lg:sticky lg:top-32">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight mt-4 mb-4">
                {serviceName}{' '}
                <GradientText>Questions</GradientText>
              </h2>
              <GoldOrnament className="mb-6" />
              <p className="text-white/60 font-sans leading-relaxed mb-8">
                Everything you might want to know before booking. Still unsure? Reach out and
                Shubham will personally answer.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-gold font-accent text-sm font-semibold tracking-wider uppercase hover:gap-3 transition-all border-b border-gold/40 pb-1 hover:border-gold w-fit"
              >
                Ask a Question
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <motion.div key={faq.question} variants={fadeInUp}>
                  <AccordionItem value={`faq-${i}`} className="mb-3">
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
