import { Hero } from '@/components/hero'
import { TourPackages } from '@/components/tour-packages'
import { Destinations } from '@/components/destinations'
import { CabServices } from '@/components/cab-services'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Testimonials } from '@/components/testimonials'
import { CtaBanner } from '@/components/cta-banner'

export default function Page() {
  return (
    <main>
      <Hero />
      <TourPackages />
      <Destinations />
      <CabServices />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
    </main>
  )
}
