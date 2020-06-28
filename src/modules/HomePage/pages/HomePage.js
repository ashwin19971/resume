import React, { Component } from 'react';
import Typed from 'typed.js';

import './HomePage.scss';
import { profiles } from '../../../models/profiles';
import { GITHUB_URL, IIMJOBS_URL, HIRIST_URL } from '../../../models/links';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import AboutMe from '../components/AboutMe';

class HomePage extends Component {

  componentDidMount() {
    const options = {
      strings: profiles,
      typeSpeed: 75,
      backSpeed: 75,
      loop: true
    };
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div>
        <Header />
        <div id="home-page-wrapper">
          <p id="home-page-intro">
            I’m Ashwin Giri, a <a ref={(el) => { this.el = el; }} />, and an aspiring Technopreneur.<br />
            {/* I'm currently working as a <a href={GITHUB_URL} target="_blank">Software Developer</a> in <a className="home-page-company" href={IIMJOBS_URL} target="_blank">iimjobs.com</a> and <a className="home-page-company" href={HIRIST_URL} target="_blank">hirist.com</a>. */}
          </p>
        </div>
        <AboutMe />
        <Footer />
      </div>
    )
  }
}

export default HomePage;
