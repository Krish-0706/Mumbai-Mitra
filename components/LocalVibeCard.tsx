import { Users, Calendar, Sparkles } from 'lucide-react';
import type { LocalVibe } from '../app/data/neighborhoodTypes';

interface LocalVibeCardProps {
  vibe: LocalVibe;
}

export default function LocalVibeCard({ vibe }: LocalVibeCardProps) {
  const getVibeColor = (vibeType: string) => {
    const colors = {
      'Cosmopolitan': 'bg-blue-100 text-blue-600',
      'Traditional': 'bg-red-100 text-red-600',
      'Hipster': 'bg-purple-100 text-purple-600',
      'Family-Friendly': 'bg-green-100 text-green-600',
      'Business District': 'bg-gray-100 text-gray-600',
      'Student-Friendly': 'bg-yellow-100 text-yellow-600'
    };
    return colors[vibeType as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{vibe.area}</h3>
            <span className="text-sm text-purple-600">{vibe.region}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${getVibeColor(vibe.vibe)}`}>
            {vibe.vibe}
          </span>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <Users className="w-4 h-4" />
              Local Communities
            </h4>
            <div className="flex flex-wrap gap-2">
              {vibe.communities.map((community, index) => (
                <span 
                  key={index}
                  className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-sm"
                >
                  {community}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4" />
              Known For
            </h4>
            <ul className="space-y-1">
              {vibe.knownFor.map((item, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4" />
              Local Events
            </h4>
            <div className="space-y-3">
              {vibe.events.map((event, index) => (
                <div key={index} className="text-sm">
                  <span className="font-medium text-gray-900">{event.name}</span>
                  <div className="text-gray-600">
                    {event.timing} • {event.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-purple-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Local Tips</h4>
            <ul className="space-y-1">
              {vibe.localTips.map((tip, index) => (
                <li key={index} className="text-gray-600 text-sm">
                  • {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}