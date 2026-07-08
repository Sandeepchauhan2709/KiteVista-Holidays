import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

import img from '@/public/images/kedarnath.png'
import img2 from '@/public/images/badrinath.png'
import img3 from '@/public/images/manali.png'
import img4 from '@/public/images/rishikesh.png'

const destinations = [
  {
    name: 'Kedarnath',
    tours: '12 Tours',
    image: img,
    alt: 'Kedarnath temple with prayer flags at dawn',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    name: 'Badrinath',
    tours: '8 Tours',
    image: img2,
    alt: 'Badrinath temple with snowy Neelkanth peak',
    className: '',
  },
  {
    name: 'Manali',
    tours: '10 Tours',
    image: img3,
    alt: 'Lush Manali valley with Himalayan peaks',
    className: '',
  },
  {
    name: 'Rishikesh',
    tours: '6 Tours',
    image: img4,
    alt: 'Suspension bridge over the Ganges at Rishikesh',
    className: 'md:col-span-2',
  },
]

export function Destinations() {
  return (
    <section id="destinations" className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Destinations</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-secondary-foreground md:text-4xl">
            Explore the Most Loved Himalayan Destinations
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4 md:grid-rows-2">
          {destinations.map((dest) => (
            <Link
              key={dest.name}
              href="#packages"
              className={`group relative block min-h-56 overflow-hidden rounded-2xl md:min-h-0 ${dest.className}`}
            >
              <Image
                src={dest.image || "/placeholder.svg"}
                alt={dest.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground">{dest.name}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/80">{dest.tours}</p>
                </div>
                <span className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground backdrop-blur-sm transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <ArrowUpRight className="size-5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
