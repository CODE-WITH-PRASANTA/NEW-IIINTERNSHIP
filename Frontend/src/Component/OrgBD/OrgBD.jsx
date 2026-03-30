import React from "react";
import "./OrgBD.css";

import studentsImg from "../../assets/Breadcrum-iit.webp";
import curveImg from "../../assets/curve.svg";
import bgLines from "../../assets/bg-lines.png";

const OrgBD = () => {
  return (
    <section className="orgbd">

      {/* BACKGROUND LINES */}
      <img src={bgLines} alt="" className="orgbd__bg-lines" />

      <div className="orgbd__container">

        {/* LEFT */}
        <div className="orgbd__content">
          <div className="orgbd__stars">
            <span className="orgbd__star"></span>
            <span className="orgbd__star small"></span>
          </div>

          <h1>About Us</h1>
          <p>Learn more about our company and mission.</p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="orgbd__image">
          <img src={studentsImg} alt="students" />
        </div>

      </div>

      {/* CURVE (IMPORTANT: OUTSIDE CONTAINER) */}
      <div className="orgbd__curve">
        <img src={curveImg} alt="curve" />
      </div>

    </section>
  );
};

export default OrgBD;