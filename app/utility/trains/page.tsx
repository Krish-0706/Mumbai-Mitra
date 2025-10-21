'use client';

import { useState, useEffect } from 'react';
import { Train, ArrowRight, Clock, IndianRupee, TrendingUp, MapPin, Zap, Users, AlertCircle, Radio } from 'lucide-react';
import { westernLine, centralLine, harbourLine, getAllStations, Station, trainFrequency } from '@/app/data/trainData';
import { calculateFare, calculateTravelTime, calculateDistance, getPeakHourInfo, formatTime, formatDistance,  } from '@/app/lib/utils';
import { isPeakHour } from '@/app/lib/utils';

export default function TrainsPage() {
  const [selectedLine, setSelectedLine] = useState<'Western' | 'Central' | 'Harbour'>('Western');
  const [fromStation, setFromStation] = useState<string>('');
  const [toStation, setToStation] = useState<string>('');
  const [classType, setClassType] = useState<'firstClass' | 'secondClass'>('secondClass');
  const [showResults, setShowResults] = useState(false);

  const lines = [
    { name: 'Western', color: 'blue', data: westernLine },
    { name: 'Central', color: 'orange', data: centralLine },
    { name: 'Harbour', color: 'green', data: harbourLine },
  ];

  const currentLine = lines.find(l => l.name === selectedLine);
  const filteredStations = currentLine?.data.stations || [];

  const calculateRoute = () => {
    if (fromStation && toStation && fromStation !== toStation) {
      setShowResults(true);
    }
  };

  const getFromStationData = () => {
    return filteredStations.find(s => s.id === fromStation);
  };

  const getToStationData = () => {
    return filteredStations.find(s => s.id === toStation);
  };

  const getRouteDetails = () => {
    const from = getFromStationData();
    const to = getToStationData();
    
    if (!from || !to) return null;

    const fare = calculateFare(from, to, classType);
    const travelTime = calculateTravelTime(from, to, filteredStations);
    const distance = calculateDistance(from, to);
    const fromIndex = filteredStations.findIndex(s => s.id === from.id);
    const toIndex = filteredStations.findIndex(s => s.id === to.id);
    const stopsCount = Math.abs(toIndex - fromIndex);
    const isPeak = isPeakHour();
    const frequency = isPeak ? trainFrequency.peak.slow : trainFrequency.nonPeak.slow;

    return {
      fare,
      travelTime,
      distance,
      stopsCount,
      isPeak,
      frequency,
      direction: fromIndex < toIndex ? 'Northbound' : 'Southbound'
    };
  };

  const routeDetails = showResults ? getRouteDetails() : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-2xl shadow-xl mb-4">
          <Train className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Mumbai Local Train Guide
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Plan your journey across Mumbai's lifeline. Calculate fares, check routes, and get real-time frequency info.
        </p>
      </div>

      {/* Peak Hour Alert */}
      {isPeakHour() && (
        <div className="mb-8 bg-orange-50 border-2 border-orange-200 rounded-xl p-4 flex items-start space-x-3">
          <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-orange-900">Peak Hours Active</h3>
            <p className="text-orange-700 text-sm">
              Trains are more frequent but expect heavy crowds. Ladies' compartments recommended for women travelers.
            </p>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Route Calculator */}
        <div className="lg:col-span-2 space-y-6">
          {/* Line Selection */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span>Select Train Line</span>
            </h2>
            
            <div className="grid grid-cols-3 gap-4">
              {lines.map((line) => (
                <button
                  key={line.name}
                  onClick={() => {
                    setSelectedLine(line.name as 'Western' | 'Central' | 'Harbour');
                    setFromStation('');
                    setToStation('');
                    setShowResults(false);
                  }}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedLine === line.name
                      ? `border-${line.color}-600 bg-${line.color}-50`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br ${
                    line.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    line.color === 'orange' ? 'from-orange-500 to-orange-600' :
                    'from-green-500 to-green-600'
                  } flex items-center justify-center`}>
                    <Train className="w-6 h-6 text-white" />
                  </div>
                  <div className={`font-bold ${
                    selectedLine === line.name ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {line.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {line.data.stations.length} stations
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Station Selection */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan Your Journey</h2>
            
            <div className="space-y-4">
              {/* From Station */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From Station
                </label>
                <select
                  value={fromStation}
                  onChange={(e) => {
                    setFromStation(e.target.value);
                    setShowResults(false);
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                >
                  <option value="">Select starting station</option>
                  {filteredStations.map((station:Station) => (
                    <option key={station.id} value={station.id}>
                      {station.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Arrow Icon */}
              <div className="flex justify-center">
                <div className="bg-blue-100 p-2 rounded-full">
                  <ArrowRight className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* To Station */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  To Station
                </label>
                <select
                  value={toStation}
                  onChange={(e) => {
                    setToStation(e.target.value);
                    setShowResults(false);
                  }}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none transition-colors"
                >
                  <option value="">Select destination station</option>
                  {filteredStations.map((station:Station) => (
                    <option key={station.id} value={station.id} disabled={station.id === fromStation}>
                      {station.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Class Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setClassType('secondClass')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      classType === 'secondClass'
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="font-bold">Second Class</div>
                    <div className="text-xs text-gray-500">Most affordable</div>
                  </button>
                  <button
                    onClick={() => setClassType('firstClass')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      classType === 'firstClass'
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Zap className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="font-bold">First Class</div>
                    <div className="text-xs text-gray-500">Less crowded</div>
                  </button>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateRoute}
                disabled={!fromStation || !toStation || fromStation === toStation}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Calculate Route
              </button>
            </div>
          </div>

          {/* Results */}
          {showResults && routeDetails && (
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg border-2 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                <span>Journey Details</span>
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <IndianRupee className="w-8 h-8 text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">₹{routeDetails.fare}</div>
                  <div className="text-sm text-gray-600">{classType === 'firstClass' ? 'First Class' : 'Second Class'}</div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md">
                  <MapPin className="w-8 h-8 text-purple-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{formatDistance(routeDetails.distance)}</div>
                  <div className="text-sm text-gray-600">Distance</div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md">
                  <Clock className="w-8 h-8 text-blue-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{formatTime(routeDetails.travelTime)}</div>
                  <div className="text-sm text-gray-600">Approx. Time</div>
                </div>

                <div className="bg-white rounded-xl p-4 shadow-md">
                  <Train className="w-8 h-8 text-orange-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{routeDetails.frequency} min</div>
                  <div className="text-sm text-gray-600">Frequency</div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-bold text-lg text-gray-900">{getFromStationData()?.name}</div>
                    <div className="text-sm text-gray-600">Starting point</div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-blue-600" />
                  <div className="text-right">
                    <div className="font-bold text-lg text-gray-900">{getToStationData()?.name}</div>
                    <div className="text-sm text-gray-600">Destination</div>
                  </div>
                </div>
                <div className="text-center text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
                  <strong>Direction:</strong> {routeDetails.direction} • 
                  <strong> Line:</strong> {selectedLine} Line • 
                  <strong> Stops:</strong> {routeDetails.stopsCount}
                  {routeDetails.isPeak && <span className="text-orange-600"> • Peak Hours</span>}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Quick Info */}
        <div className="space-y-6">
          {/* Quick Tips */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Tips</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-gray-700">Peak hours: 8-11 AM and 5:30-8:30 PM</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-gray-700">First class is 5x more expensive but less crowded</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-gray-700">Fast trains skip certain stations</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                <p className="text-gray-700">Ladies' compartments available in all trains</p>
              </div>
            </div>
          </div>

          {/* Station Count */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-lg border-2 border-purple-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mumbai Local Network</h3>
            <div className="space-y-3">
              {lines.map((line) => (
                <div key={line.name} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${
                      line.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      line.color === 'orange' ? 'from-orange-500 to-orange-600' :
                      'from-green-500 to-green-600'
                    }`}></div>
                    <span className="font-medium text-gray-700">{line.name} Line</span>
                  </div>
                  <span className="font-bold text-gray-900">{line.data.stations.length}</span>
                </div>
              ))}
              <div className="pt-3 border-t border-purple-200">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">Total Stations</span>
                  <span className="text-2xl font-bold text-purple-600">
                    {lines.reduce((sum, line) => sum + line.data.stations.length, 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Did You Know */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 shadow-lg border-2 border-yellow-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Did You Know?</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Mumbai Local trains carry over <strong>7.5 million passengers</strong> daily, 
              making it one of the busiest commuter rail systems in the world! 🚂
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}