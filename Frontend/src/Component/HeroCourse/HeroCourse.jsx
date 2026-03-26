import React, { useMemo, useState } from "react";
import "./HeroCourse.css";
import {
  FiArrowRight,
  FiUser,
  FiFileText,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const HeroCourse = () => {
  const HeroCourseTabs = [
    "ALL",
    "PROGRAMMING",
    "GRAPHIC DESIGN",
    "DATA SCIENCE",
    "MARKETING",
    "MANAGEMENT",
  ];

  const HeroCourseData = [
    {
      id: 1,
      category: "DATA SCIENCE",
      title: "Introduction to Data Science and Analytics",
      rating: "4.8/ 2.6k Ratings",
      price: "$24",
      oldPrice: "$30",
      students: "270 Student",
      lessons: "40 Lessons",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      hoverColor: "#2d8cff",
      hoverText:
        "Learn core analytics, visualization, and practical data workflows for beginners.",
    },
    {
      id: 2,
      category: "MARKETING",
      title: "Digital Marketing Strategies and Tools",
      rating: "4.8/ 2.6k Ratings",
      price: "$49",
      oldPrice: "$59",
      students: "270 Student",
      lessons: "40 Lessons",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      hoverColor: "#30a46c",
      hoverText:
        "Master campaigns, audience targeting, tools, and strategy for digital growth.",
    },
    {
      id: 3,
      category: "MARKETING",
      title: "Social Media Marketing Growth and Branding",
      rating: "4.8/ 2.6k Ratings",
      price: "$720",
      oldPrice: "$999",
      students: "82 Student",
      lessons: "24 Lessons",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      hoverColor: "#3b82f6",
      hoverText:
        "Build social campaigns, improve conversions, and grow a powerful brand presence.",
    },
    {
      id: 4,
      category: "PROGRAMMING",
      title: "Web Development From Beginner to Expert",
      rating: "4.8/ 2.6k Ratings",
      price: "$20",
      oldPrice: "$28",
      students: "50 Student",
      lessons: "20 Lessons",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
      hoverColor: "#2d8cff",
      hoverText:
        "Learn HTML, CSS, JavaScript, and real-world web development from scratch.",
    },
    {
      id: 5,
      category: "GRAPHIC DESIGN",
      title: "Mastering Graphic Design Fundamentals",
      rating: "4.8/ 2.6k Ratings",
      price: "$119",
      oldPrice: "$149",
      students: "89 Student",
      lessons: "85 Lessons",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
      hoverColor: "#6d5efc",
      hoverText:
        "Understand layouts, typography, branding, and modern visual communication.",
    },
    {
      id: 6,
      category: "MANAGEMENT",
      title: "Business Analytics for Decision Making",
      rating: "4.8/ 2.6k Ratings",
      price: "Free",
      oldPrice: "$99",
      students: "56 Student",
      lessons: "20 Lessons",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      hoverColor: "#2494ff",
      hoverText:
        "Use data analytics techniques to make better business decisions and improve performance.",
    },
    {
      id: 7,
      category: "PROGRAMMING",
      title: "Cybersecurity Essentials Protecting Digital Systems",
      rating: "4.8/ 2.6k Ratings",
      price: "$59",
      oldPrice: "$79",
      students: "42 Student",
      lessons: "28 Lessons",
      image:
        "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=1200&q=80",
      hoverColor: "#3182ce",
      hoverText:
        "Protect systems, understand threats, and build practical cybersecurity awareness.",
    },
    {
      id: 8,
      category: "MANAGEMENT",
      title: "Creative Writing Crafting Compelling Stories",
      rating: "4.8/ 2.6k Ratings",
      price: "$07",
      oldPrice: "$19",
      students: "2.5k Student",
      lessons: "11 Lessons",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
      hoverColor: "#30a46c",
      hoverText:
        "Improve storytelling, structure, creativity, and written expression with confidence.",
    },
  ];

  const [HeroCourseActiveTab, setHeroCourseActiveTab] = useState("ALL");

  const HeroCourseFilteredData = useMemo(() => {
    if (HeroCourseActiveTab === "ALL") return HeroCourseData;
    return HeroCourseData.filter(
      (item) => item.category === HeroCourseActiveTab
    );
  }, [HeroCourseActiveTab]);

  return (
    <section className="HeroCourse">
      <div className="HeroCourse__container">
        <div className="HeroCourse__header">
          <h2 className="HeroCourse__title">Explore Top Courses</h2>

          <button className="HeroCourse__viewAllBtn" type="button">
            <span className="HeroCourse__viewAllText">View All</span>
            <span className="HeroCourse__viewAllIcon">
              <FiArrowRight />
            </span>
          </button>
        </div>

        <div className="HeroCourse__tabBar">
          {HeroCourseTabs.map((tab) => (
            <button
              key={tab}
              className={`HeroCourse__tab ${
                HeroCourseActiveTab === tab ? "HeroCourse__tab--active" : ""
              }`}
              onClick={() => setHeroCourseActiveTab(tab)}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="HeroCourse__line"></div>

        <div className="HeroCourse__grid">
          {HeroCourseFilteredData.map((course) => (
            <article
              className="HeroCourse__card"
              key={course.id}
              style={{ "--herocourse-hover": course.hoverColor }}
            >
              <div className="HeroCourse__imageWrap">
                <img
                  src={course.image}
                  alt={course.title}
                  className="HeroCourse__image"
                />
              </div>

              <div className="HeroCourse__cardBody">
                <h3 className="HeroCourse__cardTitle">{course.title}</h3>

                <div className="HeroCourse__ratingWrap">
                  <div className="HeroCourse__stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="HeroCourse__ratingText">
                    ({course.rating})
                  </span>
                </div>

                <div className="HeroCourse__priceWrap">
                  <span className="HeroCourse__price">{course.price}</span>
                  <span className="HeroCourse__oldPrice">{course.oldPrice}</span>
                </div>
              </div>

              <div className="HeroCourse__meta">
                <div className="HeroCourse__metaItem">
                  <FiUser className="HeroCourse__metaIcon" />
                  <span>{course.students}</span>
                </div>

                <div className="HeroCourse__metaItem">
                  <FiFileText className="HeroCourse__metaIcon" />
                  <span>{course.lessons}</span>
                </div>
              </div>

              {/* hover overlay */}
              <div className="HeroCourse__hoverLayer">
                <div className="HeroCourse__hoverContent">
                  <h3 className="HeroCourse__hoverTitle">{course.title}</h3>

                  <div className="HeroCourse__hoverRatingWrap">
                    <div className="HeroCourse__hoverStars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className="HeroCourse__hoverRatingText">
                      ({course.rating})
                    </span>
                  </div>

                  <p className="HeroCourse__hoverText">{course.hoverText}</p>

                  <div className="HeroCourse__hoverPriceWrap">
                    <span className="HeroCourse__hoverPrice">{course.price}</span>
                    <span className="HeroCourse__hoverOldPrice">
                      {course.oldPrice}
                    </span>
                  </div>

                  <button className="HeroCourse__hoverBtn" type="button">
                    View All
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="HeroCourse__footerNoteWrap">
          <div className="HeroCourse__footerLine"></div>
          <div className="HeroCourse__footerNote">
            Learn with <span>200+</span> world class institutions and educators
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCourse;