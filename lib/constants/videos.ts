export interface VideoItem {
  id: string
  title: string
  description: string
  thumbnail: string
  youtubeId?: string
  videoUrl?: string
  category: 'wedding' | 'corporate' | 'social' | 'highlights'
  duration: string
  date: string
  featured?: boolean
}

export const videos: VideoItem[] = [
  {
    id: 'v1',
    title: 'SS Event — 2024 Showreel',
    description: 'A cinematic showcase of our finest events from 2024. From royal weddings to grand corporate galas, this is the SS Event experience.',
    thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=675&fit=crop&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'highlights',
    duration: '3:45',
    date: '2024-12-01',
    featured: true,
  },
  {
    id: 'v2',
    title: 'Rohan & Ananya — Dream Destination Wedding, Udaipur',
    description: 'A three-day wedding extravaganza at a palace resort in Udaipur. Every detail crafted to perfection by the SS Event team.',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=450&fit=crop&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'wedding',
    duration: '8:20',
    date: '2024-11-15',
  },
  {
    id: 'v3',
    title: 'TechCorp Annual Leadership Summit 2024',
    description: 'A 500-person leadership summit managed end-to-end. Stage production, breakout sessions, gala dinner — flawlessly executed.',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'corporate',
    duration: '5:10',
    date: '2024-10-20',
  },
  {
    id: 'v4',
    title: 'Priya\'s 30th Birthday — Bollywood Theme Night',
    description: 'An enchanting Bollywood-themed birthday celebration with live performances, themed décor, and unforgettable moments.',
    thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=450&fit=crop&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'social',
    duration: '4:30',
    date: '2024-09-05',
  },
  {
    id: 'v5',
    title: 'Arjun & Meera — Sangeet Night Highlights',
    description: 'A vibrant Sangeet ceremony filled with music, dance and laughter. Professional anchoring, live band, and spectacular lighting.',
    thumbnail: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=450&fit=crop&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'wedding',
    duration: '6:15',
    date: '2024-08-22',
  },
  {
    id: 'v6',
    title: 'GlobalTech Product Launch — Mumbai',
    description: 'High-energy product launch with drone footage, celebrity appearance, and a 1000-person gathering at BKC.',
    thumbnail: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=450&fit=crop&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'corporate',
    duration: '7:00',
    date: '2024-07-18',
  },
  {
    id: 'v7',
    title: 'Sharma Family 50th Anniversary Celebration',
    description: 'A golden anniversary celebration blending timeless elegance with modern touches. Family moments captured in cinematic detail.',
    thumbnail: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=450&fit=crop&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'social',
    duration: '5:45',
    date: '2024-06-10',
  },
  {
    id: 'v8',
    title: 'SS Event — Behind the Scenes: Wedding Planning',
    description: 'Go behind the scenes with the SS Event team as we transform a blank canvas into a dream wedding venue.',
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=450&fit=crop&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'highlights',
    duration: '10:30',
    date: '2024-05-01',
  },
]

export const videoCategories = [
  { id: 'all', label: 'All Videos' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'wedding', label: 'Weddings' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'social', label: 'Social Events' },
]
