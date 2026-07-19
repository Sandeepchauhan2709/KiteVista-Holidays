import img from '@/public/images/Chardham yatra.jpeg'
import img2 from '@/public/images/Kedarnath.jpeg'
import img3 from '@/public/images/Badrinath.jpeg'
import img4 from '@/public/images/Do Dham(kedarnath-Badrinath).jpeg'
import img5 from '@/public/images/Rishikesh tour.jpeg'
import img6 from '@/public/images/Mussoorie.jpeg'

export const siteInfo = {
  name: 'KiteVista Holidays',
  phone: '+91 81781 16225',
  phoneHref: 'tel:+91-8178116225',
  whatsappHref: 'https://wa.me/91-8178116225',
  email: 'Hr@info.kitevistaholiday.com',
  address: 'Near Mr Perfection Automotive, HIG Flats, Chander Nagar, Surya Nagar, Ghaziabad, Uttar Pradesh 201011',
}

export const packages = [
  {
    slug: 'chardham-yatra-package',
    title: 'Chardham Yatra Package',
    image: img,
    alt: 'Gangotri temple beside a glacial Himalayan river',
    duration: '13 Days / 12 Nights',
    location: 'Yamunotri, Gangotri, Kedarnath, Badrinath',
    price: '₹28,500',
    tag: 'Best Seller',
    overview:
      'The Chardham Yatra is the most sacred pilgrimage circuit in India, covering the four holy shrines of Yamunotri, Gangotri, Kedarnath and Badrinath nestled in the Garhwal Himalayas. Our 10-day package takes care of everything — comfortable hotels, experienced hill drivers, all transfers and complete guidance — so you can focus entirely on your devotion.',
    highlights: [
      'Darshan at all four Dhams — Yamunotri, Gangotri, Kedarnath & Badrinath',
      'Comfortable 2-3 star hotels with breakfast and dinner included',
      'Experienced hill driver with a dedicated vehicle for the full circuit',
      'Ganga Aarti at Har Ki Pauri, Haridwar',
      'Assistance with Kedarnath trek arrangements (pony / palki / helicopter on request)',
      'All toll, parking, driver allowance and state taxes included',
    ],
    itinerary: [
      { day: 1, title: 'Haridwar to Barkot', detail: 'Drive via Mussoorie with a stop at Kempty Falls. Overnight stay at Barkot (220 km / 7 hrs).' },
      { day: 2, title: 'Barkot to Yamunotri to Barkot', detail: 'Drive to Yamunotri (Trek 6 km one way).' },
      { day: 3, title: 'Barkot to Uttarkashi', detail: 'Barkot to Uttarkashi (100 km / 4 hrs)' },
      { day: 4, title: 'Uttarkashi to Gangotri to Uttarkashi', detail: 'Drive to Gangotri along the Bhagirathi river, darshan and return to Uttarkashi (100 km one way).' },
      { day: 5, title: 'Uttarkashi to Guptkashi', detail: 'Scenic drive through Tehri and Rudraprayag. Overnight at Guptkashi (220 km / 8 hrs).' },
      { day: 6, title: 'Guptkashi to Kedarnath ', detail: 'Drive to Sonprayag, trek from Gaurikund to Kedarnath temple (16 km). Overnight near the temple.' },
      { day: 7, title: 'Kedarnath to Guptkashi', detail: 'Return trek and drive to Guptkashi via Chopta valley.' },
      { day: 8, title: 'Guptkashi to Pipalkoti', detail: 'Guptkashi to Pipalkoti (140 km / 5 hrs).' },
      { day: 9, title: 'Pipalkoti to Badrinath', detail: 'Morning darshan at Badrinath, visit Mana village (last Indian village), (80 km / 4 hrs) .' },
      { day: 10, title: 'Badrinath to Srinagar ', detail: 'Badrinath to Srinagar (Garhwal) (200 km / 7 hrs)' },
      { day: 11, title: 'Srinagar to Haridwar ', detail: 'Srinagar to Haridwar via Rishikesh (130 km / 4 hrs)' },
      { day: 12, title: 'Haridwar  ', detail: 'Haridwar local sightseeing and Ganga Aarti' },
      { day: 13, title: 'Return to onward destination ', detail: 'Departure from Haridwar to onward destination' },
    ],
    inclusions: ['Hotel accommodation (12 nights)', 'Breakfast and dinner daily', 'Dedicated vehicle with hill driver', 'All transfers and sightseeing', 'Toll, parking and driver allowance', '24/7 on-trip support'],
    exclusions: ['Lunch and personal expenses', 'Pony / palki / helicopter charges', 'Entry fees at monuments', 'Anything not mentioned in inclusions'],
  },
  {
    slug: 'kedarnath-tour-package',
    title: 'Kedarnath Tour Package',
    image: img2,
    alt: 'Kedarnath temple with prayer flags and misty peaks',
    duration: '5 Days / 4 Nights',
    location: 'Haridwar, Guptkashi, Kedarnath',
    price: '₹12,500',
    tag: 'Popular',
    overview:
      'Seek the blessings of Lord Shiva at Kedarnath, one of the twelve Jyotirlingas, set against the stunning backdrop of the Kedarnath range. This compact 4-day package from Haridwar includes comfortable stays, all transfers and complete trek assistance.',
    highlights: [
      'Darshan at Kedarnath Jyotirlinga temple',
      'Scenic drive along the Mandakini river valley',
      'Trek assistance from Gaurikund with pony / palki options',
      'Evening Ganga Aarti at Haridwar',
      'Comfortable stays at Guptkashi / Sitapur',
      'Helicopter booking assistance on request',
    ],
    itinerary: [
      { day: 1, title: 'Haridwar to Guptkashi', detail: 'Morning pickup, drive via Devprayag and Rudraprayag along the holy confluences. Overnight at Guptkashi (210 km / 7 hrs).' },
      { day: 2, title: 'Kedarnath Trek ', detail: 'Guptkashi to Sonprayag to Gaurikund, Trek to Kedarnath' },
      { day: 3, title: 'Morning Temple Darshan', detail: 'Morning darshan, return trek to Gaurikund and drive back to Guptkashi.' },
      { day: 4, title: 'Guptkashi to Rishikesh ', detail: 'Return drive to Rishikesh and Evening Ganga Aarti at Triveni Ghat.' },
      { day: 5, title: 'Rishikesh exploration ', detail: 'Rishikesh local exploration & departure.' },
    ],
    inclusions: ['Hotel accommodation (4 nights)', 'Breakfast and dinner daily', 'Dedicated vehicle with hill driver', 'Trek arrangement assistance', 'Toll, parking and driver allowance', '24/7 on-trip support'],
    exclusions: ['Lunch and personal expenses', 'Pony / palki / helicopter charges', 'Any entry fees', 'Anything not mentioned in inclusions'],
  },
  {
    slug: 'badrinath-tour-package',
    title: 'Badrinath Tour Package',
    image: img3,
    alt: 'Colorful Badrinath temple with Neelkanth peak behind',
    duration: '5 Days / 4 Nights',
    location: 'Rishikesh, Joshimath, Badrinath',
    price: '₹11,499',
    tag: null,
    overview:
      'Visit the sacred abode of Lord Vishnu at Badrinath, framed by the magnificent Neelkanth peak. This 5-day journey from Rishikesh covers the Panch Prayag confluences, Joshimath and Mana — the last village of India.',
    highlights: [
      'Darshan at Badrinath temple',
      'Visit Mana village — the last Indian village',
      'Drive past all five Panch Prayag confluences',
      'Tapt Kund holy hot spring bath',
      'Auli ropeway option from Joshimath',
      'Comfortable hotels throughout',
    ],
    itinerary: [
      { day: 1, title: 'Haridwar to Pipalkoti', detail: 'Haridwar to Pipalkoti via Devprayag (220 km / 7 hrs).' },
      { day: 2, title: 'Pipalkoti to Badrinath', detail: 'Drive via Karnaprayag, Nandprayag and Joshimath  (80 km / 3 hrs). Evening darshan at Badrinath.' },
      { day: 3, title: 'Badrinath & Mana Village', detail: 'Morning darshan, Tapt Kund bath, Explore Mana Village and drive back to Joshimath/Pipalkoti.' },
      { day: 4, title: 'Joshimath to Haridwar', detail: 'Joshimath to Haridwar via Rishikesh sightseeing' },
      { day: 5, title: 'Haridwar', detail: 'Haridwar temple tour and departure.' },
    ],
    inclusions: ['Hotel accommodation (4 nights)', 'Breakfast and dinner daily', 'Dedicated vehicle with hill driver', 'All transfers and sightseeing', 'Toll, parking and driver allowance', '24/7 on-trip support'],
    exclusions: ['Lunch and personal expenses', 'Auli ropeway tickets', 'Any entry fees', 'Anything not mentioned in inclusions'],
  },
  {
    slug: 'do-dham-yatra',
    title: 'Do Dham Yatra',
    image: img4,
    alt: 'Kedarnath temple against dramatic Himalayan peaks',
    duration: '6 Days / 5 Nights',
    location: 'Kedarnath, Badrinath',
    price: '₹18,000',
    tag: null,
    overview:
      'The Do Dham Yatra covers the two most revered shrines of Uttarakhand — Kedarnath and Badrinath — in one seamless 6-day circuit from Haridwar. Ideal for pilgrims with limited time who want a complete, well-organised darshan experience.',
    highlights: [
      'Darshan at both Kedarnath and Badrinath',
      'Drive through Devprayag, Rudraprayag and Karnaprayag',
      'Trek assistance for Kedarnath with pony / palki options',
      'Visit Mana village near Badrinath',
      'Comfortable hotels with meals included',
      'Helicopter booking assistance on request',
    ],
    itinerary: [
      { day: 1, title: 'Haridwar to Guptkashi', detail: 'Pickup and scenic drive along the Ganga and Mandakini valleys. Overnight at Guptkashi (210 km / 7-8 hrs).' },
      { day: 2, title: 'Guptkashi to Kedarnath', detail: 'Guptkashi to Kedarnath (Drive to Sonprayag + 16 km Trek).' },
      { day: 3, title: 'Kedarnath Darshan', detail: 'Kedarnath Temple early Darshan & Trek back to Guptkashi.' },
      { day: 4, title: 'Guptkashi to Badrinath', detail: 'Drive via Chopta and Joshimath. Evening darshan at Badrinath.' },
      { day: 5, title: 'Badrinath', detail: 'Badrinath Temple bath in Tapt Kund & drive to Birahi/Pipalkoti.' },
      { day: 6, title: 'Return to Haridwar', detail: 'Return drive to Haridwar via Rishikesh sightseeing.' },
    ],
    inclusions: ['Hotel accommodation (5 nights)', 'Breakfast and dinner daily', 'Dedicated vehicle with hill driver', 'All transfers and sightseeing', 'Toll, parking and driver allowance', '24/7 on-trip support'],
    exclusions: ['Lunch and personal expenses', 'Pony / palki / helicopter charges', 'Any entry fees', 'Anything not mentioned in inclusions'],
  },
  {
    slug: 'rishikesh-haridwar',
    title: 'Rishikesh Haridwar ',
    image: img5,
    alt: 'Laxman Jhula bridge over the Ganges in Rishikesh',
    duration: '3 Days / 2 Nights',
    location: 'Rishikesh, Haridwar, Mussoorie',
    price: '₹8,499',
    tag: 'Weekend Trip',
    overview:
      'A perfect weekend escape combining the spiritual energy of Haridwar, the adventure capital Rishikesh and the queen of hills Mussoorie. Ganga Aarti, river rafting, cafe hopping and mountain views — all in three refreshing days.',
    highlights: [
      'Ganga Aarti at Har Ki Pauri and Triveni Ghat',
      'River rafting on the Ganges (16 km stretch)',
      'Laxman Jhula, Ram Jhula and Beatles Ashram',
      'Mussoorie Mall Road and Kempty Falls',
      'Cafe hopping in Rishikesh',
      'Comfortable riverside stays',
    ],
    itinerary: [
      { day: 1, title: 'Haridwar Arrival & Aarti', detail: 'Pickup, Mansa Devi temple ropeway, evening Ganga Aarti at Har Ki Pauri. Overnight at Haridwar.' },
      { day: 2, title: 'Rishikesh Adventure', detail: 'River rafting, Laxman Jhula, Beatles Ashram and Triveni Ghat Aarti. Overnight at Rishikesh.' },
      { day: 3, title: 'Mussoorie Day Trip & Departure', detail: 'Drive to Mussoorie — Kempty Falls, Mall Road, Gun Hill — and evening drop at Haridwar / Dehradun.' },
    ],
    inclusions: ['Hotel accommodation (2 nights)', 'Breakfast daily', 'Dedicated vehicle for all transfers', 'Sightseeing as per itinerary', 'Toll, parking and driver allowance', '24/7 on-trip support'],
    exclusions: ['Lunch, dinner and personal expenses', 'Rafting charges', 'Ropeway tickets', 'Anything not mentioned in inclusions'],
  },
  {
    slug: 'mussoorie-tour-package',
    title: 'Mussoorie Tour Package',
    image: img6,
    alt: 'Green Mussoorie valley with wooden cottages and snow peaks',
    duration: '4 Days / 3 Nights',
    location: 'Mussoorie, Solang Valley, Rohtang',
    price: '₹8,990',
    tag: 'Family Favourite',
    overview:
      'Escape to the queen of hill stations. This 6-day Mussoorie holiday blends adventure and relaxation — Solang Valley thrills, Rohtang Pass snow, Old Mussoorie cafes, and the sacred Hadimba temple, with comfortable hotels throughout.',
    highlights: [
      'Solang Valley adventure activities (paragliding, zorbing)',
      'Rohtang Pass snow point excursion (permit assistance)',
      'Hadimba Devi temple and Old Mussoorie walk',
      'Vashisht hot water springs',
      'Kullu river rafting option',
      'Naggar Castle and art gallery visit',
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Mussoorie', detail: 'Pickup from Volvo stand / airport, check-in and leisure evening on Mall Road.' },
      { day: 2, title: 'Local Mussoorie Sightseeing', detail: 'Full-day sightseeing of Kempty Falls, Lake Mist, and Cloud End.' },
      { day: 3, title: ' Gun Hil', detail: 'Visit Lal Tibba, Sister Bazaar, Landour, and Gun Hill ropeway.' },
      { day: 4, title: 'Mussoorie to Dehradun', detail: 'Mussoorie to Dehradun (Robber Cave & Sahastradhara) & Departure.' },
    ],
    inclusions: ['Hotel accommodation (3 nights)', 'Breakfast and dinner daily', 'Dedicated vehicle for sightseeing', 'All transfers as per itinerary', 'Toll, parking and driver allowance', '24/7 on-trip support'],
    exclusions: ['Lunch and personal expenses', 'Adventure activity charges', 'Rohtang permit fees', 'Anything not mentioned in inclusions'],
  },
]

