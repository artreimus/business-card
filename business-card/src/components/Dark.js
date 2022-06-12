import React from 'react';
import Footer from './Footer';
import MyImage from './Image';
import MainDisplay from './Main';

export default function DarkMode() {
  return (
    <div className="container wrapper dark-mode">
      <MyImage />
      <MainDisplay />
      <Footer />
    </div>
  );
}
