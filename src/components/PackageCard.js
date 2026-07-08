import Link from 'next/link';
import { Clock, IndianRupee } from 'lucide-react';

export default function PackageCard({ pkg }) {
  return (
    <Link
      href={`/packages/${pkg.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-mono text-marigold mb-1">{pkg.region.toUpperCase()}</p>
        <h3 className="font-display text-xl text-ink">{pkg.name}</h3>
        <p className="text-stone text-sm mt-1">{pkg.tagline}</p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-black/5 text-sm">
          <span className="flex items-center gap-1 text-stone">
            <Clock size={14} /> {pkg.duration}
          </span>
          <span className="flex items-center gap-1 font-mono text-ink font-semibold">
            <IndianRupee size={14} /> {pkg.price.toLocaleString()}
          </span>
        </div>
      </div>
    </Link>
  );
}