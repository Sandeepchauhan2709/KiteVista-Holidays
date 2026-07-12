'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Mountain, Phone, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Tour Packages', href: '/packages' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Cab Services', href: '/cab-services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Only the home page has a transparent navbar over the hero
  const isHome = pathname === '/'
  const solid = scrolled || isOpen || !isHome

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-background/95 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`flex size-9 items-center justify-center rounded-full ${
              solid ? 'bg-primary text-primary-foreground' : 'bg-primary-foreground/15 text-primary-foreground'
            }`}
          >
            <Mountain className="size-5" aria-hidden="true" />
          </span>
          <span
            className={`font-serif text-lg font-bold leading-tight md:text-xl ${
              solid ? 'text-foreground' : 'text-primary-foreground'
            }`}
          >
            Himalayan Yatra
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative text-sm font-medium transition-colors hover:text-accent ${
                    solid ? 'text-foreground' : 'text-primary-foreground'
                  } ${isActive ? 'text-accent' : ''}`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-accent"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+918630731034"
            className={`flex items-center gap-2 text-sm font-semibold transition-colors hover:text-accent ${
              solid ? 'text-foreground' : 'text-primary-foreground'
            }`}
          >
            <Phone className="size-4" aria-hidden="true" />
            +91 86307 31034
          </a>
          <Link
            href="/packages"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Book a Tour
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`flex size-10 items-center justify-center rounded-full lg:hidden ${
            solid ? 'text-foreground' : 'text-primary-foreground'
          }`}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="border-t border-border bg-background px-4 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-secondary ${
                      isActive ? 'bg-secondary text-accent' : 'text-foreground'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="mt-4 flex flex-col gap-3 px-3">
            <a href="tel:+918630731034" className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Phone className="size-4" aria-hidden="true" />
              +91 86307 31034
            </a>
            <Link
              href="/packages"
              className="rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
              onClick={() => setIsOpen(false)}
            >
              Book a Tour
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
