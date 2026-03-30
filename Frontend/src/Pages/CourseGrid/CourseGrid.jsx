import React from "react";
import "./CourseGrid.css";
import GridHero from "../../Component/GridHero/GridHero";
import GridPrice from "../../Component/GridPrice/GridPrice";
import CoursesView from "../../Component/CoursesView/CoursesView";

const CourseGrid = () => {
  const base = "courseGridPage";

  return (
    <div className={base}>
      <GridHero />

      <section className={`${base}__mainSection`}>
        <div className={`${base}__container`}>
          <aside className={`${base}__sidebar`}>
            <div className={`${base}__stickyBox`}>
              <GridPrice />
            </div>
          </aside>

          <div className={`${base}__content`}>
            <CoursesView />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseGrid;