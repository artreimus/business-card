import React from 'react';
import mailIcon from '../images/mail.png';
import linkedInIcon from '../images/linkedin.png';

export default function MyInfo() {
  return (
    <div className="info-container wrapper">
      <div className="info-text">
        <h3 className="name-info">Laura Smith</h3>
        <h4 className="position-info">Frontend Developer</h4>
        <p className="website-info">laurasmith.website</p>
      </div>
      <div className="btn-container wrapper">
        <a href="#email" className="btn email-info">
          <span>
            <img src={mailIcon} alt="Mail icon" className="btn-icon" />
          </span>
          Email
        </a>
        <a href="#linkedin" className="btn linkedin-info">
          <span>
            <img src={linkedInIcon} alt="LinkedIn logo" className="btn-icon linkedIn" />
          </span>
          LinkedIn
        </a>
      </div>
    </div>
  );
}
