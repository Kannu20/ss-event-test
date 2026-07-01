# Anchor Shubham Khandelwal  — Complete Project Blueprint
> Premium Event Management Company Website
> Status: Pre-Development Architecture Document

---

## 1. REFERENCE ANALYSIS — anchorankit.com

### What They Did Well
- Clean service categorization with named sub-services
- "Why Choose Us" feature cards with stats
- FAQ accordion for SEO
- WhatsApp floating CTA
- Client logo social proof strip
- Gallery grid with lightbox

### Critical Gaps (Where Anchor Shubham Khandelwal  Wins)
| Gap | Anchor Shubham Khandelwal  Solution |
|-----|------------------|
| WordPress/Elementor (slow, generic) | Next.js 15 App Router (fast, custom) |
| No luxury design language | Black & Gold premium design system |
| Zero animation sophistication | GSAP + Framer Motion scroll storytelling |
| No video showcase | Dedicated video section + reel hero |
| No booking flow | Multi-step consultation booking form |
| No portfolio with filtering | Filterable portfolio with category tags |
| Basic typography (system fonts) | Cormorant Garamond + DM Sans pairing |
| Static counters | Animated intersection-observer counters |
| No testimonials carousel | Auto-play testimonial carousel with ratings |
| Generic footer | Premium multi-column footer with CTA strip |
| No dark luxury aesthetic | Deep black sections with gold accents |
| Single page services list | Dedicated service sub-pages with full details |
| No responsive strategy | Mobile-first with breakpoint-specific layouts |

---

## 2. DESIGN SYSTEM

### 2.1 Color Palette

```
Primary Colors
──────────────
--color-black:          #0A0A0A   /* Near-black base */
--color-black-soft:     #111111   /* Card/section backgrounds */
--color-black-mid:      #1A1A1A   /* Elevated surfaces */
--color-black-light:    #242424   /* Borders, dividers */

Gold Spectrum
─────────────
--color-gold-light:     #F5D98B   /* Highlights, hover states */
--color-gold:           #D4AF37   /* Primary gold - CTAs, accents */
--color-gold-mid:       #B8960C   /* Pressed states */
--color-gold-dark:      #8B7000   /* Deep gold for contrast */
--color-gold-muted:     #6B5B2E   /* Subtle gold tints */

Neutral Scale
─────────────
--color-white:          #FFFFFF
--color-cream:          #F8F4ED   /* Light section backgrounds */
--color-gray-100:       #F2F2F2
--color-gray-300:       #B8B8B8
--color-gray-500:       #6E6E6E
--color-gray-700:       #3A3A3A
--color-gray-900:       #1C1C1C

Semantic
────────
--color-success:        #2D7A4F
--color-error:          #C0392B
--color-overlay:        rgba(10,10,10,0.75)
--color-glass:          rgba(255,255,255,0.04)
```

### 2.2 Typography

```
Font Stack
──────────
Heading Display:   "Cormorant Garamond" — weight 300, 400, 600, 700
                   (Luxury serif — weddings, premium feel)
Body / UI:         "DM Sans" — weight 300, 400, 500, 600
                   (Clean, modern, readable)
Accent / Labels:   "Josefin Sans" — weight 300, 400
                   (Spaced uppercase labels, section tags)

Type Scale (fluid sizing via clamp())
──────────────────────────────────────
--fs-hero:          clamp(3.5rem, 8vw, 7rem)      /* Hero headline */
--fs-display:       clamp(2.5rem, 5vw, 4.5rem)    /* Page titles */
--fs-h1:            clamp(2rem, 4vw, 3.5rem)
--fs-h2:            clamp(1.75rem, 3vw, 2.75rem)
--fs-h3:            clamp(1.25rem, 2vw, 1.75rem)
--fs-h4:            clamp(1.1rem, 1.5vw, 1.375rem)
--fs-body-lg:       1.125rem
--fs-body:          1rem
--fs-body-sm:       0.875rem
--fs-label:         0.75rem   /* uppercase tracking */
--fs-caption:       0.6875rem

Letter Spacing
──────────────
--ls-tighter:  -0.04em   /* Display headings */
--ls-tight:    -0.02em   /* H1–H2 */
--ls-normal:    0em
--ls-wide:      0.08em   /* Body uppercase labels */
--ls-wider:     0.16em   /* Section eyebrow labels */
--ls-widest:    0.25em   /* FOOTER CAPS, tags */

Line Heights
────────────
--lh-heading:   1.1
--lh-display:   1.05
--lh-body:      1.7
--lh-tight:     1.3
```

