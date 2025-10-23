import { Star, MapPin, IndianRupee, Utensils } from 'lucide-react';
import type { FoodSpot } from '../app/data/exploreData';

interface FoodSpotCardProps {
  spot: FoodSpot;
}

export default function FoodSpotCard({ spot }: FoodSpotCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{spot.name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-gray-600">{spot.rating}</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{spot.area} - {spot.location}</span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-green-600">{spot.priceRange}</span>
          <span>•</span>
          <div className="flex flex-wrap gap-1">
            {spot.cuisine.map((type, index) => (
              <span 
                key={index}
                className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-sm"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        <p className="text-gray-600 mb-4">{spot.description}</p>

        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Must Try:</h4>
            <div className="flex flex-wrap gap-2">
              {spot.mustTry.map((item, index) => (
                <span 
                  key={index}
                  className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  <Utensils className="w-3 h-3" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}