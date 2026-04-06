import React from "react";
;
import "./CourseDetails.css";
import CourseLike from "../../Component/CourseLike/CourseLike";
import CourseHero from "../../Component/CourseHero/CourseHero";
import CourseSidebar from "../../Component/CourseSidebar/CourseSidebar";
import CourseContent from "../../Component/CourseContent/CourseContent";

const CourseDetails = () => {
  return (
    <div className="course-details">
      <CourseHero/>

      <div className="course-details__container">
        <div className="course-details__left">
          <CourseContent/>
        </div>

        <div className="course-details__right">
          <CourseSidebar/>
        </div>
      </div>
       
       <CourseLike/>

    </div>
  );
};

export default CourseDetails;