import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import { packages } from '@/lib/tour-data'
import { Reveal } from '@/components/reveal'

export function TourPackages() {
  return (
    <section id="packages" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Tour Packages</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold md:text-4xl">
              Handcrafted Journeys for Every Pilgrim & Explorer
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Transparent pricing, comfortable hotels and experienced drivers — no hidden charges,
              just journeys planned the way you imagined.
            </p>
          </div>
          <Link
            href="/packages"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            View all packages
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <Reveal key={pkg.slug} delay={(index % 3) * 100}>
            <article className="group h-full overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-shadow hover:shadow-lg">
              <Link href={`/packages/${pkg.slug}`} className="relative block aspect-[4/3] overflow-hidden">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {pkg.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {pkg.tag}
                  </span>
                )}
              </Link>
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold">
                  <Link href={`/packages/${pkg.slug}`} className="transition-colors hover:text-primary">
                    {pkg.title}
                  </Link>
                </h3>
                <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Clock className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {pkg.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {pkg.location}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="font-serif text-xl font-bold text-primary">
                      {pkg.price}
                      <span className="ml-1 text-xs font-normal text-muted-foreground">/ person</span>
                    </p>
                  </div>
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}


