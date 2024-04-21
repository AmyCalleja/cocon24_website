import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ConnectLogo from './images/logos/core_logo.png';
import CoConLogo from './images/logos/blue_cocon_logo.png';
import HomePage from './components/HomePage';
import LocationPage from './components/Location';
import SchedulePage from './components/Schedule';
import Session1 from './components/Workshops/Session1';
import Session2 from './components/Workshops/Session2';
import Session3 from './components/Workshops/Session3';
import Session4 from './components/Workshops/Session4';

function App() {
  return (
    <BrowserRouter>
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
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/location">Location</Link>
                  </li>
                  <li className="nav-item">
                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-workshops">
                        Workshops
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/workshops/session1">Session 1</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/workshops/session2">Session 2</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/workshops/session3">Session 3</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/workshops/session4">Session 4</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/schedule">Schedule</Link>
                  </li>
                  {/* Add other nav items here */}
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/workshops/session1" element={<Session1 />} />
          <Route path="/workshops/session2" element={<Session2 />} />
          <Route path="/workshops/session3" element={<Session3 />} />
          <Route path="/workshops/session4" element={<Session4 />} />
          <Route path="/schedule" element={<SchedulePage />} />
          {/* Define other routes as needed */}
        </Routes>

        {/* Footer */}
        <footer className="mt-auto py-3 bg-light">
          <div className="container text-center">
            <p className="mb-0">© 2024 Your Website. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
