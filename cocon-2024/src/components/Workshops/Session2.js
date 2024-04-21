import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../styles/Sessions.css'; 
import ncLcManagementImage from '../../images/workshops/session2/NC_LC_Management.png';
import twinningsImage from '../../images/workshops/session2/Twinnings.png';
import marketingImage from '../../images/workshops/session2/Marketing.png';
import gameTheoryImage from '../../images/workshops/session2/Game_Theory.png';

const Session1 = () => {
  return (
    <div className="session-content">
      <h3 className="session-title">Workshop Session Two</h3>
      <Carousel interval={null} className="session-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ncLcManagementImage}
            alt="NC & LC Management"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={twinningsImage}
            alt="Building Global Bridges - Organising IAESTE Twinnings"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={marketingImage}
            alt="Marketing Workshop"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gameTheoryImage}
            alt="Game Theory"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Session1;
