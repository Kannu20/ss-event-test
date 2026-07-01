# Anchor Shubham Khandelwal  — Phase 1 Setup Instructions

## Quick Start

```bash
# 1. Navigate to project folder
cd "ss-event"

# 2. Install all dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## What's Built (Phase 1)

- ✅ Next.js 15 App Router + TypeScript
- ✅ Tailwind CSS with complete luxury design system
- ✅ Cormorant Garamond + DM Sans + Josefin Sans fonts
- ✅ All CSS custom properties (colors, shadows, easing)
- ✅ Navbar (transparent → solid, mega-dropdown, mobile overlay)
- ✅ Footer (multi-column, CTA strip, social links)
- ✅ Floating WhatsApp + Call buttons
- ✅ Gold scroll progress bar
- ✅ Page transition system (Framer Motion)
- ✅ All UI atoms: Button, Badge, Card, GoldLine, SectionLabel, GradientText, ImageReveal, Spinner, Modal, Skeleton
- ✅ Common components: AnimatedCounter, PageHero, Breadcrumb, SectionWrapper, LazyImage, VideoPlayer, LightboxGallery, FilterTabs, ScrollProgress
- ✅ All hooks: useScrollTrigger, useCounter, useMediaQuery, useIntersectionObserver
- ✅ Full data layer: services, testimonials, stats, FAQs, portfolio
- ✅ SEO foundation: metadata helpers, JSON-LD schema
- ✅ Zod validation schemas for contact + booking forms
- ✅ All page routes created (placeholders)

## Before Going Live

Update `.env.local` with real values:
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — your WhatsApp number (no spaces, with country code)
- `NEXT_PUBLIC_PHONE_NUMBER` — phone number for calls
- `NEXT_PUBLIC_PHONE_DISPLAY` — formatted display number
- `NEXT_PUBLIC_EMAIL` — contact email
- `NEXT_PUBLIC_SITE_URL` — production domain

## Folder Structure

```
ss-event/
├── app/              ← Next.js pages + API routes
├── components/
│   ├── layout/       ← Navbar, Footer, FloatingActions
│   ├── ui/           ← Design system atoms
│   ├── common/       ← Shared complex components
│   └── providers/    ← Context providers
├── hooks/            ← Custom React hooks
├── lib/
│   ├── animations/   ← Framer Motion variants + GSAP config
│   ├── constants/    ← All data (services, testimonials, etc.)
│   ├── seo/          ← Metadata + Schema.org helpers
│   ├── utils/        ← Utility functions
│   └── validations/  ← Zod schemas
└── types/            ← TypeScript interfaces
```

## Next Steps (Phase 2)

Phase 2 will build all page sections:
- Homepage (hero, services, gallery preview, testimonials, stats, FAQ, CTA)
- About page
- All service pages (wedding, corporate, social, entertainment, production)
- Portfolio with filtering
- Gallery with lightbox
- Videos showcase
- Testimonials with carousel
- FAQ accordion
- Contact form
- Multi-step booking form
