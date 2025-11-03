'use client';

import { useEffect, useState } from 'react';
import { Cloud, Droplets, Wind, Thermometer, AlertTriangle, Navigation2, Clock, TrendingUp, TrendingDown, MapPin, Car, Train as TrainIcon, Umbrella, Sun } from 'lucide-react';
import { trafficHotspots, commuteTimings, weatherTips, monsoonAlerts, mumbaiAreas } from '@/app/data/weatherTrafficData';

export default  function WeatherPage() {
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [currentSeason] = useState<'summer' | 'monsoon' | 'winter'>('winter'); // Can be dynamic
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [aqi, setAqi] = useState<{ index: number; level: string } | null>(null);

  interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
}
useEffect(() => {
  async function fetchWeather() {
    try {
      // Call YOUR API route instead of OpenWeather directly
      const res = await fetch('/api/weather?city=Mumbai');
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch weather");
      }

      const currentWeather: WeatherData = {
        temperature: Math.round(data.main.temp),
        condition: data.weather[0].main,
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed),
      };

      setWeather(currentWeather);
    } catch (err) {
      console.error(err);
      setError("Could not load weather data");
    }
  }

  fetchWeather();
}, []); // runs once on component mount
  // Mock current weather data for demonstration
   useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => setError(err.message)
      );
    } else {
      setError("Geolocation not supported by your browser");
    }
  }, []);


  // Fetch AQI based on location if available; fallback to Mumbai city
  useEffect(() => {
    async function fetchAqi() {
      try {
        let url = '/api/aqi';
        if (location?.lat != null && location?.lon != null) {
          url = `/api/aqi?lat=${location.lat}&lon=${location.lon}`;
        } else {
          url = '/api/aqi?city=Mumbai';
        }

        const res = await fetch(url);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || 'Failed to fetch AQI');
        }

        setAqi({ index: data.index, level: data.level });
      } catch (err) {
        console.error(err);
        setError((prev) => prev ?? 'Could not load AQI data');
      }
    }

    fetchAqi();
  }, [location]);


  const currentWeather = {
    temperature: weather?.temperature,
    condition: weather?.condition,
    humidity: weather?.humidity,
    windSpeed: weather?.windSpeed,
    aqiLevel: aqi?.level ?? '—',
    aqi: aqi?.index 
  };

  const filteredHotspots = selectedZone === 'all' 
    ? trafficHotspots 
    : trafficHotspots.filter(h => h.area === selectedZone);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-orange-500 bg-orange-50';
      case 'low': return 'border-green-500 bg-green-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 p-4 rounded-2xl shadow-xl mb-4">
          <Cloud className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Weather & Traffic
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real-time conditions and traffic updates to plan your Mumbai commute better
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Weather Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Current Weather */}
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 shadow-lg text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Mumbai Weather</h2>
              <Cloud className="w-8 h-8" />
            </div>
            
            <div className="text-center py-4">
              <div className="text-6xl font-bold mb-2">{currentWeather.temperature}°C</div>
              <div className="text-lg opacity-90">{currentWeather.condition}</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/20 rounded-lg p-3">
                <Droplets className="w-5 h-5 mb-1" />
                <div className="text-sm opacity-90">Humidity</div>
                <div className="text-lg font-bold">{currentWeather.humidity}%</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <Wind className="w-5 h-5 mb-1" />
                <div className="text-sm opacity-90">Wind</div>
                <div className="text-lg font-bold">{currentWeather.windSpeed} km/h</div>
              </div>
            </div>
          </div>

          {/* Air Quality */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Air Quality</h3>
              <Wind className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">{currentWeather.aqi ?? '—'}</div>
              <div className="text-sm text-gray-600">AQI - {currentWeather.aqiLevel}</div>
              <div className="mt-4 text-xs text-gray-500">
                {currentWeather.aqiLevel === "Fair" && 'Air quality is acceptable.'}
                {currentWeather.aqiLevel === 'Good' && 'Air quality is satisfactory.' }
                {currentWeather.aqiLevel === 'Moderate' && 'Air quality is acceptable.' }
                {currentWeather.aqiLevel === 'Poor' && 'Sensitive groups may experience health effects.'}
                {currentWeather.aqiLevel === 'Very Poor' && 'Health alert: everyone may experience health effects.'}
                {currentWeather.aqiLevel === 'Severe' && 'Health warnings of emergency conditions.'}
              </div>
            </div>
          </div>

          {/* Seasonal Tips */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border-2 border-purple-200">
            <div className="flex items-center space-x-2 mb-4">
              {currentSeason === 'summer' && <Sun className="w-6 h-6 text-orange-600" />}
              {currentSeason === 'monsoon' && <Umbrella className="w-6 h-6 text-blue-600" />}
              {currentSeason === 'winter' && <Thermometer className="w-6 h-6 text-cyan-600" />}
              <h3 className="text-xl font-bold text-gray-900 capitalize">{currentSeason} Season</h3>
            </div>
            <div className="text-sm text-gray-600 mb-3">
              <strong>{weatherTips[currentSeason].months}</strong> • {weatherTips[currentSeason].temperature}
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              {weatherTips[currentSeason].tips.map((tip, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Traffic Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Monsoon Alerts */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
              <h2 className="text-xl font-bold text-gray-900">Monsoon Alerts</h2>
            </div>
            <div className="space-y-2">
              {monsoonAlerts.map((alert, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                  <span className="text-yellow-600 mt-0.5">⚠</span>
                  <span>{alert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best/Worst Commute Times */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Best Times */}
            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingDown className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-bold text-gray-900">Best Times to Travel</h3>
              </div>
              <div className="space-y-3">
                {commuteTimings.bestTimes.map((timing, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3">
                    <div className="font-bold text-green-700 flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{timing.time}</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{timing.reason}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Worst Times */}
            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-bold text-gray-900">Avoid These Times</h3>
              </div>
              <div className="space-y-3">
                {commuteTimings.worstTimes.map((timing, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3">
                    <div className="font-bold text-red-700 flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{timing.time}</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{timing.reason}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Traffic Hotspots */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Car className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Traffic Hotspots</h2>
              </div>
              
              {/* Zone Filter */}
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
              >
                <option value="all">All Zones</option>
                <option value="South">South Mumbai</option>
                <option value="Central">Central</option>
                <option value="Western">Western</option>
                <option value="Eastern">Eastern</option>
              </select>
            </div>

            <div className="space-y-4">
              {filteredHotspots.map((hotspot) => (
                <div key={hotspot.id} className={`border-l-4 rounded-lg p-4 ${getSeverityColor(hotspot.severity)}`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <MapPin className="w-5 h-5 text-gray-600" />
                        <h3 className="font-bold text-gray-900">{hotspot.location}</h3>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <Clock className="w-4 h-4" />
                        <span>{hotspot.peakTime}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getSeverityBadge(hotspot.severity)}`}>
                      {hotspot.severity.toUpperCase()}
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 mb-3">{hotspot.tips}</p>

                  <div className="bg-white rounded-lg p-3">
                    <div className="text-xs font-semibold text-gray-600 mb-2">Alternative Routes:</div>
                    <div className="flex flex-wrap gap-2">
                      {hotspot.alternatives.map((alt, idx) => (
                        <span key={idx} className="inline-flex items-center space-x-1 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          <Navigation2 className="w-3 h-3" />
                          <span>{alt}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}