### 2.3 Spacing System

```
Base unit: 4px (0.25rem)

--space-1:    0.25rem   /*  4px */
--space-2:    0.5rem    /*  8px */
--space-3:    0.75rem   /* 12px */
--space-4:    1rem      /* 16px */
--space-5:    1.25rem   /* 20px */
--space-6:    1.5rem    /* 24px */
--space-8:    2rem      /* 32px */
--space-10:   2.5rem    /* 40px */
--space-12:   3rem      /* 48px */
--space-16:   4rem      /* 64px */
--space-20:   5rem      /* 80px */
--space-24:   6rem      /* 96px */
--space-32:   8rem      /* 128px */
--space-40:   10rem     /* 160px */

Section Padding (responsive)
─────────────────────────────
Mobile:   py-16  (64px)
Tablet:   py-24  (96px)
Desktop:  py-32  (128px)
```

### 2.4 Border Radius

```
--radius-sm:    0.25rem   /*  4px — chips, tags */
--radius-md:    0.5rem    /*  8px — inputs, cards */
--radius-lg:    1rem      /* 16px — panels */
--radius-xl:    1.5rem    /* 24px — modals */
--radius-full:  9999px    /* pills, badges */
--radius-none:  0         /* sharp luxury cuts */
```

### 2.5 Shadows & Glows

```
--shadow-gold-sm:  0 0 12px rgba(212,175,55,0.15)
--shadow-gold-md:  0 0 24px rgba(212,175,55,0.25)
--shadow-gold-lg:  0 0 48px rgba(212,175,55,0.35)
--shadow-card:     0 4px 32px rgba(0,0,0,0.4)
--shadow-elevated: 0 8px 48px rgba(0,0,0,0.6)
--shadow-inset:    inset 0 1px 0 rgba(255,255,255,0.05)
```

### 2.6 Animation Tokens

```
Durations
─────────
--duration-fast:    150ms
--duration-base:    300ms
--duration-slow:    600ms
--duration-slower:  900ms
--duration-slowest: 1200ms

Easing
──────
--ease-out:        cubic-bezier(0.0, 0.0, 0.2, 1)
--ease-in-out:     cubic-bezier(0.4, 0.0, 0.2, 1)
--ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1)   /* bouncy */
--ease-luxury:     cubic-bezier(0.16, 1, 0.3, 1)        /* slow-out */
--ease-gold:       cubic-bezier(0.25, 0.46, 0.45, 0.94) /* smooth */

GSAP Named Presets
──────────────────
heroReveal:       stagger 0.1s, y: 60→0, opacity: 0→1, ease: luxury
sectionReveal:    ScrollTrigger, y: 40→0, opacity: 0→1, scrub: false
cardHover:        scale 1→1.03, shadow glow, duration: 300ms
lineReveal:       scaleX 0→1 (gold underline), ease: luxury
imageParallax:    ScrollTrigger, y: -10% to +10%
counterUp:        IntersectionObserver, count 0→N, duration: 2s
```

### 2.7 Grid System

```
Container
─────────
--container-sm:    640px
--container-md:    768px
--container-lg:    1024px
--container-xl:    1280px
--container-2xl:   1400px
--container-px:    clamp(1rem, 5vw, 6rem)  /* side padding */

Grid
────
12-column grid for all layouts
gap: 1.5rem (mobile) → 2rem (tablet) → 2.5rem (desktop)
```

### 2.8 Component States

```
Interactive Elements
────────────────────
Default    → Resting state
Hover      → Gold glow + slight scale + cursor pointer
Focus      → Gold ring (2px solid gold, 2px offset)
Active     → Pressed scale(0.97)
Disabled   → opacity 0.4, no pointer events
Loading    → Pulse shimmer animation

Cards
─────
Default    → Dark surface, subtle border
Hover      → Lift (translateY -4px), gold border glow
Active     → Slight compress

Buttons — 4 variants
────────────────────
Primary    → Gold fill, black text, hover: gold-light fill
Secondary  → Gold border, gold text, hover: gold fill
Ghost      → Transparent, white text, hover: glass fill
Destructive → Error color
```

