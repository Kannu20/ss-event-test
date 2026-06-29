import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans, Josefin_Sans } from 'next/font/google'
import { Providers } from '@/components/providers/Providers'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingActions } from '@/components/layout/FloatingActions'
import { ScrollProgress } from '@/components/common/ScrollProgress'
import { CustomCursor } from '@/components/common/CustomCursor'
import { PageWrapper } from '@/components/layout/PageWrapper'
import './globals.css'

/* ─── Fonts ─────────────────────────────────── */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-josefin',
  display: 'swap',
})

/* ─── Root Metadata ─────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'SS Event — Premium Event Management Company',
    template: '%s | SS Event',
  },
  description:
    'SS Event is a full-service premium event management company specializing in weddings, corporate events, social celebrations, entertainment services, and production setup.',
  keywords: [
    'event management',
    'wedding planner',
    'corporate events',
    'destination wedding',
    'event company',
    'SS Event',
    'luxury events',
    'wedding decoration',
    'sangeet',
    'mehendi',
    'haldi',
  ],
  authors: [{ name: 'SS Event' }],
  creator: 'SS Event',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'SS Event',
    title: 'SS Event — Premium Event Management Company',
    description:
      'Full-service premium event management — weddings, corporate events, social celebrations, entertainment & production.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SS Event — Premium Event Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SS Event — Premium Event Management Company',
    description: 'Full-service premium event management — where moments become memories.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A0A0A',
}

/* ─── Root Layout ───────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${josefin.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <Providers>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <PageWrapper>
            <main id="main-content">{children}</main>
          </PageWrapper>
          <Footer />
          <FloatingActions />
        </Providers>
      </body>
    </html>
  )
}
