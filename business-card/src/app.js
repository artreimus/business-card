import React from 'react';
import DarkMode from './components/Dark';

import LightMode from './components/Light';

import './style.css';

export default function App() {
  return (
    <div className="display-container wrapper">
      <LightMode />
      <DarkMode />
    </div>
  );
}
