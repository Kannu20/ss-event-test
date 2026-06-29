export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    role: string
    avatar: string
  }
  coverImage: string
  category: string
  tags: string[]
  publishedAt: string
  readTime: string
  featured?: boolean
}

export const blogCategories = [
  'All',
  'Weddings',
  'Corporate Events',
  'Planning Tips',
  'Trends',
  'Behind the Scenes',
]

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'top-10-wedding-trends-2025',
    title: 'Top 10 Wedding Trends Dominating 2025',
    excerpt: 'From intimate micro-weddings to hyper-personalized décor, 2025 is rewriting the rules of Indian wedding celebrations. Here are the trends you need to know.',
    content: `
# Top 10 Wedding Trends Dominating 2025

Indian weddings have always been grand celebrations of love, culture, and family. But 2025 has brought in a wave of fresh ideas that blend tradition with modern sensibilities. At SS Event, we've been at the forefront of these trends, and we're excited to share what we're seeing across our most celebrated weddings this year.

## 1. Micro-Luxury Weddings

Gone are the days when weddings were measured by headcount. Today's couples are opting for intimate gatherings of 50–150 guests but with extraordinary attention to detail. Think bespoke florals at every seat, personalized wedding gifts, and Michelin-level catering. The result? Experiences that feel deeply personal and curated.

## 2. Sustainable & Eco-Conscious Décor

Couples are increasingly conscious of their environmental footprint. We're seeing a surge in biodegradable florals, seed-paper invitations, locally sourced flowers, and compostable tableware. At SS Event, our sustainable décor packages have become some of our most-requested offerings.

## 3. Immersive Wedding Weekends

Rather than a single-day event, 2025 couples are planning immersive multi-day experiences for guests. Think welcome dinners, morning yoga sessions, day-trips to local attractions, and themed evening parties — all curated by the event management team to create a journey rather than just a celebration.

## 4. Personalized Storytelling Through Décor

Every element of the venue tells the couple's story. From illustrated timelines of their relationship as table runners, to custom neon signs with their inside jokes, to curated playlists that span their entire relationship — personalization is the defining characteristic of 2025 weddings.

## 5. Fusion Ceremonies & Rituals

India's diverse cultural heritage is being celebrated like never before. We're designing ceremonies that seamlessly blend Hindu, Muslim, Sikh, and Christian traditions — creating unique rituals that honor both families' backgrounds while creating something entirely new.

## 6. Documentary-Style Photography

The era of heavily posed wedding photos is giving way to authentic, photojournalistic storytelling. Our recommended photographers capture raw moments, candid emotions, and the beautiful chaos of a wedding day rather than directing every shot.

## 7. Statement Florals & Sculptural Arrangements

Flowers are no longer just decoration — they're art installations. We're creating dramatic hanging gardens, floral arches that span entire rooms, and sculptural centerpieces that double as conversation starters. Dried flowers, pampas grass, and tropical foliage are key players in 2025 palettes.

## 8. Tech-Integrated Experiences

From wedding websites with live event streaming to AR photo booths, tech is enhancing the wedding experience. We've been incorporating LED dance floors with custom projections, surprise drone shows, and live social media walls for immersive guest engagement.

## 9. Destination Weddings in Unexplored Locations

While Udaipur and Goa remain perennial favorites, 2025 is seeing couples explore Spiti Valley, Jim Corbett, Kaziranga, and even international destinations like Bali and Portugal for their celebrations.

## 10. Wellness-Integrated Celebrations

The wellness movement has reached weddings. Pre-wedding yoga retreats, ayurvedic spa experiences for families, mocktail bars alongside the bar, and healthy gourmet menus are no longer optional extras but expected inclusions in luxury weddings.

---

Ready to incorporate these trends into your wedding? [Book a free consultation](/book-consultation) with the SS Event team and let's create something extraordinary together.
    `.trim(),
    author: {
      name: 'Shreya Sharma',
      role: 'Co-Founder & Décor Lead',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&q=80',
    },
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop&q=80',
    category: 'Weddings',
    tags: ['Wedding Trends', '2025', 'Décor', 'Sustainable Weddings'],
    publishedAt: '2025-01-15',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 'b2',
    slug: 'corporate-event-planning-checklist',
    title: 'The Ultimate Corporate Event Planning Checklist',
    excerpt: 'Planning a corporate event can feel overwhelming. We break down the entire process into a clear, actionable checklist that ensures nothing falls through the cracks.',
    content: `
# The Ultimate Corporate Event Planning Checklist

Whether you're organizing a 50-person team offsite or a 1,000-person annual conference, corporate event planning requires meticulous attention to detail. After managing hundreds of corporate events across India, the SS Event team has distilled everything into this comprehensive checklist.

## 6 Months Before the Event

- Define event objectives and KPIs
- Set the budget with contingency (typically 10–15% buffer)
- Choose your event management partner
- Scout and shortlist venues
- Confirm dates with key stakeholders
- Begin speaker/performer outreach

## 3 Months Before

- Lock in the venue and sign contracts
- Finalize the event format (keynotes, panels, workshops, networking)
- Design the event brand identity (logo, color scheme, website)
- Open registrations
- Book accommodations for out-of-city attendees
- Confirm audio-visual and production requirements

## 1 Month Before

- Send detailed agenda to all confirmed attendees
- Finalize catering menu with dietary accommodations
- Brief your event management team on all logistics
- Conduct venue walkthrough
- Prepare contingency plans for common issues
- Share event app/website with attendees

## 1 Week Before

- Confirm attendance with all speakers and VIP guests
- Do a full technical rehearsal with A/V team
- Brief security and hospitality staff
- Prepare registration materials and attendee kits
- Confirm ground transportation

## Day Of

- Arrive 3 hours early for final setup check
- Brief all team members with their specific roles
- Test all technology one final time
- Ensure signage is clear and attendee-friendly

## After the Event

- Send thank-you notes to speakers and sponsors
- Distribute post-event survey
- Analyze data against your KPIs
- Create a post-event report for stakeholders
- Archive contacts and vendor relationships for future events

---

Need an expert team to handle all of this for you? [Contact SS Event](/contact) today.
    `.trim(),
    author: {
      name: 'Rahul Mehta',
      role: 'Head of Corporate Events',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80',
    },
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=630&fit=crop&q=80',
    category: 'Corporate Events',
    tags: ['Corporate Events', 'Event Planning', 'Checklist', 'Project Management'],
    publishedAt: '2025-01-08',
    readTime: '8 min read',
  },
  {
    id: 'b3',
    slug: 'destination-wedding-guide-india',
    title: 'The Complete Guide to Planning a Destination Wedding in India',
    excerpt: 'From palace hotels in Rajasthan to beachside resorts in Goa, India offers breathtaking venues for destination weddings. Here\'s everything you need to plan yours.',
    content: `
# The Complete Guide to Planning a Destination Wedding in India

India's architectural wonders, diverse landscapes, and rich cultural heritage make it one of the world's most spectacular destinations for weddings. Whether you're dreaming of a palace wedding in Udaipur, a beachside ceremony in Goa, or a mountain retreat in Himachal Pradesh, this guide will help you navigate the planning process.

## Why India for a Destination Wedding?

The combination of world-class heritage venues, exceptional hospitality, and the sheer grandeur of Indian wedding traditions creates an experience impossible to replicate anywhere else in the world. Add to that the relatively favorable exchange rates for international guests and India's position as the world capital of wedding celebrations.

## Top Destination Wedding Locations

### Rajasthan (Palace Weddings)
Udaipur, Jaipur, and Jodhpur offer a concentration of heritage palace hotels unmatched anywhere in the world. The Taj Lake Palace, Umaid Bhawan Palace, and Samode Palace are just a few of the iconic venues in this category.

### Goa (Beach Weddings)
For couples wanting a relaxed, tropical vibe with world-class infrastructure, Goa remains India's top beach wedding destination. Properties like The Leela Goa and Grand Hyatt Goa can accommodate large wedding groups with ease.

### Kerala (Backwater Weddings)
Kerala's serene backwaters and verdant landscapes create an idyllic backdrop for intimate ceremonies. Houseboat weddings and resort celebrations along the backwaters are increasingly popular.

### Himachal Pradesh (Mountain Weddings)
Manali, Kasauli, and Dharamshala offer stunning mountain backdrops for couples willing to embrace a more adventurous setting.

## Planning Timeline

- **12-18 months out**: Choose destination and venue
- **10-12 months**: Lock vendors in the destination city
- **8 months**: Send save-the-dates to out-of-town guests
- **6 months**: Book guest accommodations block
- **3 months**: Finalize all logistics, guest travel arrangements
- **1 month**: Final confirmations, briefings

## Working with a Destination Wedding Planner

Managing a wedding remotely requires a trusted local expert who knows the vendors, the venues, and the logistics on the ground. SS Event has organized destination weddings in every major Indian wedding destination — we're the on-the-ground team you need.
    `.trim(),
    author: {
      name: 'Sanjay Sharma',
      role: 'Founder & Creative Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
    },
    coverImage: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&h=630&fit=crop&q=80',
    category: 'Weddings',
    tags: ['Destination Weddings', 'Rajasthan', 'Goa', 'Kerala', 'Planning'],
    publishedAt: '2024-12-20',
    readTime: '10 min read',
  },
  {
    id: 'b4',
    slug: 'perfect-sangeet-planning-guide',
    title: 'How to Plan the Perfect Sangeet Ceremony',
    excerpt: 'The Sangeet is often the most anticipated event of a wedding week. Here\'s our expert guide to creating a night that gets everyone on the dance floor.',
    content: `
# How to Plan the Perfect Sangeet Ceremony

The Sangeet is the beating heart of an Indian wedding celebration — a night of music, dance, and unbridled joy that brings both families together for the first time. After organizing hundreds of Sangeet ceremonies, the SS Event team shares everything you need to know to make yours legendary.

## Setting the Stage

The venue sets the tone for the entire evening. You have several options: the wedding hotel's ballroom, an outdoor lawn under the stars, a rooftop space, or a dedicated event venue. Whatever you choose, ensure the dance floor is central and large enough for group performances.

## Entertainment Framework

A typical Sangeet runs 4–5 hours and should be carefully programmed to maintain energy throughout. Here's a framework that works beautifully:

**Hour 1: Welcome & Arrivals**
- Welcome cocktails and networking
- Background music (Bollywood, fusion)
- Photo booth area active

**Hour 2: Family Performances**
- Opening number by bridesmaids/groomsmen
- Parent performances (always a highlight)
- Extended family group dances

**Hour 3: Star Performances**
- Bride's solo or group performance
- Groom's surprise performance
- Couple's dance together

**Hour 4: Professional Entertainment**
- Professional anchor hosts games and competitions
- Live band or DJ takes over
- Open dance floor

**Hour 5: Dance & Celebration**
- Full open dance floor
- Late-night snacks served
- Closing moments

## Key Vendor Team

- **Professional Anchor**: The MC who holds the evening together
- **DJ/Live Band**: Music that keeps energy high throughout
- **Choreographer**: For family dance rehearsals (book 3 months in advance)
- **Sound & Lighting Team**: Critical for atmosphere
- **Photographer & Videographer**: Dedicated Sangeet team

## Décor Essentials

Sangeet décor should be vibrant, colorful, and festive — a contrast to the more formal wedding décor. Think bright florals, colorful drapery, fun neon signs, and a well-lit dance floor.

Book your Sangeet planning consultation with SS Event today and let's create a night everyone will be talking about for years.
    `.trim(),
    author: {
      name: 'Priya Nair',
      role: 'Entertainment & Production Head',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80',
    },
    coverImage: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=630&fit=crop&q=80',
    category: 'Weddings',
    tags: ['Sangeet', 'Wedding Entertainment', 'Planning', 'Music'],
    publishedAt: '2024-12-05',
    readTime: '7 min read',
  },
  {
    id: 'b5',
    slug: 'choosing-wedding-decorator-tips',
    title: '5 Critical Questions to Ask Before Hiring a Wedding Decorator',
    excerpt: 'Your wedding décor is the visual story of your love. Choosing the wrong decorator can be a costly mistake. Here\'s how to hire the right one.',
    content: `
# 5 Critical Questions to Ask Before Hiring a Wedding Decorator

The right wedding decorator transforms a venue into a dreamscape. The wrong one delivers a generic, disappointing experience that haunts you in your wedding photos forever. After working with hundreds of couples and evaluating countless decorator portfolios, here's what you should be asking.

## 1. "Can I See Your Portfolio from the Last 12 Months?"

Decorator styles evolve constantly. What they created 3 years ago may bear little resemblance to their current work. Always ask to see recent work — specifically from the current year. Look for consistency of quality, variety of styles, and evidence that they can execute at different budget levels.

**Red flag**: A portfolio that shows only their highest-budget work with no variety.

## 2. "Who Will Actually Be at My Wedding?"

Many agencies present their senior creative team during the sales process but send junior assistants to execute. Always confirm in writing who will personally oversee your event.

**Red flag**: Vague answers about "our team" without naming specific individuals.

## 3. "What Happens If a Key Element Fails?"

Flowers wilt, candles tip, structures shift. An experienced decorator has contingency plans for every scenario. Their answer tells you how many weddings they've actually done.

**Red flag**: They've "never had a problem" (everyone has had problems — they're just not being honest with you).

## 4. "What's Included vs. What Costs Extra?"

Get every element in writing. Setup fees, transportation of décor, installation time, dismantling — all of these can add 20–40% to the quoted price if not disclosed upfront.

**Red flag**: Resistance to providing an itemized quote.

## 5. "Can You Show Me Real Photos vs. Inspiration Images?"

Social media is filled with beautiful inspiration images — some decorators present these as their own work. Always ask specifically: "Is this a photo from an event you decorated?"

At SS Event, our in-house décor team executes every project we quote. You get to work with the same creative minds who designed your vision throughout the entire process. [Schedule a consultation](/book-consultation) to see our portfolio in person.
    `.trim(),
    author: {
      name: 'Shreya Sharma',
      role: 'Co-Founder & Décor Lead',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&q=80',
    },
    coverImage: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&h=630&fit=crop&q=80',
    category: 'Planning Tips',
    tags: ['Wedding Décor', 'Hiring Tips', 'Decorator', 'Budget'],
    publishedAt: '2024-11-22',
    readTime: '5 min read',
  },
  {
    id: 'b6',
    slug: 'ss-event-2024-annual-review',
    title: 'SS Event 2024: A Year of Milestones',
    excerpt: 'From palace weddings in Rajasthan to 1000-person corporate summits, 2024 was our biggest year yet. Here\'s a look back at the highlights.',
    content: `
# SS Event 2024: A Year of Milestones

As we close the chapter on 2024, we're filled with gratitude for the incredible clients, dedicated team members, and unforgettable events that made this our most remarkable year to date.

## By the Numbers

- **87 events** managed in 2024
- **23 cities** across India
- **4 destination weddings** including events in Udaipur, Goa, Jim Corbett, and Shimla
- **12 corporate clients** from the Fortune 500
- **3 celebrity events** (which, as you understand, we can't name!)
- **4.9/5** average client satisfaction rating

## Most Memorable Events

### The Kapoor-Verma Royal Wedding
A 5-day extravaganza in a heritage palace in Jaisalmer for 400 guests. The event featured a Rajasthani folk music welcome, a traditional Rajput ceremony, and a grand reception under a thousand lanterns in the palace courtyard. It was featured in Harper's Bazaar Bride.

### TechVision Global Annual Conference
Managing a 1200-person annual conference across 3 days in Mumbai was our largest corporate undertaking yet. We handled everything from the airport to the gala dinner, with a 45-person on-site team.

### The Silent Disco Sangeet That Went Viral
When the Gupta-Mehta family wanted a unique Sangeet, we delivered something truly original — India's first palace silent disco wedding experience. The videos reached over 2 million views across social media.

## Team Growth

We expanded our team to 65 full-time members and onboarded 120+ trusted vendor partners across 10 cities. Our in-house production team grew with state-of-the-art LED wall inventory and a professional drone fleet.

## Thank You

To every client who trusted us with the most important celebrations of their lives — thank you. 2025 is shaping up to be even more extraordinary. [Book your consultation today](/book-consultation).
    `.trim(),
    author: {
      name: 'Sanjay Sharma',
      role: 'Founder & Creative Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
    },
    coverImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=630&fit=crop&q=80',
    category: 'Behind the Scenes',
    tags: ['2024 Review', 'Milestones', 'SS Event', 'Behind the Scenes'],
    publishedAt: '2024-12-31',
    readTime: '5 min read',
  },
]
