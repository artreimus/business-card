import React from 'react';
import twitterIcon from '../images/twitter.png';
import facebookIcon from '../images/facebook.png';
import instagramIcon from '../images/instagram.png';
import githubIcon from '../images/github.png';

export default function Footer() {
  return (
    <div className="footer-container wrapper">
      <img src={twitterIcon} alt="Twitter icon" className="footer-icon" />
      <img src={facebookIcon} alt="Facebook icon" className="footer-icon" />
      <img src={instagramIcon} alt="Instagram icon" className="footer-icon" />
      <img src={githubIcon} alt="GitHub icon" className="footer-icon" />
    </div>
  );
}
