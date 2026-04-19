import React, { useState, useEffect } from "react";
import VideoHero from "../../Component/VideoHero/VideoHero";
import VideoPrice from "../../Component/VideoPrice/VideoPrice";
import VideoSection from "../../Component/VideoSection/VideoSection";
import "./CourseVideo.css";
import API from "../../api/axios";

const CourseVideo = () => {
  const base = "courseVideo";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // ✅ ADD FILTER STATE HERE (GLOBAL)
  const [filters, setFilters] = useState({
    price: [],
    language: [],
    format: [],
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await API.get("/api/categories");
      setCategories(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ HANDLE FILTER CHANGE FROM SIDEBAR
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className={base}>
      <VideoHero
        setSearch={setSearch}
        categories={categories}
        setCategory={setCategory}
      />

      <div className={`${base}__main`}>
        <aside className={`${base}__sidebar`}>
          <div className={`${base}__sidebarInner`}>
            {/* ✅ PASS FILTER HANDLER */}
            <VideoPrice onFilterChange={handleFilterChange} />
          </div>
        </aside>

        <section className={`${base}__content`}>
          {/* ✅ PASS FILTERS TO VIDEO SECTION */}
          <VideoSection
            searchTerm={search}
            category={category}
            filters={filters}
          />
        </section>
      </div>
    </div>
  );
};

export default CourseVideo;