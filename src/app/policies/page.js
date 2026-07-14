'use client'

import { Reveal } from '@/components/reveal'
import { PageHeader } from '@/components/page-header'
import { AlertCircle, Check, Clock, DollarSign, File } from 'lucide-react'

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader title="Our Policies" subtitle="Clear, transparent terms for your peace of mind" />

      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        {/* Cancellation Policy */}
        <Reveal>
          <section className="mb-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10">
                <DollarSign className="size-6 text-accent" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground">Cancellation Policy</h2>
            </div>

            <div className="space-y-6 rounded-lg bg-secondary/50 p-6 md:p-8">
              {/* Advance Payment */}
              <div className="border-l-4 border-accent pl-4">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Advance Payment Required</h3>
                <p className="text-foreground/80">A minimum advance payment of 25% is required to confirm your booking.</p>
              </div>

              {/* Cancellation Timeline */}
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Clock className="size-5 text-accent" aria-hidden="true" />
                  Refund Schedule Based on Cancellation Date
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3 rounded-lg bg-background p-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <Check className="size-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">30+ Days Before Departure</p>
                      <p className="text-sm text-foreground/75">90% Refund (after deducting applicable processing charges)</p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-lg bg-background p-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-sm font-bold text-blue-600">50%</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">15–29 Days Before Departure</p>
                      <p className="text-sm text-foreground/75">50% Refund</p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-lg bg-background p-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100">
                      <span className="text-sm font-bold text-orange-600">25%</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">7–14 Days Before Departure</p>
                      <p className="text-sm text-foreground/75">25% Refund</p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-lg bg-background p-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <span className="text-sm font-bold text-red-600">0%</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">0–6 Days Before Departure or No Show</p>
                      <p className="text-sm text-foreground/75">No Refund</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refund Processing */}
              <div className="border-l-4 border-accent pl-4">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Refund Processing</h3>
                <p className="text-foreground/80">
                  Eligible refunds will be processed within 7–10 working days to the original mode of payment.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Important Terms */}
        <Reveal>
          <section>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10">
                <AlertCircle className="size-6 text-accent" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground">Important Terms & Conditions</h2>
            </div>

            <div className="space-y-4 rounded-lg bg-secondary/50 p-6 md:p-8">
              <div className="border-l-4 border-accent pl-4 py-2">
                <h3 className="mb-2 font-semibold text-foreground">Third-Party Services</h3>
                <p className="text-foreground/80">
                  Flight tickets, train tickets, helicopter bookings, VIP darshan, permits, and other third-party services
                  will be refunded strictly according to the respective service provider's cancellation policy. We are not
                  responsible for their refund terms.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4 py-2">
                <h3 className="mb-2 font-semibold text-foreground">Force Majeure & Unforeseen Circumstances</h3>
                <p className="text-foreground/80">
                  Any additional expenses arising due to natural disasters, landslides, road closures, adverse weather
                  conditions, government restrictions, or other unforeseen circumstances shall be borne by the guest.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4 py-2">
                <h3 className="mb-2 font-semibold text-foreground">What Happens If Your Tour is Cancelled by Us?</h3>
                <p className="text-foreground/80">
                  In the rare event that we cancel your tour due to circumstances beyond our control, you will receive a
                  full refund or the option to reschedule your tour at no additional cost.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4 py-2">
                <h3 className="mb-2 font-semibold text-foreground">Best Price Guarantee</h3>
                <p className="text-foreground/80">
                  If you find a lower price for the same tour with another operator, we will match it or offer you a
                  better deal. Contact us within 24 hours of booking to avail this offer.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4 py-2">
                <h3 className="mb-2 font-semibold text-foreground">Travel Insurance</h3>
                <p className="text-foreground/80">
                  We recommend purchasing travel insurance for your peace of mind. It covers unexpected cancellations,
                  medical emergencies, and other travel-related issues.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* FAQ */}
        <Reveal>
          <section className="mt-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-accent/10">
                <File className="size-6 text-accent" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'Can I modify my tour dates after booking?',
                  a: 'Yes, you can modify your tour dates up to 30 days before departure with no additional charges, subject to availability. Modifications made within 30 days may incur additional charges.',
                },
                {
                  q: 'What if I need to cancel due to an emergency?',
                  a: 'We understand emergencies happen. Please contact us immediately with supporting documents (medical certificates, death certificates, etc.), and we will consider your case for an exception.',
                },
                {
                  q: 'Are deposits refundable?',
                  a: 'The 25% advance payment is non-refundable if you cancel 0–6 days before departure. For cancellations earlier than that, refunds are issued as per our cancellation policy.',
                },
                {
                  q: 'How do I claim a refund?',
                  a: 'Contact our support team with your booking reference number. We will process your refund within 7–10 working days to your original payment method.',
                },
              ].map((item, idx) => (
                <div key={idx} className="rounded-lg border border-border bg-background p-6">
                  <h3 className="mb-2 font-semibold text-foreground">{item.q}</h3>
                  <p className="text-foreground/75">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Contact */}
        <Reveal>
          <section className="mt-16">
            <div className="rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 p-8 text-center md:p-12">
              <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">Have Questions About Our Policies?</h3>
              <p className="mb-6 text-foreground/75">Our support team is here to help clarify any concerns.</p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="tel:+918630731034"
                  className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Call Us: +91 86307 31034
                </a>
                <a
                  href="/contact"
                  className="rounded-full border-2 border-accent px-6 py-3 font-semibold text-accent transition-colors hover:bg-accent/10"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  )
}
