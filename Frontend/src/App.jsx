import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";

import Home from "./Pages/Home/Home";
import Topbar from "./Component/Topbar/Topbar";
import OrganisationHistory from "./Pages/OrganisationHistory/OrganisationHistory";
import VisionMission from "./Pages/VisionMission/VisionMission";
import Immersion from "./Pages/Immersion/Immersion";
import Internship from "./Pages/Internship/Internship";

const App = () => {
  return (
    <>
      {/* 🔥 Global Layout */}
      <Topbar />
      <Navbar />

      {/* 🔥 Routes only */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/org/history" element={<OrganisationHistory/>} />
        <Route path="/vision/mission" element={<VisionMission/>} />
        <Route path="/immersion" element={<Immersion/>} />
        <Route path="/internship" element={<Internship/>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;