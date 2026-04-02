import React, { useState } from "react";
import "./SuccessStoryContent.css";

import img1 from "../../assets/blog1.webp";
import img2 from "../../assets/blog2.webp";
import img3 from "../../assets/blog3.webp";
import img4 from "../../assets/blog4.webp";
import img5 from "../../assets/blog5.webp";
import img6 from "../../assets/blog6.webp";

const SuccessStoryContent = () => {
  const blogs = [
    {
      title: "How to Choose the Right Online Course for Your Goals",
      img: img1,
      date: "17 March 2025",
      author: "BYRoberts",
      desc: "Learn key factors to consider such as course content, instructor expertise.",
    },
    {
      title: "How to Choose the Right Online Course for Your Goals",
      img: img2,
      date: "20 April 2025",
      author: "BYSophia Lane",
      desc: "Discover in-demand skills like coding, digital marketing, and project management.",
    },
    {
      title: "How to Choose the Right Online Course for Your Goals",
      img: img3,
      date: "20 April 2025",
      author: "BYSophia Lane",
      desc: "Learn key factors to consider such as course content, instructor expertise.",
    },
    {
      title: "The Future of Online Learning: Why Digital Education is",
      img: img4,
      date: "20 April 2025",
      author: "BYSophia Lane",
      desc: "Explore how online learning is transforming education, offering flexibility.",
    },
    {
      title: "10 Essential Skills You Can Learn Online to Boost",
      img: img5,
      date: "20 April 2025",
      author: "BYSophia Lane",
      desc: "Learn key factors to consider such as course content, instructor expertise.",
    },
    {
      title: "How to Choose the Right Online Course for Your Goals",
      img: img6,
      date: "20 April 2025",
      author: "BYSophia Lane",
      desc: "Learn key factors to consider such as course content, instructor expertise.",
    },
  ];

  const [page, setPage] = useState(1);

  return (
    <section className="successStoryContent">
      <div className="successStoryContent__container">

        {/* GRID */}
        <div className="successStoryContent__grid">
          {blogs.map((blog, i) => (
            <div className="successStoryContent__card" key={i}>

              {/* IMAGE */}
              <div className="successStoryContent__img">
                <img src={blog.img} alt={blog.title} />

                {/* HOVER */}
                <div className="successStoryContent__overlay">
                  <button className="successStoryContent__arrow">→</button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="successStoryContent__content">
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>

                <div className="successStoryContent__meta">
                  <span>📅 {blog.date}</span>
                  <span>👤 {blog.author}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="successStoryContent__pagination">
          <button onClick={() => setPage(page - 1)}>←</button>

          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className={page === num ? "active" : ""}
              onClick={() => setPage(num)}
            >
              {num}
            </button>
          ))}

          <button onClick={() => setPage(page + 1)}>→</button>
        </div>

      </div>
    </section>
  );
};

export default SuccessStoryContent;