export function getPackageBySlug(slug) {
  return packages.find((pkg) => pkg.slug === slug)
}

export const destinations = [
  {
    name: 'Kedarnath',
    tours: '12 Tours',
    image: img2,
    alt: 'Kedarnath temple with prayer flags at dawn',
    description: 'Home of the sacred Jyotirlinga at 3,583 m, reached by a soul-stirring trek through the Mandakini valley.',
    bestTime: 'May – June, Sep – Oct',
    packageSlug: 'kedarnath-tour-package',
  },
  {
    name: 'Badrinath',
    tours: '8 Tours',
    image: img3,
    alt: 'Badrinath temple with snowy Neelkanth peak',
    description: 'The holy abode of Lord Vishnu beneath the Neelkanth peak, beside the roaring Alaknanda river.',
    bestTime: 'May – June, Sep – Oct',
    packageSlug: 'badrinath-tour-package',
  },
  {
    name: 'Manali',
    tours: '10 Tours',
    image: img6,
    alt: 'Lush Manali valley with Himalayan peaks',
    description: 'Snow adventures, pine forests, riverside cafes and the gateway to Solang Valley and Rohtang Pass.',
    bestTime: 'Oct – Feb (snow), Mar – Jun',
    packageSlug: 'manali-holiday-package',
  },
  {
    name: 'Rishikesh',
    tours: '6 Tours',
    image: img5,
    alt: 'Suspension bridge over the Ganges at Rishikesh',
    description: 'The yoga capital of the world — river rafting, Ganga Aarti and iconic suspension bridges.',
    bestTime: 'All year round',
    packageSlug: 'rishikesh-haridwar-getaway',
  },
  {
    name: 'Chardham Circuit',
    tours: '5 Tours',
    image: img,
    alt: 'Gangotri temple beside a glacial river',
    description: 'The complete sacred circuit — Yamunotri, Gangotri, Kedarnath and Badrinath in one divine journey.',
    bestTime: 'May – June, Sep – Oct',
    packageSlug: 'chardham-yatra-package',
  },
  {
    name: 'Haridwar',
    tours: '7 Tours',
    image: img5,
    alt: 'Holy ghats on the Ganges river',
    description: 'Gateway to the gods — witness the mesmerising Ganga Aarti at Har Ki Pauri every evening.',
    bestTime: 'All year round',
    packageSlug: 'rishikesh-haridwar-getaway',
  },
]

