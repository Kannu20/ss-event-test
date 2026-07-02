import type { PortfolioItem } from '@/types'

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'port-001',
    title: 'Royal Palace Sangeet',
    category: 'wedding',
    coverImage: '/images/wedding.jpeg',
    images: ['/images/wedding.jpeg'],
    date: '2024-11-15',
    location: 'Udaipur, Rajasthan',
    description:
      'A four-day royal wedding where Shubham anchored the sangeet for 600+ guests. Brief: keep three generations dancing under one roof. He scripted family face-offs, ran the varmala with a live song, and closed with a fireworks cue. Outcome: the floor never emptied and the couple rebooked him for the reception on the spot.',
    tags: ['Sangeet Anchoring', '600+ Guests', 'Live Singing', 'Palace Venue'],
    featured: true,
  },
  {
    id: 'port-002',
    title: 'Corporate Awards Night',
    category: 'corporate',
    coverImage: '/images/corparate.jpeg',
    images: ['/images/corparate.jpeg'],
    date: '2024-10-08',
    location: 'Jaipur, Rajasthan',
    description:
      'Annual awards evening for a 400-strong workforce. Brief: honour 40 winners inside a tight two-hour window without losing energy. Shubham built the run-of-show, hosted bilingually, and covered a live AV glitch so smoothly no one noticed. Outcome: finished on time to a standing ovation.',
    tags: ['Corporate Emcee', '400 Delegates', 'Bilingual', 'Award Show'],
    featured: true,
  },
  {
    id: 'port-003',
    title: 'Beachside Reception',
    category: 'wedding',
    coverImage: '/images/social1.jpeg',
    images: ['/images/social1.jpeg'],
    date: '2025-02-20',
    location: 'Goa',
    description:
      'A sunset destination reception for 250 guests, half of them travelling from abroad. Brief: bridge Indian and international guests. Shubham hosted in English and Hindi, wove in interactive toasts, and paced the evening around the tide. Outcome: guests called it the most relaxed yet lively reception they had attended.',
    tags: ['Reception Hosting', 'Destination', '250 Guests', 'Bilingual'],
    featured: true,
  },
  {
    id: 'port-004',
    title: 'Milestone Birthday — Live Set',
    category: 'social',
    coverImage: '/images/birthday.jpeg',
    images: ['/images/birthday.jpeg'],
    date: '2024-09-12',
    location: 'Jaipur, Rajasthan',
    description:
      'A 40th birthday for 150 close friends. Brief: an intimate night that still felt like a show. Shubham ran themed games, roasted the birthday host lovingly, and performed a surprise live singing set of the guest of honour’s favourites. Outcome: an emotional, high-energy evening the family still talks about.',
    tags: ['Private Host', 'Live Singing', '150 Guests', 'Interactive'],
    featured: false,
  },
  {
    id: 'port-005',
    title: 'Product Launch — Stage Host',
    category: 'corporate',
    coverImage: '/images/entertainment.jpeg',
    images: ['/images/entertainment.jpeg'],
    date: '2024-12-05',
    location: 'Jaipur, Rajasthan',
    description:
      'A flagship product reveal for press, dealers and leadership. Brief: build anticipation and make the leadership shine. Shubham scripted the countdown, cued the reveal, and kept the room energised through the Q&A. Outcome: strong applause moments and clean media soundbites throughout.',
    tags: ['Launch Emcee', 'Press Event', 'Scripted Reveal', 'Leadership'],
    featured: true,
  },
  {
    id: 'port-006',
    title: 'Golden Anniversary Surprise',
    category: 'social',
    coverImage: '/images/social.jpeg',
    images: ['/images/social.jpeg'],
    date: '2025-03-14',
    location: 'Ajmer, Rajasthan',
    description:
      'A surprise 50th anniversary coordinated across three families. Brief: hold the secret and land the emotion. Shubham managed the reveal timing, hosted a memory-lane segment, and guided a live acoustic dedication. Outcome: not a dry eye in the room — and a dance floor that filled instantly after.',
    tags: ['Anniversary', 'Surprise', 'Emotional Hosting', 'Family Event'],
    featured: false,
  },
  {
    id: 'port-007',
    title: 'Rajasthani Folk Sangeet',
    category: 'wedding',
    coverImage: '/images/sangeet.jpeg',
    images: ['/images/sangeet.jpeg'],
    date: '2025-01-10',
    location: 'Jaipur, Rajasthan',
    description:
      'A sangeet blending Rajasthani folk with Bollywood. Brief: celebrate heritage without slowing the party. Shubham hosted between folk performers, translated the moments for younger cousins, and kept the tempo high into the fireworks finale. Outcome: a night that honoured tradition and still felt like a concert.',
    tags: ['Sangeet Anchoring', 'Folk Fusion', 'Rajasthani', 'High Energy'],
    featured: false,
  },
  {
    id: 'port-008',
    title: 'Annual Dealer Meet',
    category: 'corporate',
    coverImage: '/images/event.jpeg',
    images: ['/images/event.jpeg'],
    date: '2024-08-22',
    location: 'Kota, Rajasthan',
    description:
      'A two-day dealer meet for 800 partners. Brief: recognise top performers and keep a large crowd engaged through long agendas. Shubham hosted the awards, ran a networking icebreaker, and closed each day on a high. Outcome: dealers stayed to the end and the brand booked him for the following year.',
    tags: ['Dealer Meet', '800 Delegates', 'Awards Host', 'Two-Day Event'],
    featured: false,
  },
]

export const getFeaturedPortfolio = () => portfolioItems.filter((p) => p.featured)

export const getPortfolioByCategory = (category: PortfolioItem['category']) =>
  portfolioItems.filter((p) => p.category === category)
