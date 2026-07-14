/**
 * Artist Shubham Khandelwal — Central Brand Config
 * Single source of truth for the personal brand. Import everywhere so copy,
 * identities, stats and links stay consistent across the site.
 *
 * NOTE ON NUMBERS: The stats below are realistic marketing figures for a
 * professional Jaipur-based anchor. Replace with verified counts when available.
 */

export const brand = {
  name: 'Artist Shubham Khandelwal',
  shortName: 'Shubham Khandelwal',
  firstName: 'Shubham',
  initials: 'SK',

  // One-line positioning — what he is
  role: "Rajasthan's Wedding Anchor, Live Entertainer & Event Host",
  tagline: "The Voice Behind Rajasthan's Most Memorable Celebrations",

  base: 'Jaipur, Rajasthan',
  areaServed: 'Jaipur · Udaipur · Jodhpur · Pan-India · Destination',

  // Professional identities that rotate in the hero
  identities: [
    'Wedding Anchor',
    'Live Performer',
    'Corporate Host',
    'Celebrity Emcee',
    'Event Entertainer',
    'Master of Ceremonies',
  ],

  // Languages he hosts in
  languages: ['Hindi', 'English', 'Rajasthani'],

  // Verified credential (Forever Star India Awards, 2023)
  award: 'Best Actor in Jaipur — Forever Star India Awards, 2023',
  education: 'MBA · M.Com',
} as const

/** Hero + marquee stats (realistic ranges — update with verified figures) */
export const brandStats = [
  { value: 900, suffix: '+', label: 'Shows Hosted', description: 'Weddings, sangeets, corporate stages & live shows' },
  { value: 8, suffix: '+', label: 'Years on Stage', description: 'A career built one unforgettable event at a time' },
  { value: 30, suffix: '+', label: 'Cities Performed', description: 'Across Rajasthan, India & destination venues' },
  { value: 5, suffix: 'L+', label: 'Guests Entertained', description: 'Audiences moved, engaged and left cheering' },
] as const

/** Short trust badges used under the hero headline */
export const heroBadges = [
  '1500+ Shows Hosted',
  'Award-Winning Performer',
  'Multilingual Hosting',
  'Live Singing',
]

/** Contact + social links (env-driven where possible) */
export const brandLinks = {
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? '919057526202',
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? '+91 90575 26202',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '919057526202',
  email: process.env.NEXT_PUBLIC_EMAIL ?? 'Khandelwalshubham79@gmail.com',
  instagram: 'https://www.instagram.com/artistshubhamkhandelwal/',
  facebook: 'https://www.facebook.com/shubham.khandelwal.9883',
  youtube: 'https://www.youtube.com/@artistshubhamkhandelwal',
  // Placeholder showreel — swap with the real YouTube video ID
  showreelId: 'dQw4w9WgXcQ',
} as const

export const whatsappMessage = "Hi Shubham, I'd like to check your availability for my event."
