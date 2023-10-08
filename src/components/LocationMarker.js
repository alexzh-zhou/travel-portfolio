import React from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { divIcon } from 'leaflet';
import './TravelMap.css'

const pinIcon = (loc) => divIcon({
    className: 'custom-pin-icon',
    html: `
        <div class="pin-label">${loc.name}</div>
        <div class="pin-head">
            <div class="pin-tail"></div>
        </div>
    `,
    iconSize: null,
    iconAnchor: [8, 26]
});

function LocationMarker({ loc, onClick }) {
    const map = useMap();
  
    return (
      <Marker 
          position={[loc.lat, loc.lon]}
          icon={pinIcon(loc)}
          eventHandlers={{
            click: () => {
              map.flyTo([loc.lat, loc.lon], 10, { duration: 1.1});
              if (onClick) onClick(loc);
            }
          }}
      >
        <Popup>{loc.name}</Popup>
      </Marker>
    );
  }

  export default LocationMarker;

  