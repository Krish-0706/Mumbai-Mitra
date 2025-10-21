import { Cloud } from 'lucide-react';

export default function WeatherPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <Cloud className="w-24 h-24 text-cyan-600 mx-auto mb-6" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Weather & Traffic</h1>
      <p className="text-xl text-gray-600 mb-8">Coming in Day 3! ☁️</p>
      <div className="bg-white rounded-xl p-8 shadow-lg max-w-md mx-auto">
        <h3 className="font-bold text-lg mb-4">Features to Build:</h3>
        <ul className="text-left space-y-2 text-gray-700">
          <li>✓ Real-time weather data</li>
          <li>✓ 7-day forecast</li>
          <li>✓ Traffic hotspots</li>
          <li>✓ Best/worst commute times</li>
          <li>✓ Monsoon alerts</li>
        </ul>
      </div>
    </div>
  );
}