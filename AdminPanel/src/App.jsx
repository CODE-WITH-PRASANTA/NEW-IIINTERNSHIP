import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "./AppLayout/AdminLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MediaPosting from "./Pages/MediaPosting/MediaPosting";
import CoursePost from "./Pages/CoursePost/CoursePost";
import AddMentor from "./Pages/AddMentor/AddMentor";
import Testimonial from "./Pages/Testimonial/Testimonial";
import VirtualInternship from "./Pages/VirtualInternship/VirtualInternship";
import VirtualManage from "./Pages/VirtualManage/VirtualManage";
import CourseManage from "./Pages/CourseManage/CourseManage";
import CoursePreview from "./Pages/CoursePreview/CoursePreview";
import ViewTestimonials from "./Pages/ViewTestimonials/ViewTestimonials";
import LearningPartner from "./Pages/LearningPartner/LearningPartner";
import CategoryPost from "./Pages/CategoryPost/CategoryPost";
import CategoryPreview from "./Pages/CategoryPreview/CategoryPreview";
import NoticePost from "./Pages/NoticePost/NoticePost";
import NoticeManage from "./Pages/NoticeManage/NoticeManage";
import SucessStory from "./Pages/SucessStory/SucessStory";
import StoryPreview from "./Pages/StoryPreview/StoryPreview";
import Carreier from "./Pages/Carreier/Carreier";
import ApplyForm from "./Pages/ApplyForm/ApplyForm";
import GalleryPosting from "./Pages/GalleryPosting/GalleryPosting";
import ProjectPosting from "./Pages/ProjectPosting/ProjectPosting";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/media/course-materials" element={<MediaPosting />} />
          <Route path="/course/post" element={<CoursePost />} />
          <Route path="/course/post/:id" element={<CoursePost />} />
          <Route path="/course/manage" element={<CourseManage />} />
          <Route path="/course/preview" element={<CoursePreview />} />

          <Route path="/mentor/add" element={<AddMentor />} />
          <Route path="/testimonial/add" element={<Testimonial />} />
          <Route path="/testimonial/view" element={<ViewTestimonials />} />
          <Route path="/course/virtual" element={<VirtualInternship />} />
          <Route path="/course/virtual/:id" element={<VirtualInternship />} />
          <Route path="/course/manage/virtual" element={<VirtualManage />} />

          <Route path="/learning-partners" element={<LearningPartner />} />

          <Route path="/category/create" element={<CategoryPost />} />
          <Route path="/category/preview" element={<CategoryPreview />} />

          <Route path="/admin/notices/post" element={<NoticePost />} />
          <Route path="/admin/notices/manage" element={<NoticeManage />} />
          <Route path="/success-story/post" element={<SucessStory />} />
          <Route path="/success-story/preview" element={<StoryPreview />} />
          <Route path="/admin/carreier" element={<Carreier/>}/>
          <Route path="/admin/carreierapplyform" element={<ApplyForm/>}/>
          <Route path="/admin/gallery" element={<GalleryPosting/>}/>
          <Route path="/admin/projectposting" element={<ProjectPosting/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
