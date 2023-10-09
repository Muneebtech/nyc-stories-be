// src/SkeletonCard.js
import React from 'react';
import './App.css'

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-abstract"></div>
    </div>
  );
};

export default SkeletonCard;
