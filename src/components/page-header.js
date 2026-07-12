import Image from 'next/image'

export function PageHeader({ eyebrow, title, description, image, imageAlt }) {
  return (
    <section className="relative overflow-hidden bg-primary pt-16 md:pt-20">
      {image && (
        <>
          <Image
            src={image || "/placeholder.svg"}
            alt={imageAlt || ''}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <p className="animate-hero-rise text-sm font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
        <h1
          className="animate-hero-rise mt-3 max-w-3xl text-balance font-serif text-4xl font-bold text-primary-foreground md:text-5xl"
          style={{ animationDelay: '120ms' }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="animate-hero-rise mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/85"
            style={{ animationDelay: '240ms' }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
