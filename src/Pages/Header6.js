import React from 'react';
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
  // Array of gallery images with id, src, and alt attributes
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

  // Functional component returns JSX for the gallery
  return (
    <div className="gallery-section">
      {/* Gallery Title */}
      <h2 className="gallery-title">Healing heaven gallery</h2>

      {/* Grid of images */}
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header6;
