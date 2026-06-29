import Link from 'next/link'
import { GradientText } from '@/components/ui/GradientText'
import { Button } from '@/components/ui/Button'
import { GoldLine } from '@/components/ui/GoldLine'

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <p className="font-accent text-xs tracking-widest text-gold uppercase mb-6">
          404 — Page Not Found
        </p>

        <h1 className="font-display text-[8rem] leading-none font-bold mb-0">
          <GradientText>404</GradientText>
        </h1>

        <GoldLine className="mx-auto my-6" />

        <h2 className="font-display text-2xl text-white mb-4">
          This page doesn&apos;t exist
        </h2>

        <p className="font-sans text-gray-400 mb-10">
          The page you&apos;re looking for may have moved, been deleted, or never existed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" href="/">
            Go Home
          </Button>
          <Button variant="ghost" href="/contact">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
