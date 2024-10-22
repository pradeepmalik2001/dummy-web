import React from 'react';
import './HealingOasis.css';

const HealingOasis = () => {
  return (
    <div className="healing-oasis-container">
      {/* Left side text and button */}
      <div className="left-content">
        <img src='https://thehealingoasis.ca/wp-content/uploads/2024/02/THO-white-logo-300x112.png' alt=''/>
        <p>
          The Healing Oasis is about 40 minutes from Vernon Hospital. Click the button below
          to find our location.
        </p>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="google-maps-button"
        >
          Open in Google Maps
        </a>
      </div>
      
      {/* Right side map or image */}
      <div className="right-content">
        {/* For now using an image, replace with Google Maps API if needed */}
        <img style={{height:"100%"}} src="https://thehealingoasis.ca/wp-content/uploads/2023/08/image-4-2-1.jpg" alt="Map" className="map-image" />
      </div>
    </div>
  );
};

export default HealingOasis;
