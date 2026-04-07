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
    // Wait for Google Maps to load
    const checkGoogleMaps = setInterval(() => {
      const w = window as any;
      if (w.google && w.google.maps && mapRef.current) {
        clearInterval(checkGoogleMaps);
        initializeMap();
      }
    }, 100);

    return () => clearInterval(checkGoogleMaps);
  }, []);

  const initializeMap = () => {
    if (!mapRef.current) return;

    const w = window as any;
    if (!w.google || !w.google.maps) return;

    // Initialize map centered on Bhopal
    const map = new w.google.maps.Map(mapRef.current, {
      zoom: 13,
      center: { lat: 23.1815, lng: 79.9864 },
      mapTypeControl: false,
      fullscreenControl: false,
    });

    mapInstance.current = map;

    // Add markers for from and to locations
    new w.google.maps.Marker({
      position: { lat: 23.1815, lng: 79.9864 },
      map: map,
      title: from,
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    });

    new w.google.maps.Marker({
      position: { lat: 23.2, lng: 80.0 },
      map: map,
      title: to,
      icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    });

    // If route data is available, draw the path
    if (routeData) {
      let path: any[] = [];
      
      if (routeType === 'original' && routeData.shortest_route) {
        path = routeData.shortest_route.path || [];
      } else if (routeType === 'recommended' && routeData.recommended_route) {
        path = routeData.recommended_route.path || [];
      }

      if (path.length > 0) {
        const polyline = new w.google.maps.Polyline({
          path: [
            { lat: 23.1815, lng: 79.9864 },
            { lat: 23.2, lng: 80.0 },
          ],
          geodesic: true,
          strokeColor: routeType === 'recommended' ? '#10b981' : '#ef4444',
          strokeOpacity: 0.7,
          strokeWeight: 3,
          map: map,
        });
      }
    }
  };

  return (
    <div
      ref={mapRef}
      className="w-full h-96 rounded-lg border border-cyan-200 shadow-sm bg-gray-100"
    />
  );
}
