import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import animate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Black palette
        black: {
          DEFAULT: '#0A0A0A',
          soft: '#111111',
          mid: '#1A1A1A',
          light: '#242424',
        },
        // Gold spectrum
        gold: {
          light: '#F5D98B',
          DEFAULT: '#D4AF37',
          mid: '#B8960C',
          dark: '#8B7000',
          muted: '#6B5B2E',
        },
        // Neutral
        cream: '#F8F4ED',
        // Semantic
        success: '#2D7A4F',
        // Shadcn compatibility
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', ...fontFamily.serif],
        sans: ['var(--font-dm-sans)', ...fontFamily.sans],
        accent: ['var(--font-josefin)', ...fontFamily.sans],
      },
      fontSize: {
        hero: ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        display: ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '4.5xl': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '3.5xl': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.08em',
        wider: '0.16em',
        widest: '0.25em',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'gold-sm': '0 0 12px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 0 24px rgba(212, 175, 55, 0.25)',
        'gold-lg': '0 0 48px rgba(212, 175, 55, 0.35)',
        card: '0 4px 32px rgba(0, 0, 0, 0.4)',
        elevated: '0 8px 48px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5D98B 0%, #D4AF37 50%, #B8960C 100%)',
        'gold-gradient-v': 'linear-gradient(180deg, #F5D98B 0%, #D4AF37 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.8) 100%)',
        'card-overlay': 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(212, 175, 55, 0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'line-reveal': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s var(--ease-luxury) forwards',
        'fade-in': 'fade-in 0.4s ease forwards',
        shimmer: 'shimmer 2s linear infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'line-reveal': 'line-reveal 0.8s var(--ease-luxury) forwards',
        float: 'float 3s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        gold: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      screens: {
        xs: '375px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [animate],
}

export default config
