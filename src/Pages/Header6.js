import React from 'react';
import '../Pages/Header6.css'; // Ensure to link the CSS for styles

const Header6 = () => {
  // Array of gallery images with id, src, and alt attributes
  const galleryImages = [
    { id: 1, src: 'https://via.placeholder.com/300x200', alt: 'Image 1' },
    { id: 2, src: 'https://via.placeholder.com/300x200', alt: 'Image 2' },
    { id: 3, src: 'https://via.placeholder.com/300x200', alt: 'Image 3' },
    { id: 4, src: 'https://via.placeholder.com/300x200', alt: 'Image 4' },
    { id: 5, src: 'https://via.placeholder.com/300x200', alt: 'Image 5' },
    { id: 6, src: 'https://via.placeholder.com/300x200', alt: 'Image 6' },
    { id: 7, src: 'https://via.placeholder.com/300x200', alt: 'Image 7' },
    { id: 8, src: 'https://via.placeholder.com/300x200', alt: 'Image 8' },
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
