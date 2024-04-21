import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../styles/Sessions.css'; 
import T4TImage from '../../images/workshops/session3/t4t.png';
import CoReDevelopmentImage from '../../images/workshops/session3/core_development.png';
import pitchingImage from '../../images/workshops/session3/pitching.png';
import networkingDynamicsImage from '../../images/workshops/session3/networking_dynamics.png';

const Session1 = () => {
  return (
    <div className="session-content">
      <h3 className="session-title">Workshop Session Three</h3>
      <Carousel interval={null} className="session-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={T4TImage}
            alt="Training for Trainers"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={CoReDevelopmentImage}
            alt="CoRe Development"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pitchingImage}
            alt="Pitching Workshop"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={networkingDynamicsImage}
            alt="Networking Dynamics"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Session1;
