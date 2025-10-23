import { Film } from 'lucide-react';
import { bollywoodLocations } from '../../data/exploreData';
import BollywoodCard from '@/components/BollywoodCard';

export default function BollywoodPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <Film className="w-24 h-24 text-purple-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Bollywood Locations</h1>
        <p className="text-xl text-gray-600">Discover Mumbai&apos;s iconic film shooting locations</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {bollywoodLocations.map((location) => (
          <BollywoodCard key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
}