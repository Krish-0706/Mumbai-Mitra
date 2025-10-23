'use client';

import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import AreaGuideCard from './AreaGuideCard';
import type { AreaGuide } from '../app/data/neighborhoodTypes';

const regions = ['All', 'South Mumbai', 'Western Suburbs', 'Central Suburbs', 'Harbour Suburbs', 'Navi Mumbai', 'Thane'];
const lifestyleFilters = ['dining', 'shopping', 'nightlife', 'culture'] as const;

interface FilteredAreaGuidesProps {
  guides: AreaGuide[];
}

export default function FilteredAreaGuides({ guides }: FilteredAreaGuidesProps) {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedLifestyle, setSelectedLifestyle] = useState<typeof lifestyleFilters[number] | 'all'>('all');
  const [minRating, setMinRating] = useState(0);

  const filteredGuides = guides.filter(guide => {
    if (selectedRegion !== 'All' && guide.region !== selectedRegion) return false;
    if (selectedLifestyle !== 'all' && guide.lifestyle[selectedLifestyle] < minRating) return false;
    return true;
  });

  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <SlidersHorizontal className="w-5 h-5 text-purple-600" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Lifestyle Feature</label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              value={selectedLifestyle}
              onChange={(e) => setSelectedLifestyle(e.target.value as typeof lifestyleFilters[number] | 'all')}
            >
              <option value="all">All Features</option>
              {lifestyleFilters.map(filter => (
                <option key={filter} value={filter}>
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
            >
              {[0, 1, 2, 3, 4, 5].map(rating => (
                <option key={rating} value={rating}>
                  {rating === 0 ? 'Any Rating' : `${rating}+ Stars`}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredGuides.map((guide) => (
          <AreaGuideCard key={guide.id} guide={guide} />
        ))}
      </div>

      {filteredGuides.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No areas match your selected filters.</p>
        </div>
      )}
    </div>
  );
}