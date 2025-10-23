import { Star, Clock, MapPin, Film } from 'lucide-react';
import type { BollywoodLocation } from '../app/data/exploreData';

interface BollywoodCardProps {
  location: BollywoodLocation;
}

export default function BollywoodCard({ location }: BollywoodCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{location.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600">{location.popularityLevel}</span>
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location.area} - {location.location}</span>
        </div>

        <p className="text-gray-600 mb-4">{location.description}</p>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>Best Time: {location.bestTime}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Film className="w-4 h-4 mr-2" />
            <div className="flex flex-wrap gap-2">
              {location.movies.map((movie, index) => (
                <span 
                  key={index}
                  className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm"
                >
                  {movie}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 inline-block">
            <span className={`
              px-3 py-1 rounded-full text-sm
              ${location.accessibility === 'public' ? 'bg-green-100 text-green-600' : ''}
              ${location.accessibility === 'restricted' ? 'bg-yellow-100 text-yellow-600' : ''}
              ${location.accessibility === 'paid-entry' ? 'bg-blue-100 text-blue-600' : ''}
            `}>
              {location.accessibility.charAt(0).toUpperCase() + location.accessibility.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}