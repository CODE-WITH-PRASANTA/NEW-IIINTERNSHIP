import React, { useMemo, useState } from "react";
import "./VideoSection.css";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaListUl, FaStar, FaUserAlt } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";

const VideoSection = () => {
  const base = "videoSection";
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("Default");
  const [activePage, setActivePage] = useState(1);
  const [selectedCourse, setSelectedCourse] = useState(1);

  const courses = useMemo(
    () => [
      {
        id: 1,
        title: "Introduction to Data Science and Analytics",
        category: "Science and Analytics",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        price: "Free",
        oldPrice: "$99",
        students: "270 Students",
        lessons: "28 Lessons",
        rating: "(4.8 / 2.6k Ratings)",
        description:
          "Learn key data science and analytics concepts, tools, and techniques to make data-driven decisions.",
      },
      {
        id: 2,
        title: "Digital Marketing Strategies and Tools",
        category: "Science and Analytics",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
        price: "$49",
        oldPrice: "$59",
        students: "270 Students",
        lessons: "40 Lessons",
        rating: "(4.8 / 2.6k Ratings)",
        description:
          "Develop digital marketing strategies to enhance brand visibility, engage audiences, and drive business growth online.",
      },
      {
        id: 3,
        title: "Cybersecurity Essentials Protecting Digital Systems",
        category: "Science and Analytics",
        image:
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
        price: "$720",
        oldPrice: "$999",
        students: "82 Students",
        lessons: "24 Lessons",
        rating: "(4.8 / 2.6k Ratings)",
        description:
          "Understand the foundations of cybersecurity, system safety, digital threats, and practical protection methods.",
      },
      {
        id: 4,
        title: "Web Development From Beginner to Expert",
        category: "Science and Analytics",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
        price: "$20",
        oldPrice: "$28",
        students: "270 Students",
        lessons: "40 Lessons",
        rating: "(4.8 / 2.6k Ratings)",
        description:
          "Master frontend and backend concepts with responsive layouts, reusable components, and real-world web projects.",
      },
      {
        id: 5,
        title: "Mastering Graphic Design Fundamentals",
        category: "Science and Analytics",
        image:
          "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
        price: "$119",
        oldPrice: "$149",
        students: "270 Students",
        lessons: "40 Lessons",
        rating: "(4.8 / 2.6k Ratings)",
        description:
          "Explore composition, typography, branding, layouts, and visual storytelling for modern design systems.",
      },
      {
        id: 6,
        title: "Business Analytics for Decision Making",
        category: "Science and Analytics",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
        price: "Free",
        oldPrice: "$99",
        students: "270 Students",
        lessons: "40 Lessons",
        rating: "(4.8 / 2.6k Ratings)",
        description:
          "Use analytics and reporting frameworks to support business planning, forecasting, and operational decisions.",
      },
      {
        id: 7,
        title: "Essentials Protecting Modern Networks",
        category: "Science and Analytics",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        price: "$89",
        oldPrice: "$129",
        students: "180 Students",
        lessons: "22 Lessons",
        rating: "(4.7 / 1.8k Ratings)",
        description:
          "Get started with secure systems, network fundamentals, and protective monitoring workflows.",
      },
      {
        id: 8,
        title: "Data Visualization With Modern Tools",
        category: "Science and Analytics",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        price: "$65",
        oldPrice: "$90",
        students: "310 Students",
        lessons: "31 Lessons",
        rating: "(4.9 / 3.1k Ratings)",
        description:
          "Present insights beautifully using charts, dashboards, storytelling patterns, and actionable metrics.",
      },
      {
        id: 9,
        title: "Practical Product Research and Growth",
        category: "Science and Analytics",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        price: "$54",
        oldPrice: "$84",
        students: "230 Students",
        lessons: "26 Lessons",
        rating: "(4.8 / 2.2k Ratings)",
        description:
          "Learn product discovery, user behavior insights, audience targeting, and growth experimentation.",
      },
    ],
    []
  );

  const sortedCourses = useMemo(() => {
    const priceToNumber = (price) => {
      if (price === "Free") return 0;
      return Number(price.replace("$", ""));
    };

    const data = [...courses];

    if (sortBy === "Price Low") {
      return data.sort((a, b) => priceToNumber(a.price) - priceToNumber(b.price));
    }

    if (sortBy === "Price High") {
      return data.sort((a, b) => priceToNumber(b.price) - priceToNumber(a.price));
    }

    if (sortBy === "Title") {
      return data.sort((a, b) => a.title.localeCompare(b.title));
    }

    return data;
  }, [courses, sortBy]);

  const itemsPerPage = viewMode === "grid" ? 6 : 2;
  const totalPages = Math.ceil(sortedCourses.length / itemsPerPage);

  const paginatedCourses = sortedCourses.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  const activeCourse =
    courses.find((course) => course.id === selectedCourse) || courses[0];

  const renderStars = () => (
    <div className={`${base}__stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar key={star} className={`${base}__star`} />
      ))}
    </div>
  );

  const handleViewChange = (mode) => {
    setViewMode(mode);
    setActivePage(1);
  };

  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <div className={`${base}__topbar`}>
          <p className={`${base}__results`}>Showing 1–9 of 24 results</p>

          <div className={`${base}__topbarRight`}>
            <div className={`${base}__viewSwitch`}>
              <button
                type="button"
                className={`${base}__viewBtn ${
                  viewMode === "grid" ? `${base}__viewBtn--active` : ""
                }`}
                onClick={() => handleViewChange("grid")}
                aria-label="Grid view"
              >
                <BsGrid3X3GapFill />
              </button>

              <button
                type="button"
                className={`${base}__viewBtn ${
                  viewMode === "list" ? `${base}__viewBtn--active` : ""
                }`}
                onClick={() => handleViewChange("list")}
                aria-label="List view"
              >
                <FaListUl />
              </button>
            </div>

            <div className={`${base}__sortWrap`}>
              <span className={`${base}__sortLabel`}>Short By:</span>
              <select
                className={`${base}__sortSelect`}
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setActivePage(1);
                }}
              >
                <option value="Default">Default</option>
                <option value="Price Low">Price Low</option>
                <option value="Price High">Price High</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        </div>

        {viewMode === "grid" && (
          <>
            <div className={`${base}__featuredWrap`}>
              <div className={`${base}__featuredMain`}>
                <div className={`${base}__featuredImageWrap`}>
                  <img
                    src={activeCourse.image}
                    alt={activeCourse.title}
                    className={`${base}__featuredImage`}
                  />
                  <button
                    type="button"
                    className={`${base}__playBtn`}
                    aria-label="Play video"
                  >
                    <span className={`${base}__playTriangle`}></span>
                  </button>
                </div>

                <div className={`${base}__featuredContent`}>
                  <h3 className={`${base}__featuredTitle`}>{activeCourse.title}</h3>

                  <div className={`${base}__ratingRow`}>
                    {renderStars()}
                    <span className={`${base}__ratingText`}>
                      {activeCourse.rating}
                    </span>
                  </div>

                  <div className={`${base}__priceRow`}>
                    <span
                      className={`${base}__price ${
                        activeCourse.price === "Free" ? `${base}__price--free` : ""
                      }`}
                    >
                      {activeCourse.price}
                    </span>
                    <span className={`${base}__oldPrice`}>{activeCourse.oldPrice}</span>
                  </div>
                </div>
              </div>

              <div className={`${base}__playlist`}>
                <div className={`${base}__playlistHead`}>
                  <h4 className={`${base}__playlistTitle`}>{activeCourse.category}</h4>

                  <div className={`${base}__playlistLessons`}>
                    <FiFileText />
                    <span>{activeCourse.lessons}</span>
                  </div>
                </div>

                <div className={`${base}__playlistList`}>
                  {courses.slice(0, 6).map((item, index) => (
                    <button
                      type="button"
                      key={item.id}
                      className={`${base}__playlistItem ${
                        selectedCourse === item.id
                          ? `${base}__playlistItem--active`
                          : ""
                      }`}
                      onClick={() => setSelectedCourse(item.id)}
                    >
                      <span className={`${base}__playlistNumber`}>
                        {index + 1}.
                      </span>

                      <img
                        src={item.image}
                        alt={item.title}
                        className={`${base}__playlistThumb`}
                      />

                      <div className={`${base}__playlistContent`}>
                        <h5 className={`${base}__playlistItemTitle`}>{item.title}</h5>
                        <p className={`${base}__playlistItemMeta`}>{item.category}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={`${base}__grid`}>
              {paginatedCourses.map((item) => (
                <article className={`${base}__card`} key={item.id}>
                  <div className={`${base}__cardImageWrap`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`${base}__cardImage`}
                    />

                    <button
                      type="button"
                      className={`${base}__playBtn} ${base}__playBtn--card`}
                      aria-label="Play video"
                    >
                      <span className={`${base}__playTriangle`}></span>
                    </button>
                  </div>

                  <div className={`${base}__cardContent`}>
                    <h3 className={`${base}__cardTitle`}>{item.title}</h3>

                    <div className={`${base}__ratingRow`}>
                      {renderStars()}
                      <span className={`${base}__ratingText`}>{item.rating}</span>
                    </div>

                    <div className={`${base}__priceRow ${base}__priceRow--card`}>
                      <span
                        className={`${base}__price ${
                          item.price === "Free" ? `${base}__price--free` : ""
                        }`}
                      >
                        {item.price}
                      </span>
                      <span className={`${base}__oldPrice`}>{item.oldPrice}</span>
                    </div>
                  </div>

                  <div className={`${base}__cardFooter`}>
                    <div className={`${base}__metaItem`}>
                      <FaUserAlt />
                      <span>{item.students}</span>
                    </div>

                    <div className={`${base}__metaItem`}>
                      <HiOutlineDocumentText />
                      <span>{item.lessons}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {viewMode === "list" && (
          <div className={`${base}__listWrap`}>
            {paginatedCourses.map((item) => (
              <article className={`${base}__listCard`} key={item.id}>
                <div className={`${base}__listImageWrap`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`${base}__listImage`}
                  />
                </div>

                <div className={`${base}__listContent`}>
                  <h3 className={`${base}__listTitle`}>{item.title}</h3>

                  <div className={`${base}__ratingRow`}>
                    {renderStars()}
                    <span className={`${base}__ratingText`}>{item.rating}</span>
                  </div>

                  <p className={`${base}__listDescription`}>{item.description}</p>

                  <div className={`${base}__priceRow ${base}__priceRow--list`}>
                    <span
                      className={`${base}__price ${
                        item.price === "Free" ? `${base}__price--free` : ""
                      }`}
                    >
                      {item.price}
                    </span>
                    <span className={`${base}__oldPrice`}>{item.oldPrice}</span>
                  </div>

                  <div className={`${base}__listFooter`}>
                    <div className={`${base}__metaItem`}>
                      <FaUserAlt />
                      <span>{item.students}</span>
                    </div>

                    <div className={`${base}__metaItem`}>
                      <HiOutlineDocumentText />
                      <span>{item.lessons}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className={`${base}__pagination`}>
          <button
            type="button"
            className={`${base}__pageBtn`}
            disabled={activePage === 1}
            onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              type="button"
              key={index + 1}
              className={`${base}__pageBtn ${
                activePage === index + 1 ? `${base}__pageBtn--active` : ""
              }`}
              onClick={() => setActivePage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            type="button"
            className={`${base}__pageBtn`}
            disabled={activePage === totalPages}
            onClick={() =>
              setActivePage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;