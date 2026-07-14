'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronDown, Star } from 'lucide-react'

import img from '@/public/images/Kedarnath.jpeg'
import img2 from '@/public/images/Badrinath.jpeg'
import img3 from '@/public/images/Chardham yatra.jpeg'
import img4 from '@/public/images/Do Dham(kedarnath-Badrinath).jpeg'
import img5 from '@/public/images/Rishikesh tour.jpeg'

const SLIDE_DURATION = 7000

const slides = [
  {
    id:1,
    // image: '/images/hero-kedarnath.png',
    image: img,
    alt: 'Kedarnath temple with snow-capped Himalayan peaks at golden hour',
    destination: 'Kedarnath',
    tagline: 'Walk the sacred path to the abode of Lord Shiva',
  },
  {
    id:2,
    // image: '/images/badrinath.png',
    image: img2,
    alt: 'Badrinath temple with Neelkanth peak behind it',
    destination: 'Badrinath',
    tagline: 'Seek blessings in the valley of the gods',
  },
  {
    id:3,
    // image: '/images/chardham.png',
    image: img3,
    alt: 'Gangotri temple beside a glacial river in the Himalayas',
    destination: 'Chardham Yatra',
    tagline: 'One journey, four divine dhams of Uttarakhand',
  },
  {
    id:4,
    // image: '/images/manali.png',
    image: img4,
    alt: 'The Do Dham Yatra covers the two most revered shrines of Uttarakhand — Kedarnath and Badrinath — in one seamless 6-day circuit from Haridwar. Ideal for pilgrims with limited time who want a complete, well-organised darshan experience.',
    destination: 'Do Dham Yatra',
    tagline: 'Breathe in the magic of the mountains',
  },
  {
    id:5,
    // image: '/images/rishikesh.png',
    image: img5,
    alt: 'Laxman Jhula bridge over the Ganges river in Rishikesh',
    destination: 'Rishikesh',
    tagline: 'Find your peace on the banks of the Ganga',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [])

  const activeSlide = slides[current]

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      {/* Crossfading background slideshow */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== current}
        >
          <Image
            src={slide.image || '/placeholder.svg'}
            alt={index === current ? slide.alt : ''}
            fill
            priority={index === 0}
            className={`object-cover ${index === current ? 'animate-kenburns' : ''}`}
          />
        </div>
      ))}

      {/* Overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-primary/20"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 md:px-6 md:pt-40">
        <div className="max-w-2xl">
          <p
            className="animate-hero-rise inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm"
            style={{ animationDelay: '0.1s' }}
          >
            <Star className="size-4 fill-accent text-accent" aria-hidden="true" />
            Rated 4.9/5 by 600+ happy travellers
          </p>

          <h1
            className="animate-hero-rise mt-6 text-balance font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl"
            style={{ animationDelay: '0.25s' }}
          >
            Your Sacred Journey to{' '}
            <span className="inline-block overflow-hidden align-bottom">
              <span key={activeSlide.destination} className="animate-hero-word inline-block text-accent">
                {activeSlide.destination}
              </span>
            </span>{' '}
            Begins Here
          </h1>

          <p
            className="animate-hero-rise mt-5 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85 md:text-lg"
            style={{ animationDelay: '0.4s' }}
          >
            <span key={activeSlide.tagline} className="animate-hero-word inline-block">
              {activeSlide.tagline}.
            </span>{' '}
            Thoughtfully planned tours with comfortable stays, expert guides and dependable cab
            services at every step.
          </p>

          <div
            className="animate-hero-rise mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '0.55s' }}
          >
            <Link
              href="#packages"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              Explore Tour Packages
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="#cabs"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-7 py-3.5 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
            >
              Book a Cab
            </Link>
          </div>

          {/* Stats */}
          <dl
            className="animate-hero-rise mt-12 flex flex-wrap gap-8 border-t border-primary-foreground/20 pt-8"
            style={{ animationDelay: '0.7s' }}
          >
            <div>
              <dt className="text-sm text-primary-foreground/70">Happy Travellers</dt>
              <dd className="mt-1 font-serif text-3xl font-bold text-primary-foreground">600+</dd>
            </div>
            <div>
              <dt className="text-sm text-primary-foreground/70">Tour Packages</dt>
              <dd className="mt-1 font-serif text-3xl font-bold text-primary-foreground">40+</dd>
            </div>
            <div>
              <dt className="text-sm text-primary-foreground/70">Years of Experience</dt>
              <dd className="mt-1 font-serif text-3xl font-bold text-primary-foreground">10+</dd>
            </div>
          </dl>
        </div>

        {/* Slide indicators with progress */}
        <div
          className="animate-hero-rise mt-10 flex items-center gap-3"
          style={{ animationDelay: '0.85s' }}
          role="tablist"
          aria-label="Hero slideshow navigation"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.destination}
              type="button"
              role="tab"
              aria-selected={index === current}
              aria-label={`Show ${slide.destination}`}
              onClick={() => setCurrent(index)}
              className={`h-1.5 overflow-hidden rounded-full transition-all duration-500 ${
                index === current
                  ? 'w-12 bg-primary-foreground/30'
                  : 'w-6 bg-primary-foreground/25 hover:bg-primary-foreground/50'
              }`}
            >
              {index === current && (
                <span key={current} className="animate-hero-progress block h-full rounded-full bg-accent" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2" aria-hidden="true">
        <ChevronDown className="animate-scroll-hint size-6 text-primary-foreground/80" />
      </div>
    </section>
  )
}
