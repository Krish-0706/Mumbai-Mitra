import { Users } from 'lucide-react';
import { localVibes } from '@/app/data/neighborhoodData';
import FilteredLocalVibes from '@/components/FilteredLocalVibes';

export default function LocalVibePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <Users className="w-24 h-24 text-purple-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Local Vibes</h1>
        <p className="text-xl text-gray-600">Experience the unique character of Mumbai&apos;s neighborhoods</p>
      </div>

      <FilteredLocalVibes vibes={localVibes} />

      <div className="mt-12 bg-purple-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Neighborhood Vibes Guide</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              type: 'Cosmopolitan',
              description: 'International atmosphere, diverse dining, modern lifestyle'
            },
            {
              type: 'Traditional',
              description: 'Cultural heritage, local markets, authentic experiences'
            },
            {
              type: 'Hipster',
              description: 'Art scenes, indie cafes, creative communities'
            },
            {
              type: 'Family-Friendly',
              description: 'Parks, schools, safe environment, community feel'
            },
            {
              type: 'Business District',
              description: 'Corporate offices, fine dining, upscale amenities'
            },
            {
              type: 'Student-Friendly',
              description: 'Affordable dining, vibrant nightlife, educational institutions'
            }
          ].map((vibe) => (
            <div key={vibe.type} className="bg-white p-4 rounded-lg">
              <span className={`inline-block px-3 py-1 rounded-full text-sm mb-2 
                ${vibe.type === 'Cosmopolitan' && 'bg-blue-100 text-blue-600'}
                ${vibe.type === 'Traditional' && 'bg-red-100 text-red-600'}
                ${vibe.type === 'Hipster' && 'bg-purple-100 text-purple-600'}
                ${vibe.type === 'Family-Friendly' && 'bg-green-100 text-green-600'}
                ${vibe.type === 'Business District' && 'bg-gray-100 text-gray-600'}
                ${vibe.type === 'Student-Friendly' && 'bg-yellow-100 text-yellow-600'}
              `}>
                {vibe.type}
              </span>
              <p className="text-sm text-gray-600">{vibe.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}