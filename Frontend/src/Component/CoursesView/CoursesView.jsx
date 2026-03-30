import React, { useMemo, useState } from "react";
import "./CoursesView.css";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaListUl, FaUserAlt, FaStar } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

const CoursesView = () => {
  const base = "coursesView";
  const [activePage, setActivePage] = useState(1);
  const [sortBy, setSortBy] = useState("Default");
  const [viewMode, setViewMode] = useState("grid");
  const [activeCard, setActiveCard] = useState(null);

  const allCourses = [
    {
      id: 1,
      title: "Introduction to Data Science and Analytics",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      price: "$24",
      oldPrice: "$30",
      students: "270 Student",
      lessons: "40 Lessons",
      ratingText: "(4.8 / 2.6k Ratings)",
      description:
        "Learn key data science and analytics concepts, tools, and techniques to make data-driven decisions.",
    },
    {
      id: 2,
      title: "Digital Marketing Strategies and Tools",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      price: "$49",
      oldPrice: "$59",
      students: "270 Student",
      lessons: "40 Lessons",
      ratingText: "(4.8 / 2.6k Ratings)",
      description:
        "Develop digital marketing strategies to enhance brand visibility, engage audiences, and drive business growth online.",
    },
    {
      id: 3,
      title: "Social Media Marketing and Branding",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
      price: "$720",
      oldPrice: "$999",
      students: "82 Student",
      lessons: "24 Lessons",
      ratingText: "(4.8 / 2.6k Ratings)",
      description:
        "Build strong social media campaigns, create engaging content, and improve brand presence across platforms.",
    },
    {
      id: 4,
      title: "Web Development From Beginner to Expert",
      image:
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
      price: "$20",
      oldPrice: "$28",
      students: "50 Student",
      lessons: "20 Lessons",
      ratingText: "(4.7 / 1.4k Ratings)",
      description:
        "Build responsive websites and real projects with HTML, CSS, JavaScript, React, and deployment guidance.",
    },
    {
      id: 5,
      title: "Mastering Graphic Design Fundamentals",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
      price: "$119",
      oldPrice: "$149",
      students: "89 Student",
      lessons: "35 Lessons",
      ratingText: "(4.8 / 2.1k Ratings)",
      description:
        "Understand typography, color systems, layout balance, and visual storytelling for polished design work.",
    },
    {
      id: 6,
      title: "Business Analytics for Decision Making",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      price: "Free",
      oldPrice: "$99",
      students: "56 Student",
      lessons: "20 Lessons",
      ratingText: "(4.6 / 950 Ratings)",
      description:
        "A beginner-friendly course covering reports, KPIs, data-backed decisions, and business strategy fundamentals.",
    },
    {
      id: 7,
      title: "UI UX Design for Modern Interfaces",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      price: "$39",
      oldPrice: "$62",
      students: "138 Student",
      lessons: "31 Lessons",
      ratingText: "(4.9 / 3.1k Ratings)",
      description:
        "Create beautiful digital experiences with wireframes, research, design systems, and clickable prototypes.",
    },
    {
      id: 8,
      title: "Python Programming Bootcamp",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
      price: "$29",
      oldPrice: "$45",
      students: "1.2k Student",
      lessons: "52 Lessons",
      ratingText: "(4.8 / 4.2k Ratings)",
      description:
        "Start coding in Python from basics to projects with logic building, practice tasks, and clean coding methods.",
    },
    {
      id: 9,
      title: "Machine Learning Basics for Beginners",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      price: "$84",
      oldPrice: "$110",
      students: "780 Student",
      lessons: "48 Lessons",
      ratingText: "(4.9 / 2.8k Ratings)",
      description:
        "Explore machine learning concepts, beginner models, workflows, and practical AI applications.",
    },
  ];

  const sortedCourses = useMemo(() => {
    const courses = [...allCourses];

    const getPrice = (value) => {
      if (value === "Free") return 0;
      return Number(value.replace("$", ""));
    };

    if (sortBy === "Price Low") {
      return courses.sort((a, b) => getPrice(a.price) - getPrice(b.price));
    }

    if (sortBy === "Price High") {
      return courses.sort((a, b) => getPrice(b.price) - getPrice(a.price));
    }

    if (sortBy === "Title") {
      return courses.sort((a, b) => a.title.localeCompare(b.title));
    }

    return courses;
  }, [sortBy]);

  const itemsPerPage = viewMode === "grid" ? 9 : 6;
  const totalPages = Math.ceil(sortedCourses.length / itemsPerPage);

  const paginatedCourses = sortedCourses.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  const startCount = (activePage - 1) * itemsPerPage + 1;
  const endCount = Math.min(activePage * itemsPerPage, sortedCourses.length);

  const renderStars = () => {
    return (
      <div className={`${base}__stars`}>
        {[1, 2, 3, 4, 5].map((item) => (
          <FaStar key={item} className={`${base}__star`} />
        ))}
      </div>
    );
  };

  const handleCardClick = (id) => {
    if (viewMode !== "grid") return;
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <div className={`${base}__topbar`}>
          <p className={`${base}__results`}>
            Showing {startCount}-{endCount} of {sortedCourses.length} results
          </p>

          <div className={`${base}__topbarRight`}>
            <div className={`${base}__viewSwitch`}>
              <button
                type="button"
                className={`${base}__viewBtn ${
                  viewMode === "grid" ? `${base}__viewBtn--active` : ""
                }`}
                onClick={() => {
                  setViewMode("grid");
                  setActivePage(1);
                  setActiveCard(null);
                }}
                aria-label="Grid view"
              >
                <BsGrid3X3GapFill />
              </button>

              <button
                type="button"
                className={`${base}__viewBtn ${
                  viewMode === "list" ? `${base}__viewBtn--active` : ""
                }`}
                onClick={() => {
                  setViewMode("list");
                  setActivePage(1);
                  setActiveCard(null);
                }}
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

        <div
          className={`${base}__grid ${
            viewMode === "list" ? `${base}__grid--list` : ""
          }`}
        >
          {paginatedCourses.map((course) => (
            <article
              key={course.id}
              className={`${base}__card ${
                activeCard === course.id ? `${base}__card--active` : ""
              }`}
              onClick={() => handleCardClick(course.id)}
            >
              <div className={`${base}__imageWrap`}>
                <img
                  src={course.image}
                  alt={course.title}
                  className={`${base}__image`}
                />
              </div>

              <div className={`${base}__content`}>
                <h3 className={`${base}__title`}>{course.title}</h3>

                <div className={`${base}__ratingRow`}>
                  {renderStars()}
                  <span className={`${base}__ratingText`}>
                    {course.ratingText}
                  </span>
                </div>

                {viewMode === "list" && (
                  <p className={`${base}__description`}>{course.description}</p>
                )}

                <div className={`${base}__priceRow`}>
                  <span
                    className={`${base}__price ${
                      course.price === "Free" ? `${base}__price--free` : ""
                    }`}
                  >
                    {course.price}
                  </span>
                  <span className={`${base}__oldPrice`}>{course.oldPrice}</span>
                </div>

                {viewMode === "list" && (
                  <div className={`${base}__metaRow`}>
                    <div className={`${base}__metaItem`}>
                      <FaUserAlt />
                      <span>{course.students}</span>
                    </div>
                    <div className={`${base}__metaItem`}>
                      <HiOutlineDocumentText />
                      <span>{course.lessons}</span>
                    </div>
                  </div>
                )}
              </div>

              {viewMode === "grid" && (
                <div className={`${base}__hoverPanel`}>
                  <div className={`${base}__hoverInner`}>
                    <h3 className={`${base}__hoverTitle`}>{course.title}</h3>

                    <div className={`${base}__ratingRow ${base}__ratingRow--hover`}>
                      {renderStars()}
                      <span className={`${base}__hoverRatingText`}>
                        {course.ratingText}
                      </span>
                    </div>

                    <p className={`${base}__hoverDescription`}>
                      {course.description}
                    </p>

                    <div className={`${base}__hoverBottom`}>
                      <div className={`${base}__priceRow`}>
                        <span
                          className={`${base}__price ${
                            course.price === "Free" ? `${base}__price--free` : ""
                          }`}
                        >
                          {course.price}
                        </span>
                        <span className={`${base}__oldPrice`}>
                          {course.oldPrice}
                        </span>
                      </div>

                      <button
                        type="button"
                        className={`${base}__viewAllBtn`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        View All
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className={`${base}__pagination`}>
            <button
              type="button"
              className={`${base}__pageBtn`}
              onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
              disabled={activePage === 1}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                type="button"
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
              onClick={() =>
                setActivePage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={activePage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesView;