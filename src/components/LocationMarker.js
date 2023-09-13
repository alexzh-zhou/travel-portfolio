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
    iconSize: [20, 30],
    iconAnchor: [10, 30]
});

function LocationMarker({ loc, onClick }) {
    const map = useMap();
  
    return (
      <Marker 
          position={[loc.lat, loc.lon]}
          icon={pinIcon(loc)}
          eventHandlers={{
            click: () => {
              map.flyTo([loc.lat, loc.lon], 18, { duration: 1.7});
              if (onClick) onClick(loc);
            }
          }}
      >
        <Popup>{loc.name}</Popup>
      </Marker>
    );
  }

  export default LocationMarker;

  