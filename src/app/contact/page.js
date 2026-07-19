import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { siteInfo } from '@/lib/tour-data'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { EnquiryForm } from '@/components/enquiry-form'

export const metadata = {
  title: 'Contact Us | Kitevista Holidays',
  description:
    'Get in touch with Kitevista Holidays for tour bookings, cab services and travel enquiries. Call, WhatsApp or send us a message — we respond within a few hours.',
}

const contactDetails = [
  {
    icon: Phone,
    title: 'Call or WhatsApp',
    lines: [siteInfo.phone],
    href: siteInfo.phoneHref,
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: [siteInfo.email],
    href: `mailto:${siteInfo.email}`,
  },
  {
    icon: MapPin,
    title: 'Visit Our Office',
    lines: [siteInfo.address],
    href: null,
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon – Sun: 8:00 AM – 9:00 PM', 'On-trip support: 24/7'],
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title={"Let's Plan Your Next Journey Together"}
        description="Have a question about a package, need a custom itinerary or want to book a cab? Send us a message and our travel expert will call you back within a few hours."
        image="/images/rishikesh.png"
        imageAlt="Suspension bridge over the Ganges at Rishikesh"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[400px_1fr] lg:gap-16">
          {/* Contact details */}
          <div className="flex flex-col gap-5">
            {contactDetails.map((detail, index) => (
              <Reveal key={detail.title} delay={index * 100}>
                <div className="flex gap-4 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <detail.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-semibold">{detail.title}</h2>
                    {detail.lines.map((line) =>
                      detail.href ? (
                        <a
                          key={line}
                          href={detail.href}
                          className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={400}>
              <div className="rounded-2xl bg-primary p-6 text-center">
                <p className="font-serif text-xl font-bold text-primary-foreground">
                  Need an Instant Response?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">
                  WhatsApp us your travel plan and get package options within minutes.
                </p>
                <a
                  href={siteInfo.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          {/* Enquiry form */}
          <Reveal delay={150}>
            <div className="rounded-2xl bg-card p-6 shadow-lg ring-1 ring-border md:p-8">
              <h2 className="font-serif text-2xl font-bold md:text-3xl">Send Us a Message</h2>
              <p className="mb-6 mt-2 text-sm leading-relaxed text-muted-foreground">
                Fill in the form below and we&apos;ll get back to you as soon as possible.
              </p>
              <EnquiryForm subject="General Enquiry (Contact Page)" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
