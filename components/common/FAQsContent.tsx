'use client'

import { useState } from 'react'
import { FilterTabs } from '@/components/common/FilterTabs'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { faqs, faqCategories } from '@/lib/constants/faqs'

const tabOptions = [
  { id: 'all', label: 'All Questions' },
  ...faqCategories.map((c) => ({ id: c.id, label: c.label })),
]

export function FAQsContent() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? faqs
    : faqs.filter((f) => f.category === active)

  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <FilterTabs tabs={tabOptions} active={active} onChange={setActive} />
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {filtered.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {filtered.length === 0 && (
          <p className="text-center text-white/40 font-sans py-12">
            No questions in this category yet.
          </p>
        )}
      </div>
    </section>
  )
}
