import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* ===== LAYOUT ===== */
import AdminLayout from "./AppLayout/AdminLayout";

/* ===== AUTH ===== */
import Login from "./Pages/LoginPage/LoginPage";

/* ===== PAGES ===== */
import Dashboard from "./Pages/Dashboard/Dashboard";
import MediaPosting from "./Pages/MediaPosting/MediaPosting";
import CoursePost from "./Pages/CoursePost/CoursePost";
import CourseManage from "./Pages/CourseManage/CourseManage";
import CoursePreview from "./Pages/CoursePreview/CoursePreview";

import AddMentor from "./Pages/AddMentor/AddMentor";

import Testimonial from "./Pages/Testimonial/Testimonial";
import ViewTestimonials from "./Pages/ViewTestimonials/ViewTestimonials";

import VirtualInternship from "./Pages/VirtualInternship/VirtualInternship";
import VirtualManage from "./Pages/VirtualManage/VirtualManage";

import LearningPartner from "./Pages/LearningPartner/LearningPartner";

import CategoryPost from "./Pages/CategoryPost/CategoryPost";
import CategoryPreview from "./Pages/CategoryPreview/CategoryPreview";

import NoticePost from "./Pages/NoticePost/NoticePost";
import NoticeManage from "./Pages/NoticeManage/NoticeManage";

import SucessStory from "./Pages/SucessStory/SucessStory";
import StoryPreview from "./Pages/StoryPreview/StoryPreview";

/* ===== PROTECTED ROUTE ===== */
const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return isAdmin ? children : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* ===== LOGIN ===== */}
        <Route path="/login" element={<Login />} />

        {/* ===== ADMIN PROTECTED ===== */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* DASHBOARD */}
          <Route index element={<Dashboard />} />

          {/* MEDIA */}
          <Route path="media/course-materials" element={<MediaPosting />} />

          {/* COURSE */}
          <Route path="course/post" element={<CoursePost />} />
          <Route path="course/post/:id" element={<CoursePost />} />
          <Route path="course/manage" element={<CourseManage />} />
          <Route path="course/preview" element={<CoursePreview />} />

          {/* MENTOR */}
          <Route path="mentor/add" element={<AddMentor />} />

          {/* TESTIMONIAL */}
          <Route path="testimonial/add" element={<Testimonial />} />
          <Route path="testimonial/view" element={<ViewTestimonials />} />

          {/* VIRTUAL COURSE */}
          <Route path="course/virtual" element={<VirtualInternship />} />
          <Route path="course/virtual/:id" element={<VirtualInternship />} />
          <Route path="course/manage/virtual" element={<VirtualManage />} />

          {/* PARTNERS */}
          <Route path="learning-partners" element={<LearningPartner />} />

          {/* CATEGORY */}
          <Route path="category/create" element={<CategoryPost />} />
          <Route path="category/preview" element={<CategoryPreview />} />

          {/* NOTICE */}
          <Route path="admin/notices/post" element={<NoticePost />} />
          <Route path="admin/notices/manage" element={<NoticeManage />} />

          {/* SUCCESS STORY */}
          <Route path="success-story/post" element={<SucessStory />} />
          <Route path="success-story/preview" element={<StoryPreview />} />
        </Route>

        {/* ===== 404 ===== */}
        <Route path="*" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>404 Page Not Found</h2>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;