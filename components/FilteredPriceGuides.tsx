'use client';

import { useState } from 'react';
import { SlidersHorizontal, SortAsc, SortDesc } from 'lucide-react';
import PriceGuideCard from './PriceGuideCard';
import type { PriceGuide } from '../app/data/neighborhoodTypes';

interface FilteredPriceGuidesProps {
  guides: PriceGuide[];
}

export default function FilteredPriceGuides({ guides }: FilteredPriceGuidesProps) {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('priceIndex');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const regions = ['All', ...new Set(guides.map(g => g.region))];
  
  const filteredGuides = guides.filter(guide => {
    if (selectedRegion !== 'All' && guide.region !== selectedRegion) return false;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      if (guide.housingPrices.rent1BHK < min || guide.housingPrices.rent1BHK > max) return false;
    }
    return true;
  }).sort((a, b) => {
    let comparison = 0;
    if (sortBy === 'priceIndex') {
      comparison = a.priceIndex - b.priceIndex;
    } else if (sortBy === 'rent') {
      comparison = a.housingPrices.rent1BHK - b.housingPrices.rent1BHK;
    } else if (sortBy === 'buy') {
      comparison = a.housingPrices.buyPrice - b.housingPrices.buyPrice;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <SlidersHorizontal className="w-5 h-5 text-purple-600" />
          <h2 className="text-lg font-semibold">Filters & Sorting</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range (1BHK)</label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="all">All Ranges</option>
              <option value="15-25">₹15K - ₹25K</option>
              <option value="25-35">₹25K - ₹35K</option>
              <option value="35-45">₹35K - ₹45K</option>
              <option value="45-100">₹45K+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="priceIndex">Price Index</option>
              <option value="rent">Rent (1BHK)</option>
              <option value="buy">Buy Price</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
            <button
              className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50"
              onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
            >
              {sortOrder === 'asc' ? (
                <>
                  <SortAsc className="w-4 h-4" />
                  Low to High
                </>
              ) : (
                <>
                  <SortDesc className="w-4 h-4" />
                  High to Low
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredGuides.map((guide) => (
          <PriceGuideCard key={guide.id} guide={guide} />
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