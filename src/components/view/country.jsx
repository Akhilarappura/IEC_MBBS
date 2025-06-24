import React from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "./image";

export const Country = (props) => {
  const navigate = useNavigate();

  const handleNavigate = (universityId) => {
    navigate(`/university/${universityId}`);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>STUDY IN ABROAD</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                    onClick={() => handleNavigate(d.id)} 
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
