import React from "react";
import OCIBreadcrum from "../../Component/OCIBreadcrum/OCIBreadcrum";
import OncampusCourses from "../../Component/OncampusCourses/OncampusCourses";
import OnCampusStructure from "../../Component/OnCampusStructure/OnCampusStructure";
import "./OnCampusInternship.css";

const OnCampusInternship = () => {
  return (
    <div className="oci">
      <OCIBreadcrum />

      <div className="oci__layout">
        {/* LEFT SIDEBAR */}
        <aside className="oci__sidebar">
          <OnCampusStructure />
        </aside>

        {/* RIGHT CONTENT */}
        <main className="oci__content">
          <OncampusCourses />
        </main>
      </div>
    </div>
  );
};

export default OnCampusInternship;