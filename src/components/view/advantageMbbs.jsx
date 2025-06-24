import React from "react";
import '../css/mbbsbenefits.css';

const MBBSBenefits = () => {
  return (
    <section className="mbbs-benefits-section">
      <div className="mbbs-columns">
        {/* Left Column */}
        <div className="mbbs-left">
          <h2 className="mbbs-heading">The advantages of studying MBBS in Ukraine</h2>
          <ul className="mbbs-list">
            <li>Medical universities in Georgia are <strong>recognized by WHO and UNESCO</strong>.</li>
            <li>Students who study MBBS in Georgia can do <strong>experiments and clinical clerkship</strong> from 1st semester onwards.</li>
            <li>Students get many best options for internships or further studies within the country itself.</li>
            <li>Universities in Georgia are <strong>well equipped with great technology</strong> and infrastructure.</li>
            <li>They provide <strong>very good accommodation facilities</strong> and make Indian food easily available.</li>
            <li>MBBS admission is a very <strong>affordable option for Indian students</strong>.</li>
            <li>Georgia is an absolutely <strong>safe country</strong>.</li>
            <li>Outstanding international faculties.</li>
            <li>Approximately, <strong>50% discount on transportation</strong> for international students.</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="mbbs-right">
          <h2 className="mbbs-heading">MBBS IN ABROAD</h2>
          <ul className="mbbs-abroad-list">
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
      </div>
    </section>
  );
};

export default MBBSBenefits;
