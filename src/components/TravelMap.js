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
  ];

  const handleMarkerClick = (loc) => {
    setTimeout(() => {
        navigate(`/location/${loc.id}`);
    }, 1850);
  };

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ width: '100%', height: '600px' }} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc) => (
        <LocationMarker key={loc.id} loc={loc} onClick={handleMarkerClick} />
      ))}
    </MapContainer>
  );
}

export default TravelMap;
