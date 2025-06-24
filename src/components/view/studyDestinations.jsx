import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import contentData from "../../data/details.json";
import MBBSBenefits from "./advantageMbbs";
import { DiffrentUniversities } from "./diff_universities";
import "../css/studydestination.css";
import { FAQAccordion } from "./faq";

const StudyDestination = () => {
  const { country } = useParams();
  const [pageData, setPageData] = useState(null);


  useEffect(() => {
    setPageData(contentData[country]);
  }, [country]);

  if (!pageData) return <p>Loading...</p>; 

  return (
    <section className="study-destination">
      <div className="study-section">
        <p className="breadcrumb">{pageData.breadcrumb}</p>
        <h2 className="title">{pageData.title}</h2>
      </div>

      <div className="image-layout">
        <div className="img-left">
          <img src={pageData.image1} alt="Left" className="styled-img" />
        </div>
        <div className="img-right">
          <img src={pageData.image2} alt="Right" className="styled-img" />
        </div>
      </div>

      <p className="study-description">{pageData.description}</p>

      <MBBSBenefits />
      <DiffrentUniversities data={pageData.gallery} />
      <FAQAccordion />
    </section>
  );
};

export default StudyDestination;
