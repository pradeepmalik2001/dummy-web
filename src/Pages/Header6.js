import React, { useState, useEffect } from 'react';
import '../Pages/Header6.css'; // Ensure to link the CSS for styles
import GorterDress from '../Images/Image1.jpeg';
import Book1 from '../Images/Book1.jpeg';
import Book2 from '../Images/Book2.jpeg';
import ChinaAutograph from '../Images/china autograph 2.jpeg';
import GorterTherapy from '../Images/Image2.jpeg';
import GorterAutograph from '../Images/china autpgraph.jpeg';
import GorterOpinion from '../Images/Gorter Opinion.jpeg';
import Book7 from '../Images/Book7.jpeg';

const Header6 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const galleryImages = [
    { id: 1, src: GorterDress, alt: 'Image 1' },
    { id: 2, src: GorterTherapy, alt: 'Image 2' },
    { id: 3, src: GorterAutograph, alt: 'Image 3' },
    { id: 4, src: GorterOpinion, alt: 'Image 4' },
    { id: 5, src: Book1, alt: 'Image 5' },
    { id: 6, src: ChinaAutograph, alt: 'Image 6' },
    { id: 7, src: Book2, alt: 'Image 7' },
    { id: 8, src: Book7, alt: 'Image 8' },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev + 1 >= galleryImages.length ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => (prev + 4 >= galleryImages.length ? 0 : prev + 4));
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev - 1 < 0 ? galleryImages.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev - 4 < 0 ? Math.max(0, galleryImages.length - 4) : prev - 4));
    }
  };

  return (
    <div className="gallery-section">
      <h2 className="gallery-title">Heaven gallery</h2>
      
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
        
        <div className="carousel-wrapper">
          <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 25)}%)` }}>
            {galleryImages.map((image) => (
              <div key={image.id} className="carousel-item">
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
        
        <button className="carousel-btn next" onClick={nextSlide}>›</button>
      </div>
    </div>
  );
};

export default Header6;
