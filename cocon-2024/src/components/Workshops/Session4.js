import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../styles/Sessions.css'; 
import SummerReceptionImage from '../../images/workshops/session4/summer_reception.png';
import exchangeImage from '../../images/workshops/session4/exchange.png';
import brandingImage from '../../images/workshops/session4/branding.png';
import workImage from '../../images/workshops/session4/work.png';

const Session1 = () => {
  return (
    <div className="session-content">
      <h3 className="session-title">Workshop Session Four</h3>
      <Carousel interval={null} className="session-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SummerReceptionImage}
            alt="Organising Summer Reception"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={exchangeImage}
            alt="Exchange Workshop"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={brandingImage}
            alt="Branding for Yourself and for IAESTE"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={workImage}
            alt="Shaping the Future of Work"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Session1;
