import { Utensils } from 'lucide-react';
import { foodSpots } from '../../data/exploreData';
import FoodSpotCard from '@/components/FoodSpotCard';

export default function FoodPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <Utensils className="w-24 h-24 text-purple-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Food Spots Guide</h1>
        <p className="text-xl text-gray-600">Explore Mumbai&apos;s culinary delights</p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {foodSpots.map((spot) => (
          <FoodSpotCard key={spot.id} spot={spot} />
        ))}
      </div>
    </div>
  );
}