import React from "react";
import "./ListHero.css";
import studentsImg from "../../assets/Breadcrum-iit.webp";
import bgLines from "../../assets/bg-lines.png";

const ListHero = () => {
  const base = "listHero";

  return (
    <section className={base}>
      <img src={bgLines} alt="" className={`${base}__bgLines`} />

      <div className={`${base}__inner`}>
        <div className={`${base}__content`}>
          <div className={`${base}__sparkles`} aria-hidden="true">
            <svg
              className={`${base}__spark ${base}__spark--big`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>

            <svg
              className={`${base}__spark ${base}__spark--small`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>

          <h1 className={`${base}__title`}>All Courses</h1>

          <p className={`${base}__subtitle`}>
            Best online education platforms offer flexible learning,
            quality courses, and expert instructors.
          </p>
        </div>

        <div className={`${base}__visual`}>
          <div className={`${base}__shape`}></div>
          <img
            src={studentsImg}
            alt="Students learning together"
            className={`${base}__image`}
          />
        </div>
      </div>

      <div className={`${base}__searchWrap`}>
        <div className={`${base}__searchBar`}>
          <div className={`${base}__field ${base}__field--course`}>
            <input
              type="text"
              placeholder="Course Name"
              className={`${base}__input`}
            />
          </div>

          <div className={`${base}__field ${base}__field--category`}>
            <select className={`${base}__select`} defaultValue="Default">
              <option value="Default">Default</option>
              <option value="Web Development">Web Development</option>
              <option value="UI UX Design">UI UX Design</option>
              <option value="Programming">Programming</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          <button className={`${base}__searchBtn`} type="button">
            <span className={`${base}__searchBtnText`}>Search</span>
            <span className={`${base}__searchIcon`} aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="16.65" y1="16.65" x2="21" y2="21"></line>
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div className={`${base}__bottomCurve`} aria-hidden="true">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className={`${base}__bottomSvg`}
        >
          <path
            d="M0,125 C260,145 520,78 790,92 C1020,104 1225,70 1440,62 L1440,180 L0,180 Z"
            fill="#f4efea"
          />
        </svg>
      </div>
    </section>
  );
};

export default ListHero;