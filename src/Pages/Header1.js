
import React from 'react';
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
        </div>
      </nav>
    </div>
  );
};

export default Header1;