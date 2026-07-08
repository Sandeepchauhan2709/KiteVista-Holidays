import { Mountain, Users, MapPin } from 'lucide-react';

export const metadata = { title: 'About Us | Kitevista Holidays' };

const stats = [
  { icon: Users, value: '12,000+', label: 'Pilgrims guided' },
  { icon: Mountain, value: '6', label: 'Himalayan routes' },
  { icon: MapPin, value: '9 yrs', label: 'Operating in Uttarakhand' },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <p className="font-mono text-marigold text-xs mb-3">ABOUT US</p>
      <h1 className="font-display text-4xl mb-6">Built by people who've made the climb themselves.</h1>
      <p className="text-stone leading-relaxed">
        Kitevista Holidays started in Haridwar with a simple frustration: pilgrims
        arriving at Kedarnath or Badrinath with no fixed hotel, no idea about road
        closures, and no one to call when plans changed at 3,500 metres. We
        started organising fixed-departure yatras where every hotel, meal and
        vehicle is arranged in advance — so the only thing you have to focus on
        is the darshan itself.
      </p>
      <p className="text-stone leading-relaxed mt-4">
        Today we run Kedarnath, Char Dham, Badrinath, Do Dham, Valley of Flowers
        and Mussoorie packages, with local guides in every base town who know the
        weather, the roads and the temple timings better than any app can.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 mt-12">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="bg-white rounded-2xl p-6 border border-black/5 text-center">
            <Icon className="text-marigold mx-auto mb-2" size={26} />
            <p className="font-display text-2xl">{value}</p>
            <p className="text-stone text-sm">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}