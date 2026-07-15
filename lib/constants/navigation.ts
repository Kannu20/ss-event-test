import type { NavItem } from '@/types'
import { serviceNavGroups, serviceFooterLinks } from '@/data/services'

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
    dropdownGroups: serviceNavGroups,
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
  services: serviceFooterLinks,
}

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/artistshubhamkhandelwal/', icon: 'Instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/shubham.khandelwal.9883', icon: 'Facebook' },
  { label: 'WhatsApp', href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`, icon: 'MessageCircle' },
]
