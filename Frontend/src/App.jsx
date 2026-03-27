import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";

import Home from "./Pages/Home/Home";
import Topbar from "./Component/Topbar/Topbar";

const App = () => {
  return (
    <>
      <Topbar/>
      <Navbar />

      <Routes>
        {/* ✅ Home Route */}
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;