import React, { useState, useEffect } from "react";
import "./OnlineMedia.css";
import API, { ImageUrl } from "../../api/axios";

const OnlineMedia = () => {
  const base = "onlineMedia";

  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [flippedIndex, setFlippedIndex] = useState(null);

  // ✅ FETCH DATA FROM BACKEND
  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ✅ RESPONSIVE
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ PAGINATION
  const indexOfLast = currentPage * cardsPerPage;
  const indexOfFirst = indexOfLast - cardsPerPage;
  const currentItems = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / cardsPerPage);

  return (
    <section className={base}>
      <h2 className={`${base}__title`}>PROJECTS</h2>

      <div className={`${base}__grid`}>
        {currentItems.map((item, index) => (
          <div
            key={item._id}
            className={`${base}__card ${
              flippedIndex === index ? "flip" : ""
            }`}
            onClick={() =>
              setFlippedIndex(flippedIndex === index ? null : index)
            }
          >
            <div className={`${base}__inner`}>

              {/* FRONT */}
              <div
                className={`${base}__front`}
                style={{
                  backgroundImage: `url(${ImageUrl(item.image)})`,
                }}
              >
                <img
                  src={ImageUrl(item.image)}
                  alt={item.title}
                  style={{ display: "none" }}
                  onError={(e) => {
                    e.target.parentElement.style.backgroundImage =
                      "url(https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80)";
                  }}
                />
              </div>

              {/* BACK */}
              <div className={`${base}__back`}>
                <div className={`${base}__backContent`}>
                  <div className={`${base}__icon`}>❤</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className={`${base}__pagination`}>
        <button
          className="nav-btn"
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          ← Prev
        </button>

        <span className="page-indicator">
          Page {currentPage} / {totalPages || 1}
        </span>

        <button
          className="nav-btn"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </section>
  );
};

export default OnlineMedia;