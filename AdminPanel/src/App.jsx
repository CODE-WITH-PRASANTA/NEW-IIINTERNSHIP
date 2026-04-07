import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "./AppLayout/AdminLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MediaPosting from "./Pages/MediaPosting/MediaPosting";
import CoursePost from "./Pages/CoursePost/CoursePost"
import AddMentor from "./Pages/AddMentor/AddMentor";
import Testimonial from "./Pages/Testimonial/Testimonial";
import VirtualInternship from "./Pages/VirtualInternship/VirtualInternship";
import VirtualManage from "./Pages/VirtualManage/VirtualManage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/media/course-materials" element={<MediaPosting/>}/>
        <Route path="/Course/post" element={<CoursePost/>}/>
        <Route path="/mentor/add" element={<AddMentor/>}/>
        <Route path="/testimonial/add" element={<Testimonial/>}/>
        <Route path="/course/virtual" element={<VirtualInternship/>}/>
        <Route path="/course/manage/virtual" element={<VirtualManage/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;