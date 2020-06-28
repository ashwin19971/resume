import React, { Component } from 'react';

import "./AboutMe.scss";
import { myInfo } from '../../../../models/myInfo';

class AboutMe extends Component {
  render() {
    return (
      <div id="about-me-wrapper">
        <div id="about-slides-wrapper">
          {
            myInfo.map((val, index) => (
              <div
                key={index}
                className="about-me-slide"
              >
                <i className="" />
                <p className="title">{val.title}</p>
                <p className="view-btn">View</p>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default AboutMe;
