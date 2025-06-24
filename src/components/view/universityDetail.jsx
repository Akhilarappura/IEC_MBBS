import React from "react";
import { useParams } from "react-router-dom";
import universityData from "../../data/universityDetail.json"; 
import "../css/universityDetail.css";
import "../css/feesStructure.css";

const UniversityDetail = () => {
  const { universityId } = useParams();
  const decodedId = decodeURIComponent(universityId);

  const university = universityData.find(uni => uni.id === decodedId);

  if (!university) {
    return <p style={{ padding: "2rem" }}>University not found.</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h3>{university.title}</h3>
      <img src={university.bannerImage} alt={university.title} width="100%" height="500" />
      <UniversityOverview university={university} />
    </div>
  );
};

const UniversityOverview = ({ university }) => {
  return (
    <div className="uni-container">
      <div className="uni-header">
        <div className="overview-text">
          <h2 className="overview-title">Overview</h2>
          <p>{university.overview}</p>
        </div>
        <div className="side-panel">
          <h3 className="uni-title">{university.title}</h3>
          <img src={university.sideImage} alt={university.title} className="uni-image" />
        </div>
      </div>

      <div className="highlight-box">
        <p>{university.highlights}</p>
      </div>

      <FeeStructure fees={university.fees} />
    </div>
  );
};

const FeeStructure = ({ fees }) => (
  <div className="fee-structure-container">
    <h2 className="fee-title">FEE STRUCTURE</h2>
    <div className="table-wrapper">
      <table className="fee-table">
        <thead>
          <tr>
            <th>YEAR</th>
            <th>TUITION FEE (EURO)</th>
            <th>HOSTEL FEE (EURO)</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((row, i) => (
            <tr key={i}>
              <td>{row.year}</td>
              <td>{row.tuition}</td>
              <td>{row.hostel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default UniversityDetail;
