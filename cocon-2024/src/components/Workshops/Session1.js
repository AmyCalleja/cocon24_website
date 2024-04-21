import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../styles/Sessions.css'; 
import jobRaisingImage from '../../images/workshops/session1/jobraising.png';
import crisisManagementImage from '../../images/workshops/session1/crisis_management.png';
import leadershipImage from '../../images/workshops/session1/leadership.png';
import memberRaisingImage from '../../images/workshops/session1/member_raising.png';

const Session1 = () => {
  return (
    <div className="session-content">
      <h3 className="session-title">Workshop Session One</h3>
      <Carousel interval={null} className="session-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={jobRaisingImage}
            alt="Job Raising"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={crisisManagementImage}
            alt="Crisis Management"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={leadershipImage}
            alt="Leadership in IAESTE"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={memberRaisingImage}
            alt="Member raising"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Session1;
