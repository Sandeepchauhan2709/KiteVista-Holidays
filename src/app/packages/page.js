import PackageCard from '@/components/PackageCard';
import { packages } from '@/data/packages';

export const metadata = {
  title: 'Tour Packages | Kitevista Holidays',
};

export default function PackagesPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <h1 className="font-display text-4xl mb-2">All Packages</h1>
      <p className="text-stone max-w-xl mb-10">
        Every package includes hotels, meals and travel for the full duration. Tap any package for the day-by-day itinerary.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}