import React from 'react';
import '../styles/HomePage.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
// Import your image
import CoConLogo from '../images/logos/white_cocon_logo.png';

const HomePage = () => {
  return (
    <div className="home-container home-page">
      {/* Add the img tag for your overlay image */}
      <img src={CoConLogo} alt="Overlay" className="home-overlay-image"/>
      <div className="home-text-box">
        <h1>CoCon: Chamonix Mont-Blanc - France</h1>
        <p></p>
        <p>We proudly present this year's CoCon which is being jointly organised by IAESTE France and IAESTE Switzerland from the 25th - 28th April 2024.
           It is our pleasure to have you with us and be able to share IAESTE's values of international cooperation and community together. 
        </p>
      </div>
    </div>
  );
};

export default HomePage;
