import { CalendarCheck, HeartHandshake, Landmark, PhoneCall } from 'lucide-react'

const reasons = [
  {
    icon: Landmark,
    title: 'Local Himalayan Experts',
    description:
      'Based in Uttarakhand with a decade of on-ground experience across every yatra route, we plan journeys that actually work in the mountains.',
  },
  {
    icon: CalendarCheck,
    title: 'Flexible Bookings',
    description:
      'Plans change — reschedule or modify your trip with ease. No last-minute surprises, no hidden fees.',
  },
  {
    icon: HeartHandshake,
    title: 'Women-Friendly Travel',
    description:
      'Verified drivers, trusted stays and constant support so every traveller feels safe venturing into the mountains with us.',
  },
  {
    icon: PhoneCall,
    title: '24/7 On-Trip Support',
    description:
      'A dedicated trip coordinator stays reachable throughout your journey — from the first pickup to the final drop.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why Choose Us</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold md:text-4xl">
            Travel Made Simple, Safe and Memorable
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/75">
            We handle the details — permits, hotels, cabs and guides — so you can focus on the
            journey and the darshan.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-2xl bg-primary-foreground/5 p-6 ring-1 ring-primary-foreground/10">
              <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <reason.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