---

## 3. FOLDER STRUCTURE

```
ss-event/
├── app/
│   ├── (root)/
│   │   ├── layout.tsx              ← Root layout (header + footer + providers)
│   │   ├── page.tsx                ← Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx            ← Services overview
│   │   │   ├── wedding-events/
│   │   │   │   └── page.tsx
│   │   │   ├── corporate-events/
│   │   │   │   └── page.tsx
│   │   │   ├── social-events/
│   │   │   │   └── page.tsx
│   │   │   ├── entertainment-services/
│   │   │   │   └── page.tsx
│   │   │   └── production-setup/
│   │   │       └── page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   ├── videos/
│   │   │   └── page.tsx
│   │   ├── testimonials/
│   │   │   └── page.tsx
│   │   ├── faqs/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── book-consultation/
│   │       └── page.tsx
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts
│   │   └── booking/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx                  ← Metadata, fonts
│   └── sitemap.ts                  ← Auto-generated sitemap
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── NavbarMobile.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingActions.tsx     ← WhatsApp + Call buttons
│   │   └── PageWrapper.tsx         ← Page transition wrapper
│   │
│   ├── ui/                         ← Base design system components
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Divider.tsx             ← Gold ornamental dividers
│   │   ├── GoldLine.tsx            ← Decorative gold lines
│   │   ├── SectionLabel.tsx        ← "OUR SERVICES" eyebrow labels
│   │   ├── GradientText.tsx        ← Gold gradient text
│   │   ├── ImageReveal.tsx         ← Masked image reveal animation
│   │   ├── Spinner.tsx
│   │   ├── Modal.tsx
│   │   └── Skeleton.tsx
│   │
│   ├── sections/                   ← Full page sections (used across pages)
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── StatsCounter.tsx
│   │   ├── GalleryPreview.tsx
│   │   ├── VideoShowcase.tsx
│   │   ├── TestimonialsCarousel.tsx
│   │   ├── FeaturedEvents.tsx
│   │   ├── EventCategories.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── ContactForm.tsx
│   │   ├── BookingCTA.tsx
│   │   └── ClientLogos.tsx
│   │
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   ├── BookingForm.tsx         ← Multi-step
│   │   └── InquiryForm.tsx         ← Quick inline form
│   │
│   └── common/
│       ├── AnimatedCounter.tsx
│       ├── PageHero.tsx            ← Inner page hero (non-home)
│       ├── Breadcrumb.tsx
│       ├── SectionWrapper.tsx
│       ├── LazyImage.tsx
│       ├── VideoPlayer.tsx
│       ├── LightboxGallery.tsx
│       ├── FilterTabs.tsx
│       └── ScrollProgress.tsx
│
├── hooks/
│   ├── useScrollTrigger.ts
│   ├── useCounter.ts
│   ├── useMediaQuery.ts
│   ├── useIntersectionObserver.ts
│   └── useForm.ts
│
├── lib/
│   ├── constants/
│   │   ├── navigation.ts
│   │   ├── services.ts
│   │   ├── testimonials.ts
│   │   ├── stats.ts
│   │   ├── faqs.ts
│   │   └── portfolio.ts
│   ├── utils/
│   │   ├── cn.ts                   ← clsx + twMerge
│   │   ├── formatters.ts
│   │   └── validators.ts
│   ├── animations/
│   │   ├── gsap-config.ts
│   │   ├── variants.ts             ← Framer Motion variants
│   │   └── presets.ts
│   ├── seo/
│   │   ├── metadata.ts
│   │   └── schema.ts               ← JSON-LD schema markup
│   └── validations/
│       ├── contact.schema.ts
│       └── booking.schema.ts
│
├── types/
│   ├── index.ts
│   ├── service.ts
│   ├── testimonial.ts
│   ├── portfolio.ts
│   └── form.ts
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── portfolio/
│   │   ├── team/
│   │   └── gallery/
│   ├── videos/
│   ├── icons/
│   └── fonts/
│
├── styles/
│   └── (handled via Tailwind + globals.css)
│
├── tailwind.config.ts              ← Extended theme tokens
├── next.config.ts
├── tsconfig.json
├── components.json                 ← Shadcn config
└── .env.local
```

