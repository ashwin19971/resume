import React from 'react';

import './Header.scss';
import heroImg from '../../assets/img/hero.jpg';
import resume from "../../assets/files/Resume.pdf";

const Header = () => (
  <div id='header-wrapper'>
    <img
      src={heroImg}
      onClick={() => { window.location.href = "/resume" }}
    />
    <div id='header-right-wrapper'>
      <span onClick={() => window.open(resume)}>
        {/* <i className='icon-download-resume' /> */}
        <a>Resume</a>
      </span>
      <a id="header-contact-btn" href="#footer-wrapper">Contact</a>
    </div>
  </div>
);

export default Header;
