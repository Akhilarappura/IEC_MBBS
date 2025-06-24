import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/diffUnivercities.css";

export const DiffrentUniversities = ({ data }) => {
  const navigate = useNavigate();


 const handleNavigate = (universityId) => {
  navigate(`/university/${universityId}`);
};


  return (
    <section className="universities-section" id="portfolio">
      <div className="container">
        <h2 className="section-title" id="key">MBBS Universities</h2>
        <div className="universities-grid">
          {data.map((d, i) => (
  <div
    className="university-card"
    onClick={() => handleNavigate(d.id)} 
    key={i}
  >
    <img
      src={d.smallImage}
      alt={d.title}
      className="styled-img"
    />
    <h3 className="university-title">{d.title}</h3>
  </div>
))}
        </div>
      </div>
    </section>
  );
};
