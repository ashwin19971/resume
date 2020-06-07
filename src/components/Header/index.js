import React from 'react';

import './Header.scss';

const Header = () => (
  <div id='header-wrapper'>
    <img />
    <div id='header-right-wrapper'>
      <span>
        <i className='icon-download-resume'/>
        <a>Resume</a>
      </span>
      <a id="header-contact-btn">Contact</a>
    </div>
  </div>
);

export default Header;
