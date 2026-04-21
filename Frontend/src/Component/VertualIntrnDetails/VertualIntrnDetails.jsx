import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

import "./VertualIntrnDetails.css";

import VertualIntrnHero from "../../Component/VertualIntrnHero/VertualIntrnHero"
import VertualDetailsSidebar from "../../Component/VertualDetailsSidebar/VertualDetailsSidebar";
import VertualInternContaint from "../../Component/VertualInternContaint/VertualInternContaint";
import VertualInterLike from "../../Component/VertualInterLike/VertualInterLike";



const VertualIntrnDetails = () => {
  const { id } = useParams(); // 🔥 get id
const [course, setCourse] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

 useEffect(() => {
  const fetchCourse = async () => {
    try {
      setLoading(true);
      const res = await API.get(`/api/virtual-internships/${id}`);
      setCourse(res.data.data || res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load course");
    } finally {
      setLoading(false);
    }
  };

  if (id) fetchCourse();
}, [id]);



useEffect(() => {
    window.scrollTo(0, 0);
}, [id]);

if (loading) return <h2>Loading...</h2>;
if (error) return <h2>{error}</h2>;

  return (
    <div className="course-details">
      <VertualIntrnHero course={course} />

      <div className="course-details__container">
        <div className="course-details__left">
          <VertualInternContaint course={course} />
        </div>

        <div className="course-details__right">
          <VertualDetailsSidebar course={course} />
        </div>
      </div>

      <VertualInterLike />
    </div>
  );
};

export default VertualIntrnDetails;