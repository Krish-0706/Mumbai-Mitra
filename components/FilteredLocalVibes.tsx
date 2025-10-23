'use client';

import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import LocalVibeCard from './LocalVibeCard';
import type { LocalVibe } from '../app/data/neighborhoodTypes';

interface FilteredLocalVibesProps {
  vibes: LocalVibe[];
}

export default function FilteredLocalVibes({ vibes }: FilteredLocalVibesProps) {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedVibe, setSelectedVibe] = useState('All');
  const [eventType, setEventType] = useState('All');

  const regions = ['All', ...new Set(vibes.map(v => v.region))];
  const vibeTypes = ['All', ...new Set(vibes.map(v => v.vibe))];
  
  // Collect all event types from the data
  const allEvents = vibes.flatMap(v => v.events.map(e => e.name));
  const uniqueEventTypes = ['All', ...new Set(allEvents)];

  const filteredVibes = vibes.filter(vibe => {
    if (selectedRegion !== 'All' && vibe.region !== selectedRegion) return false;
    if (selectedVibe !== 'All' && vibe.vibe !== selectedVibe) return false;
    if (eventType !== 'All' && !vibe.events.some(e => e.name.includes(eventType))) return false;
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Vibe Type</label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              value={selectedVibe}
              onChange={(e) => setSelectedVibe(e.target.value)}
            >
              {vibeTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            >
              {uniqueEventTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredVibes.map((vibe) => (
          <LocalVibeCard key={vibe.id} vibe={vibe} />
        ))}
      </div>

      {filteredVibes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No areas match your selected filters.</p>
        </div>
      )}
    </div>
  );
}