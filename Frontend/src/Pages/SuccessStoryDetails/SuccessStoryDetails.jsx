import React from "react";
import "./SuccessStoryDetails.css";

import SuccessHero from "../../Component/SuccessHero/SuccessHero";
import SuccessDetailsreply from "../../Component/SuccessDetailsreply/SuccessDetailsreply";
import LeaveComment from "../../Component/LeaveComment/LeaveComment";
import SuccessSidebar from "../../Component/SuccessSidebar/SuccessSidebar";
import SuccessDetailsContent from "../../Component/SuccessDetailsContent/SuccessDetailsContent";

const SuccessStoryDetails = () => {
  return (
    <div className="ssd-container">
      
      {/* HERO - FULL WIDTH */}
      <div className="ssd-hero">
        <SuccessHero />
      </div>

      {/* MAIN LAYOUT */}
      <div className="ssd-main">
        
        {/* LEFT CONTENT (60%) */}
        <div className="ssd-left">
          <SuccessDetailsContent/>
          <SuccessDetailsreply />
        </div>

        {/* RIGHT SIDEBAR (40%) */}
        <div className="ssd-right">
          <SuccessSidebar />
        </div>

        

      </div>

      <LeaveComment />

    </div>
  );
};

export default SuccessStoryDetails;