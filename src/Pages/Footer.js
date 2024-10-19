import React from 'react';
import './Footer.css'; // Optional: If you want to style it in a separate CSS file.

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-memory">
        <h3>In loving memory of</h3>
        <p>
          Sharon Stetson, Karen Stetson, Isla Rose Stetson, Roger Quanz, Amy
          Sevenhuysen, Karen Duncalfe, Tanya Sayer, Delbert Sirr, and all those
          who lost the battle to cancer.
        </p>
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
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      
      <div className="footer-policy">
        <a href="#privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
