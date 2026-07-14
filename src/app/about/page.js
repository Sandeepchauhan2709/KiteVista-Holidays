import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarCheck, HeartHandshake, Landmark, PhoneCall } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaBanner } from '@/components/cta-banner'

import img from '@/public/images/rishikesh.png'

export const metadata = {
  title: 'About Us | Himalayan Yatra',
  description:
    'Himalayan Yatra is a trusted tour and travel agency from Dehradun specializing in Chardham Yatra, Kedarnath, Badrinath, Manali tours and reliable cab services across the Himalayas.',
}

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '15,000+', label: 'Happy Travellers' },
  { value: '50+', label: 'Tour Packages' },
  { value: '4.9/5', label: 'Average Rating' },
]

const values = [
  {
    icon: Landmark,
    title: 'Rooted in the Himalayas',
    description:
      'We are a local team from Dehradun. Every route, every halt and every season of the hills is second nature to us — and it shows in how smoothly your yatra runs.',
  },
  {
    icon: HeartHandshake,
    title: 'Honest, Transparent Pricing',
    description:
      'The price we quote is the price you pay. No hidden charges, no surprise add-ons — just clear inclusions written down before you book.',
  },
  {
    icon: CalendarCheck,
    title: 'Everything Arranged',
    description:
      'Hotels, vehicles, drivers, permits, trek assistance and helicopter bookings — one call and our team handles the entire plan end to end.',
  },
  {
    icon: PhoneCall,
    title: 'With You, 24/7',
    description:
      'Mountain journeys can be unpredictable. Our support team stays reachable around the clock throughout your trip, from pickup to drop.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A Local Team That Knows Every Turn of the Hills"
        description="KiteVista is a Dehradun-based tour and travel company helping pilgrims and explorers experience the Himalayas safely, comfortably and affordably."
        image="/images/hero-kedarnath.png"
        imageAlt="Kedarnath temple against dramatic Himalayan peaks"
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={img}
                alt="Gangotri temple beside a glacial Himalayan river"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Story</p>
              <h2 className="mt-3 text-balance font-serif text-3xl font-bold md:text-4xl">
                Born in the Foothills, Built on Trust
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                What began as a small family cab service in Dehradun has grown into a full-fledged
                travel company trusted by thousands of pilgrims every season. We started with one
                vehicle and one belief — that a yatra should be about devotion, not logistics.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Today we organise complete Chardham circuits, Kedarnath and Badrinath yatras, Manali
                holidays and weekend getaways — along with a reliable cab fleet that covers every
                major route in Uttarakhand and Himachal. Our drivers, guides and trip managers are
                all locals who treat your family like their own.
              </p>
              <Link
                href="/packages"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore Our Packages
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Company statistics" className="bg-primary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4 md:px-6 md:py-16">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-primary-foreground/80">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section aria-labelledby="values-heading" className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why Travellers Trust Us</p>
            <h2 id="values-heading" className="mt-3 text-balance font-serif text-3xl font-bold md:text-4xl">
              What Makes Us Different
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={(index % 2) * 100}>
              <div className="flex h-full gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border md:p-7">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <value.icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
