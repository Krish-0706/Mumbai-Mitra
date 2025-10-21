export interface Station {
  id: string;
  name: string;
  line: 'Western' | 'Central' | 'Harbour';
  distanceFromOrigin: number; // Distance in km from starting point
}

export interface TrainLine {
  name: string;
  color: string;
  stations: Station[];
  origin: string; // Starting station for distance calculation
}

// Western Line Stations (Distances from Churchgate)
export const westernLine: TrainLine = {
  name: 'Western Line',
  color: 'blue',
  origin: 'Churchgate',
  stations: [
    { id: 'CCG', name: 'Churchgate', line: 'Western', distanceFromOrigin: 0 },
    { id: 'MRN', name: 'Marine Lines', line: 'Western', distanceFromOrigin: 1 },
    { id: 'CRD', name: 'Charni Road', line: 'Western', distanceFromOrigin: 2 },
    { id: 'GPR', name: 'Grant Road', line: 'Western', distanceFromOrigin: 3 },
    { id: 'BB', name: 'Mumbai Central', line: 'Western', distanceFromOrigin: 5 },
    { id: 'ADH', name: 'Mahalaxmi', line: 'Western', distanceFromOrigin: 6 },
    { id: 'LPR', name: 'Lower Parel', line: 'Western', distanceFromOrigin: 8 },
    { id: 'PRL', name: 'Prabhadevi', line: 'Western', distanceFromOrigin: 9 },
    { id: 'DDR', name: 'Dadar', line: 'Western', distanceFromOrigin: 10 },
    { id: 'MTG', name: 'Matunga Road', line: 'Western', distanceFromOrigin: 12 },
    { id: 'MDD', name: 'Mahim', line: 'Western', distanceFromOrigin: 13 },
    { id: 'BA', name: 'Bandra', line: 'Western', distanceFromOrigin: 15 },
    { id: 'KHR', name: 'Khar Road', line: 'Western', distanceFromOrigin: 17 },
    { id: 'STC', name: 'Santacruz', line: 'Western', distanceFromOrigin: 18 },
    { id: 'VLP', name: 'Vile Parle', line: 'Western', distanceFromOrigin: 20 },
    { id: 'AND', name: 'Andheri', line: 'Western', distanceFromOrigin: 22 },
    { id: 'JOS', name: 'Jogeshwari', line: 'Western', distanceFromOrigin: 25 },
    { id: 'RML', name: 'Ram Mandir', line: 'Western', distanceFromOrigin: 27 },
    { id: 'GOR', name: 'Goregaon', line: 'Western', distanceFromOrigin: 29 },
    { id: 'MLD', name: 'Malad', line: 'Western', distanceFromOrigin: 32 },
    { id: 'KDV', name: 'Kandivali', line: 'Western', distanceFromOrigin: 34 },
    { id: 'BRV', name: 'Borivali', line: 'Western', distanceFromOrigin: 37 },
    { id: 'DIC', name: 'Dahisar', line: 'Western', distanceFromOrigin: 40 },
    { id: 'MRA', name: 'Mira Road', line: 'Western', distanceFromOrigin: 43 },
    { id: 'BHP', name: 'Bhayandar', line: 'Western', distanceFromOrigin: 46 },
    { id: 'NAI', name: 'Naigaon', line: 'Western', distanceFromOrigin: 49 },
    { id: 'VSD', name: 'Vasai Road', line: 'Western', distanceFromOrigin: 53 },
    { id: 'VIR', name: 'Virar', line: 'Western', distanceFromOrigin: 58 },
  ],
};

// Central Line Stations (Distances from CSMT)
export const centralLine: TrainLine = {
  name: 'Central Line',
  color: 'orange',
  origin: 'CSMT',
  stations: [
    { id: 'CSMT', name: 'CSMT', line: 'Central', distanceFromOrigin: 0 },
    { id: 'MS', name: 'Masjid', line: 'Central', distanceFromOrigin: 1 },
    { id: 'SNK', name: 'Sandhurst Road', line: 'Central', distanceFromOrigin: 2 },
    { id: 'BYC', name: 'Byculla', line: 'Central', distanceFromOrigin: 4 },
    { id: 'CHI', name: 'Chinchpokli', line: 'Central', distanceFromOrigin: 5 },
    { id: 'CLA', name: 'Currey Road', line: 'Central', distanceFromOrigin: 6 },
    { id: 'PR', name: 'Parel', line: 'Central', distanceFromOrigin: 7 },
    { id: 'DR', name: 'Dadar', line: 'Central', distanceFromOrigin: 9 },
    { id: 'MTN', name: 'Matunga', line: 'Central', distanceFromOrigin: 11 },
    { id: 'SIN', name: 'Sion', line: 'Central', distanceFromOrigin: 13 },
    { id: 'KLA', name: 'Kurla', line: 'Central', distanceFromOrigin: 16 },
    { id: 'VDN', name: 'Vidyavihar', line: 'Central', distanceFromOrigin: 19 },
    { id: 'GHT', name: 'Ghatkopar', line: 'Central', distanceFromOrigin: 21 },
    { id: 'VKH', name: 'Vikhroli', line: 'Central', distanceFromOrigin: 24 },
    { id: 'KNJ', name: 'Kanjurmarg', line: 'Central', distanceFromOrigin: 26 },
    { id: 'BND', name: 'Bhandup', line: 'Central', distanceFromOrigin: 28 },
    { id: 'NHV', name: 'Nahur', line: 'Central', distanceFromOrigin: 30 },
    { id: 'MLV', name: 'Mulund', line: 'Central', distanceFromOrigin: 32 },
    { id: 'TNA', name: 'Thane', line: 'Central', distanceFromOrigin: 34 },
    { id: 'KLV', name: 'Kalwa', line: 'Central', distanceFromOrigin: 38 },
    { id: 'DIV', name: 'Diva', line: 'Central', distanceFromOrigin: 43 },
    { id: 'DMB', name: 'Dombivali', line: 'Central', distanceFromOrigin: 48 },
    { id: 'KYN', name: 'Kalyan', line: 'Central', distanceFromOrigin: 54 },
  ],
};

