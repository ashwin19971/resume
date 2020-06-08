import React from 'react';

import './Footer.scss';
import { GITHUB_URL, LINKEDIN_URL, HACKERRANK_URL, CODECHEF_URL, GFG_URL, HACKEREARTH_URL } from '../../models/links';

const Footer = () => (
  <div id="footer-wrapper">
    <div id="footer-contact-wrapper">
      Have something related to me?
       <a href="mailto:ashwingiri1997@gmail.com">Let's talk.</a>
    </div>
    <div id="footer-social-links">
      <a href={GITHUB_URL} target="_blank">Github</a>
      <a href={LINKEDIN_URL} target="_blank" rel="nofollow">LinkedIn</a>
      <a href={HACKERRANK_URL} target="_blank">HackerRank</a>
      <a href={CODECHEF_URL} target="_blank">Codechef</a>
      <a href={GFG_URL} target="_blank">GeeksForGeeks</a>
      <a href={HACKEREARTH_URL} target="_blank">HackerEarth</a>
    </div>
  </div>
)

export default Footer;