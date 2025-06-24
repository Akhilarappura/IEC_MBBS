import React from "react";
import "../css/feesStructure.css";

const FeeStructure = () => {
  const feeData = [
    { year: 1, tuition: 8000, hostel: 3000 },
    { year: 2, tuition: 8000, hostel: 3000 },
    { year: 3, tuition: 8000, hostel: 3000 },
    { year: 4, tuition: 8000, hostel: 3000 },
    { year: 5, tuition: 8000, hostel: 3000 },
    { year: 6, tuition: 8000, hostel: 3000 },
  ];

  return (
    <div className="fee-structure-container">
      <h2 className="fee-title">FEE STRUCTURE - 2021</h2>
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
            {feeData.map((row, index) => (
              <tr key={index}>
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
};

export default FeeStructure;
