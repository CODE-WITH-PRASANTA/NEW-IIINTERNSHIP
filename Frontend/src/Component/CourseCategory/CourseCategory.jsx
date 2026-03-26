import React from "react";
import "./CourseCategory.css";

import financeIcon from "../../assets/I-1.webp";
import businessIcon from "../../assets/I-2.webp";
import creativeIcon from "../../assets/I-3.webp";
import personalIcon from "../../assets/I-4.webp";
import healthIcon from "../../assets/I-5.webp";
import scienceIcon from "../../assets/I-6.webp";

const CourseCategory = () => {
  const CourseCategoryData = [
    {
      id: 1,
      icon: financeIcon,
      title: "Finance & Accounting",
      courses: "75 Courses",
    },
    {
      id: 2,
      icon: businessIcon,
      title: "Business & Management",
      courses: "96 Courses",
    },
    {
      id: 3,
      icon: creativeIcon,
      title: "Creative Arts & Design",
      courses: "120 Courses",
    },
    {
      id: 4,
      icon: personalIcon,
      title: "Personal Development",
      courses: "751 Courses",
    },
    {
      id: 5,
      icon: healthIcon,
      title: "Health & Wellness",
      courses: "23 Courses",
    },
    {
      id: 6,
      icon: scienceIcon,
      title: "Science & Engineering",
      courses: "16 Courses",
    },
  ];

  return (
    <section className="CourseCategory">
      <div className="CourseCategory__container">
        <h2 className="CourseCategory__heading">Courses & Categories</h2>

        <div className="CourseCategory__grid">
          {CourseCategoryData.map((item) => (
            <article className="CourseCategory__card" key={item.id}>
              <div className="CourseCategory__cardInner">
                {/* Front Side */}
                <div className="CourseCategory__face CourseCategory__face--front">
                  <div className="CourseCategory__iconWrap">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="CourseCategory__icon"
                    />
                  </div>

                  <h3 className="CourseCategory__title">{item.title}</h3>
                  <p className="CourseCategory__count">{item.courses}</p>
                </div>

                {/* Back Side */}
                <div className="CourseCategory__face CourseCategory__face--back">
                  <div className="CourseCategory__iconWrap">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="CourseCategory__icon CourseCategory__icon--back"
                    />
                  </div>

                  <h3 className="CourseCategory__title CourseCategory__title--back">
                    {item.title}
                  </h3>

                  <p className="CourseCategory__count CourseCategory__count--back">
                    {item.courses}
                  </p>

                  <span className="CourseCategory__corner"></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategory;