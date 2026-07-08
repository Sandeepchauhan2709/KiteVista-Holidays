import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import img from '@/public/images/rishikesh.png'

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24">
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={img}
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-14 text-center md:py-20">
          <h2 className="max-w-2xl text-balance font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Plan Your Himalayan Journey?
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
            Talk to our travel experts today and get a customised itinerary for your yatra or
            holiday — with the best rates guaranteed.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#packages"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Start Planning
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a
              href="tel:+918630731034"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-7 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
            >
              <Phone className="size-4" aria-hidden="true" />
              +91 86307 31034
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
