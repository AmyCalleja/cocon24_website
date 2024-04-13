import React from 'react';
import '../styles/Schedule.css'; // Ensure the path matches where you save the CSS file
import SchedulePDF from '../resources/Schedule.pdf'; // Update the path according to your project structure

const Schedule = () => {
    return (
        <div className="schedule-container">
            <h1 className="schedule-title">Schedule</h1>
            <embed src={SchedulePDF} type="application/pdf" className="schedule-pdf-viewer"/>
            <p className="schedule-change-notice">Schedule is subject to change.</p>
        </div>
    );
};

export default Schedule;
