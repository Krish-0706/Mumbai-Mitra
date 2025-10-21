import Link from 'next/link';
import { Train, Cloud, Navigation } from 'lucide-react';

export default function UtilityPage() {
  const utilities = [
    {
      icon: Train,
      title: 'Local Train Guide',
      description: 'Calculate fares, plan routes, check schedules and frequencies',
      color: 'from-blue-500 to-blue-600',
      href: '/utility/trains',
      available: true,
    },
    {
      icon: Cloud,
      title: 'Weather & Traffic',
      description: 'Real-time weather updates and traffic hotspots across Mumbai',
      color: 'from-cyan-500 to-cyan-600',
      href: '/utility/weather',
      available: false,
      comingSoon: 'Day 3',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-2xl shadow-xl mb-4">
          <Navigation className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Utility Hub
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Essential tools to navigate Mumbai with ease. From trains to weather, everything you need in one place.
        </p>
      </div>

      {/* Utility Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {utilities.map((utility, idx) => {
          const Icon = utility.icon;
          return (
            <Link
              key={idx}
              href={utility.href}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-blue-200 ${
                !utility.available ? 'opacity-75 cursor-not-allowed pointer-events-none' : ''
              }`}
            >
              <div className={`bg-gradient-to-br ${utility.color} p-6 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform`}>
                <Icon className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{utility.title}</h2>
              <p className="text-gray-600 mb-4">{utility.description}</p>
              
              {utility.available ? (
                <div className="text-blue-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all">
                  <span>Open Tool</span>
                  <span>→</span>
                </div>
              ) : (
                <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg inline-block text-sm font-semibold">
                  Coming {utility.comingSoon}
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}