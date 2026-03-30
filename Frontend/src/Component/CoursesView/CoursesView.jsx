import React, { useMemo, useState } from "react";
import "./CoursesView.css";

const CoursesView = () => {
  const base = "coursesView";
  const [activePage, setActivePage] = useState(1);
  const [sortBy, setSortBy] = useState("Default");
  const [viewMode, setViewMode] = useState("list");

  
   const allCourses = [
    {
      id: 1,
      title: "Introduction to Data Science and Analytics",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      instructorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      instructor: "Sophia Carter",
      price: "$24",
      oldPrice: "$30",
      students: "270 Students",
      lessons: "40 Lessons",
      duration: "12 Weeks",
      level: "Beginner",
      ratingText: "(4.8 / 2.6k Ratings)",
      category: "Data Science",
      description:
        "Learn the foundations of analytics, visualization, and real-world data-driven decision making with practical lessons.",
    },
    {
      id: 2,
      title: "Digital Marketing Strategies and Tools",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      instructorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      instructor: "Daniel Brooks",
      price: "$49",
      oldPrice: "$59",
      students: "270 Students",
      lessons: "40 Lessons",
      duration: "10 Weeks",
      level: "Intermediate",
      ratingText: "(4.8 / 2.6k Ratings)",
      category: "Marketing",
      description:
        "Master SEO, paid ads, funnels, social campaigns, and high-converting strategies for modern digital brands.",
    },
    {
      id: 3,
      title: "Web Development From Beginner to Expert",
      image:
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
      instructorImage: "https://randomuser.me/api/portraits/men/41.jpg",
      instructor: "James Parker",
      price: "$20",
      oldPrice: "$28",
      students: "50 Students",
      lessons: "20 Lessons",
      duration: "8 Weeks",
      level: "Beginner",
      ratingText: "(4.7 / 1.4k Ratings)",
      category: "Development",
      description:
        "Build modern responsive websites and real projects with HTML, CSS, JavaScript, React, and deployment guidance.",
    },
    {
      id: 4,
      title: "Mastering Graphic Design Fundamentals",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
      instructorImage: "https://randomuser.me/api/portraits/women/29.jpg",
      instructor: "Olivia Watson",
      price: "$119",
      oldPrice: "$149",
      students: "89 Students",
      lessons: "35 Lessons",
      duration: "16 Weeks",
      level: "Intermediate",
      ratingText: "(4.8 / 2.1k Ratings)",
      category: "Design",
      description:
        "Understand typography, composition, color systems, and visual storytelling for polished design work.",
    },
    {
      id: 5,
      title: "Business Analytics for Decision Making",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      instructorImage: "https://randomuser.me/api/portraits/men/18.jpg",
      instructor: "Ethan Hall",
      price: "Free",
      oldPrice: "$99",
      students: "56 Students",
      lessons: "20 Lessons",
      duration: "6 Weeks",
      level: "Beginner",
      ratingText: "(4.6 / 950 Ratings)",
      category: "Business",
      description:
        "A beginner-friendly analytics course covering reports, decision models, KPIs, and strategic thinking.",
    },
    {
      id: 6,
      title: "UI UX Design for Modern Interfaces",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      instructorImage: "https://randomuser.me/api/portraits/women/12.jpg",
      instructor: "Grace Miller",
      price: "$39",
      oldPrice: "$62",
      students: "138 Students",
      lessons: "31 Lessons",
      duration: "11 Weeks",
      level: "Intermediate",
      ratingText: "(4.9 / 3.1k Ratings)",
      category: "Design",
      description:
        "Create stunning digital experiences with wireframes, user research, design systems, and prototyping.",
    },
    {
      id: 7,
      title: "Python Programming Bootcamp",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
      instructorImage: "https://randomuser.me/api/portraits/men/22.jpg",
      instructor: "Liam Turner",
      price: "$29",
      oldPrice: "$45",
      students: "1.2k Students",
      lessons: "52 Lessons",
      duration: "15 Weeks",
      level: "Beginner",
      ratingText: "(4.8 / 4.2k Ratings)",
      category: "Programming",
      description:
        "Start coding in Python from basics to projects including logic building, automation, and practice tasks.",
    },
    {
      id: 8,
      title: "Machine Learning Basics for Beginners",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      instructorImage: "https://randomuser.me/api/portraits/men/15.jpg",
      instructor: "Henry Walker",
      price: "$84",
      oldPrice: "$110",
      students: "780 Students",
      lessons: "48 Lessons",
      duration: "13 Weeks",
      level: "Advanced",
      ratingText: "(4.9 / 2.8k Ratings)",
      category: "AI",
      description:
        "Explore machine learning concepts, beginner models, training workflows, and practical AI applications.",
    },
  ];

  const sortedCourses = useMemo(() => {
    const courses = [...allCourses];

    if (sortBy === "Price Low") {
      return courses.sort((a, b) => {
        const aPrice = a.price === "Free" ? 0 : Number(a.price.replace("$", ""));
        const bPrice = b.price === "Free" ? 0 : Number(b.price.replace("$", ""));
        return aPrice - bPrice;
      });
    }

    if (sortBy === "Price High") {
      return courses.sort((a, b) => {
        const aPrice = a.price === "Free" ? 0 : Number(a.price.replace("$", ""));
        const bPrice = b.price === "Free" ? 0 : Number(b.price.replace("$", ""));
        return bPrice - aPrice;
      });
    }

    if (sortBy === "Title") {
      return courses.sort((a, b) => a.title.localeCompare(b.title));
    }

    return courses;
  }, [sortBy, allCourses]);

  const itemsPerPage = viewMode === "grid" ? 6 : 4;
  const totalPages = Math.ceil(sortedCourses.length / itemsPerPage);

  const paginatedCourses = sortedCourses.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  const startCount = (activePage - 1) * itemsPerPage + 1;
  const endCount = Math.min(activePage * itemsPerPage, sortedCourses.length);

  const handlePrev = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const handleNext = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  const renderStars = () => {
    return (
      <div className={`${base}__stars`}>
        {[1, 2, 3, 4, 5].map((item) => (
          <span key={item} className={`${base}__star`}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <div className={`${base}__topbar`}>
          <p className={`${base}__results`}>
            Showing {startCount}-{endCount} of {sortedCourses.length} results
          </p>

          <div className={`${base}__controls`}>
            <button
              type="button"
              className={`${base}__viewBtn ${
                viewMode === "grid" ? `${base}__viewBtn--active` : ""
              }`}
              onClick={() => {
                setViewMode("grid");
                setActivePage(1);
              }}
            >
              Grid
            </button>

            <button
              type="button"
              className={`${base}__viewBtn ${
                viewMode === "list" ? `${base}__viewBtn--active` : ""
              }`}
              onClick={() => {
                setViewMode("list");
                setActivePage(1);
              }}
            >
              List
            </button>

            <div className={`${base}__sortWrap`}>
              <span className={`${base}__sortLabel`}>Sort By:</span>
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
            <article className={`${base}__card`} key={course.id}>
              <div className={`${base}__imageWrap`}>
                <img
                  src={course.image}
                  alt={course.title}
                  className={`${base}__image`}
                />
                <span className={`${base}__badge`}>{course.category}</span>
              </div>

              <div className={`${base}__content`}>
                <div className={`${base}__contentTop`}>
                  <div className={`${base}__instructorRow`}>
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className={`${base}__instructorImage`}
                    />
                    <div>
                      <p className={`${base}__instructorLabel`}>Instructor</p>
                      <h4 className={`${base}__instructorName`}>
                        {course.instructor}
                      </h4>
                    </div>
                  </div>

                  <div className={`${base}__priceBox`}>
                    <span
                      className={`${base}__price ${
                        course.price === "Free" ? `${base}__price--free` : ""
                      }`}
                    >
                      {course.price}
                    </span>
                    <span className={`${base}__oldPrice`}>{course.oldPrice}</span>
                  </div>
                </div>

                <h3 className={`${base}__title`}>{course.title}</h3>
                <p className={`${base}__description`}>{course.description}</p>

                <div className={`${base}__ratingRow`}>
                  {renderStars()}
                  <span className={`${base}__ratingText`}>{course.ratingText}</span>
                </div>

                <div className={`${base}__meta`}>
                  <span className={`${base}__metaItem`}>{course.students}</span>
                  <span className={`${base}__metaItem`}>{course.lessons}</span>
                  <span className={`${base}__metaItem`}>{course.duration}</span>
                  <span className={`${base}__metaItem`}>{course.level}</span>
                </div>

                <div className={`${base}__footer`}>
                  <button type="button" className={`${base}__detailsBtn`}>
                    View Details
                  </button>
                  <button type="button" className={`${base}__enrollBtn`}>
                    Enroll Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`${base}__pagination`}>
          <button
            type="button"
            className={`${base}__pageBtn`}
            onClick={handlePrev}
            disabled={activePage === 1}
          >
            ←
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
            onClick={handleNext}
            disabled={activePage === totalPages}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesView;