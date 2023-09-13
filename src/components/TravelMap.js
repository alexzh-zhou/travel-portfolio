import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './TravelMap.css'
import { useNavigate } from 'react-router-dom';
import { divIcon } from 'leaflet';

const pinIcon = divIcon({
    className: 'custom-pin-icon',
    html: `
        <div class="pin-head">
            <div class="pin-tail"></div>
        </div>
    `,
    iconSize: [20, 30],
    iconAnchor: [10, 30]
});

function TravelMap() {
  const navigate = useNavigate();

  const locations = [
    { name: "New York", lat: 40.7128, lon: -74.0060, id: 1 },
    { name: "Paris", lat: 48.8566, lon: 2.3522, id: 2 },
  ];

  const handleMarkerClick = (loc) => {
    navigate(`/location/${loc.id}`);
  };

  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ width: '100%', height: '600px' }} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc) => (
        <Marker 
            key={loc.id}
            position={[loc.lat, loc.lon]}
            icon={pinIcon}
            eventHandlers={{ click: () => handleMarkerClick(loc) }}
        >
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default TravelMap;
