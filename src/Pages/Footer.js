import React from 'react';
import './Footer.css'; // Optional: If you want to style it in a separate CSS file.
import HealingOasis from './HealingOasis';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <>
    <div className="header-banner">
        <p className="banner-text">
          {t('speakToTeam')}
        </p>
        <Link to="/form" className="schedule-button">
          {t('scheduleCall')}
        </Link>
      </div>
    <HealingOasis/>
    <footer className="footer">
      <div className="footer-memory">
        <h3>{t('inMemory')}</h3>
        <p>{t('memoryText')}</p>
      </div>
      
      {/* <div className="footer-nav">
        <a href="#home">Home</a>
        <a href="#team">Team</a>
        <a href="#therapies">Alternative Therapies</a>
        <a href="#podcasts">Podcasts</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div> */}
      
      <div className="footer-social">
        <a href="https://www.gorter-model.org/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100010911792475&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/in/robertgorter-thegortermodel" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://x.com/RobertGorterMD?t=l34euWG5IPeX9sdODD6GSg&s=08" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.youtube.com/@robertgorter3442" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      
      <div className="footer-policy">
        <a href="#privacy">{t('privacyPolicy')}</a>
      </div>
    </footer>
    </>
  );
};

export default Footer;
