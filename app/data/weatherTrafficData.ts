export interface TrafficHotspot {
    id: string;
    location: string;
    area: string;
    peakTime: string;
    severity: 'high' | 'medium' | 'low';
    alternatives: string[];
    tips: string;
  }
  
  export interface MumbaiArea {
    id: string;
    name: string;
    zone: 'South' | 'Central' | 'Western' | 'Eastern' | 'Navi Mumbai';
  }
  
  export const trafficHotspots: TrafficHotspot[] = [
    {
      id: '1',
      location: 'Western Express Highway (Andheri to Bandra)',
      area: 'Western',
      peakTime: '8:00 AM - 11:00 AM, 6:00 PM - 9:00 PM',
      severity: 'high',
      alternatives: ['SV Road', 'Link Road', 'Local Train (Western Line)'],
      tips: 'Avoid during peak hours. Heavy traffic near airports and office complexes.'
    },
    {
      id: '2',
      location: 'Eastern Express Highway (Thane to Vikhroli)',
      area: 'Eastern',
      peakTime: '8:30 AM - 10:30 AM, 6:30 PM - 8:30 PM',
      severity: 'high',
      alternatives: ['LBS Marg', 'Central Line Local Train'],
      tips: 'Major IT park traffic. Use local trains for faster commute.'
    },
    {
      id: '3',
      location: 'Bandra-Worli Sea Link',
      area: 'Western',
      peakTime: '7:00 AM - 10:00 AM, 5:30 PM - 9:00 PM',
      severity: 'medium',
      alternatives: ['Mahim Causeway', 'Haji Ali Route'],
      tips: 'Toll charges apply. Usually faster than surface roads despite traffic.'
    },
    {
      id: '4',
      location: 'South Mumbai (CST to Colaba)',
      area: 'South',
      peakTime: '9:00 AM - 11:00 AM, 6:00 PM - 8:00 PM',
      severity: 'high',
      alternatives: ['Marine Drive', 'Local Train to Churchgate'],
      tips: 'Narrow roads with heavy pedestrian traffic. Walking often faster for short distances.'
    },
    {
      id: '5',
      location: 'Sion-Panvel Highway',
      area: 'Eastern',
      peakTime: '8:00 AM - 10:00 AM, 6:00 PM - 9:00 PM',
      severity: 'medium',
      alternatives: ['Harbour Line Local Train', 'Palm Beach Road (Navi Mumbai)'],
      tips: 'Key route to Navi Mumbai. Traffic increases near toll plazas.'
    },
    {
      id: '6',
      location: 'Mahim Causeway',
      area: 'Central',
      peakTime: '8:00 AM - 11:00 AM, 5:30 PM - 9:00 PM',
      severity: 'high',
      alternatives: ['Bandra-Worli Sea Link', 'Local Train (Mahim to Dadar)'],
      tips: 'Connects Western and Central lines. Bottleneck during monsoon.'
    },
    {
      id: '7',
      location: 'Andheri-Ghatkopar Link Road (JVLR)',
      area: 'Central',
      peakTime: '9:00 AM - 11:00 AM, 7:00 PM - 9:00 PM',
      severity: 'medium',
      alternatives: ['Western Express Highway', 'Eastern Express Highway'],
      tips: 'Connects Western and Eastern suburbs. Airport traffic adds to congestion.'
    },
  ];
  
  export const commuteTimings = {
    bestTimes: [
      { time: '6:00 AM - 7:30 AM', reason: 'Early morning, light traffic, less crowded trains' },
      { time: '11:30 AM - 4:00 PM', reason: 'Mid-day off-peak, comfortable travel' },
      { time: '9:30 PM - 11:00 PM', reason: 'Late evening, minimal traffic, empty trains' },
    ],
    worstTimes: [
      { time: '8:00 AM - 11:00 AM', reason: 'Morning rush hour, packed trains, heavy traffic' },
      { time: '5:30 PM - 9:00 PM', reason: 'Evening rush hour, longest commute times' },
      { time: '12:00 PM - 1:00 PM', reason: 'Lunch hour traffic in business districts' },
    ],
  };
  
  export const mumbaiAreas: MumbaiArea[] = [
    { id: 'south', name: 'South Mumbai', zone: 'South' },
    { id: 'central', name: 'Central Mumbai', zone: 'Central' },
    { id: 'western', name: 'Western Suburbs', zone: 'Western' },
    { id: 'eastern', name: 'Eastern Suburbs', zone: 'Eastern' },
    { id: 'navi', name: 'Navi Mumbai', zone: 'Navi Mumbai' },
  ];
  
  export const weatherTips = {
    summer: {
      months: 'March - May',
      temperature: '28°C - 38°C',
      tips: [
        'Carry water bottle and stay hydrated',
        'Use umbrella for sun protection',
        'Avoid peak afternoon hours (12 PM - 3 PM)',
        'Light cotton clothes recommended',
      ],
    },
    monsoon: {
      months: 'June - September',
      temperature: '24°C - 30°C',
      tips: [
        'Check train status before traveling - waterlogging common',
        'Carry raincoat/umbrella always',
        'Avoid low-lying areas prone to flooding',
        'Waterproof bags for electronics',
        'Allow extra 30-45 mins travel time',
      ],
    },
    winter: {
      months: 'October - February',
      temperature: '20°C - 28°C',
      tips: [
        'Best season for Mumbai travel',
        'Light jacket for early mornings',
        'Perfect weather for outdoor activities',
        'Air quality may vary - check AQI',
      ],
    },
  };
  
  export const monsoonAlerts = [
    'High tide alert: Check timings before coastal travel',
    'Waterlogging prone areas: Sion, Hindmata, Andheri Subway, Khar Subway',
    'Train delays expected during heavy rainfall',
  ];