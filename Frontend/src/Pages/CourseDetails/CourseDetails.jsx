import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

import "./CourseDetails.css";
import CourseLike from "../../Component/CourseLike/CourseLike";
import CourseHero from "../../Component/CourseHero/CourseHero";
import CourseSidebar from "../../Component/CourseSidebar/CourseSidebar";
import CourseContent from "../../Component/CourseContent/CourseContent";

const CourseDetails = () => {
  const { id } = useParams(); // 🔥 get id
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await API.get(`/api/courses/${id}`);
        setCourse(res.data.data || res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-details">
      <CourseHero course={course} />

      <div className="course-details__container">
        <div className="course-details__left">
          <CourseContent course={course} />
        </div>

        <div className="course-details__right">
          <CourseSidebar course={course} />
        </div>
      </div>

      <CourseLike />
    </div>
  );
};

export default CourseDetails;