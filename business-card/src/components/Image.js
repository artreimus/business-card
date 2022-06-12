import React from 'react';
import Portrait from '../images/portrait.png';

export default function MyImage() {
  return (
    <div>
      <img src={Portrait} alt="React Logo" className="nav-icon" />
    </div>
  );
}
