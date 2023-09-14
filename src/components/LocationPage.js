import React from 'react';
import { useParams } from 'react-router-dom';
import importedImages from '../utils/importImages';

function LocationPage() {
  const { id } = useParams();

  const locationData = {
    1: { name: "Seoul", images: ["seoul1.jpg"] },
    2: { name: "Taipei", images: [""] },
    3: { name: "Byron Bay", images: [""]}
    // ... add data for more locations using their ID
  };

  const data = locationData[id];

  if (!data) {
    return <div>Location not found!</div>; 
  }

  return (
    <div>
      <h1>{data.name}</h1>
      {data.images.map((img, idx) => (
        <img key={idx} src={importedImages[img]} alt={data.name}/>
      ))}
    </div>
  );
}

export default LocationPage;
