import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check, Clock, MapPin, Phone, Star, X } from 'lucide-react'
import { getPackageBySlug, packages, siteInfo } from '@/lib/tour-data'
import { EnquiryForm } from '@/components/enquiry-form'
import { Reveal } from '@/components/reveal'

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const pkg = getPackageBySlug(slug)
  if (!pkg) return { title: 'Package Not Found' }
  return {
    title: `${pkg.title} | Kitevista Holidays`,
    description: pkg.overview.slice(0, 155),
  }
}

export default async function PackageDetailPage({ params }) {
  const { slug } = await params
  const pkg = getPackageBySlug(slug)

  if (!pkg) {
    notFound()
  }

  return (
    <>
      {/* Hero banner */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-16 md:pt-20">
        <Image src={pkg.image || "/placeholder.svg"} alt={pkg.alt} fill priority className="object-cover" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-primary/10"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 md:px-6 md:pb-14">
          <Link
            href="/packages"
            className="animate-hero-rise mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/85 transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All Packages
          </Link>
          {pkg.tag && (
            <p className="animate-hero-rise" style={{ animationDelay: '80ms' }}>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {pkg.tag}
              </span>
            </p>
          )}
          <h1
            className="animate-hero-rise mt-3 max-w-3xl text-balance font-serif text-4xl font-bold text-primary-foreground md:text-5xl"
            style={{ animationDelay: '160ms' }}
          >
            {pkg.title}
          </h1>
          <div
            className="animate-hero-rise mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-foreground/90"
            style={{ animationDelay: '260ms' }}
          >
            <p className="flex items-center gap-2">
              <Clock className="size-4 text-accent" aria-hidden="true" />
              {pkg.duration}
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="size-4 text-accent" aria-hidden="true" />
              {pkg.location}
            </p>
            <p className="flex items-center gap-2">
              <Star className="size-4 fill-accent text-accent" aria-hidden="true" />
              4.9 (200+ travellers)
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-14">
          {/* Main content */}
          <div className="min-w-0">
            <Reveal>
              <section aria-labelledby="overview-heading">
                <h2 id="overview-heading" className="font-serif text-2xl font-bold md:text-3xl">
                  Tour Overview
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{pkg.overview}</p>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="highlights-heading" className="mt-10">
                <h2 id="highlights-heading" className="font-serif text-2xl font-bold md:text-3xl">
                  Tour Highlights
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {pkg.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 rounded-xl bg-secondary p-4">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      <span className="text-sm leading-relaxed text-secondary-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="itinerary-heading" className="mt-10">
                <h2 id="itinerary-heading" className="font-serif text-2xl font-bold md:text-3xl">
                  Day-wise Itinerary
                </h2>
                <ol className="mt-6 flex flex-col">
                  {pkg.itinerary.map((item, index) => (
                    <li key={item.day} className="relative flex gap-5 pb-8 last:pb-0">
                      {index < pkg.itinerary.length - 1 && (
                        <span
                          className="absolute left-5 top-11 h-[calc(100%-2.5rem)] w-px bg-border"
                          aria-hidden="true"
                        />
                      )}
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-sm font-bold text-primary-foreground">
                        {item.day}
                      </span>
                      <div className="pt-1.5">
                        <h3 className="font-semibold">
                          Day {item.day}: {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>

            <Reveal>
              <section aria-labelledby="inclusions-heading" className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-secondary p-6">
                  <h2 id="inclusions-heading" className="font-serif text-xl font-bold text-secondary-foreground">
                    What&apos;s Included
                  </h2>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-secondary-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-card p-6 ring-1 ring-border">
                  <h2 className="font-serif text-xl font-bold">What&apos;s Not Included</h2>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <X className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </Reveal>
          </div>

          {/* Booking sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="rounded-2xl bg-card p-6 shadow-lg ring-1 ring-border md:p-7">
                <div className="flex items-end justify-between border-b border-border pb-5">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="font-serif text-3xl font-bold text-primary">{pkg.price}</p>
                    <p className="text-xs text-muted-foreground">per person</p>
                  </div>
                  <p className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground">
                    {pkg.duration}
                  </p>
                </div>
                <h2 className="mt-5 font-serif text-xl font-bold">Book This Tour</h2>
                <p className="mb-5 mt-1 text-sm text-muted-foreground">
                  Fill in your details and our travel expert will call you back shortly.
                </p>
                <EnquiryForm subject={pkg.title} compact />
                <div className="mt-6 border-t border-border pt-5 text-center">
                  <p className="text-sm text-muted-foreground">Prefer to talk right away?</p>
                  <a
                    href={siteInfo.phoneHref}
                    className="mt-2 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-accent"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    {siteInfo.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>

      {/* Related packages */}
      <section aria-labelledby="related-heading" className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
          <h2 id="related-heading" className="font-serif text-2xl font-bold text-secondary-foreground md:text-3xl">
            You May Also Like
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages
              .filter((p) => p.slug !== pkg.slug)
              .slice(0, 3)
              .map((related, index) => (
                <Reveal key={related.slug} delay={index * 100}>
                  <Link
                    href={`/packages/${related.slug}`}
                    className="group block overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-shadow hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between p-5">
                      <div>
                        <h3 className="font-serif text-lg font-semibold">{related.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{related.duration}</p>
                      </div>
                      <p className="font-serif text-lg font-bold text-primary">{related.price}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
