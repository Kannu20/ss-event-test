import type { FAQItem } from '@/types'

export const faqs: FAQItem[] = [
  // General
  {
    id: 'faq-001',
    question: 'What is Anchor Shubham Khandelwal  and what services do you offer?',
    answer: 'Anchor Shubham Khandelwal  is a full-service premium event management company. We specialize in weddings (planning, destination weddings, Haldi, Mehendi, Sangeet, Reception), corporate events (conferences, product launches, award functions), social events (birthdays, anniversaries, cultural programs), entertainment services (anchors, DJs, live bands, celebrity management), and production setup (stage design, LED walls, sound, lighting, photography, videography).',
    category: 'general',
    featured: true,
  },
  {
    id: 'faq-002',
    question: 'How early should I book Anchor Shubham Khandelwal  for my event?',
    answer: 'For weddings, we recommend booking at least 6–12 months in advance to ensure availability and adequate planning time. For corporate events, 3–6 months ahead is ideal. For smaller social events, 1–3 months is usually sufficient. That said, we always try to accommodate last-minute requests based on availability.',
    category: 'general',
    featured: true,
  },
  {
    id: 'faq-003',
    question: 'Do you work across India or only in specific cities?',
    answer: 'Anchor Shubham Khandelwal  operates across major cities in India including Mumbai, Delhi, Jaipur, Udaipur, Bangalore, Chennai, Hyderabad, and more. We also manage destination weddings and events internationally. Our team travels to wherever your dream event needs to happen.',
    category: 'general',
    featured: false,
  },
  // Wedding
  {
    id: 'faq-004',
    question: 'Can you manage our entire wedding series — from Haldi to Reception?',
    answer: 'Absolutely. We specialize in managing complete wedding series. We can handle each ceremony individually (Haldi, Mehendi, Sangeet, Reception) or manage the entire wedding as a package. Each event gets its own dedicated team while being coordinated cohesively under our master plan.',
    category: 'wedding',
    featured: true,
  },
  {
    id: 'faq-005',
    question: 'Do you plan destination weddings outside India?',
    answer: 'Yes, we manage destination weddings across India and internationally. Our team has experience managing weddings in iconic locations including Udaipur, Goa, Shimla, Maldives, Dubai, and Southeast Asia. We handle all logistics, vendor coordination, and guest management at the destination.',
    category: 'wedding',
    featured: false,
  },
  {
    id: 'faq-006',
    question: 'How do you handle wedding décor and theme design?',
    answer: 'Our in-house creative team works closely with you to design a cohesive theme and décor concept. We present mood boards and 3D visualizations before execution. From floral installations to lighting design to furniture rentals, everything is curated to match your vision and aesthetic.',
    category: 'wedding',
    featured: false,
  },
  // Corporate
  {
    id: 'faq-007',
    question: 'What types of corporate events do you manage?',
    answer: 'We manage the full spectrum of corporate events: conferences and seminars, product launches, award ceremonies, annual general meetings, dealer meets, team building events, and corporate galas. Each event is handled with a focus on brand alignment, professionalism, and measurable outcomes.',
    category: 'corporate',
    featured: false,
  },
  {
    id: 'faq-008',
    question: 'Can you manage large-scale conferences with 500+ attendees?',
    answer: 'Yes, we regularly manage large-scale corporate events with 500–5000+ attendees. We provide end-to-end management including venue selection, AV setup (LED walls, sound systems, lighting), registration management, speaker coordination, catering, and live streaming capabilities.',
    category: 'corporate',
    featured: false,
  },
  // Booking
  {
    id: 'faq-009',
    question: 'How do I book a consultation with Anchor Shubham Khandelwal ?',
    answer: 'You can book a free consultation through our website\'s Book Consultation page, by calling us directly, or by sending us a WhatsApp message. During the consultation, we\'ll understand your event vision, timeline, budget range, and specific requirements to provide you with a customized proposal.',
    category: 'booking',
    featured: true,
  },
  {
    id: 'faq-010',
    question: 'What information do I need to provide when booking?',
    answer: 'To get started, we need: (1) Type of event, (2) Preferred date/s, (3) Expected number of guests, (4) Location preference, (5) Budget range (optional but helpful), and (6) Any specific requirements or vision you have in mind. The more details you share, the better we can customize our proposal.',
    category: 'booking',
    featured: false,
  },
  // Pricing
  {
    id: 'faq-011',
    question: 'How is your pricing structured?',
    answer: 'Our pricing is fully customized based on the scope of your event — type, size, location, services required, and timeline. We offer transparent, all-inclusive packages as well as modular pricing where you select specific services. We provide detailed itemized quotes after your consultation so there are no surprises.',
    category: 'pricing',
    featured: true,
  },
  {
    id: 'faq-012',
    question: 'Do you offer packages for different budget ranges?',
    answer: 'Yes, we work across various budget ranges. We have curated packages for different event scales and can customize any package to fit your requirements and budget. Our goal is to deliver the best possible experience within your budget, and we\'re transparent about what\'s achievable at each price point.',
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
