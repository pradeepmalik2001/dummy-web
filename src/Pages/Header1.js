
import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import './Header1.css';
import { useLanguage } from '../context/LanguageContext';

const Header1 = () => {
  const { t, toggleLanguage, language } = useLanguage();

  return (
    <div>
   <nav className="navbar">
        <div className="navbar-left">
          <ul className="nav-links">
            {/* <li><a href="#home">Home</a></li> */}
            <li><Link to="/">{t('home')}</Link></li>
            <li><Link to="/">{t('family')}</Link></li>
            <li><Link>{t('whatWeOffer')}</Link></li>
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
            <li><Link to="/podcasts">{t('podcasts')}</Link></li>
            <li><Link to="/blog">{t('blog')}</Link></li>
            <li><Link to="/contact">{t('contact')}</Link></li>
            <li><Link to="/signIn" className="signin-btn">{t('signIn')}</Link></li>
            <li>
              <div className="language-switch" onClick={toggleLanguage}>
                <div className={`switch-slider ${language === 'hi' ? 'active' : ''}`}></div>
                <span className="switch-label">{language === 'en' ? 'EN' : 'हि'}</span>
              </div>
            </li>
          </ul>
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <Link to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>
          </div>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Family</Link></li>
              <li><Link to="/" onClick={() => setIsMenuOpen(false)}>What We Offer</Link></li>
              <li><Link to="/podcasts" onClick={() => setIsMenuOpen(false)}>Podcasts</Link></li>
              <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
              <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
              <li><Link to="/signIn" className="signin-btn" onClick={() => setIsMenuOpen(false)}>Sign In</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header1;