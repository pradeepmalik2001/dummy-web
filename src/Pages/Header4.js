import React from 'react'
import "../Pages/Header4.css";
import { useLanguage } from '../context/LanguageContext';

function Header4() {
  const { t } = useLanguage();
  
  return (
    <div className="holistic-container">
      <h2 className="title">{t('holisticTitle')}</h2>
      <div className="approach-cards">
        <div className="card">
          <i className="icon fa fa-stethoscope" aria-hidden="true"></i>
          <h3>{t('ozoneTherapy')}</h3>
          <p>{t('ozoneText')}</p>
        </div>
        <div className="card">
          <i className="icon fa fa-apple" aria-hidden="true"></i>
          <h3>{t('mistletoe')}</h3>
          <p>{t('mistletoeText')}</p>
        </div>
        <div className="card">
          <i className="icon fa fa-tint" aria-hidden="true"></i>
          <h3>{t('thymusPeptides')}</h3>
          <p>{t('thymusText')}</p>
        </div>
        <div className="card">
          <i className="icon fa fa-tint" aria-hidden="true"></i>
          <h3>{t('hyperthermia')}</h3>
          <p>{t('hyperthermiaText')}</p>
        </div>
        <div className="card">
          <i className="icon fa fa-bed" aria-hidden="true"></i>
          <h3>{t('immuneTherapies')}</h3>
          <p>{t('immuneText')}</p>
        </div>
        <div className="card">
          <i className="icon fa fa-leaf" aria-hidden="true"></i>
          <h3>{t('supplements')}</h3>
          <p>{t('supplementsText')}</p>
        </div>
      </div>
      <div><hr></hr></div>
    </div>
  )
}

export default Header4;