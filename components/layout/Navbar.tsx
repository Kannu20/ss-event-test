'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { navItems, ctaNavItem } from '@/lib/constants/navigation'
import { useIsScrolled } from '@/hooks/useScrollTrigger'
import { dropdownVariants, menuItemVariants, overlayVariants, staggerFast } from '@/lib/animations/variants'
import { Button } from '@/components/ui/Button'
import type { NavItem, NavDropdownGroup } from '@/types'

/* ─────────────────────────────────────────────
   Logo
   ───────────────────────────────────────────── */
function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2 group', className)} aria-label="Anchor Shubham Khandelwal  Home">
      <div className="relative">
        <span className="font-display text-2xl font-bold text-white leading-none tracking-tight group-hover:text-gold transition-colors duration-300">
          Anchor
        </span>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold text-gold-gradient leading-none">
          Shubham
        </span>
        <span className="font-accent text-[0.5rem] tracking-[0.25em] text-gray-400 uppercase mt-0.5">
          Khandelwal
        </span>
      </div>
    </Link>
  )
}

/* ─────────────────────────────────────────────
   Mega Dropdown
   ───────────────────────────────────────────── */
function MegaDropdown({ groups, isOpen }: { groups: NavDropdownGroup[]; isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] max-w-[95vw]"
        >
          <div className="glass border border-gold/10 rounded-xl shadow-elevated overflow-hidden">
            {/* Gold top accent line */}
            <div className="h-px w-full bg-gold-gradient" />

            <div className="p-6 grid grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map((group) => (
                <div key={group.href} className="space-y-3">
                  <Link
                    href={group.href}
                    className="flex items-center gap-2 group/head"
                  >
                    <span className="text-base">{group.icon}</span>
                    <span className="font-display text-sm font-semibold text-white group-hover/head:text-gold transition-colors duration-200">
                      {group.label}
                    </span>
                  </Link>
                  <div className="h-px bg-black-light" />
                  <ul className="space-y-1.5">
                    {group.items.slice(0, 5).map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="font-sans text-xs text-gray-400 hover:text-gold transition-colors duration-200 flex items-center gap-1.5 group/item"
                        >
                          <span className="w-1 h-1 rounded-full bg-gold-muted group-hover/item:bg-gold transition-colors duration-200 flex-shrink-0" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                    {group.items.length > 5 && (
                      <li>
                        <Link
                          href={group.href}
                          className="font-accent text-[0.65rem] tracking-wider uppercase text-gold/60 hover:text-gold transition-colors duration-200"
                        >
                          View all →
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer strip */}
            <div className="px-6 py-3 bg-black-light/50 border-t border-black-light flex items-center justify-between">
              <span className="font-accent text-[0.65rem] tracking-widest uppercase text-gray-500">
                All Services
              </span>
              <Link
                href="/services"
                className="font-accent text-[0.65rem] tracking-wider uppercase text-gold hover:text-gold-light transition-colors duration-200 flex items-center gap-1"
              >
                View all services →
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ─────────────────────────────────────────────
   Desktop Nav Item
   ───────────────────────────────────────────── */
function NavItemDesktop({
  item,
  isActive,
}: {
  item: NavItem
  isActive: boolean
}) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    if (item.hasDropdown) setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 100)
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={cn(
          'relative font-sans text-sm font-medium flex items-center gap-1 py-2 px-1',
          'transition-colors duration-200',
          'after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold',
          'after:transition-all after:duration-300 after:ease-luxury',
          isActive
            ? 'text-gold after:w-full'
            : 'text-gray-300 hover:text-white after:w-0 hover:after:w-full'
        )}
      >
        {item.label}
        {item.hasDropdown && (
          <ChevronDown
            className={cn(
              'w-3.5 h-3.5 transition-transform duration-200',
              isOpen ? 'rotate-180' : 'rotate-0'
            )}
          />
        )}
      </Link>

      {item.hasDropdown && item.dropdownGroups && (
        <MegaDropdown groups={item.dropdownGroups} isOpen={isOpen} />
      )}
    </div>
  )
}

