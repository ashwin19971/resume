import React, { Component } from 'react';
import Modal from "react-modal";

import "./AboutMe.scss";
import { myInfo } from '../../../../models/myInfo';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false,
      id: 0
    }
  }

  handleViewClick = (id) => {
    this.setState({ id, isModal: true });
  }

  render() {
    const { isModal, id } = this.state;
    return (
      <div id="about-me-wrapper">
        <div id="about-slides-wrapper">
          {
            myInfo.map((val, index) => (
              <div
                key={index}
                className="about-me-slide"
                onClick={() => this.handleViewClick(index)}
              >
                <i className="" />
                <p className="title">{val.title}</p>
                <p className="view-btn">View</p>
                {
                  index == id &&
                  <Modal
                    isOpen={isModal}
                    style={customStyles}
                    contentLabel="View Modal"
                  >
                    There will be view modal
                  </Modal>
                }
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default AboutMe;
