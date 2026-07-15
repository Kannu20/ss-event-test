export interface VideoItem {
  id: string
  title: string
  description: string
  thumbnail: string
  /** Local MP4 source played via the HTML5 <video> element */
  video: string
  youtubeId?: string
  videoUrl?: string
  category: 'wedding' | 'social' | 'highlights' | 'anniversary'
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
    video: '/videos/social-event.mp4',
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
    thumbnail: '/images/about1.jpeg',
    video: '/videos/sangeet.mp4',
    youtubeId: PLACEHOLDER_ID,
    category: 'wedding',
    duration: '0:40',
    date: '2024-11-15',
  },
  {
    id: 'v3',
    title: 'Fashion Show Highlights',
    description: 'Experience the glamour, confidence, and creativity of the runway as stunning outfits, stylish moments, and vibrant energy come together in an unforgettable fashion show.',
    thumbnail: '/images/fashion.jpeg',
    video: '/videos/fashion.mp4',
    youtubeId: PLACEHOLDER_ID,
    category: 'social',
    duration: '0:51',
    date: '2024-09-05',
  },
  {
    id: 'v4',
    title: 'Varmala Ceremony Highlights',
    description: 'A beautiful Varmala ceremony filled with love, laughter, joyful celebrations, and unforgettable moments as the couple begins their new journey together.',
    thumbnail: '/images/varmala.jpeg',
    video: '/videos/varmala.mp4',
    youtubeId: PLACEHOLDER_ID,
    category: 'wedding',
    duration: '0:14',
    date: '2024-10-20',
  },
  {
    id: 'v5',
    title: 'Sangeet Highlights — Crowd Games',
    description: 'How Shubham turns a family sangeet into an interactive show — reading the room and pulling everyone in.',
    thumbnail: '/images/sangeet.jpeg',
    video: '/videos/vid4.mp4',
    youtubeId: PLACEHOLDER_ID,
    category: 'wedding',
    duration: '0:18',
    date: '2024-08-22',
  },
  {
    id: 'v6',
    title: 'Live Show & Dandiya Night',
    description: 'An electrifying evening of live entertainment featuring energetic performances, vibrant Dandiya celebrations, music, dance, and an enthusiastic crowd creating unforgettable memories.',
    thumbnail: '/images/cele5.jpeg',
    video: '/videos/live-show.mp4',
    youtubeId: PLACEHOLDER_ID,
    category: 'social',
    duration: '0:54',
    date: '2024-07-18',
  },
  {
    id: 'v7',
    title: 'Golden Anniversary — Emotional Hosting',
    description: 'A surprise 50th anniversary where timing and emotion mattered most — memory lane, a live dedication, and a full dance floor.',
    thumbnail: '/images/anniversary1.jpeg',
    video: '/videos/anniversary.mp4',
    youtubeId: PLACEHOLDER_ID,
    category: 'anniversary',
    duration: '0:40',
    date: '2024-06-10',
  },
  {
    id: 'v8',
    title: 'Pool Party Highlights',
    description: 'Dive into the best moments from an energetic pool party featuring music, fun, laughter, and unforgettable summer vibes.',
    thumbnail: '/images/pool.jpeg',
    video: '/videos/poolparty.mp4',
    youtubeId: PLACEHOLDER_ID,
    category: 'highlights',
    duration: '1:25',
    date: '2024-05-01',
  },
]

export const videoCategories = [
  { id: 'all', label: 'All Videos' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'wedding', label: 'Weddings' },
  // { id: 'corporate', label: 'Corporate' },
  { id: 'social', label: 'Social Events' },
  { id: 'anniversary', label: 'Anniversaries' },
]