export const cabFleet = [
  {
    name: 'Sedan (Dzire / Etios)',
    seats: '4 Seater',
    idealFor: 'Couples and small families',
    rate: '₹18 / km',
    features: ['AC', 'Music system', 'Clean interiors', 'Verified driver'],
  },
  {
    name: 'SUV (Innova / Ertiga)',
    seats: '6-7 Seater',
    idealFor: 'Families and small groups',
    rate: '₹28/22 / km',
    features: ['AC', 'Ample luggage space', 'Comfortable for hills', 'Experienced hill driver'],
  },
  {
    name: 'Tempo Traveller',
    seats: '12-17 Seater',
    idealFor: 'Large groups and yatra parties',
    rate: '₹32 / km',
    features: ['Push-back seats', 'AC', 'LCD screen', 'Group luggage capacity'],
  },
]

export const cabRoutes = [
  { route: 'Dehradun → Kedarnath (Sonprayag)', distance: '210 km', duration: '8-9 hrs' },
  { route: 'Haridwar → Badrinath', distance: '320 km', duration: '11-12 hrs' },
  { route: 'Delhi → Manali', distance: '540 km', duration: '12-13 hrs' },
  { route: 'Dehradun → Mussoorie', distance: '35 km', duration: '1.5 hrs' },
  { route: 'Rishikesh → Chopta', distance: '185 km', duration: '7 hrs' },
  { route: 'Delhi → Haridwar', distance: '220 km', duration: '5 hrs' },
]