/* ─────────────────────────────────────────────
   Mobile Menu
   ───────────────────────────────────────────── */
function MobileMenu({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean
  onClose: () => void
  pathname: string
}) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-black-soft border-l border-black-light flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-black-light">
              <Logo />
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-black-light transition-all duration-200"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 overflow-y-auto px-6 py-6">
              <motion.ul
                variants={staggerFast}
                initial="hidden"
                animate="visible"
                className="space-y-1"
              >
                {navItems.map((item) => (
                  <motion.li key={item.href} variants={menuItemVariants}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() =>
                            setExpandedItem(
                              expandedItem === item.href ? null : item.href
                            )
                          }
                          className={cn(
                            'w-full flex items-center justify-between py-3 px-4 rounded-lg',
                            'font-sans text-base font-medium transition-all duration-200',
                            pathname.startsWith(item.href)
                              ? 'text-gold bg-gold/5'
                              : 'text-gray-200 hover:text-white hover:bg-black-light'
                          )}
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              'w-4 h-4 transition-transform duration-200',
                              expandedItem === item.href ? 'rotate-180' : 'rotate-0'
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {expandedItem === item.href && item.dropdownGroups && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-2 space-y-4 pt-2">
                                {item.dropdownGroups.map((group) => (
                                  <div key={group.href}>
                                    <Link
                                      href={group.href}
                                      onClick={onClose}
                                      className="flex items-center gap-2 py-1.5 font-sans text-sm font-medium text-gold"
                                    >
                                      <span>{group.icon}</span>
                                      {group.label}
                                    </Link>
                                    <ul className="space-y-1 pl-6 mt-1">
                                      {group.items.slice(0, 4).map((sub) => (
                                        <li key={sub.href}>
                                          <Link
                                            href={sub.href}
                                            onClick={onClose}
                                            className="block py-1 font-sans text-xs text-gray-400 hover:text-white transition-colors"
                                          >
                                            {sub.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          'flex items-center py-3 px-4 rounded-lg',
                          'font-sans text-base font-medium transition-all duration-200',
                          pathname === item.href
                            ? 'text-gold bg-gold/5'
                            : 'text-gray-200 hover:text-white hover:bg-black-light'
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* Footer CTA */}
            <div className="px-6 py-6 border-t border-black-light space-y-3">
              <Button
                href={ctaNavItem.href}
                variant="primary"
                className="w-full"
                onClick={onClose}
              >
                {ctaNavItem.label}
              </Button>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 py-2.5 font-sans text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                {process.env.NEXT_PUBLIC_PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

/* ─────────────────────────────────────────────
   Main Navbar
   ───────────────────────────────────────────── */
export function Navbar() {
  const pathname = usePathname()
  const isScrolled = useIsScrolled(60)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40',
          'transition-all duration-500',
          isScrolled
            ? 'bg-black-soft/95 backdrop-blur-xl shadow-elevated border-b border-black-light'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <div className="container mx-auto">
          <div
            className={cn(
              'flex items-center justify-between',
              'transition-all duration-300',
              isScrolled ? 'h-16' : 'h-20'
            )}
          >
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <NavItemDesktop
                  key={item.href}
                  item={item}
                  isActive={
                    item.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(item.href)
                  }
                />
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                className="flex items-center gap-2 font-sans text-sm text-gray-400 hover:text-gold transition-colors duration-200"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">
                  {process.env.NEXT_PUBLIC_PHONE_DISPLAY}
                </span>
              </a>
              <Button href={ctaNavItem.href} variant="primary" size="sm">
                {ctaNavItem.label}
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-300 hover:text-white hover:bg-black-light transition-all duration-200"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        pathname={pathname}
      />
    </>
  )
}
