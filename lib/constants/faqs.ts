import type { FAQItem } from '@/types'

export const faqs: FAQItem[] = [
  // General
  {
    id: 'faq-001',
    question: 'Who is Artist Shubham Khandelwal and what does he do?',
    answer: 'Shubham Khandelwal is a Jaipur-based professional wedding anchor, live stage performer and event host. He anchors weddings and sangeets, emcees corporate events and award nights, and performs live entertainment for private and celebrity celebrations. He was recognised as "Best Actor in Jaipur" at the Forever Star India Awards (2023).',
    category: 'general',
    featured: true,
  },
  {
    id: 'faq-002',
    question: 'How far in advance should I book Shubham?',
    answer: 'Wedding season dates go quickly, so 3–6 months ahead is ideal to lock your date. Corporate events usually need 1–3 months. That said, Shubham does take on last-minute bookings when his calendar allows — the fastest way to check is a quick WhatsApp with your date.',
    category: 'general',
    featured: true,
  },
  {
    id: 'faq-003',
    question: 'Which cities and venues does he travel to?',
    answer: 'Shubham is based in Jaipur and regularly performs across Rajasthan — Udaipur, Jodhpur, Jaisalmer, Ajmer, Kota and beyond — as well as Delhi NCR, Goa and destination weddings. Travel and stay for out-station events are arranged simply as part of the booking.',
    category: 'general',
    featured: false,
  },
  // Wedding
  {
    id: 'faq-004',
    question: 'Can Shubham host our entire wedding series — Haldi to Reception?',
    answer: 'Absolutely. Many families book him for the full series so there is one consistent voice tying everything together. He writes a fresh script for each function — Haldi, Mehendi, Sangeet, Varmala and Reception — so no two evenings feel the same.',
    category: 'wedding',
    featured: true,
  },
  {
    id: 'faq-005',
    question: 'Does he really sing live during the event?',
    answer: 'Yes. Live anchoring is one of the things that sets Shubham apart. When a moment calls for it — a varmala, a couple’s first dance, an emotional dedication — he steps in with a live vocal performance that guests never expect.',
    category: 'wedding',
    featured: false,
  },
  {
    id: 'faq-006',
    question: 'In which languages does he host?',
    answer: 'Shubham hosts fluently in Hindi, English and Rajasthani, and switches between them naturally so every guest — from close family to corporate delegates — feels spoken to.',
    category: 'wedding',
    featured: false,
  },
  // Corporate
  {
    id: 'faq-007',
    question: 'What kinds of corporate events does he host?',
    answer: 'Conferences and summits, award nights, product launches, annual days and dealer meets. As your emcee he manages the agenda flow, keeps energy high through long programmes, moderates on stage and makes your leadership look great.',
    category: 'corporate',
    featured: false,
  },
  {
    id: 'faq-008',
    question: 'Can he host large corporate audiences?',
    answer: 'Yes — Shubham has hosted rooms from intimate gatherings to 800+ delegate dealer meets. He is comfortable with tight run-of-shows, live AV, scripted reveals and keeping big crowds engaged from the first announcement to the last.',
    category: 'corporate',
    featured: false,
  },
  // Booking
  {
    id: 'faq-009',
    question: 'How do I book Shubham for my event?',
    answer: 'Share your event date, city and type through the Book Consultation page, a call, or a WhatsApp message. Shubham personally reviews every enquiry and replies within 24 hours to confirm availability and talk through what you have in mind.',
    category: 'booking',
    featured: true,
  },
  {
    id: 'faq-010',
    question: 'What details should I have ready?',
    answer: 'Just the basics to start: (1) event type, (2) date, (3) city/venue, (4) rough guest count, and (5) anything special you want — a live song, a theme, a surprise moment. The more he knows, the better he can tailor the show.',
    category: 'booking',
    featured: false,
  },
  // Pricing
  {
    id: 'faq-011',
    question: 'How is pricing decided?',
    answer: 'Every event is quoted individually based on the type, date, city, number of functions and how much of the show Shubham designs (hosting only, or hosting plus live anchoring and scripting). You get a clear quote after a quick consultation — no hidden extras.',
    category: 'pricing',
    featured: true,
  },
  {
    id: 'faq-012',
    question: 'Do you offer packages for a full wedding series?',
    answer: 'Yes. Booking multiple functions together is the most popular option and usually the best value. Shubham can host just one function or the entire series, and will put together a package that fits your dates and budget.',
    category: 'pricing',
    featured: false,
  },
]

export const getFeaturedFAQs = () => faqs.filter((f) => f.featured)

export const getFAQsByCategory = (category: FAQItem['category']) =>
  faqs.filter((f) => f.category === category)

export const faqCategories: { id: FAQItem['category']; label: string }[] = [
  { id: 'general', label: 'General' },
  { id: 'wedding', label: 'Weddings' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'booking', label: 'Booking' },
  { id: 'pricing', label: 'Pricing' },
]
