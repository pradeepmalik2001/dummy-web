import React from 'react';
import "../Pages/Header2.css";

function Header2() {
  return (
    <div className="container">
      <section className="mission">
        <h1>Our Mission</h1>
        <p>All therapies as part of the Gorter Model are therefore nontoxic.</p>
      </section>

      <div className="content">
        <div className="video-container">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/MQcMTdEKSBQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="video-caption">
            Cozy Cabins is now The Healing Oasis
          </div>
        </div>

        <div className="text-container">
          <h2>Welcome to the Gorter Model</h2>
          <p>         
          The Gorter Model is dedicated to the treatment of cancer using immune-supportive, nontoxic therapies and also treat patients living with other chronic diseases, such as infections with hepatitis B and C and HIV. This program was developed by Robert Gorter, MD, PhD, over more than four decades of research, clinical experience and after surviving cancer himself.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header2;
