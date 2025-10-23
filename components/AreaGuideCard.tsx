import { Building2, Train, Bus, Car } from 'lucide-react';
import type { AreaGuide } from '../app/data/neighborhoodTypes';

interface AreaGuideCardProps {
  guide: AreaGuide;
}

export default function AreaGuideCard({ guide }: AreaGuideCardProps) {
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span 
          key={i}
          className={`h-2 w-2 rounded-full ${i < rating ? 'bg-purple-600' : 'bg-gray-200'}`}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{guide.name}</h3>
            <span className="text-sm text-purple-600">{guide.region}</span>
          </div>
          <Building2 className="w-6 h-6 text-purple-600" />
        </div>

        <p className="text-gray-600 mb-6">{guide.description}</p>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Highlights</h4>
            <ul className="space-y-1">
              {guide.highlights.map((highlight, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  • {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Connectivity</h4>
            <div className="flex gap-3">
              {guide.connectivity.trains.length > 0 && (
                <div className="text-purple-600" title={guide.connectivity.trains.join(', ')}>
                  <Train className="w-5 h-5" />
                </div>
              )}
              {guide.connectivity.buses && (
                <div className="text-purple-600">
                  <Bus className="w-5 h-5" />
                </div>
              )}
              {guide.connectivity.taxi && (
                <div className="text-purple-600">
                  <Car className="w-5 h-5" />
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-600 block mb-1">Dining</span>
              <StarRating rating={guide.lifestyle.dining} />
            </div>
            <div>
              <span className="text-sm text-gray-600 block mb-1">Shopping</span>
              <StarRating rating={guide.lifestyle.shopping} />
            </div>
            <div>
              <span className="text-sm text-gray-600 block mb-1">Nightlife</span>
              <StarRating rating={guide.lifestyle.nightlife} />
            </div>
            <div>
              <span className="text-sm text-gray-600 block mb-1">Culture</span>
              <StarRating rating={guide.lifestyle.culture} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}