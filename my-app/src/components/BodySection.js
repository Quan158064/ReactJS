import React from 'react';
import './BodySection.css';

function BodySection({ title, imgSrc }) {
  return (
    <div className="section">
      <img src={imgSrc} alt={title} />
      <div className="text">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default BodySection;
