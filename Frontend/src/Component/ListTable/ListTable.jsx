import React, { useMemo, useState } from "react";
import "./ListTable.css";

const ListTable = () => {
  const base = "listTable";
  const [activePage, setActivePage] = useState(1);
  const [sortBy, setSortBy] = useState("Default");

  const allCourses = [
    {
      id: 1,
      title: "Introduction to Data Science and Analytics",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      description:
        "Learn key data science and analytics concepts, tools, and techniques to make data-driven decisions.",
      price: "$24",
      oldPrice: "$30",
      students: "270 Students",
      lessons: "40 Lessons",
      ratingText: "(4.8/ 2.6k Ratings)",
    },
    {
      id: 2,
      title: "Digital Marketing Strategies and Tools",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
      description:
        "Develop digital marketing strategies to enhance brand visibility, engage audiences, and drive business growth online.",
      price: "$49",
      oldPrice: "$59",
      students: "270 Students",
      lessons: "40 Lessons",
      ratingText: "(4.8/ 2.6k Ratings)",
    },
    {
      id: 3,
      title: "Digital Marketing Strategies and Tools",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      description:
        "Develop digital marketing strategies to enhance brand visibility, engage audiences, and drive business growth online.",
      price: "$720",
      oldPrice: "$999",
      students: "82 Students",
      lessons: "24 Lessons",
      ratingText: "(4.8/ 2.6k Ratings)",
    },
    {
      id: 4,
      title: "Web Development From Beginner to Expert",
      image:
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
      description:
        "Master modern web development from basics to advanced concepts including frontend and backend technologies.",
      price: "$20",
      oldPrice: "$28",
      students: "50 Students",
      lessons: "20 Lessons",
      ratingText: "(4.8/ 2.6k Ratings)",
    },
    {
      id: 5,
      title: "Mastering Graphic Design Fundamentals",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
      description:
        "Learn design principles, typography, color theory, and tools to create stunning visual content.",
      price: "$119",
      oldPrice: "$149",
      students: "89 Students",
      lessons: "85 Lessons",
      ratingText: "(4.8/ 2.6k Ratings)",
    },
    {
      id: 6,
      title: "Business Analytics for Decision Making",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      description:
        "Use data analytics techniques to make better business decisions and improve performance.",
      price: "Free",
      oldPrice: "$99",
      students: "56 Students",
      lessons: "20 Lessons",
      ratingText: "(4.8/ 2.6k Ratings)",
    },
    {
      id: 7,
      title: "Cybersecurity Essentials Protecting Digital Systems",
      image:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      description:
        "Understand cybersecurity fundamentals to protect systems, networks, and data from attacks.",
      price: "$59",
      oldPrice: "$79",
      students: "42 Students",
      lessons: "28 Lessons",
      ratingText: "(4.8/ 2.6k Ratings)",
    },
    {
      id: 8,
      title: "Creative Writing Crafting Compelling Stories",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
      description:
        "Improve storytelling skills and learn how to craft engaging and compelling narratives.",
      price: "$07",
      oldPrice: "$19",
      students: "2.5k Students",
      lessons: "11 Lessons",
      ratingText: "(4.8/ 2.6k Ratings)",
    },
    {
      id: 9,
      title: "Digital Marketing Strategies and Tools",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      fallbackImage:
        "https://images.unsplash.com/photo-1516321310764-8d8f13f3cf89?auto=format&fit=crop&w=1200&q=80",
      description:
        "Develop digital marketing strategies to enhance brand visibility, engage audiences, and drive business growth online.",
      price: "$49",
      oldPrice: "$59",
      students: "270 Students",
      lessons: "40 Lessons",
      ratingText: "(4.8/ 2.6k Ratings)",
    },
  ];

  const sortedCourses = useMemo(() => {
    const items = [...allCourses];

    const getPriceValue = (value) => {
      if (value === "Free") return 0;
      return parseFloat(value.replace("$", ""));
    };

    if (sortBy === "Price Low") {
      return items.sort((a, b) => getPriceValue(a.price) - getPriceValue(b.price));
    }

    if (sortBy === "Price High") {
      return items.sort((a, b) => getPriceValue(b.price) - getPriceValue(a.price));
    }

    if (sortBy === "Title") {
      return items.sort((a, b) => a.title.localeCompare(b.title));
    }

    return items;
  }, [sortBy]);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(sortedCourses.length / itemsPerPage);

  const currentItems = sortedCourses.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  const startItem = (activePage - 1) * itemsPerPage + 1;
  const endItem = Math.min(activePage * itemsPerPage, sortedCourses.length);

  const renderStars = () => (
    <div className={`${base}__stars`} aria-hidden="true">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} viewBox="0 0 24 24" className={`${base}__star`}>
          <path
            fill="currentColor"
            d="M12 2.6l2.87 5.82 6.43.94-4.65 4.53 1.1 6.4L12 17.27 6.25 20.3l1.1-6.4L2.7 9.36l6.43-.94L12 2.6z"
          />
        </svg>
      ))}
    </div>
  );

  const handleImageError = (e, fallbackImage) => {
    if (e.target.src !== fallbackImage) {
      e.target.src = fallbackImage;
    }
  };

  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <div className={`${base}__topbar`}>
          <p className={`${base}__results`}>
            Showing {startItem}-{endItem} of {sortedCourses.length} results
          </p>

          <div className={`${base}__controls`}>
            <button type="button" className={`${base}__iconBtn ${base}__iconBtn--active`}>
              <svg viewBox="0 0 24 24">
                <rect x="4" y="4" width="6" height="6" rx="1.5" />
                <rect x="14" y="4" width="6" height="6" rx="1.5" />
                <rect x="4" y="14" width="6" height="6" rx="1.5" />
                <rect x="14" y="14" width="6" height="6" rx="1.5" />
              </svg>
            </button>

            <button type="button" className={`${base}__iconBtn`}>
              <svg viewBox="0 0 24 24">
                <rect x="4" y="5" width="3" height="3" rx="1" />
                <rect x="4" y="10.5" width="3" height="3" rx="1" />
                <rect x="4" y="16" width="3" height="3" rx="1" />
                <rect x="9" y="5" width="11" height="3" rx="1" />
                <rect x="9" y="10.5" width="11" height="3" rx="1" />
                <rect x="9" y="16" width="11" height="3" rx="1" />
              </svg>
            </button>

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

        <div className={`${base}__list`}>
          {currentItems.map((course, index) => (
            <article
              className={`${base}__card`}
              key={course.id}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className={`${base}__imageWrap`}>
                <img
                  src={course.image}
                  alt={course.title}
                  className={`${base}__image`}
                  loading="lazy"
                  onError={(e) => handleImageError(e, course.fallbackImage)}
                />
                <div className={`${base}__imageOverlay`}>
                  <span className={`${base}__badge`}>Top Course</span>
                </div>
              </div>

              <div className={`${base}__content`}>
                <h3 className={`${base}__title`}>{course.title}</h3>

                <div className={`${base}__ratingRow`}>
                  {renderStars()}
                  <span className={`${base}__ratingText`}>{course.ratingText}</span>
                </div>

                <p className={`${base}__description`}>{course.description}</p>

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

                <div className={`${base}__meta`}>
                  <div className={`${base}__metaItem`}>
                    <svg viewBox="0 0 24 24" className={`${base}__metaIcon`}>
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm7 8a7 7 0 0 0-14 0"
                      />
                    </svg>
                    <span>{course.students}</span>
                  </div>

                  <div className={`${base}__metaItem`}>
                    <svg viewBox="0 0 24 24" className={`${base}__metaIcon`}>
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 3h8l4 4v14H7z"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 3v5h5M10 12h5M10 16h5"
                      />
                    </svg>
                    <span>{course.lessons}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`${base}__pagination`}>
          <button
            type="button"
            className={`${base}__pageBtn`}
            onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
            disabled={activePage === 1}
          >
            ←
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                type="button"
                className={`${base}__pageBtn ${
                  page === activePage ? `${base}__pageBtn--active` : ""
                }`}
                onClick={() => setActivePage(page)}
              >
                {page}
              </button>
            );
          })}

          <button
            type="button"
            className={`${base}__pageBtn`}
            onClick={() => setActivePage((prev) => Math.min(prev + 1, totalPages))}
            disabled={activePage === totalPages}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ListTable;