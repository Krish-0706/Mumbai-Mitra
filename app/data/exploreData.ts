// Step 1: Define TypeScript interfaces for our data

export interface BollywoodLocation {
  id: string;
  name: string;
  location: string;
  area: string;
  movies: string[];
  description: string;
  bestTime: string;
  accessibility: 'public' | 'restricted' | 'paid-entry';
  popularityLevel: number; // 1-5 stars
}

export interface FoodSpot {
  id: string;
  name: string;
  location: string;
  area: string;
  cuisine: string[];
  specialty: string;
  priceRange: '₹' | '₹₹' | '₹₹₹';
  rating: number;
  mustTry: string[];
  description: string;
}

export interface HiddenGem {
  id: string;
  name: string;
  location: string;
  area: string;
  category: 'nature' | 'heritage' | 'art' | 'local-culture' | 'viewpoint';
  description: string;
  bestTime: string;
  crowdLevel: 'low' | 'medium' | 'high';
  entryFee: string;
}

// Step 2: Create actual data - Bollywood Locations (5 famous spots)
export const bollywoodLocations: BollywoodLocation[] = [
  {
    id: '1',
    name: 'Gateway of India',
    location: 'Apollo Bunder, Colaba',
    area: 'South Mumbai',
    movies: [ 'Dil Chahta Hai', 'Dostana'],
    description: 'Iconic monument and one of Mumbai\'s most filmed locations. Perfect backdrop for dramatic scenes.',
    bestTime: 'Early morning (6-8 AM) or late evening (6-8 PM)',
    accessibility: 'public',
    popularityLevel: 5,
  },
  {
    id: '2',
    name: 'Marine Drive',
    location: 'Netaji Subhash Chandra Bose Road',
    area: 'South Mumbai',
    movies: ['Parineeta', 'Hum Dil De Chuke Sanam', 'Kahaani', 'Baaton Baaton Mein'],
    description: 'The Queen\'s Necklace - Mumbai\'s stunning seaside promenade. Famous for romantic songs and car chases.',
    bestTime: 'Sunset (6-7 PM)',
    accessibility: 'public',
    popularityLevel: 5,
  },
  {
    id: '3',
    name: 'Bandstand Promenade',
    location: 'Bandra West',
    area: 'Western Suburbs',
    movies: ['Kal Ho Naa Ho', 'Wake Up Sid', 'Gully Boy'],
    description: 'Trendy waterfront where many celebrities live. Popular for walk-and-talk scenes.',
    bestTime: 'Evening (5-7 PM)',
    accessibility: 'public',
    popularityLevel: 4,
  },
  {
    id: '4',
    name: 'Chhatrapati Shivaji Terminus (CST)',
    location: 'CST Station',
    area: 'South Mumbai',
    movies: ['Slumdog Millionaire', 'Ra.One', 'Mumbai Meri Jaan'],
    description: 'UNESCO World Heritage Site. Gothic architecture makes it perfect for grand entry scenes.',
    bestTime: 'Early morning (6-8 AM) to avoid crowds',
    accessibility: 'public',
    popularityLevel: 5,
  },
  {
    id: '5',
    name: 'Film City (Goregaon)',
    location: 'Goregaon East',
    area: 'Western Suburbs',
    movies: ['Hundreds of films shot here'],
    description: 'Official studio complex of Bollywood. Houses multiple sets and outdoor locations.',
    bestTime: 'By appointment only',
    accessibility: 'restricted',
    popularityLevel: 5,
  },
];
export const foodSpots: FoodSpot[] = [
  {
    id: '1',
    name: 'Leopold Cafe',
    location: 'Colaba Causeway',
    area: 'South Mumbai',
    cuisine: ['Continental', 'Indian', 'Chinese'],
    specialty: 'Historic cafe featured in "Shantaram" book',
    priceRange: '₹₹',
    rating: 4.2,
    mustTry: ['Cheese Toast', 'Chicken Stroganoff', 'Cold Coffee'],
    description: 'Legendary cafe established in 1871. A must-visit for tourists and locals alike.',
  },
  {
    id: '2',
    name: 'Britannia & Co.',
    location: 'Ballard Estate',
    area: 'South Mumbai',
    cuisine: ['Parsi', 'Iranian'],
    specialty: 'Authentic Parsi cuisine',
    priceRange: '₹₹',
    rating: 4.5,
    mustTry: ['Berry Pulav', 'Dhansak', 'Caramel Custard'],
    description: 'Old-world Parsi restaurant run by the legendary Boman Kohinoor. A taste of Mumbai\'s heritage.',
  },
  {
    id: '3',
    name: 'Bademiya',
    location: 'Colaba',
    area: 'South Mumbai',
    cuisine: ['Mughlai', 'Kebabs', 'Street Food'],
    specialty: 'Late-night street food institution',
    priceRange: '₹',
    rating: 4.3,
    mustTry: ['Seekh Kebab', 'Chicken Tikka Roll', 'Mutton Biryani'],
    description: 'Iconic street food stall operating since 1946. Open till 4 AM!',
  },
  {
    id: '4',
    name: 'Cafe Madras',
    location: 'King\'s Circle, Matunga',
    area: 'Central Mumbai',
    cuisine: ['South Indian', 'Vegetarian'],
    specialty: 'Authentic South Indian filter coffee',
    priceRange: '₹',
    rating: 4.6,
    mustTry: ['Masala Dosa', 'Rava Idli', 'Filter Coffee'],
    description: 'Pure vegetarian South Indian food in the heart of Matunga\'s Little Madras.',
  },
  {
    id: '5',
    name: 'Trishna',
    location: 'Kala Ghoda, Fort',
    area: 'South Mumbai',
    cuisine: ['Seafood', 'Coastal'],
    specialty: 'Butter Garlic Crab',
    priceRange: '₹₹₹',
    rating: 4.7,
    mustTry: ['Butter Garlic Crab', 'Tandoori Prawns', 'Bombil Fry'],
    description: 'Legendary seafood restaurant famous for its crab preparations. A favorite of celebrities.',
  },
  {
    id: '6',
    name: 'Swati Snacks',
    location: 'Tardeo',
    area: 'South Mumbai',
    cuisine: ['Gujarati', 'Vegetarian', 'Snacks'],
    specialty: 'Panki and traditional Gujarati snacks',
    priceRange: '₹₹',
    rating: 4.4,
    mustTry: ['Panki', 'Khaman Dhokla', 'Puran Poli'],
    description: 'Upscale Gujarati snack joint with traditional recipes and modern ambiance.',
  },
];

