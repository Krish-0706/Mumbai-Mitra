import { Map } from 'lucide-react';
import { hiddenGems } from '../../data/exploreData';
import HiddenGemCard from '@/components/HiddenGemCard';

export default function HiddenGemsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <Map className="w-24 h-24 text-purple-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hidden Gems</h1>
        <p className="text-xl text-gray-600">Discover Mumbai&apos;s best-kept secrets</p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {hiddenGems.map((gem) => (
          <HiddenGemCard key={gem.id} gem={gem} />
        ))}
      </div>
    </div>
  );
}