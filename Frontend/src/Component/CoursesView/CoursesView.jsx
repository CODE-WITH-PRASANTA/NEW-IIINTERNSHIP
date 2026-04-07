import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CoursesView.css";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaListUl, FaUserAlt, FaStar } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { useEffect } from "react";
import API, { ImageUrl } from "../../api/axios";

const CoursesView = ({ filters, search, activePage, setActivePage }) => {
  const base = "coursesView";
  const [sortBy, setSortBy] = useState("Default");
  const [viewMode, setViewMode] = useState("grid");
  const [activeCard, setActiveCard] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await API.get("/api/courses");
        setCourses(res.data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = useMemo(() => {
    let data = [...courses];

    // 🔥 SEARCH TEXT (MAIN FIX)
    if (search?.text) {
      data = data.filter((course) =>
        (course.title || "").toLowerCase().includes(search.text.toLowerCase()),
      );
    }

    // 🔥 CATEGORY FILTER (FROM HERO)
    if (search?.category && search.category !== "Default") {
      data = data.filter((course) =>
        (course.department || "")
          .toLowerCase()
          .includes(search.category.toLowerCase()),
      );
    }

    // 🔥 PRICE FILTER
    if (filters?.price?.length > 0) {
      data = data.filter((course) => {
        const isFree = !course.fee || course.fee == 0;

        if (filters.price.includes("Free") && isFree) return true;
        if (filters.price.includes("Paid") && !isFree) return true;

        return false;
      });
    }

    // 🔥 LANGUAGE FILTER
    if (filters?.language?.length > 0) {
      data = data.filter((course) =>
        filters.language.some((lang) =>
          (course.language || "").toLowerCase().includes(lang.toLowerCase()),
        ),
      );
    }

    // 🔥 FORMAT FILTER
    if (filters?.format?.length > 0) {
      data = data.filter((course) =>
        filters.format.some((f) =>
          (course.department || "").toLowerCase().includes(f.toLowerCase()),
        ),
      );
    }

    return data;
  }, [courses, filters, search]);

  const sortedCourses = useMemo(() => {
    const data = [...filteredCourses];

    const getPrice = (value) => Number(value) || 0;

    if (sortBy === "Price Low") {
      return data.sort((a, b) => getPrice(a.fee) - getPrice(b.fee));
    }

    if (sortBy === "Price High") {
      return data.sort((a, b) => getPrice(b.fee) - getPrice(a.fee));
    }

    if (sortBy === "Title") {
      return data.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    }

    return data;
  }, [filteredCourses, sortBy]);

  const itemsPerPage = viewMode === "grid" ? 9 : 6;
  const totalPages = Math.ceil(sortedCourses.length / itemsPerPage);

  const paginatedCourses = sortedCourses.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage,
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

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

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
              key={course._id}
              className={`${base}__card ${
                activeCard === course._id ? `${base}__card--active` : ""
              }`}
              onClick={() => handleCardClick(course._id)}
            >
              <div className={`${base}__imageWrap`}>
                <img
                  src={
                    course.banner ? ImageUrl(course.banner) : "/no-image.png"
                  }
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
                      !course.fee || course.fee == 0
                        ? `${base}__price--free`
                        : ""
                    }`}
                  >
                    {!course.fee || course.fee == 0 ? "Free" : `₹${course.fee}`}
                  </span>
                </div>

                {viewMode === "list" && (
                  <div className={`${base}__metaRow`}>
                    <div className={`${base}__metaItem`}>
                      <FaUserAlt />
                      <span>{course.students || 0} Students</span>
                    </div>
                    <div className={`${base}__metaItem`}>
                      <HiOutlineDocumentText />
                      <span>{course.lectures || 0} Lectures</span>
                    </div>
                  </div>
                )}
              </div>

              {viewMode === "grid" && (
                <div className={`${base}__hoverPanel`}>
                  <div className={`${base}__hoverInner`}>
                    <h3 className={`${base}__hoverTitle`}>{course.title}</h3>

                    <div
                      className={`${base}__ratingRow ${base}__ratingRow--hover`}
                    >
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
                            !course.fee || course.fee == 0
                              ? `${base}__price--free`
                              : ""
                          }`}
                        >
                          {!course.fee || course.fee == 0
                            ? "Free"
                            : `₹${course.fee}`}
                        </span>
                      </div>

                      <button
                        type="button"
                        className={`${base}__viewAllBtn`}
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/running-internship/${course._id}`);
                        }}
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