// Step 4: Hidden Gems (6 lesser-known spots)
export const hiddenGems: HiddenGem[] = [
  {
    id: '1',
    name: 'Banganga Tank',
    location: 'Malabar Hill',
    area: 'South Mumbai',
    category: 'heritage',
    description: 'Ancient water tank surrounded by temples. A peaceful oasis in bustling Mumbai, dating back to 1127 AD.',
    bestTime: 'Early morning (6-9 AM)',
    crowdLevel: 'low',
    entryFee: 'Free',
  },
  {
    id: '2',
    name: 'Mahakali Caves',
    location: 'Andheri East',
    area: 'Western Suburbs',
    category: 'heritage',
    description: '19 rock-cut Buddhist caves dating to 1st century BCE. Often overlooked by tourists.',
    bestTime: 'Morning (9 AM - 12 PM)',
    crowdLevel: 'low',
    entryFee: 'Free',
  },
  {
    id: '3',
    name: 'Sassoon Dock',
    location: 'Colaba',
    area: 'South Mumbai',
    category: 'local-culture',
    description: 'Mumbai\'s oldest dock and fish market. Witness the vibrant fishing community early morning.',
    bestTime: 'Dawn (5-7 AM)',
    crowdLevel: 'medium',
    entryFee: 'Free',
  },
  {
    id: '4',
    name: 'Sanjay Gandhi National Park (Secret Trails)',
    location: 'Borivali',
    area: 'Western Suburbs',
    category: 'nature',
    description: 'Beyond Kanheri Caves, explore lesser-known trails with leopard sightings and butterfly valleys.',
    bestTime: 'Early morning (6-10 AM)',
    crowdLevel: 'low',
    entryFee: '₹50 per person',
  },
  {
    id: '5',
    name: 'Gilbert Hill',
    location: 'Andheri West',
    area: 'Western Suburbs',
    category: 'nature',
    description: '200-foot monolithic column of black basalt rock, 66 million years old. Sunset viewpoint.',
    bestTime: 'Evening (5-7 PM)',
    crowdLevel: 'low',
    entryFee: 'Free',
  },
  {
    id: '6',
    name: 'Chor Bazaar (Hidden Antique Shops)',
    location: 'Mutton Street, Bhendi Bazaar',
    area: 'South Mumbai',
    category: 'local-culture',
    description: 'The "Thieves Market" - hunt for vintage treasures, antiques, and hidden collectibles.',
    bestTime: 'Afternoon (2-6 PM)',
    crowdLevel: 'medium',
    entryFee: 'Free',
  },
];