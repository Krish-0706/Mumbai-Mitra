import { AreaGuide, PriceGuide, LocalVibe } from './neighborhoodTypes';

// Helper function to calculate average price index
const calculatePriceIndex = (rent1BHK: number): 1 | 2 | 3 | 4 | 5 => {
  if (rent1BHK <= 20) return 1;
  if (rent1BHK <= 30) return 2;
  if (rent1BHK <= 45) return 3;
  if (rent1BHK <= 60) return 4;
  return 5;
};

export const areaGuides: AreaGuide[] = [
  {
    id: '4',
    name: 'Andheri West',
    region: 'Western Suburbs',
    description: 'A bustling entertainment and commercial hub, Andheri West is home to film studios, corporate offices, and vibrant shopping districts.',
    highlights: [
      'Lokhandwala Complex',
      'Versova Beach',
      'Film Studios',
      'Cafes and Restaurants',
      'Shopping Markets'
    ],
    landmarks: [
      'Infiniti Mall',
      'Versova Beach',
      'Fun Republic',
      'Lokhandwala Market',
      'Celebration Club'
    ],
    connectivity: {
      trains: ['Western Line - Andheri Station'],
      buses: true,
      metro: true,
      autoRickshaw: true,
      taxi: true
    },
    lifestyle: {
      dining: 4,
      shopping: 4,
      nightlife: 5,
      culture: 3
    }
  },
  {
    id: '5',
    name: 'Lower Parel',
    region: 'South Mumbai',
    description: 'Former mill district turned luxury hub, Lower Parel is now Mumbai\'s premier business and entertainment destination with high-end malls and office complexes.',
    highlights: [
      'Premium Shopping Malls',
      'Fine Dining Restaurants',
      'Corporate Offices',
      'Nightlife Destinations',
      'Art Galleries'
    ],
    landmarks: [
      'High Street Phoenix',
      'Palladium Mall',
      'Kamala Mills',
      'Peninsula Corporate Park',
      'Todi Mills'
    ],
    connectivity: {
      trains: ['Western Line - Lower Parel Station'],
      buses: true,
      metro: false,
      autoRickshaw: false,
      taxi: true
    },
    lifestyle: {
      dining: 5,
      shopping: 5,
      nightlife: 5,
      culture: 3
    }
  },
  {
    id: '6',
    name: 'Dadar',
    region: 'Central Suburbs',
    description: 'The heart of Marathi culture in Mumbai, Dadar is known for its flower market, shopping streets, and traditional food scene.',
    highlights: [
      'Dadar Flower Market',
      'Shopping Streets',
      'Traditional Maharashtrian Food',
      'Cultural Centers',
      'Historic Temples'
    ],
    landmarks: [
      'Shivaji Park',
      'Plaza Cinema',
      'Siddhivinayak Temple',
      'Dadar Flower Market',
      'Portuguese Church'
    ],
    connectivity: {
      trains: ['Western Line - Dadar Station', 'Central Line - Dadar Station'],
      buses: true,
      metro: false,
      autoRickshaw: true,
      taxi: true
    },
    lifestyle: {
      dining: 4,
      shopping: 4,
      nightlife: 2,
      culture: 5
    }
  },
  {
    id: '1',
    name: 'Bandra West',
    region: 'Western Suburbs',
    description: 'Known as the "Queen of Suburbs", Bandra West is a vibrant neighborhood that perfectly blends traditional charm with modern lifestyle. Famous for its cafes, shopping streets, and sea-facing properties.',
    highlights: [
      'Carter Road and Bandstand Promenade',
      'Hill Road Shopping',
      'Linking Road Markets',
      'Chapel Road Art District',
      'Trendy Restaurants and Cafes'
    ],
    landmarks: [
      'Mount Mary Church',
      'Bandra Fort',
      'Bandra-Worli Sea Link',
      'St. Andrew\'s Church',
      'Ranwar Village'
    ],
    connectivity: {
      trains: ['Western Line - Bandra Station', 'Bandra Terminus'],
      buses: true,
      metro: true,
      autoRickshaw: true,
      taxi: true
    },
    lifestyle: {
      dining: 5,
      shopping: 5,
      nightlife: 5,
      culture: 4
    }
  },
  {
    id: '2',
    name: 'Colaba',
    region: 'South Mumbai',
    description: 'The southernmost neighborhood of Mumbai, Colaba is a tourist hotspot and heritage district known for its iconic architecture, luxury hotels, and bustling street markets.',
    highlights: [
      'Colaba Causeway Market',
      'Art Galleries',
      'Heritage Buildings',
      'Luxury Hotels',
      'Street Food Scene'
    ],
    landmarks: [
      'Gateway of India',
      'Taj Mahal Palace Hotel',
      'Colaba Military Station',
      'National Gallery of Modern Art',
      'Regal Cinema'
    ],
    connectivity: {
      trains: ['Harbor Line - CSMT'],
      buses: true,
      metro: false,
      autoRickshaw: false,
      taxi: true
    },
    lifestyle: {
      dining: 5,
      shopping: 4,
      nightlife: 4,
      culture: 5
    }
  },
  {
    id: '3',
    name: 'Powai',
    region: 'Central Suburbs',
    description: 'A planned neighborhood built around the Powai Lake, known for its tech parks, luxury apartments, and vibrant student life due to IIT Bombay.',
    highlights: [
      'Powai Lake',
      'Hiranandani Gardens',
      'Tech Parks',
      'International Schools',
      'Upscale Residential Complexes'
    ],
    landmarks: [
      'IIT Bombay',
      'Renaissance Hotel',
      'Galleria Shopping Complex',
      'Powai Lake Promenade',
      'D-Mart Headquarters'
    ],
    connectivity: {
      trains: ['Harbor Line - Kanjurmarg', 'Central Line - Vikhroli'],
      buses: true,
      metro: true,
      autoRickshaw: true,
      taxi: true
    },
    lifestyle: {
      dining: 4,
      shopping: 4,
      nightlife: 3,
      culture: 3
    }
  }
];

