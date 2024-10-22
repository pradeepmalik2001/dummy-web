import React from 'react';
import '../Pages/BlogCard.css'; // Import your styles here

const BlogCard = ({ title, date, time, description, image, buttonText,link }) => {
  return (
    <div className="cardd">
      <img src={image} alt="Thumbnail" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <button>{buttonText}</button>
        </a>
        <div className="card-footer">
          <span className="card-date">{date}</span>
          <span className="card-time">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
