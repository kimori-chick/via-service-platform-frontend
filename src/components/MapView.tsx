import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { Place } from '../features/places/placesSlice';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN!;

type Props = { places: Place[] };

const MapView = ({ places }: Props) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [139.767, 35.681], // 東京駅
      zoom: 10,
    });

    places.forEach((place) => {
      new mapboxgl.Marker()
        .setLngLat([place.lng, place.lat])
        .setPopup(new mapboxgl.Popup().setText(place.name))
        .addTo(map);
    });

    return () => map.remove();
  }, [places]);

  return <div ref={mapContainer} style={{ height: '100vh' }} />;
};

export default MapView;