export const priceGuides: PriceGuide[] = [
  {
    id: '4',
    area: 'Andheri West',
    region: 'Western Suburbs',
    housingPrices: {
      rent1BHK: 35,
      rent2BHK: 60,
      buyPrice: 28
    },
    lifestyle: {
      mealForTwo: 1200,
      monthlyGroceries: 10000,
      utilities: 4000,
      transport: 2500
    },
    priceIndex: 4
  },
  {
    id: '5',
    area: 'Lower Parel',
    region: 'South Mumbai',
    housingPrices: {
      rent1BHK: 50,
      rent2BHK: 90,
      buyPrice: 45
    },
    lifestyle: {
      mealForTwo: 2000,
      monthlyGroceries: 15000,
      utilities: 6000,
      transport: 4000
    },
    priceIndex: 5
  },
  {
    id: '6',
    area: 'Dadar',
    region: 'Central Suburbs',
    housingPrices: {
      rent1BHK: 40,
      rent2BHK: 70,
      buyPrice: 32
    },
    lifestyle: {
      mealForTwo: 1000,
      monthlyGroceries: 12000,
      utilities: 4500,
      transport: 2000
    },
    priceIndex: 4
  },
  {
    id: '7',
    area: 'Goregaon',
    region: 'Western Suburbs',
    housingPrices: {
      rent1BHK: 30,
      rent2BHK: 50,
      buyPrice: 22
    },
    lifestyle: {
      mealForTwo: 800,
      monthlyGroceries: 9000,
      utilities: 3500,
      transport: 2500
    },
    priceIndex: 3
  },
  {
    id: '8',
    area: 'Mira-Bhayandar',
    region: 'Western Suburbs',
    housingPrices: {
      rent1BHK: 18,
      rent2BHK: 28,
      buyPrice: 12
    },
    lifestyle: {
      mealForTwo: 600,
      monthlyGroceries: 8000,
      utilities: 3000,
      transport: 3000
    },
    priceIndex: 2
  },
  {
    id: '9',
    area: 'Kurla',
    region: 'Central Suburbs',
    housingPrices: {
      rent1BHK: 25,
      rent2BHK: 40,
      buyPrice: 18
    },
    lifestyle: {
      mealForTwo: 700,
      monthlyGroceries: 8000,
      utilities: 3500,
      transport: 2000
    },
    priceIndex: 2
  },
  {
    id: '1',
    area: 'Bandra West',
    region: 'Western Suburbs',
    housingPrices: {
      rent1BHK: 45, // 45,000 per month
      rent2BHK: 85, // 85,000 per month
      buyPrice: 45 // 45,000 per sq ft
    },
    lifestyle: {
      mealForTwo: 1500,
      monthlyGroceries: 12000,
      utilities: 5000,
      transport: 3000
    },
    priceIndex: 5
  },
  {
    id: '2',
    area: 'Powai',
    region: 'Central Suburbs',
    housingPrices: {
      rent1BHK: 35,
      rent2BHK: 65,
      buyPrice: 25
    },
    lifestyle: {
      mealForTwo: 1200,
      monthlyGroceries: 10000,
      utilities: 4500,
      transport: 2500
    },
    priceIndex: 4
  },
  {
    id: '3',
    area: 'Thane West',
    region: 'Thane',
    housingPrices: {
      rent1BHK: 22,
      rent2BHK: 35,
      buyPrice: 15
    },
    lifestyle: {
      mealForTwo: 800,
      monthlyGroceries: 8000,
      utilities: 3500,
      transport: 2000
    },
    priceIndex: 3
  }
];

