import React from 'react';
import '../Pages/Header3.css';
import { Link } from 'react-router-dom';

function Header3() {
  return (
    <div className="containerr">
      <section className="empowering-section">
        <h1>Empowering cancer recovery</h1>
        <div className="contentt">
          <div className="text-box">
            <h2>The problem</h2>
            <p>
              We all know someone with cancer or someone who has died of cancer. Maybe you're here 
              because you have cancer. People with cancer have limited choices for fighting it. 
              There are very few places they can go to truly fight the disease and try to win or 
              just feel better. The traditional medical system offers treatments in an environment 
              that is poorly suited for health and wellbeing.
            </p>
          </div>

          <div className="text-box">
            <h2>Our vision</h2>
            <p>
              To build an all-inclusive healing oasis where people with cancer can stay for an 
              extended period of time secluded in nature while being given alternative therapies. 
              We want to offer our guests the best of nature combined with non-toxic treatments 
              to help them feel better, give a better chance of managing the disease and have hope 
              that they can LIVE!
            </p>
          </div>
        </div>
      </section>
    <div className='journey-div'>
      <section className="journey-section">
        <h2>Begin your healing journey!</h2>
        <Link to="/form" className="cta-button">Schedule a free call now!</Link>
      </section>
      </div>
    </div>
  );
}

export default Header3;
