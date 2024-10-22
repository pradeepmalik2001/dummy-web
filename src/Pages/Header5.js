import React from 'react'
import '../Pages/Header5.css';
import GorterDress1 from '../Images/docter dress 1.jpeg';
import GorterLecture from '../Images/Gorter Opinion.jpeg';
import GorterTherapy from '../Images/gorter therapy.jpeg';
import Gorterfamily from '../Images/Gorter Family.png';
import GorterAutograph from '../Images/china autpgraph.jpeg';
import { Link } from 'react-router-dom';

function Header5() {
  return (
    <div className="team-section">
      {/* Title */}
      <h2 className="title">The team dedicated to your healing</h2>

      {/* Family Section */}
      <div className="family-section">
        <img
          src={Gorterfamily} /* Replace with the family image URL */
          alt="The Vass Family"
          className="family-image"
        />
        <div className="family-description">
          <h3>The Robert Gorter Family</h3>
          <p>
          On average, an adult human being produces approximately 10 million cancer cells per day. A major part of the immune system is to recognize and kill these cells immediately….  Thus: only one’s immune system can have you turn 88 years of age. The Gorter Model focuses on immune restoration to assist the immune system to kill all these approximately 10 million cancer cells and live without clinical cancer or, destroy cancer cells rapidly.
          </p>
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
          {/* <span>Lead Naturopath</span> */}
        </div>
        <div className="team-member">
          <img src={GorterTherapy} alt="Shane LaRoche" />
          <p>Groter Therapy</p>
          <span>Head Chef</span>
        </div>
        {/* <div className="team-member">
          <img src="https://via.placeholder.com/100" alt="Christine Muir" />
          <p>Christine Muir</p>
          <span>Cancer Concierge</span>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/100" alt="Bob Levy" />
          <p>Bob Levy</p>
          <span>Director of Operations</span>
        </div> */}
      </div>

      {/* CTA Button */}
      <div className='journey-div'>
      <section className="journey-section">
        <h2>Begin your healing journey!</h2>
        <Link to="/form" className="cta-button">Schedule a free call now!</Link>
      </section>
      </div>
    </div>
  )
}

export default Header5
