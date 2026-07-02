import type { StatItem } from '@/types'

export const stats: StatItem[] = [
  {
    id: 'events',
    value: 500,
    suffix: '+',
    label: 'Events Completed',
    description: 'Successfully delivered events across India',
    icon: 'CalendarCheck',
  },
  {
    id: 'years',
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    description: 'A decade of crafting unforgettable moments',
    icon: 'Award',
  },
  {
    id: 'cities',
    value: 25,
    suffix: '+',
    label: 'Cities Covered',
    description: 'Events managed across major Indian cities',
    icon: 'MapPin',
  },
  {
    id: 'clients',
    value: 1000,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Families and organizations who trust Artist Shubham Khandelwal ',
    icon: 'Heart',
  },
]
