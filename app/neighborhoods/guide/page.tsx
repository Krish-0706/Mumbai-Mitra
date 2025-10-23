import { MapPin, SlidersHorizontal } from 'lucide-react';
import { areaGuides } from '@/app/data/neighborhoodData';
import AreaGuideCard from '@/components/AreaGuideCard';

const regions = ['All', 'South Mumbai', 'Western Suburbs', 'Central Suburbs', 'Harbour Suburbs', 'Navi Mumbai', 'Thane'];
const lifestyleFilters = ['dining', 'shopping', 'nightlife', 'culture'] as const;

export default function GuidePages() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <MapPin className="w-24 h-24 text-purple-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Area Guides</h1>
        <p className="text-xl text-gray-600">Explore Mumbai's diverse neighborhoods</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {areaGuides.map((guide) => (
          <AreaGuideCard key={guide.id} guide={guide} />
        ))}
      </div>
    </div>
  );
}