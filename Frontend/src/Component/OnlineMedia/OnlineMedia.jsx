import React, { useState, useEffect } from "react";
import "./OnlineMedia.css";

const OnlineMedia = () => {
  const base = "onlineMedia";

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const data = [
    {
      title: "Wedding Moments",
      img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Fashion Shoot",
      img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Architecture",
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Food Styling",
      img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Portrait",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Fitness",
      img: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Responsive
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

  // Pagination
  const indexOfLast = currentPage * cardsPerPage;
  const indexOfFirst = indexOfLast - cardsPerPage;
  const currentItems = data.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(data.length / cardsPerPage);

  return (
    <section className={base}>
      <h2 className={`${base}__title`}>PROJECTS</h2>

      <div className={`${base}__grid`}>
        {currentItems.map((item, index) => (
          <div
            key={index}
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
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <img
                  src={item.img}
                  alt=""
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
                  <p>
                    High-quality professional work with a creative touch.
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* 🔥 BUTTON PAGINATION */}
      <div className={`${base}__pagination`}>
        <button
          className="nav-btn"
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          ← Prev
        </button>

        <span className="page-indicator">
          Page {currentPage} / {totalPages}
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