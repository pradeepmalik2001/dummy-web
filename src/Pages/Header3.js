import React from 'react';
import '../Pages/Header3.css';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Header3() {
  const { t } = useLanguage();
  
  return (
    <div className="containerr">
      <section className="empowering-section">
        <h1>{t('empoweringTitle')}</h1>
        <div className="contentt">
          <div className="text-box">
            <h2>{t('theProblem')}</h2>
            <p>{t('problemText')}</p>
          </div>

          <div className="text-box">
            <h2>{t('ourVision')}</h2>
            <p>{t('visionText')}</p>
          </div>
        </div>
      </section>
    <div className='journey-div'>
      <section className="journey-section">
        <h2>{t('beginJourney')}</h2>
        <Link to="/form" className="cta-button">{t('scheduleCall')}</Link>
      </section>
      </div>
    </div>
  );
}

export default Header3;
