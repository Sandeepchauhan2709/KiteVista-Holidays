import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ramesh Sharma',
    trip: 'Chardham Yatra, May 2026',
    quote:
      'Everything from hotels to cabs was perfectly arranged. Our driver knew every route and the team checked on us daily. My parents completed the yatra comfortably at 65+.',
  },
  {
    name: 'Priya Nair',
    trip: 'Kedarnath Package, June 2026',
    quote:
      'As a solo woman traveller I was nervous, but the team made me feel completely safe. Verified driver, clean stays, and helicopter tickets arranged without any hassle.',
  },
  {
    name: 'Amit & Sneha Gupta',
    trip: 'Manali Honeymoon, April 2026',
    quote:
      'Beautifully planned honeymoon trip! The cottage they booked had a stunning valley view and the itinerary was relaxed, not rushed. Truly worth every rupee.',
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Testimonials</p>
        <h2 className="mt-3 text-balance font-serif text-3xl font-bold md:text-4xl">
          Stories From Our Travellers
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex flex-col rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border"
          >
            <div className="flex gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-accent text-accent" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-border pt-4">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.trip}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
