import React from 'react';
import MyDetails from './Details';
import MyInfo from './Info';

export default function MainDisplay() {
  return (
    <div className="content-container wrapper">
      <MyInfo />
      <MyDetails />
    </div>
  );
}
