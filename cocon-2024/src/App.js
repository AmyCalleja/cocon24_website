import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import coreLogo from './images/core_logo.png'; // Update path accordingly
import coConLogo from './images/cocon_logo.png'; // Update path accordingly

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navigation Tabs */}
      <nav className="navbar">
        <div className="container-fluid justify-content-end">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
          </div>
          <img src={coreLogo} alt="Connect Region Logo" className="ms-3" />
          <img src={coConLogo} alt="CoCon 2024 Logo" className="ms-3" />
        </div>
      </nav>

      {/* Content */}
      <div className="tab-content flex-grow-1" id="nav-tabContent">
      <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div className="container mt-3">
            <h1>Welcome to the Home Tab</h1>
            <p>This is a simple demonstration of tabs in a React application with Bootstrap.</p>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <div className="container mt-3">
            <h1>Your Profile</h1>
            <p>Profile tab content goes here.</p>
          </div>
        </div>
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
          <div className="container mt-3">
            <h1>Contact Us</h1>
            <p>Contact tab content goes here.</p>
          </div>
        </div>
      </div>

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
