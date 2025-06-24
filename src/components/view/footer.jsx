import React from 'react';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="img/logo.png" alt="IEC Logo" height='60px'  style={{backgroundColor:"white",padding:"5px"}}/>
        </div>

        <div className="footer-section">
          <h4>UNIVERSITIES</h4>
          <ul>
            <li>MBBS IN GEORGIA</li>
            <li>MBBS IN UZBEKISTAN</li>
            <li>MBBS IN UKRAINE</li>
            <li>MBBS IN CHINA</li>
            <li>MBBS IN BANGLADESH</li>
            <li>MBBS IN RUSSIA</li>
            <li>MBBS IN KAZAKHISTAN</li>
            <li>MBBS / MD IN KYRGYZSTAN</li>
            <li>MBBS IN ARMENIA</li>
            <li>MBBS / MD IN PHILIPPINES</li>
            <li>MBBS IN MOLDOVA</li>
            <li>MBBS / MD IN POLAND</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>CONTACT US</h4>
          <p><strong>Address:</strong><br />
          2nd Floor, Rohit Chambers,<br />
          Opp: Malayala Manorama, SA Road,<br />
          Panampilly Nagar, Kochi, Kerala, India.</p>
          <p><strong>Phone:</strong> 9387944455</p>
          <p><strong>Email:</strong><br />
          <a href="mailto:info@iecmbbs.com">info@iecmbbs.com</a></p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Mission Statement</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyright 2025 IEC. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
