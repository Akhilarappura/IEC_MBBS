import React from "react";
import "../css/About_Home.css";
import { FaUserMd, FaGraduationCap, FaHospitalAlt, FaGlobe } from "react-icons/fa"; 

export const AboutHome = () => {
  return (
    <div className="about-home-wrapper">
 
      <div className="top-image">
        <img src="/img/group.jpg" alt="Top banner" className="top-banner-image" />
      </div>
      <div className="who-we-are-section">
        <div className="who-we-are-content">
          <h2 className="who-we-are-heading">Who We Are</h2>
          <p>
            International Educare Corporation, popularly known as IEC is the specialist in Medical
            Education Abroad. IEC is established in 2000...
          </p>
          <p>
            IEC have partnered with many renowned Medical Universities Internationally...
          </p>
          <p>
            6500+ Studying MBBS through US 2500+ IEC Students are working Doctors now.
          </p>
        </div>

        <div className="who-we-are-image">
          <img src="/img/doctor.jpg" alt="Doctor with stethoscope" />
        </div>
      </div>
      <div className="stats-section">
        <div className="stat-box">
          <FaGraduationCap className="stat-icon" />
          <h3>6500</h3>
          <p>Medical Students Already Enrolled</p>
        </div>

        <div className="stat-box">
          <FaUserMd className="stat-icon" />
          <h3>2500</h3>
          <p>Already Practicing Doctors<br />In India</p>
        </div>

        <div className="stat-box">
          <FaHospitalAlt className="stat-icon" />
          <h3>200</h3>
          <p>Academicians Placed On<br />Campus</p>
        </div>

        <div className="stat-box">
          <FaGlobe className="stat-icon" />
          <h3>25</h3>
          <p>Recruiting Countries</p>
        </div>
      </div>
    <div className="what-we-do-section">
        <div className="what-we-do-text">
          <h2 className="section-title">What We Do</h2>
          <p>
            Apart from directly interfacing with students and foreign universities, it offers personalized advice through in-house counsellors and facilitates regular interaction with leading educationists, psychologists, academicians and social scientists as well.
          </p>
          <p>
            Today, more than 3000 students are benefiting from <strong>IEC MBBS</strong> resources for they accept the organization as their best choice for building a successful career in diverse domains.
          </p>
          <ul>
            <li>Students’ profile evaluation by in-house experienced counsellors and associates.</li>
            <li>We help the students choose the medical university in their country of choice based on eligibility.</li>
            <li>We conduct a mock interview for university admission and Visa process.</li>
            <li>We have tie-ups with many national/international banks for student education loans.</li>
            <li>We also dispense information regularly through our social media platforms.</li>
          </ul>
        </div>

        <div className="what-we-do-image">
          <img src="/img/students.jpg" alt="Students discussing" />
        </div>
      </div>
    </div>
  );
};
