import React from 'react'
import '../Pages/Header5.css';
import GorterDress1 from '../Images/docter dress 1.jpeg';
import GorterLecture from '../Images/lecture explNTION.jpeg';
import GorterTherapy from '../Images/gorter therapy.jpeg';

function Header5() {
  return (
    <div className="team-section">
      {/* Title */}
      <h2 className="title">The team dedicated to your healing</h2>

      {/* Family Section */}
      <div className="family-section">
        <img
          src="https://via.placeholder.com/400x200" /* Replace with the family image URL */
          alt="The Vass Family"
          className="family-image"
        />
        <div className="family-description">
          <h3>The Vass Family</h3>
          <p>
            Dave Vass has been married to his beautiful wife, Jennifer, for 20 years and has 3 teenagers ages 18, 16, and 14. 
            Dave grew up riding horses on a ranch in Alberta. Dave and Jennifer met while taking Kinesiology at the University 
            of Calgary which instilled a love for fitness and nutrition. Over the last 15 years, Dave has successfully started 
            and exited various companies in the tech industry. During Covid, his Dad passed away from being intubated which changed 
            the course of his life. Now Dave and Jenn have a mission to help those who are suffering from cancer find true healing 
            and rest. As such, they have dedicated their 40-acre resort in the Okanagan to The Healing Oasis.
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
      <div className="cta-section">
        <button className="cta-button">Schedule a free call now!</button>
      </div>
    </div>
  )
}

export default Header5
