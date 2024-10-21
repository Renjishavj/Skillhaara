import React, { useState, useEffect } from 'react';
import banner1 from '../assets/images/title.jpg';
import banner2 from '../assets/images/title.jpg';
import banner3 from '../assets/images/title.jpg';

function Baner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [banner1, banner2, banner3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [banners.length]);

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-container"
        style={{
          transform: `translateX(${-currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
          display: 'flex',
        }}
      >
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
    </div>
  );
}

export default Baner;
