import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
//import { divIcon } from 'leaflet';

function TravelMap() {
  const navigate = useNavigate();

  const locations = [
    { name: "New York", lat: 40.7128, lon: -74.0060, id: 1 },
    { name: "Paris", lat: 48.8566, lon: 2.3522, id: 2 },
    // ... add more locations
  ];

  const handleMarkerClick = (loc) => {
    navigate(`/location/${loc.id}`);
  };

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ width: '100%', height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc, idx) => (
        <Marker
          key={idx}
          position={[loc.lat, loc.lon]}
          eventHandlers={{ click: () => handleMarkerClick(loc) }}
        >
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default TravelMap;