---

## 4. ROUTING STRUCTURE & NAVIGATION FLOW

### 4.1 Route Map

```
/                           Home
├── /about                  About Anchor Shubham Khandelwal 
├── /services               Services Overview (hub page)
│   ├── /wedding-events     Wedding Services (detail page)
│   ├── /corporate-events   Corporate Services
│   ├── /social-events      Social Events
│   ├── /entertainment-services  Entertainment
│   └── /production-setup   Production & AV
├── /portfolio              Portfolio (filterable)
├── /gallery                Photo Gallery
├── /videos                 Video Showcase
├── /testimonials           Client Reviews
├── /faqs                   FAQ
├── /contact                Contact
└── /book-consultation      Booking Flow (multi-step)
```

### 4.2 Navigation Architecture

```
Primary Navigation (Desktop)
────────────────────────────
[Logo]  Home  About  Services▾  Portfolio  Gallery  [Book Consultation CTA]

Services Mega-Dropdown
────────────────────────
┌──────────────────────────────────────────────┐
│ Wedding Events     │ Corporate Events          │
│  • Wedding Planning│  • Conferences            │
│  • Destination     │  • Product Launches       │
│  • Haldi / Mehendi │  • Award Functions        │
│  • Sangeet         │  • Dealer Meets           │
│  • Reception       ├────────────────────────── │
│                    │ Entertainment Services     │
│ Social Events      │  • Professional Anchors   │
│  • Birthday Parties│  • DJ Services            │
│  • Anniversary     │  • Live Bands             │
│  • Cultural Programs│  • Celebrity Management  │
├────────────────────┴────────────────────────── │
│ Production Setup: Stage · LED · Sound · Light  │
└────────────────────────────────────────────────┘

Mobile Navigation
─────────────────
Hamburger → Full-screen overlay
Animated slide-in menu
Accordion-style service sub-items
Social icons + WhatsApp CTA at bottom

Sticky Behavior
────────────────
Transparent over hero → solid dark on scroll
Logo scales down on scroll
Nav height: 80px → 64px on scroll
```

### 4.3 User Journey Flows

```
Primary CTA Flow
────────────────
Hero CTA → /book-consultation → Multi-step form → Success page

Service Discovery Flow
──────────────────────
Home Services Section → /services → Service Category → /book-consultation

Trust Flow
──────────
Home → /portfolio → /testimonials → /book-consultation

Information Flow
────────────────
Home → /about → /services → /faqs → /contact
```

---

## 5. PAGE ARCHITECTURE — ALL SECTIONS

### 5.1 HOME ( / )

```
01. NAVBAR (sticky, transparent)
02. HERO SECTION
    - Full-viewport height
    - Video background (muted, looping reel) OR parallax image
    - Headline: "Where Moments Become Memories"
    - Sub: "Full-service premium event management"
    - CTAs: [Book Consultation] [View Portfolio]
    - Scroll indicator (animated arrow)
    - Gold particle overlay effect

03. MARQUEE STRIP
    - Horizontal scrolling logos/stats
    - "500+ Events · 10 Years Experience · 100% Client Satisfaction · ..."

04. ABOUT SNAPSHOT
    - Split layout: large image (left) + text (right)
    - 3-line brand story
    - Link to /about

05. SERVICES OVERVIEW
    - Section label: "WHAT WE DO"
    - 5 service category cards in asymmetric grid
    - Each card: icon, name, short desc, arrow CTA

06. WHY CHOOSE US
    - Dark section with gold accents
    - 6 feature items (icon + title + copy)
    - Large background image with overlay

07. FEATURED EVENTS
    - "OUR WORK" label
    - Horizontal scroll or 3-column masonry
    - 6 event showcase cards
    - Each: image, event type tag, event name, year

08. EVENT CATEGORIES (Bento-style grid)
    - Wedding / Corporate / Social / Entertainment / Production
    - Each: premium image, overlay text, hover zoom

09. GALLERY PREVIEW
    - 6–8 image mosaic/masonry grid
    - Hover: slight zoom + gold overlay with "View" icon
    - [View Full Gallery] CTA

10. VIDEO SHOWCASE
    - Dark section
    - Featured reel video (centered, large)
    - 3 video thumbnails below
    - "Play" button with gold ring

11. TESTIMONIALS CAROUSEL
    - Auto-advancing with drag support
    - Star rating
    - Client name, event type, avatar/photo
    - Background: subtle texture

12. STATISTICS COUNTER
    - "OUR NUMBERS" label
    - 4 stats: Events Completed / Years Experience / Cities / Happy Clients
    - Animate on viewport entry

13. FAQ PREVIEW
    - 4–5 most common questions
    - Gold "+" expand icon
    - [View All FAQs] link

14. CONTACT/INQUIRY FORM
    - Name, Phone, Email, Event Type, Date, Message
    - Inline within homepage

15. BOOKING CTA STRIP
    - Full-width dark gold gradient section
    - "Ready to Make Your Event Unforgettable?"
    - [Book Free Consultation] button

16. FOOTER
```

