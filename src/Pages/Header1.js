
import React from 'react';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';

const Header1 = () => {

  return (
    <div>
   <nav className="navbar">
        <div className="navbar-left">
          <ul className="nav-links">
            {/* <li><a href="#home">Home</a></li> */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Family</Link></li>
            <li><Link>What We Offer</Link></li>
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
            {/* <li><a href='#podcasts'>Podcasts</a></li> */}
            <li><Link to="/podcasts">Podcasts</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <Link to="/signIn" className="signin-btn">
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header1;