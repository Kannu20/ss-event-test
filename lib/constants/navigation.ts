import type { NavItem } from '@/types'

export const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'What I Host',
    href: '/services',
    hasDropdown: true,
    dropdownGroups: [
      {
        label: 'Wedding & Sangeet Anchoring',
        href: '/services/wedding-events',
        icon: '💍',
        items: [
          { label: 'Wedding Ceremony Hosting', href: '/services/wedding-events#ceremony' },
          { label: 'Sangeet Night Anchoring', href: '/services/wedding-events#sangeet' },
          { label: 'Cocktail & Reception Hosting', href: '/services/wedding-events#reception' },
          { label: 'Varmala / Jaimala Compering', href: '/services/wedding-events#varmala' },
          { label: 'Haldi & Mehendi Hosting', href: '/services/wedding-events#haldi' },
          { label: 'Live Singing Sets', href: '/services/wedding-events#singing' },
        ],
      },
      {
        label: 'Corporate Hosting & Emceeing',
        href: '/services/corporate-events',
        icon: '🎤',
        items: [
          { label: 'Conferences & Summits', href: '/services/corporate-events#conferences' },
          { label: 'Award Nights', href: '/services/corporate-events#awards' },
          { label: 'Product Launches', href: '/services/corporate-events#launches' },
          { label: 'Annual Days', href: '/services/corporate-events#annual' },
          { label: 'Dealer Meets', href: '/services/corporate-events#dealer-meets' },
        ],
      },
      {
        label: 'Private & Celebrity Events',
        href: '/services/social-events',
        icon: '🎉',
        items: [
          { label: 'Birthday Parties', href: '/services/social-events#birthday' },
          { label: 'Anniversaries', href: '/services/social-events#anniversary' },
          { label: 'Celebrity Nights', href: '/services/social-events#celebrity' },
          { label: 'College Festivals', href: '/services/social-events#college' },
        ],
      },
      {
        label: 'Live Entertainment & Singing',
        href: '/services/entertainment-services',
        icon: '🎶',
        items: [
          { label: 'Live Singing', href: '/services/entertainment-services#singing' },
          { label: 'Interactive Crowd Games', href: '/services/entertainment-services#games' },
          { label: 'Audience Engagement', href: '/services/entertainment-services#engagement' },
          { label: 'Band & DJ Coordination', href: '/services/entertainment-services#coordination' },
        ],
      },
      {
        label: 'Show Design & Scripting',
        href: '/services/production-setup',
        icon: '📝',
        items: [
          { label: 'Custom Event Scripts', href: '/services/production-setup#scripts' },
          { label: 'Run-of-Show Design', href: '/services/production-setup#flow' },
          { label: 'Rehearsals & Cues', href: '/services/production-setup#rehearsal' },
          { label: 'On-Stage Coordination', href: '/services/production-setup#coordination' },
        ],
      },
    ],
  },
  {
    label: 'Portfolio',
    href: '/portfolio',
  },
  {
    label: 'Gallery',
    href: '/gallery',
  },
  {
    label: 'Testimonials',
    href: '/testimonials',
  },
  {
    label: 'FAQs',
    href: '/faqs',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const ctaNavItem = {
  label: 'Book Consultation',
  href: '/book-consultation',
}

export const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Showreel & Videos', href: '/videos' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Wedding & Sangeet Anchoring', href: '/services/wedding-events' },
    { label: 'Corporate Hosting & Emceeing', href: '/services/corporate-events' },
    { label: 'Private & Celebrity Events', href: '/services/social-events' },
    { label: 'Live Entertainment & Singing', href: '/services/entertainment-services' },
    { label: 'Show Design & Scripting', href: '/services/production-setup' },
  ],
}

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/artistshubhamkhandelwal/', icon: 'Instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/shubham.khandelwal.9883', icon: 'Facebook' },
  { label: 'YouTube', href: 'https://www.youtube.com/@artistshubhamkhandelwal', icon: 'Youtube' },
  { label: 'WhatsApp', href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`, icon: 'MessageCircle' },
]