### 5.2 ABOUT ( /about )

```
01. PAGE HERO (inner pages)
    - Shorter height (~50vh)
    - Page title + breadcrumb
    - Parallax image background

02. BRAND STORY
    - 2-column: headline left, story paragraphs right
    - Pull quote in gold

03. MISSION & VISION
    - 2-card layout with icons

04. TEAM SECTION
    - Founder/key team
    - Photo + name + role + brief bio

05. MILESTONES TIMELINE
    - Horizontal or vertical timeline
    - Key years and achievements

06. AWARDS & RECOGNITION
    - Logo grid of awards/associations
    - Brief descriptions

07. STATISTICS COUNTER (same component, reused)

08. CLIENT LOGOS STRIP

09. BOOKING CTA STRIP
```

### 5.3 SERVICES ( /services )

```
01. PAGE HERO

02. SERVICES INTRO
    - "Full-Spectrum Event Management" headline
    - Brief positioning statement

03. SERVICE CATEGORY CARDS (5 large cards)
    - Full-width or 2-column alternating layout
    - Image, category name, sub-services list
    - [Explore] CTA linking to sub-page

04. PROCESS SECTION
    - "How We Work" — 5-step process
    - Numbered steps with icons

05. BOOKING CTA STRIP
```

### 5.4 SERVICE SUB-PAGES (e.g. /services/wedding-events)

```
01. PAGE HERO (with service-specific image)
02. SERVICE OVERVIEW
03. WHAT'S INCLUDED (icon grid of sub-services)
04. HOW IT WORKS (3-step process for this service)
05. GALLERY PREVIEW (filtered to this category)
06. TESTIMONIALS (filtered to this category)
07. PRICING NOTE (custom quote positioning)
08. RELATED SERVICES
09. BOOKING CTA STRIP
```

### 5.5 PORTFOLIO ( /portfolio )

```
01. PAGE HERO
02. FILTER TABS (All / Wedding / Corporate / Social / Entertainment)
03. MASONRY/GRID portfolio items
    - Each: image, overlay, category tag, event name, year
    - Hover: scale + gold border glow
    - Click: lightbox or detail view
04. LOAD MORE button
05. BOOKING CTA STRIP
```

### 5.6 GALLERY ( /gallery )

```
01. PAGE HERO
02. FILTER TABS (by event category)
03. MASONRY GRID
    - 3–4 column responsive
    - Lightbox on click
    - Infinite scroll or pagination
04. BOOKING CTA STRIP
```

### 5.7 VIDEOS ( /videos )

```
01. PAGE HERO
02. FEATURED VIDEO (large embed, centered)
03. VIDEO GRID (category filter tabs)
    - Thumbnail grid with play overlay
    - Category tag on each
04. BOOKING CTA STRIP
```

### 5.8 TESTIMONIALS ( /testimonials )

```
01. PAGE HERO
02. RATING SUMMARY
    - Average star rating, total reviews
    - Platform badges (Google, WeddingWire, etc.)
03. TESTIMONIALS GRID
    - Filter by event type
    - Cards: photo, name, event, rating, quote
04. VIDEO TESTIMONIALS section
05. BOOKING CTA STRIP
```

### 5.9 FAQs ( /faqs )

