import { Station, fareStructure } from '@/app/data/trainData';

// Calculate fare between two stations based on actual distance
export const calculateFare = (
  from: Station,
  to: Station,
  classType: 'firstClass' | 'secondClass'
): number => {
  // Calculate distance between stations
  const distance = Math.abs(from.distanceFromOrigin - to.distanceFromOrigin);
  
  // Find appropriate fare slab
  const fareSlabs = fareStructure[classType];
  const applicableSlab = fareSlabs.find(
    slab => distance >= slab.minKm && distance < slab.maxKm
  );
  
  return applicableSlab ? applicableSlab.fare : fareSlabs[fareSlabs.length - 1].fare;
};

// Calculate distance between two stations
export const calculateDistance = (from: Station, to: Station): number => {
  return Math.abs(from.distanceFromOrigin - to.distanceFromOrigin);
};

// Calculate estimated travel time (rough estimate: 3 min per station + 1.5 min per km)
export const calculateTravelTime = (from: Station, to: Station, line: Station[]): number => {
  const fromIndex = line.findIndex(s => s.id === from.id);
  const toIndex = line.findIndex(s => s.id === to.id);
  
  if (fromIndex === -1 || toIndex === -1) return 0;
  
  const stationCount = Math.abs(toIndex - fromIndex);
  const distance = calculateDistance(from, to);
  
  // Approximate time: 3 minutes per station + travel time based on distance
  return Math.round((stationCount * 3));
};

// Check if current time is peak hour and return detailed info
export const getPeakHourInfo = (): {
  isPeak: boolean;
  period: 'morning-peak' | 'evening-peak' | 'non-peak';
  message: string;
} => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;

  const morningStart = 8 * 60; // 08:00
  const morningEnd = 11 * 60; // 11:00
  const eveningStart = 17 * 60 + 30; // 17:30
  const eveningEnd = 20 * 60 + 30; // 20:30

  if (currentTime >= morningStart && currentTime <= morningEnd) {
    return {
      isPeak: true,
      period: 'morning-peak',
      message: 'Morning Peak Hours - Expect crowded trains towards business districts'
    };
  } else if (currentTime >= eveningStart && currentTime <= eveningEnd) {
    return {
      isPeak: true,
      period: 'evening-peak',
      message: 'Evening Peak Hours - Expect crowded trains towards suburbs'
    };
  } else {
    return {
      isPeak: false,
      period: 'non-peak',
      message: 'Non-Peak Hours - Trains are less frequent but less crowded'
    };
  }
};

// Check if current time is peak hour (backward compatibility)
export const isPeakHour = (): boolean => {
  return getPeakHourInfo().isPeak;
};

// Get route direction
export const getRouteDirection = (from: Station, to: Station, line: Station[]): string => {
  const fromIndex = line.findIndex(s => s.id === from.id);
  const toIndex = line.findIndex(s => s.id === to.id);
  
  if (fromIndex === -1 || toIndex === -1) return '';
  
  if (from.line === 'Western') {
    return fromIndex < toIndex ? 'Northbound (towards Virar)' : 'Southbound (towards Churchgate)';
  } else if (from.line === 'Central') {
    return fromIndex < toIndex ? 'Northbound (towards Kalyan)' : 'Southbound (towards CSMT)';
  } else {
    return fromIndex < toIndex ? 'Towards Panvel' : 'Towards CSMT';
  }
};

// Format time in minutes to readable format
export const formatTime = (minutes: number): string => {
  if (minutes < 60) return `${minutes} mins`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

// Format distance
export const formatDistance = (km: number): string => {
  return `${km} km`;
};