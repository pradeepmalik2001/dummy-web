import React from 'react'
import '../Pages/Header5.css';
import GorterDress1 from '../Images/docter dress 1.jpeg';
import GorterLecture from '../Images/Gorter Opinion.jpeg';
import GorterTherapy from '../Images/gorter therapy.jpeg';
import Gorterfamily from '../Images/Gorter Fam.png';
import GorterAutograph from '../Images/china autpgraph.jpeg';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function Header5() {
  const { t } = useLanguage();
  
  return (
    <div className="team-section">
      {/* Title */}
      <h2 className="title">{t('teamTitle')}</h2>

      {/* Family Section */}
      <div className="family-section">
        <img
          src={Gorterfamily} /* Replace with the family image URL */
          alt="The Vass Family"
          className="family-image"
        />
        <div className="family-description">
          <h3>{t('gorterFamily')}</h3>
          <p>{t('familyDescription')}</p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="team-members">
        <div className="team-member">
          <img src={GorterDress1} alt="Dave & Jennifer Vass" />
          <p>Robert Gorter</p>
          <span>Prof. Dr. Robert Gorter</span>
        </div>
        <div className="team-member">
          <img src={GorterLecture} alt="Top Cancer Doctor" />
          <p>Gorter Lecture Explanation</p>
          <span>Explanation</span>
        </div>
        <div className="team-member">
          <img src={GorterTherapy} alt="Shane LaRoche" />
          <p>Gorter Therapy</p>
          <span>Head Doctor</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className='journey-div'>
      <section className="journey-section">
        <h2>{t('beginJourney')}</h2>
        <Link to="/form" className="cta-button">{t('scheduleCall')}</Link>
      </section>
      </div>
    </div>
  )
}

export default Header5