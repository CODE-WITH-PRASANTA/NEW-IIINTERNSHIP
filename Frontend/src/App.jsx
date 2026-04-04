import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";

import Home from "./Pages/Home/Home";
import Topbar from "./Component/Topbar/Topbar";
import CourseGrid from "./Pages/CourseGrid/CourseGrid";
import OrganisationHistory from "./Pages/OrganisationHistory/OrganisationHistory";
import VisionMission from "./Pages/VisionMission/VisionMission";
import Immersion from "./Pages/Immersion/Immersion";
import Internship from "./Pages/Internship/Internship";
import CourseDetails from "./Pages/CourseDetails/CourseDetails";
import SuccessStory from "./Pages/SuccessStory/SuccessStory";


import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Faq from "./Pages/Faq/Faq";
import SuccessStoryDetails from "./Pages/SuccessStoryDetails/SuccessStoryDetails";
import Gallery from "./Pages/Gallery/Gallery";
import Carrier from "./Pages/Carrier/Carrier";
import Contact from "./Pages/Contact/Contact";
import FloatingForm from "./Component/FloatingForm/FloatingForm";
import FloatingIcons from "./Component/FloatingIcons/FloatingIcons";
import Donate from "./Component/Donate/Donate";

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
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/successstorydetails" element={<SuccessStoryDetails/>}/>
        <Route path="/immersion" element={<Immersion/>} />
        <Route path="/internship" element={<Internship/>} />
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/career" element={<Carrier/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Course" element={<CourseDetails/>} />
        <Route path="/story" element={<SuccessStory/>} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      
      <FloatingForm />
      <FloatingIcons />
      <Footer />
    </>
  );
};

export default App;