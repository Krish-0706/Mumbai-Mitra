export interface AreaGuide {
  id: string;
  name: string;
  region: 'South Mumbai' | 'Western Suburbs' | 'Central Suburbs' | 'Harbour Suburbs' | 'Navi Mumbai' | 'Thane';
  description: string;
  highlights: string[];
  landmarks: string[];
  connectivity: {
    trains: string[];
    buses: boolean;
    metro: boolean;
    autoRickshaw: boolean;
    taxi: boolean;
  };
  lifestyle: {
    dining: 1 | 2 | 3 | 4 | 5;
    shopping: 1 | 2 | 3 | 4 | 5;
    nightlife: 1 | 2 | 3 | 4 | 5;
    culture: 1 | 2 | 3 | 4 | 5;
  };
  imageUrl?: string;
}

export interface PriceGuide {
  id: string;
  area: string;
  region: string;
  housingPrices: {
    rent1BHK: number; // Average monthly rent for 1BHK in thousands
    rent2BHK: number; // Average monthly rent for 2BHK in thousands
    buyPrice: number; // Average price per sq ft in thousands
  };
  lifestyle: {
    mealForTwo: number; // Average cost in rupees
    monthlyGroceries: number; // Average cost in rupees for family of 2
    utilities: number; // Average monthly utilities in rupees
    transport: number; // Average monthly transport cost in rupees
  };
  priceIndex: 1 | 2 | 3 | 4 | 5; // 1 being most affordable, 5 being most expensive
}

export interface LocalVibe {
  id: string;
  area: string;
  region: string;
  vibe: 'Cosmopolitan' | 'Traditional' | 'Hipster' | 'Family-Friendly' | 'Business District' | 'Student-Friendly';
  communities: string[];
  knownFor: string[];
  bestTimeToVisit: string;
  localTips: string[];
  events: {
    name: string;
    timing: string;
    description: string;
  }[];
  imageUrl?: string;
}

// Example data export - we'll create separate data files for full datasets
export const sampleData = {
  areaGuides: [],
  priceGuides: [],
  localVibes: []
};