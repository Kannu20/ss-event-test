import type { GalleryImage } from '@/types'

/* Curated on-stage gallery — organised into professional categories, using only
   images that exist in /public/images. Every entry carries its REAL intrinsic
   width/height so the masonry reserves correct space (zero layout shift). */

export const galleryImages: GalleryImage[] = [
  // Sangeet
  { id: 'g1', src: '/images/sangeet.jpeg', alt: 'High-energy sangeet night hosting', category: 'sangeet', width: 960, height: 1280 },
  { id: 'g2', src: '/images/sangeet1.jpeg', alt: 'Sangeet performance on stage', category: 'sangeet', width: 960, height: 1280 },
  { id: 'g3', src: '/images/sangeet2.jpeg', alt: 'Family dancing at the sangeet', category: 'sangeet', width: 591, height: 1280 },
  { id: 'g4', src: '/images/sangeet3.jpeg', alt: 'Sangeet crowd on their feet', category: 'sangeet', width: 591, height: 1280 },
  { id: 'g5', src: '/images/sangeet4.jpeg', alt: 'Sangeet celebration energy', category: 'sangeet', width: 960, height: 1280 },

  // Varmala
  { id: 'g6', src: '/images/varmala.jpeg', alt: 'Varmala ceremony compering', category: 'varmala', width: 1840, height: 4096 },
  { id: 'g7', src: '/images/varmala2.jpeg', alt: 'Jaimala garland exchange moment', category: 'varmala', width: 1840, height: 4096 },
  { id: 'g8', src: '/images/varmala3.jpeg', alt: 'Cinematic varmala entry', category: 'varmala', width: 960, height: 1280 },
  { id: 'g9', src: '/images/varmala4.jpeg', alt: 'Couple on stage during varmala', category: 'varmala', width: 591, height: 1280 },
  { id: 'g10', src: '/images/varmala5.jpeg', alt: 'Grand varmala stage moment', category: 'varmala', width: 591, height: 1280 },

  // Haldi
  { id: 'g11', src: '/images/haldi.jpeg', alt: 'Haldi ceremony close up', category: 'haldi', width: 3024, height: 4032 },
  { id: 'g12', src: '/images/haldi1.jpeg', alt: 'Family applying haldi to the couple', category: 'haldi', width: 4032, height: 3024 },
  { id: 'g13', src: '/images/haldi2.jpeg', alt: 'Joyful haldi morning', category: 'haldi', width: 3024, height: 4032 },
  { id: 'g14', src: '/images/haldi3.jpeg', alt: 'Haldi ritual hosting', category: 'haldi', width: 3024, height: 4032 },
  { id: 'g15', src: '/images/haldi4.jpeg', alt: 'Turmeric ceremony with folk songs', category: 'haldi', width: 3024, height: 4032 },
  { id: 'g16', src: '/images/haldi5.jpeg', alt: 'Playful haldi celebration', category: 'haldi', width: 3024, height: 4032 },

  // Mehendi
  { id: 'g17', src: '/images/mehandi.jpeg', alt: 'Mehendi function hosting', category: 'mehendi', width: 4032, height: 3024 },
  { id: 'g18', src: '/images/mehandi1.jpeg', alt: 'Mehendi artists at work', category: 'mehendi', width: 3024, height: 4032 },
  { id: 'g19', src: '/images/mehandi2.jpeg', alt: 'Intricate mehendi design', category: 'mehendi', width: 720, height: 1280 },
  { id: 'g20', src: '/images/mehandi3.jpeg', alt: 'Bride at her mehendi', category: 'mehendi', width: 3024, height: 4032 },
  { id: 'g21', src: '/images/mehandi4.jpeg', alt: 'Mehendi celebration games', category: 'mehendi', width: 3024, height: 4032 },
  { id: 'g22', src: '/images/mehandi5.jpeg', alt: 'Mehendi function guests', category: 'mehendi', width: 1440, height: 1440 },

  // Baraat
  { id: 'g23', src: '/images/baraatonwheel.jpeg', alt: 'Baraat on wheels procession', category: 'baraat', width: 1464, height: 3264 },
  { id: 'g24', src: '/images/baraatonwheel2.jpeg', alt: 'Groom entry on wheels', category: 'baraat', width: 1840, height: 4096 },
  { id: 'g25', src: '/images/bow.jpeg', alt: 'Dancing baraat energy', category: 'baraat', width: 1840, height: 4096 },
  { id: 'g26', src: '/images/bow1.jpeg', alt: 'Baraat celebration on the move', category: 'baraat', width: 1840, height: 4096 },

  // Corporate
  { id: 'g27', src: '/images/corparate.jpeg', alt: 'Corporate conference emceeing', category: 'corporate', width: 1440, height: 1440 },
  { id: 'g28', src: '/images/corporate1.png', alt: 'Corporate stage hosting', category: 'corporate', width: 730, height: 684 },
  { id: 'g29', src: '/images/corporate2.png', alt: 'Award night on stage', category: 'corporate', width: 737, height: 708 },
  { id: 'g30', src: '/images/corporate3.png', alt: 'Corporate gala moment', category: 'corporate', width: 751, height: 711 },
  { id: 'g31', src: '/images/corporate4.png', alt: 'Product launch hosting', category: 'corporate', width: 746, height: 714 },
  { id: 'g32', src: '/images/corporate5.png', alt: 'Dealer meet compering', category: 'corporate', width: 653, height: 691 },
  { id: 'g33', src: '/images/corporate6.jpeg', alt: 'Corporate audience engagement', category: 'corporate', width: 720, height: 1280 },
  { id: 'g34', src: '/images/event.jpeg', alt: 'Conference stage hosting', category: 'corporate', width: 960, height: 1280 },

  // Fashion Show
  { id: 'g35', src: '/images/fashion.jpeg', alt: 'Fashion show ramp compering', category: 'fashion', width: 4284, height: 5712 },
  { id: 'g36', src: '/images/fashion1.jpeg', alt: 'Runway showcase moment', category: 'fashion', width: 4284, height: 5712 },
  { id: 'g37', src: '/images/fashion2.jpeg', alt: 'Designer sequence on the ramp', category: 'fashion', width: 4284, height: 5712 },
  { id: 'g38', src: '/images/fashion3.jpeg', alt: 'Showstopper finale', category: 'fashion', width: 2160, height: 3840 },

  // Live Shows
  { id: 'g39', src: '/images/show.jpeg', alt: 'Live show hosting', category: 'live', width: 720, height: 1280 },
  { id: 'g40', src: '/images/show1.png', alt: 'Concert stage energy', category: 'live', width: 688, height: 691 },
  { id: 'g41', src: '/images/show2.png', alt: 'Cultural night performance', category: 'live', width: 678, height: 715 },
  { id: 'g42', src: '/images/show3.png', alt: 'Live stage production', category: 'live', width: 723, height: 676 },
  { id: 'g43', src: '/images/entertainment.jpeg', alt: 'Live entertainment set', category: 'live', width: 960, height: 1280 },

  // Pool Party
  { id: 'g44', src: '/images/pool.jpeg', alt: 'Poolside party hosting', category: 'pool', width: 960, height: 1280 },
  { id: 'g45', src: '/images/pool1.jpeg', alt: 'Pool party celebration', category: 'pool', width: 960, height: 1280 },
  { id: 'g46', src: '/images/pool2.jpeg', alt: 'Summer poolside energy', category: 'pool', width: 960, height: 1280 },

  // Celebrations
  { id: 'g47', src: '/images/anniversary.jpeg', alt: 'Golden anniversary celebration', category: 'celebrations', width: 4284, height: 5712 },
  { id: 'g48', src: '/images/anniversary1.jpeg', alt: 'Anniversary tribute moment', category: 'celebrations', width: 4284, height: 5712 },
  { id: 'g49', src: '/images/anniversary2.jpeg', alt: 'Couple anniversary on stage', category: 'celebrations', width: 4284, height: 5712 },
  { id: 'g50', src: '/images/birthday.jpeg', alt: 'Birthday party hosting', category: 'celebrations', width: 720, height: 1280 },
  { id: 'g51', src: '/images/birthday1.jpeg', alt: 'Birthday celebration games', category: 'celebrations', width: 1280, height: 575 },
  { id: 'g52', src: '/images/birthday2.jpeg', alt: 'Milestone birthday moment', category: 'celebrations', width: 575, height: 1280 },
  { id: 'g53', src: '/images/birthday3.jpeg', alt: 'Cake-cutting celebration', category: 'celebrations', width: 575, height: 1280 },
  { id: 'g54', src: '/images/cele1.jpeg', alt: 'Private celebration energy', category: 'celebrations', width: 1066, height: 1280 },
  { id: 'g55', src: '/images/cele2.jpeg', alt: 'Guests on the dance floor', category: 'celebrations', width: 1280, height: 853 },
  { id: 'g56', src: '/images/cele3.jpeg', alt: 'Celebration highlight', category: 'celebrations', width: 499, height: 1280 },
  { id: 'g57', src: '/images/cele4.jpeg', alt: 'Family celebration moment', category: 'celebrations', width: 591, height: 1280 },
  { id: 'g58', src: '/images/cele5.jpeg', alt: 'Social celebration hosting', category: 'celebrations', width: 696, height: 1044 },
  { id: 'g59', src: '/images/social1.jpeg', alt: 'Community gathering hosting', category: 'celebrations', width: 4284, height: 5712 },

  // Behind the Scenes
  { id: 'g60', src: '/images/about.jpeg', alt: 'Behind the scenes with Shubham', category: 'bts', width: 591, height: 1280 },
  { id: 'g61', src: '/images/about1.jpeg', alt: 'Preparing before a show', category: 'bts', width: 960, height: 1280 },
  { id: 'g62', src: '/images/about2.jpeg', alt: 'Portrait of the host', category: 'bts', width: 720, height: 1280 },
  { id: 'g63', src: '/images/aboutme.jpeg', alt: 'Backstage before going live', category: 'bts', width: 591, height: 1280 },
  { id: 'g64', src: '/images/setup.jpeg', alt: 'Stage and sound setup', category: 'bts', width: 720, height: 1280 },
  { id: 'g65', src: '/images/prod.jpeg', alt: 'Production and stage design', category: 'bts', width: 960, height: 1280 },
  { id: 'g66', src: '/images/main.jpeg', alt: 'Shubham on stage', category: 'bts', width: 1054, height: 1492 },
  { id: 'g67', src: '/images/hero.jpeg', alt: 'Host commanding the stage', category: 'bts', width: 960, height: 1280 },
  { id: 'g68', src: '/images/banner.jpeg', alt: 'On stage before a packed hall', category: 'bts', width: 591, height: 1280 },

]

export const galleryCategories = [
  { id: 'all', label: 'All' },
  { id: 'sangeet', label: 'Sangeet' },
  { id: 'varmala', label: 'Varmala' },
  { id: 'haldi', label: 'Haldi' },
  { id: 'mehendi', label: 'Mehendi' },
  { id: 'baraat', label: 'Baraat' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'fashion', label: 'Fashion Show' },
  { id: 'live', label: 'Live Shows' },
  { id: 'pool', label: 'Pool Party' },
  { id: 'celebrations', label: 'Celebrations' },
  { id: 'bts', label: 'Behind the Scenes' },
]
