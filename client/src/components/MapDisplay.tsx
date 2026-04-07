import { useEffect, useRef } from 'react';

interface MapDisplayProps {
  from: string;
  to: string;
  routeType: 'original' | 'recommended';
  routeData?: any;
}

export default function MapDisplay({ from, to, routeType, routeData }: MapDisplayProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    // Initialize map
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 13,
      center: { lat: 23.1815, lng: 79.9864 }, // Bhopal center
      mapTypeControl: false,
      fullscreenControl: false,
    });

    mapInstance.current = map;

    // Add markers for from and to locations
    new window.google.maps.Marker({
      position: { lat: 23.1815, lng: 79.9864 },
      map: map,
      title: from,
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    });

    new window.google.maps.Marker({
      position: { lat: 23.2, lng: 80.0 },
      map: map,
      title: to,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    });

    // TODO: Add polyline for the actual route based on routeData
    // This would draw the path on the map
  }, [from, to, routeType, routeData]);

  return (
    <div
      ref={mapRef}
      className="w-full h-96 rounded-lg border border-cyan-200 shadow-sm bg-gray-100 flex items-center justify-center"
    >
      {!window.google && (
        <p className="text-gray-600">Loading map...</p>
      )}
    </div>
  );
}
