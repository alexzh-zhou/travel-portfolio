import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './TravelMap.css'
import { useNavigate } from 'react-router-dom';
import LocationMarker from './LocationMarker';


function TravelMap() {
  const navigate = useNavigate();

  const locations = [
    { name: "Seoul", lat: 37.5519, lon: 126.9918, id: 1 },
    { name: "Taipei", lat: 25.0330, lon: 121.5654, id: 2 },
    { name: "Byron Bay", lat: -28.6419, lon: 153.6105, id: 3}, 
  ];

  const handleMarkerClick = (loc) => {
    setTimeout(() => {
        navigate(`/location/${loc.id}`);
    }, 1850);
  };

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ width: '100%', height: '600px' }} scrollWheelZoom={true}
    worldCopyJump={true}>
      <TileLayer
        attribution='&copy; Maps Data: <a href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/#required-attribution">Google</a>'
        url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        subdomains={["mt1", "mt2", "mt3"]}
        minZoom={2}
        maxZoom={20}
      />
      {locations.map((loc) => (
        <LocationMarker key={loc.id} loc={loc} onClick={handleMarkerClick} />
      ))}
    </MapContainer>
  );
}

export default TravelMap;
