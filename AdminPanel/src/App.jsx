import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "./AppLayout/AdminLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MediaPosting from "./Pages/MediaPosting/MediaPosting";
import AddMentor from "./Pages/AddMentor/AddMentor";
import Testimonial from "./Pages/Testimonial/Testimonial";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/media/course-materials" element={<MediaPosting/>}/>
        <Route path="/mentor/add" element={<AddMentor/>}/>
        <Route path="/testimonial/add" element={<Testimonial/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;