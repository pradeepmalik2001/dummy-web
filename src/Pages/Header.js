import React from 'react';
import '../Pages/Header.css';
import logo from '../Images/logo.png';
import midlogo from '../Images/Webimage.jpg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <div className="header-banner">
          <p className="banner-text">
            Speak To A Team Member To Answer Your Questions Now!
          </p>
          <Link to="/form" className="schedule-button">
            Schedule a free call now!
          </Link>
        </div>
      </header>

      <div className="media-container">
        <img className="mid-logo" src={midlogo} alt="Logo" />
        <div className="video-containerr">
          <iframe
            className="videoo"
            src="https://www.youtube.com/embed/MQcMTdEKSBQ"
            title="The Healing Oasis Cancer Retreat"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Header;