```
01. PAGE HERO
02. FAQ CATEGORIES (tab filter)
    - General / Wedding / Corporate / Booking / Pricing
03. ACCORDION LIST
    - Gold "+" icon
    - Smooth open/close animation
04. STILL HAVE QUESTIONS strip
    - Phone + WhatsApp + Contact form link
05. BOOKING CTA STRIP
```

### 5.10 CONTACT ( /contact )

```
01. PAGE HERO
02. CONTACT GRID (2-column)
    - LEFT: contact details (address, phone, email, hours)
    - RIGHT: contact form
03. GOOGLE MAPS EMBED
04. SOCIAL MEDIA LINKS
05. BOOKING CTA STRIP
```

### 5.11 BOOK CONSULTATION ( /book-consultation )

```
01. PAGE HERO (minimal, no bg image)
02. MULTI-STEP FORM
    Step 1: Event Type selection (visual cards)
    Step 2: Event Details (date, venue, guest count, city)
    Step 3: Personal Info (name, phone, email)
    Step 4: Message / Special requirements
    Step 5: Confirmation screen (animated)
03. SIDEBAR (desktop): trust signals (stats, client logos)
04. PROGRESS BAR (gold animated)
```

---

## 6. COMPONENT ARCHITECTURE

### 6.1 Component Hierarchy

```
<RootLayout>
  <Providers>               ← Context: theme, animations
    <Navbar />
    <FloatingActions />     ← WhatsApp, Call (fixed)
    <ScrollProgress />      ← Gold top progress bar
    <PageWrapper>           ← Page transition
      {children}
    </PageWrapper>
    <Footer />
  </Providers>
</RootLayout>
```

### 6.2 Atomic Component Tree

```
ATOMS (primitives)
──────────────────
Button           (4 variants: primary, secondary, ghost, destructive)
Badge            (event category tags)
Icon             (wrapper for Lucide icons with gold tint)
GoldLine         (decorative horizontal/vertical lines)
SectionLabel     (uppercase spaced eyebrow text)
GradientText     (gold gradient applied to text)
Spinner          (loading state)

MOLECULES (composed)
─────────────────────
ServiceCard      = Card + Icon + Badge + Button
TestimonialCard  = Card + Avatar + StarRating + Quote
PortfolioItem    = Image + Overlay + Badge + Title
StatItem         = AnimatedCounter + Label + Icon
FAQItem          = Accordion trigger + content
TeamMemberCard   = Image + Name + Role + Bio
VideoCard        = Thumbnail + PlayButton + Title + Badge
GalleryItem      = LazyImage + Overlay + Lightbox trigger
NavItem          = Link + optional MegaDropdown

ORGANISMS (complex sections)
──────────────────────────────
Navbar           = Logo + NavItems + MegaDropdown + CTAButton + MobileMenu
HeroSection      = VideoBackground + Headline + CTAs + ScrollIndicator
ServicesGrid     = SectionLabel + ServiceCard[]
StatsCounter     = SectionWrapper + StatItem[]
TestimonialsCarousel = SectionWrapper + Swiper + TestimonialCard[]
GalleryPreview   = SectionWrapper + MasonryGrid + GalleryItem[] + CTA
VideoShowcase    = SectionWrapper + FeaturedVideo + VideoCard[]
FAQAccordion     = SectionWrapper + FilterTabs + FAQItem[]
ContactForm      = Form + FormFields + SubmitButton + ValidationErrors
BookingForm      = MultiStepWrapper + StepIndicator + StepContent[]
Footer           = FooterGrid + FooterLinks + SocialIcons + Legal

TEMPLATES (page-level layouts)
────────────────────────────────
HomeTemplate     = all homepage sections in sequence
InnerPageTemplate = PageHero + {children} + BookingCTAStrip
ServiceTemplate  = InnerPageTemplate + service-specific sections
```

### 6.3 Reusable Section Components

| Component | Used On Pages |
|-----------|--------------|
| `<StatsCounter />` | Home, About |
| `<TestimonialsCarousel />` | Home, Testimonials, Service pages |
| `<GalleryPreview />` | Home, Service pages |
| `<BookingCTAStrip />` | All pages (bottom) |
| `<ClientLogos />` | Home, About |
| `<FAQAccordion />` | Home (preview), FAQs (full) |
| `<PageHero />` | All inner pages |
| `<ContactForm />` | Home, Contact |

---

