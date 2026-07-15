import type { PortfolioItem } from '@/types'

/**
 * Portfolio showcase — exactly six signature events. Each item is fully
 * self-contained: its own cover image, video preview and duration, so the
 * resolver never has to guess. No image, video, tag, location, date or
 * duration repeats across the set — every card is a distinct event.
 */
export const portfolioItems: PortfolioItem[] = [
  {
    id: 'port-001',
    title: 'Royal Wedding Sangeet',
    category: 'wedding',
    coverImage: '/images/sangeet.jpeg',
    video: '/videos/sangeet.mp4',
    duration: '1:12',
    date: '2024-11-15',
    location: 'Udaipur, Rajasthan',
    description:
      'A four-day palace wedding in Udaipur where Shubham anchored a 600-guest sangeet beneath chandelier-lit courtyards. Scripted family face-offs, a live varmala serenade and a fireworks finale kept three generations on the floor until dawn — a regal celebration choreographed from the first entrance to the very last encore.',
    tags: ['Sangeet Night', 'Palace Wedding', '600+ Guests', 'Live Hosting'],
    featured: true,
  },
  {
    id: 'port-002',
    title: 'Luxury Varmala Ceremony',
    category: 'wedding',
    coverImage: '/images/varmala.jpeg',
    video: '/videos/varmala.mp4',
    duration: '0:47',
    date: '2025-02-08',
    location: 'Jaipur, Rajasthan',
    description:
      'A cinematic varmala staged inside a Jaipur heritage haveli. Shubham built the moment with a narrated love story, timed the jaimala to a live acoustic cue and orchestrated a slow-motion petal drop — turning the garland exchange into the wedding film’s breathtaking centrepiece for 300 seated guests.',
    tags: ['Varmala', 'Cinematic Entry', 'Heritage Venue', 'Couple Moment'],
    featured: true,
  },
  {
    id: 'port-003',
    title: 'Live Show & Dandiya Night',
    category: 'entertainment',
    coverImage: '/images/show.jpeg',
    video: '/videos/live-show.mp4',
    duration: '1:08',
    date: '2024-10-03',
    location: 'Jodhpur, Rajasthan',
    description:
      'A high-voltage Navratri concert for 2,000 revellers in Jodhpur. Fronting a live band, Shubham ran non-stop dandiya sets, crowd call-and-response and surprise guest performances, holding an open-air arena at fever pitch across four hours without a single dip in energy.',
    tags: ['Dandiya Night', 'Live Band', 'Navratri', 'Concert Hosting'],
    featured: false,
  },
  {
    id: 'port-004',
    title: 'Fashion Show Finale',
    category: 'entertainment',
    coverImage: '/images/fashion.jpeg',
    video: '/videos/fashion.mp4',
    duration: '1:18',
    date: '2025-03-22',
    location: 'New Delhi',
    description:
      'The closing night of a couture week in the capital. Shubham compered the ramp with polished, on-trend narration, cued each designer sequence to the music and built the showstopper reveal into a standing ovation — keeping a fashion-forward audience captivated between every single walk.',
    tags: ['Fashion Runway', 'Designer Showcase', 'Showstopper', 'Ramp Compering'],
    featured: true,
  },
  {
    id: 'port-005',
    title: 'Pool Party Celebration',
    category: 'social',
    coverImage: '/images/pool.jpeg',
    video: '/videos/poolparty.mp4',
    duration: '1:25',
    date: '2025-05-17',
    location: 'Goa',
    description:
      'A sun-drenched poolside bash on a Goa terrace. Shubham hosted splash games, tropical-themed contests and a golden-hour live set, reading a relaxed daytime crowd perfectly — dialling the energy up for the water and down for the lounge until the party rolled effortlessly into the night.',
    tags: ['Pool Party', 'Summer Bash', 'Poolside Set', 'Day Party'],
    featured: false,
  },
  {
    id: 'port-006',
    title: 'Golden Anniversary Celebration',
    category: 'social',
    coverImage: '/images/anniversary.jpeg',
    video: '/videos/anniversary.mp4',
    duration: '0:40',
    date: '2024-12-20',
    location: 'Ajmer, Rajasthan',
    description:
      'A surprise golden anniversary bringing three families together in Ajmer. Shubham safeguarded the secret, hosted a heartfelt memory-lane tribute and guided a live acoustic dedication to the couple — balancing emotion and celebration so the evening moved from happy tears to a full dance floor in minutes.',
    tags: ['50th Anniversary', 'Family Tribute', 'Live Dedication', 'Milestone'],
    featured: false,
  },
]

export const getFeaturedPortfolio = () => portfolioItems.filter((p) => p.featured)

export const getPortfolioByCategory = (category: PortfolioItem['category']) =>
  portfolioItems.filter((p) => p.category === category)
