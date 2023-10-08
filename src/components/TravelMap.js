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
    { name: "Noosa Heads", lat: -26.3961, lon: 153.0894, id: 3}, //surfing, national park
    { name: "Cairns", lat: -16.9203, lon: 145.7710, id: 4}, //snorkeling, scuba diving
    { name: "Airlie Beach", lat: -20.2678, lon: 148.7156, id: 5}, //skydiving
  ];

  const handleMarkerClick = (loc) => {
    setTimeout(() => {
        navigate(`/location/${loc.id}`);
    }, 1850);
  };

  return (
    <MapContainer className="map-container" center={[20, 0]} zoom={2} style={{ width: '85%', height: '600px', margin: '50px auto 0 auto' }} scrollWheelZoom={true} maxBounds={[[-85, -180], [84, 180]]}>
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