## 7. SEO STRATEGY

### 7.1 Technical SEO

```
- Next.js generateMetadata() per page — dynamic title/description/OG
- next/font for zero-FOUT font loading
- next/image for WebP, lazy loading, priority above-fold
- Sitemap auto-generated via app/sitemap.ts
- robots.txt via app/robots.ts
- Canonical URLs on all pages
- OpenGraph + Twitter Card meta on every page
- Schema.org JSON-LD markup:
  • LocalBusiness on /contact
  • Service schema on service pages
  • FAQPage schema on /faqs
  • BreadcrumbList on inner pages
  • Event schema on portfolio items
  • Review/AggregateRating on /testimonials
```

### 7.2 Page-Level SEO Targets

```
Page                    Target Keyword (Primary)
────────────────────────────────────────────────
/                       "Event management company [City]"
/about                  "Anchor Shubham Khandelwal  about us"
/services               "Event management services"
/services/wedding-events "Wedding event planner [City]"
/services/corporate-events "Corporate event management"
/services/social-events  "Social event organizer"
/portfolio              "Event portfolio"
/gallery                "Event gallery photos"
/testimonials           "Client reviews event management"
/faqs                   "Event management FAQ"
/contact                "Contact event management company"
/book-consultation      "Book event consultation"
```

### 7.3 Content SEO

```
- H1 on every page (one only)
- H2 for major sections
- Alt text on all images (descriptive, keyword-aware)
- Internal linking between service pages
- Blog-ready route structure (future /blog)
- Fast Core Web Vitals (LCP <2.5s, FID <100ms, CLS <0.1)
- Mobile-first indexing compliant
```

---

## 8. RESPONSIVE STRATEGY

### 8.1 Breakpoints

```
xs:   375px    (small mobile)
sm:   640px    (large mobile)
md:   768px    (tablet portrait)
lg:   1024px   (tablet landscape / small desktop)
xl:   1280px   (desktop)
2xl:  1400px   (large desktop)
3xl:  1920px   (wide/4K — max-width cap)
```

### 8.2 Layout Transformations

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Navbar | Hamburger + overlay | Hamburger + overlay | Full horizontal + mega-menu |
| Hero | Full screen, text stacked | Same | Text left, visual right split |
| Services Grid | 1 col | 2 col | 3 col |
| Event Categories | 1 col scroll | 2 col | Bento asymmetric grid |
| Stats Counter | 2 col | 4 col | 4 col with large nums |
| Gallery | 2 col masonry | 3 col | 4 col |
| Testimonials | 1 card at a time | 2 visible | 3 visible |
| Footer | Stacked columns | 2 col | 4 col |
| Booking Form | Full width steps | 60% form, 40% sidebar | 50/50 split |

### 8.3 Mobile-Specific Features

```
- Touch-optimized swipe carousels (Swiper.js)
- 44px minimum tap target size
- Sticky bottom bar: [WhatsApp] [Call Now] on mobile
- Collapsible nav
- Compressed animations (reduced motion media query)
- Optimized images for mobile (smaller srcset)
- No hover-only interactions — all have touch equivalents
```

### 8.4 Performance Strategy

```
- Dynamic imports for heavy sections (GSAP, Swiper)
- next/image with priority on LCP images
- Font preload for Cormorant Garamond + DM Sans
- CSS custom properties for theming (no JS)
- Prefetch on hover for navigation links
- Suspense + loading.tsx for route transitions
- Video: poster image first, load video on interaction
```

---

## 9. ANIMATION STRATEGY

### 9.1 GSAP Animations (scroll-driven)

```
Hero:
  - Text lines split + stagger reveal (SplitText)
  - Background subtle ken-burns zoom
  - CTA buttons fade-slide up

Section Entrances:
  - ScrollTrigger: y:40→0, opacity:0→1 on viewport
  - Stagger for grid items

Service Cards:
  - Hover: magnetic cursor + card lift

Stats:
  - Counter roll-up on ScrollTrigger enter

Gallery:
  - Horizontal scroll section (pinned)
  - Image parallax within scroll

Marquee:
  - GSAP ticker for infinite horizontal scroll
```

### 9.2 Framer Motion (interaction-driven)

