import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";

import Home from "./Pages/Home/Home";
import Topbar from "./Component/Topbar/Topbar";
import CourseGrid from "./Pages/CourseGrid/CourseGrid";
import OrganisationHistory from "./Pages/OrganisationHistory/OrganisationHistory";
import VisionMission from "./Pages/VisionMission/VisionMission";

import CourseVideo from "./Pages/CourseVideo/CourseVideo";

const App = () => {
  return (
    <>
      {/* 🔥 Global Layout */}
      <Topbar />
      <Navbar />

      {/* 🔥 Routes only */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coursegrid" element={<CourseGrid/>}/>
        <Route path="/org/history" element={<OrganisationHistory/>} />
        <Route path="/vision/mission" element={<VisionMission/>} />
        
        <Route path="/coursevideo" element={<CourseVideo/>}/>
      </Routes>

      <Footer />
    </>
  );
};

export default App;