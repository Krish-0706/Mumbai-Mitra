import { Building2 } from 'lucide-react';

export default function NeighborhoodsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <Building2 className="w-24 h-24 text-indigo-600 mx-auto mb-6" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Neighborhoods</h1>
      <p className="text-xl text-gray-600 mb-8">Coming in Day 5! 🏘️</p>
      <div className="bg-white rounded-xl p-8 shadow-lg max-w-md mx-auto">
        <h3 className="font-bold text-lg mb-4">Features to Build:</h3>
        <ul className="text-left space-y-2 text-gray-700">
          <li>✓ Area guides (Bandra, Andheri, etc.)</li>
          <li>✓ Price comparisons (rent, food, transport)</li>
          <li>✓ Amenities info</li>
          <li>✓ Neighborhood vibes</li>
          <li>✓ Compare areas tool</li>
        </ul>
      </div>
    </div>
  );
}