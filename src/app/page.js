import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TourPackages } from '@/components/tour-packages'
import { Destinations } from '@/components/destinations'
import { CabServices } from '@/components/cab-services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Testimonials } from '@/components/testimonials'
import { CtaBanner } from '@/components/cta-banner'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TourPackages />
        <Destinations />
        <CabServices />
        <WhyChooseUs />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}











// import Link from 'next/link';
// import { Hotel, UtensilsCrossed, Bus, ShieldCheck } from 'lucide-react';
// import PackageCard from '@/components/PackageCard';
// import ElevationPath from '@/components/ElevationPath';
// import { packages } from '@/data/packages';

// const featured = packages.slice(0, 3);

// const whyUs = [
//   { icon: Hotel, title: 'Hotels sorted', desc: 'Vetted stays booked at every stop, from base towns to shrine dormitories.' },
//   { icon: UtensilsCrossed, title: 'Food included', desc: 'Breakfast and dinner covered on every package — no surprise bills.' },
//   { icon: Bus, title: 'Travel handled', desc: 'AC vehicles for the full circuit, drivers who know these mountain roads.' },
//   { icon: ShieldCheck, title: 'On-ground support', desc: 'A tour manager reachable throughout your yatra, not just at booking.' },
// ];

// const sampleItinerary = packages[0].itinerary.slice(0, 3);

// export default function Home() {
//   return (
//     <div>
//       {/* Hero */}
//       <section className="bg-ink text-snow">
//         <div className="max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <p className="font-mono text-marigold text-xs tracking-widest mb-4">HARIDWAR · KEDARNATH · BADRINATH · MUSSOORIE</p>
//             <h1 className="font-display text-4xl md:text-5xl leading-tight">
//               Every step of the yatra, <span className="text-marigold">planned before you take it.</span>
//             </h1>
//             <p className="text-stone mt-5 max-w-md">
//               Kitevista Holidays runs fixed-departure pilgrimage and hill-station
//               packages across Uttarakhand — hotels, food and travel bundled into
//               one price, by day count.
//             </p>
//             <div className="flex gap-4 mt-8">
//               <Link href="/packages" className="bg-marigold text-ink px-6 py-3 rounded-full font-medium hover:brightness-95 transition">
//                 View Packages
//               </Link>
//               <Link href="/contact" className="border border-white/20 px-6 py-3 rounded-full font-medium hover:bg-white/5 transition">
//                 Talk to Us
//               </Link>
//             </div>
//           </div>

//           <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
//             <p className="font-mono text-xs text-marigold mb-4">SAMPLE ROUTE — KEDARNATH YATRA</p>
//             <div className="[&_h4]:text-snow [&_p]:text-stone">
//               <ElevationPath itinerary={sampleItinerary} />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why us */}
//       <section className="max-w-6xl mx-auto px-5 py-20">
//         <h2 className="font-display text-3xl text-center mb-2">What's Included, Always</h2>
//         <p className="text-stone text-center max-w-xl mx-auto mb-12">
//           Every package is built the same way — clear on hotels, food, travel and support, so you know exactly what you're paying for.
//         </p>
//         <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {whyUs.map(({ icon: Icon, title, desc }) => (
//             <div key={title} className="bg-white rounded-2xl p-6 border border-black/5">
//               <Icon className="text-marigold mb-3" size={28} />
//               <h3 className="font-display text-lg">{title}</h3>
//               <p className="text-stone text-sm mt-2">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Featured packages */}
//       <section className="bg-white py-20">
//         <div className="max-w-6xl mx-auto px-5">
//           <div className="flex items-end justify-between mb-10">
//             <div>
//               <h2 className="font-display text-3xl">Popular Packages</h2>
//               <p className="text-stone mt-2">Fixed itineraries, priced per person.</p>
//             </div>
//             <Link href="/packages" className="text-marigold font-medium hover:underline hidden sm:block">
//               View all →
//             </Link>
//           </div>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {featured.map((pkg) => (
//               <PackageCard key={pkg.slug} pkg={pkg} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="max-w-6xl mx-auto px-5 py-20 text-center">
//         <h2 className="font-display text-3xl mb-4">Not sure which yatra fits your dates?</h2>
//         <p className="text-stone max-w-lg mx-auto mb-8">
//           Tell us your group size, budget and travel window — we'll put together a package that fits.
//         </p>
//         <Link href="/contact" className="bg-marigold text-ink px-8 py-3 rounded-full font-medium hover:brightness-95 transition">
//           Get a Custom Plan
//         </Link>
//       </section>
//     </div>
//   );
// }