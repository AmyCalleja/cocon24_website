import React from 'react';
import '../styles/Location.css'; // Ensure the path is correct

const LocationPage = () => {
    return (
        <div className="location-container location-page container-fluid">
            <div className="row h-100">
                {/* Map Centered Vertically on the Left */}
                <div className="col-md-6 d-flex align-items-center justify-content-center map-box">
                    <iframe
                        title="location-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.488024197686!2d6.864425515496196!3d45.92369707910862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7aaca9d0ca31%3A0xa32c3c3bca4b024a!2sChamonix-Mont-Blanc%2C%20France!5e0!3m2!1sen!2sus!4v1641319043126"
                        style={{ width: '100%', height: '100%', border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                {/* Text Box on the Right */}
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="location-text-box">
                        <h1>Location</h1>
                        <p>Located at the heart of Mont-Blanc, the conference and all events will be hosted at HI Chamonix Mont-Blanc Youth Hostel.</p>
                        <h4>Address</h4>
                        <p>HI Chamonix Mont-Blanc Youth Hostel</p>
                        <p>127 Montée J Balmat</p>
                        <p>Les Pélerins d'en Haut</p>
                        <p>74400 Chamonix-Mont-Blanc</p>
                        <p>France</p>
                        <h4>Getting to the Conference</h4>
                        <p>Geneva Airport (GVA) is your gateway to Chamonix, with other routes from Lyon and 
                            Grenoble also available. You can catch a train (SNCF) or a bus (BlaBlaBus, FlixBus, 
                            SwissTours) from Geneva bus station. Find all you need to plan your trip at
                             omio.com.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationPage;
