import { IndianRupee, Home, ShoppingCart } from 'lucide-react';
import type { PriceGuide } from '../app/data/neighborhoodTypes';

interface PriceGuideCardProps {
  guide: PriceGuide;
}

export default function PriceGuideCard({ guide }: PriceGuideCardProps) {
  const formatPrice = (amount: number, format: 'currency' | 'short' = 'currency') => {
    if (format === 'currency') {
      return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(amount);
    }
    return `₹${amount}K`;
  };

  const PriceLevel = ({ level }: { level: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span 
          key={i} 
          className={`h-2 w-2 rounded-full ${
            i < level ? 'bg-green-500' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{guide.area}</h3>
            <span className="text-sm text-purple-600">{guide.region}</span>
          </div>
          <div className="flex items-center gap-1">
            <IndianRupee className="w-4 h-4 text-green-500" />
            <PriceLevel level={guide.priceIndex} />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <Home className="w-4 h-4" />
              Housing
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">1 BHK Rent</span>
                <span className="font-medium">{formatPrice(guide.housingPrices.rent1BHK * 1000)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">2 BHK Rent</span>
                <span className="font-medium">{formatPrice(guide.housingPrices.rent2BHK * 1000)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Buy (per sq ft)</span>
                <span className="font-medium">{formatPrice(guide.housingPrices.buyPrice * 1000)}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <ShoppingCart className="w-4 h-4" />
              Monthly Expenses
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Meal for Two</span>
                <span className="font-medium">{formatPrice(guide.lifestyle.mealForTwo)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Monthly Groceries</span>
                <span className="font-medium">{formatPrice(guide.lifestyle.monthlyGroceries)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Utilities</span>
                <span className="font-medium">{formatPrice(guide.lifestyle.utilities)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Transport</span>
                <span className="font-medium">{formatPrice(guide.lifestyle.transport)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}