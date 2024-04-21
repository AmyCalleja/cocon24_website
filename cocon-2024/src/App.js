import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
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
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">
              <img src={ConnectLogo} alt="Connect Logo" className="logo me-2" />
              <img src={CoConLogo} alt="CoCon Logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/location">Location</Nav.Link>
                <NavDropdown title="Workshops" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/workshops/session1">Session 1</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/workshops/session2">Session 2</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/workshops/session3">Session 3</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/workshops/session4">Session 4</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/workshops/session1" element={<Session1 />} />
          <Route path="/workshops/session2" element={<Session2 />} />
          <Route path="/workshops/session3" element={<Session3 />} />
          <Route path="/workshops/session4" element={<Session4 />} />
          <Route path="/schedule" element={<SchedulePage />} />
        </Routes>
        <footer className="mt-auto py-3 bg-light">
          <div className="container text-center">
            <p className="mb-0">© Connect Conference 2024 - Chamonix Mont Blanc, France.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
