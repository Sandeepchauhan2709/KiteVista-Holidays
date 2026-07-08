import Link from 'next/link'
import { Mail, MapPin, Mountain, Phone } from 'lucide-react'

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function YoutubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Tour Packages', href: '#packages' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Cab Services', href: '#cabs' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const popularTours = [
  'Chardham Yatra Package',
  'Kedarnath Tour Package',
  'Do Dham Yatra',
  'Badrinath Tour Package',
  'Manali Volvo Package',
  'Kedarnath Helicopter Booking',
]

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/15">
                <Mountain className="size-5" aria-hidden="true" />
              </span>
              <span className="font-serif text-xl font-bold">KiteVista Holidays</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
              Your trusted partner for Chardham Yatra, Kedarnath, Badrinath, Manali and Himalayan
              adventures. Comfortable stays, expert guides and reliable cabs — all in one place.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <InstagramIcon className="size-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <FacebookIcon className="size-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <YoutubeIcon className="size-4" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="font-serif text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Popular tours */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Popular Tours</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {popularTours.map((tour) => (
                <li key={tour}>
                  <Link
                    href="#packages"
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    {tour}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold">Get in Touch</h3>
            <ul className="mt-4 flex flex-col gap-4 text-sm text-primary-foreground/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  Near ISBT, Haridwar Road,
                  <br />
                  Dehradun, Uttarakhand 248001
                </span>
              </li>
              <li>
                <a href="tel:+918630731034" className="flex items-center gap-3 transition-colors hover:text-accent">
                  <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  +91 86307 31034
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@himalayanyatra.com"
                  className="flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  info@kitevista.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 md:flex-row">
          <p>&copy; {new Date().getFullYear()} KiteVista Holidays. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-accent">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}








// import Link from 'next/link';
// import { Mountain, Phone, Mail, MapPin } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-ink text-snow mt-24">
//       <div className="max-w-6xl mx-auto px-5 py-14 grid gap-10 md:grid-cols-4">
//         <div>
//           <div className="flex items-center gap-2 font-display text-lg mb-3">
//             <Mountain size={20} className="text-marigold" />
//             Kitevista Holidays
//           </div>
//           <p className="text-stone text-sm leading-relaxed">
//             Guided pilgrimage and hill-station journeys across the Himalayas,
//             planned down to the last night's stay.
//           </p>
//         </div>

//         <div>
//           <h4 className="font-display text-marigold mb-3">Packages</h4>
//           <ul className="space-y-2 text-sm text-stone">
//             <li><Link href="/packages/kedarnath-yatra" className="hover:text-snow">Kedarnath Yatra</Link></li>
//             <li><Link href="/packages/char-dham-yatra" className="hover:text-snow">Char Dham Yatra</Link></li>
//             <li><Link href="/packages/badrinath-yatra" className="hover:text-snow">Badrinath Yatra</Link></li>
//             <li><Link href="/packages/mussoorie-getaway" className="hover:text-snow">Mussoorie Getaway</Link></li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-display text-marigold mb-3">Company</h4>
//           <ul className="space-y-2 text-sm text-stone">
//             <li><Link href="/about" className="hover:text-snow">About Us</Link></li>
//             <li><Link href="/contact" className="hover:text-snow">Contact</Link></li>
//             <li><Link href="/packages" className="hover:text-snow">All Packages</Link></li>
//           </ul>
//         </div>

//         <div className="text-sm text-stone space-y-3">
//           <p className="flex items-center gap-2"><Phone size={16} className="text-marigold" /> +91 98765 43210</p>
//           <p className="flex items-center gap-2"><Mail size={16} className="text-marigold" /> hello@kitevistaholidays.com</p>
//           <p className="flex items-center gap-2"><MapPin size={16} className="text-marigold" /> Haridwar, Uttarakhand, India</p>
//         </div>
//       </div>

//       <div className="border-t border-white/10 text-center text-xs text-stone py-5">
//         © {new Date().getFullYear()} Kitevista Holidays. All rights reserved.
//       </div>
//     </footer>
//   );
// }