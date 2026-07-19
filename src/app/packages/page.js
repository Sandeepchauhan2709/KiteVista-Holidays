import Link from 'next/link'
import Image from 'next/image'
import { Clock, MapPin } from 'lucide-react'
import { packages } from '@/lib/tour-data'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'

export const metadata = {
  title: 'Tour Packages | Kitevista Holidays',
  description:
    'Explore our handcrafted Chardham Yatra, Kedarnath, Badrinath, Manali and Rishikesh tour packages with transparent pricing, comfortable hotels and expert hill drivers.',
}

export default function PackagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tour Packages"
        title="Handcrafted Journeys for Every Pilgrim & Explorer"
        description="Choose from our most loved yatra circuits and holiday escapes. Every package includes comfortable stays, a dedicated vehicle with an experienced hill driver and complete on-trip support."
        image="/images/chardham.png"
        imageAlt="Gangotri temple beside a glacial Himalayan river"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.slug} delay={(index % 2) * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-shadow hover:shadow-xl sm:flex-row">
                <Link
                  href={`/packages/${pkg.slug}`}
                  className="relative block aspect-[4/3] shrink-0 overflow-hidden sm:aspect-auto sm:w-2/5"
                >
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
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h2 className="font-serif text-2xl font-semibold">
                    <Link href={`/packages/${pkg.slug}`} className="transition-colors hover:text-primary">
                      {pkg.title}
                    </Link>
                  </h2>
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
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {pkg.overview}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting from</p>
                      <p className="font-serif text-xl font-bold text-primary">
                        {pkg.price}
                        <span className="ml-1 text-xs font-normal text-muted-foreground">/ person</span>
                      </p>
                    </div>
                    <Link
                      href={`/packages/${pkg.slug}`}
                      className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      View Details
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
