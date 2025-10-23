import { MapPin, Users, Clock } from 'lucide-react';
import type { HiddenGem } from '../app/data/exploreData';

interface HiddenGemCardProps {
  gem: HiddenGem;
}

export default function HiddenGemCard({ gem }: HiddenGemCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      'nature': 'bg-green-100 text-green-600',
      'heritage': 'bg-amber-100 text-amber-600',
      'art': 'bg-pink-100 text-pink-600',
      'local-culture': 'bg-indigo-100 text-indigo-600',
      'viewpoint': 'bg-blue-100 text-blue-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  const getCrowdLevelColor = (level: string) => {
    const colors = {
      'low': 'bg-green-100 text-green-600',
      'medium': 'bg-yellow-100 text-yellow-600',
      'high': 'bg-red-100 text-red-600'
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{gem.name}</h3>
          <span className={`px-3 py-1 rounded-full text-sm ${getCategoryColor(gem.category)}`}>
            {gem.category.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ')}
          </span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{gem.area} - {gem.location}</span>
        </div>

        <p className="text-gray-600 mb-4">{gem.description}</p>

        <div className="space-y-3">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>Best Time: {gem.bestTime}</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-gray-600" />
              <span className={`px-2 py-1 rounded-full text-sm ${getCrowdLevelColor(gem.crowdLevel)}`}>
                {gem.crowdLevel.charAt(0).toUpperCase() + gem.crowdLevel.slice(1)} Crowd
              </span>
            </div>
            
            <div className="text-gray-600">
              <span className="font-medium">Entry:</span> {gem.entryFee}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}