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
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownGroups: [
      {
        label: 'Wedding Events',
        href: '/services/wedding-events',
        icon: '💍',
        items: [
          { label: 'Wedding Planning', href: '/services/wedding-events#wedding-planning' },
          { label: 'Destination Weddings', href: '/services/wedding-events#destination' },
          { label: 'Haldi Ceremony', href: '/services/wedding-events#haldi' },
          { label: 'Mehendi Night', href: '/services/wedding-events#mehendi' },
          { label: 'Sangeet Event', href: '/services/wedding-events#sangeet' },
          { label: 'Reception', href: '/services/wedding-events#reception' },
          { label: 'Guest Management', href: '/services/wedding-events#guests' },
          { label: 'Wedding Décor', href: '/services/wedding-events#decor' },
        ],
      },
      {
        label: 'Corporate Events',
        href: '/services/corporate-events',
        icon: '🏢',
        items: [
          { label: 'Conferences', href: '/services/corporate-events#conferences' },
          { label: 'Product Launches', href: '/services/corporate-events#launches' },
          { label: 'Award Functions', href: '/services/corporate-events#awards' },
          { label: 'Dealer Meets', href: '/services/corporate-events#dealer-meets' },
          { label: 'Annual Meetings', href: '/services/corporate-events#meetings' },
          { label: 'Team Building', href: '/services/corporate-events#team-building' },
        ],
      },
      {
        label: 'Social Events',
        href: '/services/social-events',
        icon: '🎉',
        items: [
          { label: 'Birthday Parties', href: '/services/social-events#birthday' },
          { label: 'Anniversaries', href: '/services/social-events#anniversary' },
          { label: 'Cultural Programs', href: '/services/social-events#cultural' },
          { label: 'Family Events', href: '/services/social-events#family' },
        ],
      },
      {
        label: 'Entertainment',
        href: '/services/entertainment-services',
        icon: '🎤',
        items: [
          { label: 'Professional Anchors', href: '/services/entertainment-services#anchors' },
          { label: 'DJ Services', href: '/services/entertainment-services#dj' },
          { label: 'Live Bands', href: '/services/entertainment-services#bands' },
          { label: 'Celebrity Management', href: '/services/entertainment-services#celebrity' },
          { label: 'Artist Booking', href: '/services/entertainment-services#artists' },
        ],
      },
      {
        label: 'Production Setup',
        href: '/services/production-setup',
        icon: '🎬',
        items: [
          { label: 'Stage Design', href: '/services/production-setup#stage' },
          { label: 'LED Walls', href: '/services/production-setup#led' },
          { label: 'Sound Systems', href: '/services/production-setup#sound' },
          { label: 'Lighting Setup', href: '/services/production-setup#lighting' },
          { label: 'Photography', href: '/services/production-setup#photography' },
          { label: 'Videography', href: '/services/production-setup#videography' },
          { label: 'Drone Coverage', href: '/services/production-setup#drone' },
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
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Videos', href: '/videos' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Wedding Events', href: '/services/wedding-events' },
    { label: 'Corporate Events', href: '/services/corporate-events' },
    { label: 'Social Events', href: '/services/social-events' },
    { label: 'Entertainment Services', href: '/services/entertainment-services' },
    { label: 'Production Setup', href: '/services/production-setup' },
  ],
}

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/ssevent', icon: 'Instagram' },
  { label: 'Facebook', href: 'https://facebook.com/ssevent', icon: 'Facebook' },
  { label: 'YouTube', href: 'https://youtube.com/@ssevent', icon: 'Youtube' },
  { label: 'WhatsApp', href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`, icon: 'MessageCircle' },
]
