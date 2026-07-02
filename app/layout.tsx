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
    default: "Artist Shubham Khandelwal — Wedding Anchor & Event Host in Jaipur",
    template: '%s | Artist Shubham Khandelwal',
  },
  description:
    'Artist Shubham Khandelwal is an award-winning wedding anchor, live singer and event host based in Jaipur, Rajasthan. Book him for weddings, sangeets, corporate events, award nights and celebrity celebrations.',
  keywords: [
    'wedding anchor Jaipur',
    'wedding anchor Rajasthan',
    'anchor for wedding',
    'sangeet anchor',
    'corporate emcee Jaipur',
    'event host Jaipur',
    'master of ceremonies',
    'live singer Jaipur',
    'Artist Shubham Khandelwal',
    'Shubham Khandelwal anchor',
    'award night host',
    'celebrity event host',
  ],
  authors: [{ name: 'Shubham Khandelwal' }],
  creator: 'Shubham Khandelwal',
  openGraph: {
    type: 'profile',
    locale: 'en_IN',
    url: '/',
    siteName: 'Artist Shubham Khandelwal',
    title: "Artist Shubham Khandelwal — Wedding Anchor & Event Host in Jaipur",
    description:
      "The voice behind Rajasthan's most memorable celebrations. Award-winning wedding anchor, live singer and master of ceremonies.",
    images: [
      {
        url: '/images/main.jpeg',
        width: 1200,
        height: 630,
        alt: 'Artist Shubham Khandelwal — Wedding Anchor & Event Host',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Artist Shubham Khandelwal — Wedding Anchor & Event Host",
    description: "The voice behind Rajasthan's most memorable celebrations.",
    images: ['/images/main.jpeg'],
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
