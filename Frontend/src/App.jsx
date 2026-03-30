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
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Faq from "./Pages/Faq/Faq";
import SuccessStoryDetails from "./Pages/SuccessStoryDetails/SuccessStoryDetails";

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
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/successstorydetails" element={<SuccessStoryDetails/>}/>
      </Routes>

      <Footer />
    </>
  );
};

export default App;