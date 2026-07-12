import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { destinations } from '@/lib/tour-data'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'

export const metadata = {
  title: 'Destinations | Himalayan Yatra',
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
        image="/images/manali.png"
        imageAlt="Lush Manali valley with snow-capped Himalayan peaks"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
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
