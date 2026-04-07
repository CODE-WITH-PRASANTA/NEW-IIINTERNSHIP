import React from "react";
import "./CourseGrid.css";
import GridHero from "../../Component/GridHero/GridHero";
import GridPrice from "../../Component/GridPrice/GridPrice";
import CoursesView from "../../Component/CoursesView/CoursesView";
import { useState } from "react";
const CourseGrid = () => {
  const base = "courseGridPage";

  const [filters, setFilters] = useState({
    price: [],
    language: [],
    format: [],
  });
  const [activePage, setActivePage] = useState(1);

  const [search, setSearch] = useState({
    text: "",
    category: "Default",
  });
  return (
    <div className={base}>
      <GridHero
        search={search}
        setSearch={setSearch}
        setActivePage={setActivePage}
      />

      <section className={`${base}__mainSection`}>
        <div className={`${base}__container`}>
          <aside className={`${base}__sidebar`}>
            <div className={`${base}__stickyBox`}>
              <GridPrice filters={filters} setFilters={setFilters} />
            </div>
          </aside>

          <CoursesView
            filters={filters}
            search={search}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
      </section>
    </div>
  );
};

export default CourseGrid;