// Harbour Line Stations (Distances from CSMT)
export const harbourLine: TrainLine = {
  name: 'Harbour Line',
  color: 'green',
  origin: 'CSMT',
  stations: [
    { id: 'CSMT-H', name: 'CSMT', line: 'Harbour', distanceFromOrigin: 0 },
    { id: 'DKR', name: 'Dockyard Road', line: 'Harbour', distanceFromOrigin: 2 },
    { id: 'RBY', name: 'Reay Road', line: 'Harbour', distanceFromOrigin: 4 },
    { id: 'CHP', name: 'Cotton Green', line: 'Harbour', distanceFromOrigin: 6 },
    { id: 'SVE', name: 'Sewri', line: 'Harbour', distanceFromOrigin: 7 },
    { id: 'VDD', name: 'Vadala Road', line: 'Harbour', distanceFromOrigin: 9 },
    { id: 'GTB', name: 'GTB Nagar', line: 'Harbour', distanceFromOrigin: 11 },
    { id: 'CHG', name: 'Chunabhatti', line: 'Harbour', distanceFromOrigin: 13 },
    { id: 'TNA-H', name: 'Tilak Nagar', line: 'Harbour', distanceFromOrigin: 15 },
    { id: 'CHB', name: 'Chembur', line: 'Harbour', distanceFromOrigin: 17 },
    { id: 'GVL', name: 'Govandi', line: 'Harbour', distanceFromOrigin: 19 },
    { id: 'MNK', name: 'Mankhurd', line: 'Harbour', distanceFromOrigin: 22 },
    { id: 'VRR', name: 'Vashi', line: 'Harbour', distanceFromOrigin: 28 },
    { id: 'SNP', name: 'Sanpada', line: 'Harbour', distanceFromOrigin: 31 },
    { id: 'JNJ', name: 'Juinagar', line: 'Harbour', distanceFromOrigin: 34 },
    { id: 'NRM', name: 'Nerul', line: 'Harbour', distanceFromOrigin: 37 },
    { id: 'SBC', name: 'Seawoods', line: 'Harbour', distanceFromOrigin: 40 },
    { id: 'BKC', name: 'Belapur', line: 'Harbour', distanceFromOrigin: 43 },
    { id: 'PNV', name: 'Panvel', line: 'Harbour', distanceFromOrigin: 52 },
  ],
};

// Mumbai local train fare structure (in ₹) - Based on distance slabs
// These are approximate base fares as of 2024-2025
export const fareStructure = {
  secondClass: [
    { minKm: 0, maxKm: 10, fare: 5 },
    { minKm: 10, maxKm: 30, fare: 10 },
    { minKm: 30, maxKm: 55, fare: 15 },
    { minKm: 55, maxKm: 60, fare: 20 },
    { minKm : 60, maxKm : Infinity, fare: 35 }
  ],
  firstClass: [
    { minKm: 0, maxKm: 10, fare: 25 },
    { minKm: 10, maxKm: 15, fare: 40 },
    { minKm: 16, maxKm: 25, fare: 60 },
    { minKm: 26, maxKm: 35, fare: 85 },
    { minKm: 36, maxKm: 44, fare: 90 },
    { minKm: 45, maxKm: 50, fare: 95 },
    { minKm: 50, maxKm: 60, fare: 100 },
    { minKm: 60, maxKm: Infinity, fare: 130 },
  ],
};

// Peak hours
export const peakHours = {
  morning: { start: '08:00', end: '11:00' },
  evening: { start: '17:30', end: '20:30' },
};

// Train frequency (average minutes between trains)
export const trainFrequency = {
  peak: {
    fast: 5,
    slow: 3,
  },
  nonPeak: {
    fast: 8,
    slow: 5,
  },
};

// Helper function to get all stations
export const getAllStations = (): Station[] => {
  return [...westernLine.stations, ...centralLine.stations, ...harbourLine.stations];
};

// Helper function to find station
export const findStation = (stationId: string): Station | undefined => {
  return getAllStations().find(s => s.id === stationId);
};