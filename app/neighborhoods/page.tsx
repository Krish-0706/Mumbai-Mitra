import { Building2, MapPin, IndianRupee, Users } from 'lucide-react';
import Link from 'next/link';

export default function NeighborhoodsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <Building2 className="w-24 h-24 text-purple-600 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Mumbai Neighborhoods</h1>
        <p className="text-xl text-gray-600">Find your perfect area in the city</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Link href="/neighborhoods/guide" className="transform transition-all hover:scale-105">
          <div className="bg-white rounded-xl p-8 shadow-lg h-full">
            <MapPin className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Area Guides</h3>
            <p className="text-gray-600">Detailed guides to Mumbai&apos;s top neighborhoods, from South Mumbai to the suburbs</p>
          </div>
        </Link>

        <Link href="/neighborhoods/price" className="transform transition-all hover:scale-105">
          <div className="bg-white rounded-xl p-8 shadow-lg h-full">
            <IndianRupee className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Price Guide</h3>
            <p className="text-gray-600">Compare living costs across different areas including rent, food, and transport</p>
          </div>
        </Link>

        <Link href="/neighborhoods/local" className="transform transition-all hover:scale-105">
          <div className="bg-white rounded-xl p-8 shadow-lg h-full">
            <Users className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="font-bold text-lg mb-2">Local Vibes</h3>
            <p className="text-gray-600">Discover the unique character and community of each neighborhood</p>
          </div>
        </Link>
      </div>

      <div className="mt-12 bg-purple-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Mumbai Mitra?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="font-bold text-purple-600 text-4xl mb-2">25+</div>
            <p className="text-gray-600">Neighborhoods Covered</p>
          </div>
          <div className="text-center">
            <div className="font-bold text-purple-600 text-4xl mb-2">100%</div>
            <p className="text-gray-600">Verified Information</p>
          </div>
          <div className="text-center">
            <div className="font-bold text-purple-600 text-4xl mb-2">24/7</div>
            <p className="text-gray-600">Updated Prices</p>
          </div>
          <div className="text-center">
            <div className="font-bold text-purple-600 text-4xl mb-2">1000+</div>
            <p className="text-gray-600">Local Insights</p>
          </div>
        </div>
      </div>
    </div>
  );
}