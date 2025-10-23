import { IndianRupee } from 'lucide-react';
import { priceGuides } from '@/app/data/neighborhoodData';
import FilteredPriceGuides from '@/components/FilteredPriceGuides';

export default function PriceGuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <IndianRupee className="w-24 h-24 text-purple-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Price Guide</h1>
        <p className="text-xl text-gray-600">Compare living costs across Mumbai neighborhoods</p>
      </div>

      <FilteredPriceGuides guides={priceGuides} />

      <div className="mt-12 bg-purple-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding the Price Index</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {[1, 2, 3, 4, 5].map((level) => (
            <div key={level} className="bg-white p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                {[...Array(level)].map((_, i) => (
                  <span key={i} className="h-2 w-2 rounded-full bg-green-500" />
                ))}
                {[...Array(5 - level)].map((_, i) => (
                  <span key={i} className="h-2 w-2 rounded-full bg-gray-200" />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                {level === 1 && 'Most Affordable'}
                {level === 2 && 'Budget Friendly'}
                {level === 3 && 'Moderately Priced'}
                {level === 4 && 'Premium'}
                {level === 5 && 'Luxury'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}