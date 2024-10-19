import React from 'react';
import '../Pages/Header.css';
import logo from '../Images/logo.png';
import midlogo from '../Images/Webimage.jpg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
      <nav className="navbar">
        <div className="navbar-left">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#what-we-offer">What We Offer</a></li>
          </ul>
        </div>

        <div className="navbar-center">
          <a href="#logo">
            <img
              className="logo"
              src={logo}
              alt="Logo"
            />
          </a>
        </div>

        <div className="navbar-right">
          <ul className="nav-links">
            <li><a href="#podcasts">Podcasts</a></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="header-banner">
        <p className="banner-text">
          Speak To A Team Member To Answer Your Questions Now!
        </p>
        <a href="#schedule" className="schedule-button">
          Schedule a free call now!
        </a>
      </div>
    </header>

    <div className="mid-logo">
          <a href="#mid-logo">
            <img
              className="mid-logo"
              src={midlogo}
              alt="Logo"
            />
          </a>
    </div>

    <div>
      <a href='#BookingForm.js'>Sign In</a>
    </div>

    </div>
  )
}

export default Header
