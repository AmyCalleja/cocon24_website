import React from 'react';
import '../styles/Location.css'; 

const LocationPage = () => {
    return (
        <div className="location-container location-page container-fluid">
            <div className="row h-100">
                {/* Map Centered Vertically on the Left */}
                <div className="col-md-6 d-flex align-items-center justify-content-center map-box">
                    <iframe
                        title="location-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.1188798437297!2d6.852155575369817!3d45.908932971084724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47894e15f7400c09%3A0xc9ed32c264fbde53!2sAuberge%20de%20Jeunesse%20HI%20Chamonix%20Mont-Blanc%20Hostel!5e0!3m2!1sen!2smt!4v1712753512721!5m2!1sen!2smt"
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
                             <a href="https://www.omio.com" target="_blank" rel="noopener noreferrer"> omio.com</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationPage;
