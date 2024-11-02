import React from 'react';
import './HealingOasis.css';
import RobertSign from '../Images/Gorter Sign.png';

const HealingOasis = () => {
  return (
    <div className="healing-oasis-container">
      {/* Left side text and button */}
      <div className="left-content">
        <img src={RobertSign} alt=''/>
        <p>
            The Gorter Model clinic is situated near Schillerstrasse 16 50968 Cologne, Germany. Click the button below to find our location.
        </p>
        <a
          href="https://www.google.com/maps/place/Schillerstra%C3%9Fe+16,+50968+K%C3%B6ln,+Germany/@50.9094844,6.9640695,17z/data=!3m1!4b1!4m6!3m5!1s0x47bf243e2c170963:0x6d561c649ce9feb6!8m2!3d50.9094844!4d6.9666444!16s%2Fg%2F11c4kv69ln?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
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
