import React from "react";
import CountUp from "./countUp";

export const  Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Our Core Strengths</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-4 col-md-4">
                  {" "}
                  <CountUp end={d.count}/>
                  <h3>{d.title}</h3>
                  
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
  </div>
 );
};