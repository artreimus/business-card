import React from 'react';
import Footer from './Footer';
import MyImage from './Image';
import MainDisplay from './Main';

export default function LightMode() {
  return (
    <div className="container wrapper light-mode">
      <MyImage />
      <MainDisplay />
      <Footer />
    </div>
  );
}
