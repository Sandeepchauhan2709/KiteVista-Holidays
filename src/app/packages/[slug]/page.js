import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Hotel, UtensilsCrossed, Bus, Sparkles, IndianRupee } from 'lucide-react';
import { packages, getPackageBySlug } from '@/data/packages';
import ElevationPath from '@/components/ElevationPath';

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return {};
  return { title: `${pkg.name} | Kitevista Holidays` };
}

export default function PackageDetail({ params }) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return notFound();

  const inclusionRows = [
    { icon: Hotel, label: 'Hotels', value: pkg.inclusions.hotels },
    { icon: UtensilsCrossed, label: 'Food', value: pkg.inclusions.food },
    { icon: Bus, label: 'Travel', value: pkg.inclusions.travel },
    { icon: Sparkles, label: 'Other', value: pkg.inclusions.other },
  ];

  return (
    <div>
      <section className="bg-ink text-snow">
        <div className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-mono text-marigold text-xs mb-3">{pkg.region.toUpperCase()} · {pkg.duration.toUpperCase()}</p>
            <h1 className="font-display text-4xl">{pkg.name}</h1>
            <p className="text-stone mt-3">{pkg.tagline}</p>
            <div className="flex items-center gap-2 mt-6 font-mono text-2xl text-marigold">
              <IndianRupee size={20} /> {pkg.price.toLocaleString()}
              <span className="text-stone text-sm font-body ml-1">/ person</span>
            </div>
            <Link href="/contact" className="inline-block mt-6 bg-marigold text-ink px-6 py-3 rounded-full font-medium hover:brightness-95 transition">
              Enquire About This Package
            </Link>
          </div>
          <img src={pkg.image} alt={pkg.name} className="rounded-2xl w-full h-72 object-cover" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="font-display text-2xl mb-6">Day-by-Day Itinerary</h2>
          <ElevationPath itinerary={pkg.itinerary} />
        </div>

        <aside className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-black/5">
            <h3 className="font-display text-lg mb-4">What's Included</h3>
            <div className="space-y-4">
              {inclusionRows.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3">
                  <Icon size={18} className="text-marigold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-stone text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-black/5">
            <h3 className="font-display text-lg mb-3">Highlights</h3>
            <ul className="space-y-2 text-sm text-stone">
              {pkg.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-marigold">•</span> {h}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}