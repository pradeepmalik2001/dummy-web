import React from 'react';
import '../Pages/BlogCard.css'; // Import your styles here

const BlogCard = ({ title, date, time, description, image, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt="Thumbnail" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">{buttonText}</button>
        <div className="card-footer">
          <span className="card-date">{date}</span>
          <span className="card-time">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