```
Page Transitions:
  - AnimatePresence with fade + slight y-shift

Card Interactions:
  - whileHover: scale, shadow, border glow
  - whileTap: scale down

Accordion (FAQ):
  - AnimatePresence for height animation
  - Rotate icon on open

Form Steps:
  - Slide + fade between steps

Modal:
  - Scale + fade in
  - Backdrop blur

Floating Buttons:
  - Initial delay appear
  - Pulse ring animation (WhatsApp)
```

### 9.3 CSS Animations

```
- Gold shimmer on section dividers
- Cursor glow effect (custom cursor - desktop only)
- Background noise/grain texture overlay
- Skeleton loading pulses
- Button hover states
```

---

## 10. COMPONENT STANDARDS

### 10.1 TypeScript Interfaces (Key Types)

```typescript
// Service
interface Service {
  id: string
  slug: string
  name: string
  category: ServiceCategory
  description: string
  shortDesc: string
  icon: string
  image: string
  subServices: string[]
  featured: boolean
}

type ServiceCategory =
  | 'wedding'
  | 'corporate'
  | 'social'
  | 'entertainment'
  | 'production'

// Testimonial
interface Testimonial {
  id: string
  name: string
  avatar?: string
  role: string
  eventType: ServiceCategory
  rating: number
  quote: string
  date: string
  platform?: 'google' | 'weddingwire' | 'internal'
}

// Portfolio Item
interface PortfolioItem {
  id: string
  title: string
  category: ServiceCategory
  images: string[]
  coverImage: string
  date: string
  location: string
  description?: string
  tags: string[]
}

// Booking Form
interface BookingFormData {
  eventType: ServiceCategory
  eventDate: string
  venue?: string
  guestCount?: string
  city: string
  name: string
  phone: string
  email: string
  message?: string
}
```

### 10.2 Form Validation (Zod)

```typescript
// contactSchema.ts
const contactSchema = z.object({
  name:      z.string().min(2).max(100),
  phone:     z.string().regex(/^[6-9]\d{9}$/),
  email:     z.string().email(),
  eventType: z.enum(['wedding','corporate','social','entertainment','production']),
  eventDate: z.string().optional(),
  message:   z.string().min(10).max(1000),
})

// bookingSchema.ts — validated per step
```

---

## 11. THIRD-PARTY INTEGRATIONS

```
Library              Purpose                    Import Strategy
───────────────────────────────────────────────────────────────
framer-motion        Page/component animations   Static
gsap + ScrollTrigger Scroll animations           Dynamic (client-only)
swiper               Touch carousels             Dynamic
react-hook-form      Form state management       Static
zod                  Schema validation           Static
shadcn/ui            Base UI components          Static (copied)
lucide-react         Icons                       Static (tree-shaken)
next/font            Font optimization           Static
next/image           Image optimization          Static
```

---

## 12. DEPLOYMENT & ENV

```
.env.local
──────────
NEXT_PUBLIC_SITE_URL=https://ssevent.in
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
NEXT_PUBLIC_PHONE_NUMBER=91XXXXXXXXXX
NEXT_PUBLIC_EMAIL=info@ssevent.in
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=...
RESEND_API_KEY=...              ← Contact form emails
NEXT_PUBLIC_GA_ID=...           ← Google Analytics
```

---

## 13. QUALITY CHECKLIST (pre-launch)

```
Design
□ Consistent gold/black theme across all pages
□ No Lorem Ipsum in any component
□ All images have alt text
□ Loading states on all async operations
□ 404 and error pages styled

Performance
□ Lighthouse Score: Performance >90, SEO >95, A11y >90
□ LCP < 2.5s on mobile
□ No layout shift from fonts or images
□ All images WebP/AVIF with correct dimensions

Accessibility
□ WCAG AA color contrast (4.5:1 text, 3:1 large text)
□ Keyboard navigable
□ Focus indicators visible
□ ARIA labels on icon-only buttons
□ Screen reader tested

SEO
□ Unique meta title + description per page
□ OG tags on all pages
□ JSON-LD schema on relevant pages
□ Sitemap submitted
□ Canonical URLs set

Mobile
□ Touch targets ≥44px
□ No horizontal scroll
□ Forms usable without zoom
□ Sticky mobile CTA bar present
```

---

*Blueprint version 1.0 — awaiting approval before development begins*