export const localVibes: LocalVibe[] = [
  {
    id: '3',
    area: 'Andheri West',
    region: 'Western Suburbs',
    vibe: 'Hipster',
    communities: [
      'Film Industry Professionals',
      'Media Workers',
      'Young Professionals',
      'College Students',
      'Artists'
    ],
    knownFor: [
      'Versova Beach Clean-ups',
      'Stand-up Comedy Scene',
      'Indie Music Venues',
      'Art Cafes',
      'International Cuisine'
    ],
    bestTimeToVisit: 'Evenings and weekends for the vibrant nightlife and events',
    localTips: [
      'Check out Versova Beach during sunset',
      'Visit Lokhandwala Market for street shopping',
      'Try the food trucks at Fun Republic',
      'Explore hidden cafes in Versova Village',
      'Watch performances at Prithvi Theatre'
    ],
    events: [
      {
        name: 'Mumbai Comedy Festival',
        timing: 'December',
        description: 'Week-long comedy shows across various venues'
      },
      {
        name: 'Andheri Street Food Festival',
        timing: 'January',
        description: 'Annual food festival featuring local vendors'
      },
      {
        name: 'Prithvi Theatre Festival',
        timing: 'November',
        description: 'Theatre performances and workshops'
      }
    ]
  },
  {
    id: '4',
    area: 'Lower Parel',
    region: 'South Mumbai',
    vibe: 'Business District',
    communities: [
      'Corporate Professionals',
      'Luxury Shoppers',
      'Fine Dining Enthusiasts',
      'Art Collectors',
      'Entrepreneurs'
    ],
    knownFor: [
      'High-end Shopping',
      'Rooftop Bars',
      'Art Galleries',
      'Food Festivals',
      'Corporate Events'
    ],
    bestTimeToVisit: 'Weekday evenings for rooftop bars and weekends for shopping',
    localTips: [
      'Happy hours at Todi Mills Social',
      'Sunday brunches at premium hotels',
      'Art walks in defunct mill compounds',
      'Sample street food at lunch hour',
      'Visit Phoenix Mall during sale season'
    ],
    events: [
      {
        name: 'Mumbai Wine Week',
        timing: 'February',
        description: 'Wine tasting events across premium venues'
      },
      {
        name: 'Kamala Mills Food Festival',
        timing: 'October',
        description: 'Gourmet food festival featuring top restaurants'
      },
      {
        name: 'Mill to Mall Heritage Walk',
        timing: 'First Sunday of every month',
        description: 'Guided tours of Lower Parel\'s industrial heritage'
      }
    ]
  },
  {
    id: '5',
    area: 'Dadar',
    region: 'Central Suburbs',
    vibe: 'Traditional',
    communities: [
      'Marathi Families',
      'Local Business Owners',
      'Theatre Artists',
      'Sports Enthusiasts',
      'Cultural Groups'
    ],
    knownFor: [
      'Flower Market',
      'Traditional Food',
      'Cultural Events',
      'Sports Activities',
      'Shopping Streets'
    ],
    bestTimeToVisit: 'Early mornings for flower market, evenings for street shopping',
    localTips: [
      'Visit flower market at dawn',
      'Try Maharashtrian breakfast at iconic venues',
      'Watch cricket practice at Shivaji Park',
      'Shop at Dadar Market early morning',
      'Visit during Ganesh Chaturthi'
    ],
    events: [
      {
        name: 'Ganesh Chaturthi Celebrations',
        timing: 'August/September',
        description: 'Major festivities at Siddhivinayak Temple'
      },
      {
        name: 'Maharashtra Day Events',
        timing: 'May 1st',
        description: 'Cultural performances at Shivaji Park'
      },
      {
        name: 'Dadar Food Festival',
        timing: 'December',
        description: 'Traditional Maharashtrian food festival'
      }
    ]
  },
  {
    id: '6',
    area: 'Kurla',
    region: 'Central Suburbs',
    vibe: 'Business District',
    communities: [
      'IT Professionals',
      'BPO Workers',
      'Students',
      'Local Businesses',
      'Mixed Communities'
    ],
    knownFor: [
      'BKC Business District',
      'Street Food',
      'Shopping Malls',
      'Educational Institutions',
      'Transport Hub'
    ],
    bestTimeToVisit: 'Weekdays for business activities, weekends for shopping',
    localTips: [
      'Visit Phoenix Marketcity during sales',
      'Try street food at LTT area',
      'Experience BKC food truck festival',
      'Shop at Kurla West Market',
      'Visit during business events'
    ],
    events: [
      {
        name: 'BKC Food Truck Festival',
        timing: 'Every weekend',
        description: 'Various food trucks serving diverse cuisine'
      },
      {
        name: 'Tech Meetups',
        timing: 'Monthly',
        description: 'Technology events at BKC'
      },
      {
        name: 'Phoenix Marketcity Events',
        timing: 'Throughout the year',
        description: 'Shopping festivals and cultural events'
      }
    ]
  },
  {
    id: '1',
    area: 'Bandra West',
    region: 'Western Suburbs',
    vibe: 'Hipster',
    communities: [
      'Artists and Creators',
      'Young Professionals',
      'Entertainment Industry',
      'Expatriates',
      'Old Bandra Families'
    ],
    knownFor: [
      'Street Art',
      'Indie Music Scene',
      'Cafe Culture',
      'Christmas Celebrations',
      'Food Pop-ups'
    ],
    bestTimeToVisit: 'Evening hours and weekends for the vibrant street life and cafe scene',
    localTips: [
      'Visit Chapel Road for amazing street art',
      'Try the local East Indian cuisine',
      'Shop at Linking Road during morning hours',
      'Visit Mount Mary Fair during September',
      'Explore the hidden Portuguese-style villages'
    ],
    events: [
      {
        name: 'Celebrate Bandra',
        timing: 'November',
        description: 'Annual cultural festival celebrating art, music, and food'
      },
      {
        name: 'Mount Mary Fair',
        timing: 'September',
        description: 'Week-long fair during the Bandra Feast'
      }
    ]
  },
  {
    id: '2',
    area: 'Matunga',
    region: 'Central Suburbs',
    vibe: 'Traditional',
    communities: [
      'South Indian Community',
      'Academic Professionals',
      'Old Mumbai Families',
      'College Students'
    ],
    knownFor: [
      'South Indian Cuisine',
      'Education Institutions',
      'Traditional Markets',
      'Cultural Activities',
      'Coffee Houses'
    ],
    bestTimeToVisit: 'Early mornings for authentic South Indian breakfast experience',
    localTips: [
      'Visit the Matunga Market for fresh produce',
      'Try filter coffee at iconic establishments',
      'Walk through the planned colonial-era layouts',
      'Visit during Margazhi music season',
      'Experience the Sunday book market'
    ],
    events: [
      {
        name: 'Margazhi Music Festival',
        timing: 'December-January',
        description: 'Classical music performances in various venues'
      }
    ]
  }
];