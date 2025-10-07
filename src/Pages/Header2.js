import React from 'react';
import "../Pages/Header2.css";
import { useLanguage } from '../context/LanguageContext';

function Header2() {
  const { t } = useLanguage();
  
  return (
    <div className="container">
      <section className="mission">
        <h1>{t('ourMission')}</h1>
        <p>{t('missionText')}</p>
      </section>

      <div className="content">
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://drive.google.com/file/d/1joF0kgXp7ODQIyhRuDPZ5seXC754---x/preview"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="video-caption">
            {t('cozyCaption')}
          </div>
        </div>

        <div className="text-container">
          <h2>{t('welcomeGorter')}</h2>
          <p>{t('gorterDescription')}</p>
        </div>
      </div>
    </div>
  );
}

export default Header2;
