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

// Placeholder YouTube ID — replace each with Shubham's real video IDs.
const PLACEHOLDER_ID = 'dQw4w9WgXcQ'

export const videos: VideoItem[] = [
  {
    id: 'v1',
    title: 'Artist Shubham Khandelwal — Official Showreel',
    description: 'Ninety seconds of pure stage energy. Watch Shubham work the crowd, sing live and command the mic across weddings, corporate stages and live shows.',
    thumbnail: '/images/main.jpeg',
    youtubeId: PLACEHOLDER_ID,
    category: 'highlights',
    duration: '1:45',
    date: '2024-12-01',
    featured: true,
  },
  {
    id: 'v2',
    title: 'Palace Sangeet Night — Udaipur',
    description: 'A royal sangeet where Shubham kept 600 guests on their feet, from the varmala live song to the fireworks finale.',
    thumbnail: '/images/wedding.jpeg',
    youtubeId: PLACEHOLDER_ID,
    category: 'wedding',
    duration: '4:20',
    date: '2024-11-15',
  },
  {
    id: 'v3',
    title: 'Corporate Awards Night — Host',
    description: 'Bilingual hosting for a 400-strong awards evening, wrapped up on time to a standing ovation.',
    thumbnail: '/images/corparate.jpeg',
    youtubeId: PLACEHOLDER_ID,
    category: 'corporate',
    duration: '3:10',
    date: '2024-10-20',
  },
  {
    id: 'v4',
    title: 'Milestone Birthday — Live Singing Set',
    description: 'Games, banter and a surprise live singing set that turned an intimate birthday into a full-blown show.',
    thumbnail: '/images/birthday.jpeg',
    youtubeId: PLACEHOLDER_ID,
    category: 'social',
    duration: '3:30',
    date: '2024-09-05',
  },
  {
    id: 'v5',
    title: 'Sangeet Highlights — Crowd Games',
    description: 'How Shubham turns a family sangeet into an interactive show — reading the room and pulling everyone in.',
    thumbnail: '/images/sangeet.jpeg',
    youtubeId: PLACEHOLDER_ID,
    category: 'wedding',
    duration: '5:15',
    date: '2024-08-22',
  },
  {
    id: 'v6',
    title: 'Product Launch — Stage Hosting',
    description: 'A scripted product reveal with a countdown, clean media moments and an energised room throughout.',
    thumbnail: '/images/entertainment.jpeg',
    youtubeId: PLACEHOLDER_ID,
    category: 'corporate',
    duration: '4:00',
    date: '2024-07-18',
  },
  {
    id: 'v7',
    title: 'Golden Anniversary — Emotional Hosting',
    description: 'A surprise 50th anniversary where timing and emotion mattered most — memory lane, a live dedication, and a full dance floor.',
    thumbnail: '/images/social.jpeg',
    youtubeId: PLACEHOLDER_ID,
    category: 'social',
    duration: '4:45',
    date: '2024-06-10',
  },
  {
    id: 'v8',
    title: 'Behind the Mic — A Day with Shubham',
    description: 'Go behind the scenes on show day — script prep, sound check, and the moments before Shubham steps on stage.',
    thumbnail: '/images/aboutme.jpeg',
    youtubeId: PLACEHOLDER_ID,
    category: 'highlights',
    duration: '6:30',
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
