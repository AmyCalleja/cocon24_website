import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ConnectLogo from './images/core_logo.png'; 
import CoConLogo from './images/cocon_logo.png'; 

import HomePage from './components/HomePage';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-100">
            <div>
              <img src={ConnectLogo} alt="Connect Logo" className="logo me-2" />
              <img src={CoConLogo} alt="CoCon Logo" className="logo" />
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContents">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#nav-home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#nav-location">Schedule</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#nav-contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - HomePage */}
      <HomePage />


      {/* Footer */}
      <footer className="mt-auto py-3 bg-light">
        <div className="container text-center">
          <p className="mb-0">© 2024 Your Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
