import Link from 'next/link';
import { Train, Cloud, Camera, Utensils, MapPin, Building2, TrendingUp, Users, Clock, Navigation } from 'lucide-react';

export default function Home() {
  const utilityFeatures = [
    { 
      icon: Train, 
      title: 'Local Train Guide', 
      desc: 'Routes, fares & schedules',
      color: 'from-blue-500 to-blue-600',
      href: '/utility/trains'
    },
    { 
      icon: Cloud, 
      title: 'Weather & Traffic', 
      desc: 'Real-time conditions',
      color: 'from-cyan-500 to-cyan-600',
      href: '/utility/weather'
    },
  ];

  const exploreFeatures = [
    { 
      icon: Camera, 
      title: 'Bollywood Spots', 
      desc: 'Famous shooting locations',
      color: 'from-purple-500 to-purple-600',
      href: '/explore'
    },
    { 
      icon: Utensils, 
      title: 'Food Havens', 
      desc: 'Must-try local eateries',
      color: 'from-orange-500 to-orange-600',
      href: '/explore'
    },
    { 
      icon: MapPin, 
      title: 'Hidden Gems', 
      desc: 'Undiscovered treasures',
      color: 'from-green-500 to-green-600',
      href: '/explore'
    },
  ];

  const neighborhoodFeatures = [
    { 
      icon: Building2, 
      title: 'Area Guides', 
      desc: 'Detailed neighborhood info',
      color: 'from-indigo-500 to-indigo-600',
      href: '/neighborhoods'
    },
    { 
      icon: TrendingUp, 
      title: 'Price Insights', 
      desc: 'Rent, food & transport costs',
      color: 'from-pink-500 to-pink-600',
      href: '/neighborhoods'
    },
    { 
      icon: Users, 
      title: 'Local Vibes', 
      desc: 'Culture & community',
      color: 'from-teal-500 to-teal-600',
      href: '/neighborhoods'
    },
  ];

  const quickStats = [
    { label: 'Train Stations', value: '150+', icon: Train },
    { label: 'Areas Covered', value: '35+', icon: MapPin },
    { label: 'Daily Updates', value: 'Live', icon: Clock },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-12">
          <div className="inline-block">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-2xl shadow-xl mb-4 inline-block">
              <Navigation className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Welcome to <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Mumbai Mitra</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Your all-in-one companion for navigating the City of Dreams. From local trains to hidden gems, we've got Mumbai covered.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8">
            {quickStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                  <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Utility Hub Section */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <Train className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">Utility Hub</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {utilityFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={idx}
                  href={feature.href}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-200"
                >
                  <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                  <div className="mt-4 text-blue-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all">
                    <span>Explore</span>
                    <span>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Explore Mumbai Section */}
        <section className="space-y-6">
          <div className="flex items-center space-x-3">
            <Camera className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl font-bold text-gray-900">Explore Mumbai</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={idx}
                  href={feature.href}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-200"
                >
                  <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                  <div className="mt-4 text-purple-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all">
                    <span>Discover</span>
                    <span>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="space-y-6 pb-12">
          <div className="flex items-center space-x-3">
            <Building2 className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-900">Neighborhoods</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoodFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={idx}
                  href={feature.href}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-indigo-200"
                >
                  <div className={`bg-gradient-to-br ${feature.color} p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                  <div className="mt-4 text-indigo-600 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all">
                    <span>Browse</span>
                    <span>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}