import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { destinations } from '@/lib/tour-data'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'

import img from '@/public/images/rishikesh.png'
import img2 from '@/public/images/wedding-destination.jpeg'

export const metadata = {
  title: 'Destinations | Kitevista Holidays',
  description:
    'Discover the most loved Himalayan destinations — Kedarnath, Badrinath, Manali, Rishikesh, Haridwar and the complete Chardham circuit.',
}

export default function DestinationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Destinations"
        title="Explore the Most Loved Himalayan Destinations"
        description="From sacred shrines above the clouds to adventure-filled river valleys — discover the places our travellers return to again and again."
        image={img}
        imageAlt="Lush Manali valley with snow-capped Himalayan peaks"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        {/* Premium Wedding Destination Hero */}
        <Reveal>
          <article className="mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-2xl">
            <div className="grid gap-0 md:grid-cols-2">
              {/* Image Side */}
              <div className="relative aspect-[4/5] md:aspect-auto">
                <Image
                  src={img2}
                  alt="Plan Your Dream Wedding at Triyuginarayan"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content Side */}
              <div className="flex flex-col justify-center gap-6 p-6 text-primary-foreground md:p-8 lg:p-10">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase text-accent">
                    Weddings
                  </span>
                  <h3 className="font-serif text-3xl font-bold leading-tight md:text-4xl">
                    Plan Your Dream Wedding at Triyuginarayan
                  </h3>
                </div>

                <p className="text-lg italic text-primary-foreground/90">
                  Where Lord Shiva & Parvati Were Married — The Divine Place Where the Eternal Love Story Began
                </p>

                <ul className="space-y-3">
                  {[
                    'Wedding Planning',
                    'Temple Ceremony',
                    'Decoration & Setup',
                    'Photography & Videography',
                  ].map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <span
                        className="flex size-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="mt-2 inline-flex w-fit rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:scale-105 active:scale-95"
                >
                  Book Your Divine Wedding
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, index) => (
            <Reveal key={dest.name} delay={(index % 3) * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-shadow hover:shadow-xl">
                <Link
                  href={`/packages/${dest.packageSlug}`}
                  className="relative block aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={dest.image || "/placeholder.svg"}
                    alt={dest.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary-foreground/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                    {dest.tours}
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h2 className="font-serif text-2xl font-semibold">
                    <Link
                      href={`/packages/${dest.packageSlug}`}
                      className="transition-colors hover:text-primary"
                    >
                      {dest.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dest.description}</p>
                  <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    Best time: {dest.bestTime}
                  </p>
                  <div className="mt-auto pt-5">
                    <Link
                      href={`/packages/${dest.packageSlug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                    >
                      View Packages
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
