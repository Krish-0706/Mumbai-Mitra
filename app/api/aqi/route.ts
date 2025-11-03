import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city') || 'Mumbai';
  const latParam = searchParams.get('lat');
  const lonParam = searchParams.get('lon');

  const API_KEY = process.env.WEATHER_API_KEY;

  if (!API_KEY) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    );
  }

  try {
    let latitude: number | null = null;
    let longitude: number | null = null;

    if (latParam && lonParam) {
      latitude = Number(latParam);
      longitude = Number(lonParam);
    } else {
      // Resolve city to coordinates via OpenWeather Geocoding API
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`;
      const geoRes = await fetch(geoUrl);
      const geoData = await geoRes.json();

      if (!geoRes.ok || !Array.isArray(geoData) || geoData.length === 0) {
        throw new Error('Failed to geocode city');
      }

      latitude = geoData[0].lat;
      longitude = geoData[0].lon;
    }

    if (latitude == null || longitude == null || Number.isNaN(latitude) || Number.isNaN(longitude)) {
      return NextResponse.json(
        { error: 'Invalid or missing coordinates' },
        { status: 400 }
      );
    }

    const aqiUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    const aqiRes = await fetch(aqiUrl);
    const aqiData = await aqiRes.json();

    if (!aqiRes.ok) {
      throw new Error(aqiData?.message || 'Failed to fetch AQI');
    }

    // Normalize the response to a concise shape
    // OpenWeather returns index 1..5: 1-Good, 2-Fair, 3-Moderate, 4-Poor, 5-Very Poor
    const index: number | undefined = aqiData?.list?.[0]?.main?.aqi;
    const components = aqiData?.list?.[0]?.components;

    if (typeof index !== 'number') {
      throw new Error('AQI index missing in response');
    }

    const levelMap: Record<number, string> = {
      1: 'Good',
      2: 'Fair',
      3: 'Moderate',
      4: 'Poor',
      5: 'Very Poor',
    };

    return NextResponse.json({
      coordinates: { lat: latitude, lon: longitude },
      index,
      level: levelMap[index] || 'Unknown',
      components,
      provider: 'openweathermap',
    });
  } catch (error) {
    console.error('AQI API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch AQI data' },
      { status: 500 }
    );
  }
}


