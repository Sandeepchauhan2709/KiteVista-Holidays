import Image from 'next/image'
import { Car, Check, Clock, MapPin, ShieldCheck, UserCheck, Wallet } from 'lucide-react'
import { cabFleet, cabRoutes } from '@/lib/tour-data'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { EnquiryForm } from '@/components/enquiry-form'

export const metadata = {
  title: 'Cab Services | Himalayan Yatra',
  description:
    'Reliable taxi and cab services across Uttarakhand and Himachal — sedans, SUVs and tempo travellers with experienced hill drivers, transparent fares and 24/7 support.',
}

const cabFeatures = [
  {
    icon: Car,
    title: 'Well-Maintained Fleet',
    description: 'Sedans, SUVs and Tempo Travellers — clean, comfortable and mountain-ready.',
  },
  {
    icon: UserCheck,
    title: 'Expert Hill Drivers',
    description: 'Experienced, verified drivers who know every turn of the Himalayan roads.',
  },
  {
    icon: Wallet,
    title: 'Transparent Fares',
    description: 'Fixed pricing with no hidden charges. What you see is what you pay.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & On Time',
    description: 'GPS-tracked vehicles, 24/7 support and punctual pickups for every trip.',
  },
]

export default function CabServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cab Services"
        title="Reliable Cabs for Every Route in the Hills"
        description="From airport pickups to complete yatra circuits — book a one-way transfer, round trip or multi-day tour cab with an experienced hill driver."
        image="/images/cab-service.png"
        imageAlt="White SUV taxi on a scenic Himalayan mountain road"
      />

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cabFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 100}>
              <div className="flex h-full flex-col gap-3 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border">
                <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
                  <feature.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="font-semibold">{feature.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Fleet */}
      <section aria-labelledby="fleet-heading" className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Fleet</p>
              <h2
                id="fleet-heading"
                className="mt-3 text-balance font-serif text-3xl font-bold text-secondary-foreground md:text-4xl"
              >
                Choose the Right Vehicle for Your Journey
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cabFleet.map((cab, index) => (
              <Reveal key={cab.name} delay={index * 100}>
                <article className="flex h-full flex-col rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border md:p-7">
                  <p className="text-sm font-semibold uppercase tracking-wide text-accent">{cab.seats}</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold">{cab.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Ideal for {cab.idealFor}</p>
                  <p className="mt-4 font-serif text-3xl font-bold text-primary">
                    {cab.rate}
                    <span className="ml-1 text-sm font-normal text-muted-foreground">approx.</span>
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5 border-t border-border pt-5">
                    {cab.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm">
                        <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Routes + booking form */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Popular Routes</p>
              <h2 className="mt-3 text-balance font-serif text-3xl font-bold md:text-4xl">
                Frequently Booked Cab Routes
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Distances and durations are approximate and can vary with weather and road conditions
                in the hills.
              </p>
              <ul className="mt-8 flex flex-col gap-3">
                {cabRoutes.map((item) => (
                  <li
                    key={item.route}
                    className="flex flex-col gap-2 rounded-xl bg-card p-4 ring-1 ring-border sm:flex-row sm:items-center sm:justify-between"
                  >
                    <p className="flex items-center gap-2.5 font-medium">
                      <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
                      {item.route}
                    </p>
                    <p className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{item.distance}</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" aria-hidden="true" />
                        {item.duration}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src="/images/cab-service.png"
                  alt="White SUV taxi driving through the Himalayan mountains"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl bg-card p-6 shadow-lg ring-1 ring-border md:p-8 lg:sticky lg:top-28">
              <h2 className="font-serif text-2xl font-bold">Book a Cab</h2>
              <p className="mb-6 mt-2 text-sm leading-relaxed text-muted-foreground">
                Tell us your route and travel date — we&apos;ll call you back with the best fare and
                vehicle options.
              </p>
              <EnquiryForm subject="Cab Service Booking" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
