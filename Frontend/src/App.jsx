import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";

import Home from "./Pages/Home/Home";
import Topbar from "./Component/Topbar/Topbar";
import CourseGrid from "./Pages/CourseGrid/CourseGrid";

const App = () => {
  return (
    <>
      <Topbar/>
      <Navbar />

      <Routes>
        {/* ✅ Home Route */}
        <Route path="/" element={<Home />} />
        <Route path="/coursegrid" element={<CourseGrid/>}/>
      </Routes>

      <Footer />
    </>
  );
};

export default App;