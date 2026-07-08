'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, Mountain, Phone, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Tour Packages', href: '#packages' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Cab Services', href: '#cabs' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || isOpen
          ? 'bg-background/95 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-6"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`flex size-9 items-center justify-center rounded-full ${
              scrolled || isOpen ? 'bg-primary text-primary-foreground' : 'bg-primary-foreground/15 text-primary-foreground'
            }`}
          >
            <Mountain className="size-5" aria-hidden="true" />
          </span>
          <span
            className={`font-serif text-lg font-bold leading-tight md:text-xl ${
              scrolled || isOpen ? 'text-foreground' : 'text-primary-foreground'
            }`}
          >
            KiteVista Holidays
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+918630731034"
            className={`flex items-center gap-2 text-sm font-semibold transition-colors hover:text-accent ${
              scrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
          >
            <Phone className="size-4" aria-hidden="true" />
            +91 86307 31034
          </a>
          <Link
            href="#packages"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Book a Tour
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`flex size-10 items-center justify-center rounded-full lg:hidden ${
            scrolled || isOpen ? 'text-foreground' : 'text-primary-foreground'
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
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 px-3">
            <a href="tel:+918630731034" className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Phone className="size-4" aria-hidden="true" />
              +91 86307 31034
            </a>
            <Link
              href="#packages"
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












// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import { Menu, X, Mountain } from 'lucide-react';

// const links = [
//   { href: '/', label: 'Home' },
//   { href: '/packages', label: 'Packages' },
//   { href: '/about', label: 'About' },
//   { href: '/contact', label: 'Contact' },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-ink text-snow">
//       <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
//         <Link href="/" className="flex items-center gap-2 font-display text-xl tracking-wide">
//           <Mountain size={22} className="text-marigold" />
//           Kitevista Holidays
//         </Link>

//         <nav className="hidden md:flex items-center gap-8 font-body text-sm">
//           {links.map((l) => (
//             <Link key={l.href} href={l.href} className="hover:text-marigold transition-colors">
//               {l.label}
//             </Link>
//           ))}
//           <Link
//             href="/contact"
//             className="bg-marigold text-ink px-4 py-2 rounded-full font-medium hover:brightness-95 transition"
//           >
//             Plan My Yatra
//           </Link>
//         </nav>

//         <button
//           className="md:hidden"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle menu"
//         >
//           {open ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {open && (
//         <nav className="md:hidden px-5 pb-5 flex flex-col gap-4 font-body text-sm bg-ink">
//           {links.map((l) => (
//             <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-marigold">
//               {l.label}
//             </Link>
//           ))}
//           <Link
//             href="/contact"
//             onClick={() => setOpen(false)}
//             className="bg-marigold text-ink px-4 py-2 rounded-full font-medium text-center"
//           >
//             Plan My Yatra
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }