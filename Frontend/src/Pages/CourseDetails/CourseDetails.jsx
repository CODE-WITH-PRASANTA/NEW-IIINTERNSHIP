import React from "react";
import CourseDetailsBD from "../../Component/CourseDetailsBD/CourseDetailsBD";
import CourseContent from "../../Component/CourseContent/CourseContent";
import CourseSidebar from "../../Component/CourseSidebar/CourseSidebar";
import "./CourseDetails.css";
import CourseLike from "../../Component/CourseLike/CourseLike";

const CourseDetails = () => {
  return (
    <div className="course-details">
      <CourseDetailsBD />

      <div className="course-details__container">
        <div className="course-details__left">
          <CourseContent />
        </div>

        <div className="course-details__right">
          <CourseSidebar />
        </div>
      </div>
       
       <CourseLike/>

    </div>
  );
};

export default CourseDetails;