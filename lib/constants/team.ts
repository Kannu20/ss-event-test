export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  social: {
    instagram?: string
    linkedin?: string
  }
  speciality: string[]
}

export const teamMembers: TeamMember[] = [
  {
    id: 'sanjay-sharma',
    name: 'Sanjay Sharma',
    role: 'Founder & Creative Director',
    bio: 'With over 12 years of experience in luxury event management, Sanjay has orchestrated more than 300 weddings and corporate events across India. His vision for Artist Shubham Khandelwal has always been about creating timeless experiences that exceed expectations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&q=80',
    social: {
      instagram: 'https://instagram.com/ssevent',
      linkedin: 'https://linkedin.com/in/ssevent',
    },
    speciality: ['Luxury Weddings', 'Creative Direction', 'Client Relations'],
  },
  {
    id: 'shreya-sharma',
    name: 'Shreya Sharma',
    role: 'Co-Founder & Décor Lead',
    bio: 'Shreya\'s artistic eye and passion for floral design have become Artist Shubham Khandelwal \'s signature. Having trained under celebrated decorators in Mumbai and Dubai, she brings a global aesthetic to every event while honoring Indian traditions.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=700&fit=crop&q=80',
    social: {
      instagram: 'https://instagram.com/ssevent',
    },
    speciality: ['Floral Design', 'Décor Concepts', 'Theme Curation'],
  },
  {
    id: 'rahul-mehta',
    name: 'Rahul Mehta',
    role: 'Head of Corporate Events',
    bio: 'Rahul brings a sharp corporate mindset to event planning. With a background in hospitality management and 10 years at top agencies, he ensures every corporate event runs with military precision while maintaining the wow factor.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=700&fit=crop&q=80',
    social: {
      linkedin: 'https://linkedin.com/in/ssevent',
    },
    speciality: ['Corporate Events', 'Logistics', 'Vendor Management'],
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    role: 'Entertainment & Production Head',
    bio: 'Priya manages Artist Shubham Khandelwal \'s entertainment division with an insider knowledge of the industry. From booking celebrity performers to coordinating live bands, she ensures the entertainment at every event is utterly unforgettable.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=700&fit=crop&q=80',
    social: {
      instagram: 'https://instagram.com/ssevent',
    },
    speciality: ['Entertainment Booking', 'Artist Management', 'Production'],
  },
]

export const companyMilestones = [
  {
    year: '2014',
    title: 'Artist Shubham Khandelwal Founded',
    description: 'Started with a dream to redefine event management in India. First office in Jaipur with a team of 3.',
  },
  {
    year: '2016',
    title: 'First 100 Events',
    description: 'Crossed 100 successful events milestone. Expanded to corporate clientele including Fortune 500 companies.',
  },
  {
    year: '2018',
    title: 'Pan-India Operations',
    description: 'Opened second office in Mumbai. Started operating destination weddings in Goa and Udaipur.',
  },
  {
    year: '2020',
    title: 'Best Event Company Award',
    description: 'Recognized as "Best Wedding Management Company of the Year" by India Event Awards.',
  },
  {
    year: '2022',
    title: 'Celebrity & High-Profile Events',
    description: 'Managed events for prominent Bollywood celebrities and leading industrial houses. Team grew to 50+.',
  },
  {
    year: '2024',
    title: '5K+ Events Milestone',
    description: 'Celebrated 500th event. Featured in Vogue India, The Wedding Brigade, and Harper\'s Bazaar.',
  },
]
