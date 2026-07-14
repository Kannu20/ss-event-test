import type { GalleryImage } from '@/types'

export const galleryImages: GalleryImage[] = [
  // Weddings & Sangeet
  { id: 'g1', src: '/images/anniversary2.jpeg', alt: 'Shubham anchoring a grand wedding stage', category: 'wedding', width: 800, height: 600 },
  { id: 'g2', src: '/images/light.jpeg', alt: 'Sangeet night hosting under dazzling lights', category: 'wedding', width: 800, height: 1000 },
  { id: 'g3', src: '/images/wedding.jpeg', alt: 'Shubham on the mic at a destination wedding', category: 'wedding', width: 800, height: 600 },
  { id: 'g4', src: '/images/hero.jpeg', alt: 'Reception hosting in front of a full crowd', category: 'wedding', width: 800, height: 600 },
  { id: 'g5', src: '/images/mehandi.jpeg', alt: 'Mehendi ceremony hosting and games', category: 'wedding', width: 800, height: 1000 },
  { id: 'g6', src: '/images/sangeet.jpeg', alt: 'High-energy sangeet crowd interaction', category: 'wedding', width: 800, height: 600 },

  // Corporate & Award Nights
  { id: 'g7', src: '/images/corparate.jpeg', alt: 'Corporate conference emceeing on stage', category: 'corporate', width: 800, height: 600 },
  { id: 'g8', src: '/images/event.jpeg', alt: 'Award night hosting with the audience', category: 'corporate', width: 800, height: 600 },
  { id: 'g9', src: '/images/portfolio.jpg', alt: 'Corporate gala hosting moment', category: 'corporate', width: 800, height: 600 },

  // Live Performance & Singing
  { id: 'g10', src: '/images/entertainment.jpeg', alt: 'Shubham performing a live singing set', category: 'social', width: 800, height: 1000 },
  { id: 'g11', src: '/images/setup.jpeg', alt: 'Working the crowd during a live show', category: 'social', width: 800, height: 600 },
  { id: 'g12', src: '/images/social.jpeg', alt: 'Interactive games with the audience', category: 'social', width: 800, height: 600 },
  { id: 'g13', src: '/images/banner.jpeg', alt: 'On stage engaging a packed hall', category: 'social', width: 800, height: 600 },

  // Behind the Scenes & Stage Moments
  { id: 'g14', src: '/images/aboutme.jpeg', alt: 'Shubham prepping backstage before a show', category: 'production', width: 800, height: 600 },
  { id: 'g15', src: '/images/about.jpeg', alt: 'Sound check and script review before going live', category: 'production', width: 800, height: 600 },
  { id: 'g16', src: '/images/production.jpeg', alt: 'Stage moment with the spotlight on the host', category: 'production', width: 800, height: 600 },
]

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'wedding', label: 'Weddings & Sangeet' },
  { id: 'corporate', label: 'Corporate & Awards' },
  { id: 'social', label: 'Live Performance' },
  { id: 'production', label: 'Behind the Scenes' },
]
