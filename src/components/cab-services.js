import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Car, ShieldCheck, UserCheck, Wallet } from 'lucide-react'

import img from '@/public/images/Cab-ki-photo.jpeg'

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

const popularRoutes = [
  'Dehradun → Kedarnath',
  'Haridwar → Badrinath',
  'Delhi → Manali',
  'Dehradun → Mussoorie',
  'Rishikesh → Chopta',
  'Delhi → Haridwar',
]

export function CabServices() {
  return (
    <section id="cabs" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl lg:order-1">
          <Image
            src={img}
            alt="White SUV taxi on a scenic Himalayan mountain road"
            fill
            className="object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Cab Services</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold md:text-4xl">
            Reliable Cabs for Every Route in the Hills
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From airport pickups to complete yatra circuits, our cab service keeps your journey
            smooth. Book a one-way transfer, round trip or multi-day tour cab in minutes.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {cabFeatures.map((feature) => (
              <div key={feature.title} className="flex gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <feature.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Popular Routes
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {popularRoutes.map((route) => (
                <li key={route}>
                  <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                    {route}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/cab-services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a Cab Now
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
