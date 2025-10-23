import { Camera, Film, Map, Utensils, Landmark } from 'lucide-react';
import Link from 'next/link';

export default function ExplorePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <Camera className="w-24 h-24 text-purple-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Explore Mumbai</h1>
        <p className="text-xl text-gray-600 mb-8">Discover the magic of Mumbai through our curated guides</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/explore/bollywood" className="transform transition-all hover:scale-105">
          <div className="bg-white rounded-xl p-8 shadow-lg h-full">
            <Film className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Bollywood Locations</h3>
            <p className="text-gray-600">Visit iconic film shooting spots that made movie history</p>
          </div>
        </Link>

        <Link href="/explore/food" className="transform transition-all hover:scale-105">
          <div className="bg-white rounded-xl p-8 shadow-lg h-full">
            <Utensils className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Food Spots</h3>
            <p className="text-gray-600">Discover the best street food and dining experiences</p>
          </div>
        </Link>

        <Link href="/explore/hiddengems" className="transform transition-all hover:scale-105">
          <div className="bg-white rounded-xl p-8 shadow-lg h-full">
            <Map className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Hidden Gems</h3>
            <p className="text-gray-600">Explore the city&apos;s best-kept secrets and local favorites</p>
          </div>
        </Link>
      </div>
    </div>
  );
}