import React from 'react';
import { useParams, Link } from 'react-router-dom';
import importedImages from '../utils/importImages';

function LocationPage() {
  const { id } = useParams();

  const locationData = {
    1: { name: "Seoul", images: ["seoul1.jpg", "s2.jpg", "s3.jpg", "s4.jpg", "s5.JPEG", "s6.JPEG", 
    "s7.JPEG", "s8.JPEG", "s9.JPEG", "s10.JPG", "s11.JPG", "s12.JPG", "s13.JPG"] },
    2: { name: "Taipei", images: [""] },
    3: { name: "Hervey Bay", images: [""]}, 
    4: { name: "Cairns", images: [""]}, 
    5: { name: "Airlie Beach", images: ["ab1.JPG", "ab2.JPG", "ab3.JPG", "ab4.JPG", "ab5.JPG", "ab6.JPG",
    "ab7.JPG", "ab8.JPG", "ab9.JPG", "ab10.JPG", "ab11.JPG", "ab12.JPG", "ab13.JPG"]}, 
    // ... add data for more locations using their ID
  };

  const data = locationData[id];

  if (!data) {
    return <div>Location not found!</div>; 
  }

  return (
    <div className="location-container">
      <div className='back-home-link'>
      <Link to="/">Home</Link>
      </div>
      <h1 className="Title">{data.name}</h1>
      <div className="image-grid">
        {data.images.map((img, idx) => (
          <img key={idx} src={importedImages[img]} alt={data.name} />
        ))}
      </div>
    </div>
  );
}

export default LocationPage;
