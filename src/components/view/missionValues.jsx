import React from "react";
import "../css/missionValues.css";

export const MissionValues = () => {
  return (
    <div className="mission-values-section">
      <div className="mission-values-text">
        <h2 className="mission-title">Our Mission</h2>
        <ul>
          <li>To use our technical skills and provide best solutions to our clients.</li>
          <li>To help understand individual needs and take a holistic view of clients requirements.</li>
          <li>To provide seamless integration of services from Training through Admission and all the way till client settles in.</li>
          <li>To help our clients comprehend the nuances of Overseas Higher Education and save them from any pitfalls.</li>
          <li>To guide our students at every step of their admission process and educate them about the right choices.</li>
        </ul>

        <h2 className="values-title">Our Values</h2>
        <ul>
          <li>Focusing on Quality based solutions</li>
          <li>Keeping flexible approach & support during training</li>
          <li>Offering exam-oriented learning techniques</li>
          <li>Handling admission process with utmost sincerity and integrity</li>
          <li>Ensuring high rate of success in study abroad consultancy</li>
        </ul>
      </div>

      <div className="mission-values-image">
        <img src="/img/mission-doctor.jpg" alt="Doctor with stethoscope" />
      </div>
    </div>
  );
};
