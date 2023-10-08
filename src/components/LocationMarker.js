import React, { useState, useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { divIcon } from 'leaflet';
import './TravelMap.css';

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
    const [adjustedPosition, setAdjustedPosition] = useState([loc.lat, loc.lon]);

    useEffect(() => {
      const adjustMarkerPosition = () => {
          const currentZoom = map.getZoom();
          let latAdjustment = 0;
          let lonAdjustment = 0;
  
          if (currentZoom <= 5) {
              const startAdjustment = -7; 
              const endAdjustment = -1;
  
              let t = (currentZoom - 2) / (5 - 2); 
              t = t * t;
  
              latAdjustment = startAdjustment + (endAdjustment - startAdjustment) * t;
          }
  
          setAdjustedPosition([loc.lat + latAdjustment, loc.lon + lonAdjustment]);
      };
  
      adjustMarkerPosition(); // Call the function immediately
  
      map.on('zoomend', adjustMarkerPosition);
  
      return () => {
          map.off('zoomend', adjustMarkerPosition);
      };
  }, [map, loc.lat, loc.lon]);
  

    return (
      <Marker 
          position={adjustedPosition}
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
