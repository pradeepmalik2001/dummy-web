
import React from 'react';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

const Header1 = () => {

  return (
    <div>
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
    </div>
  );
};

export default Header1;