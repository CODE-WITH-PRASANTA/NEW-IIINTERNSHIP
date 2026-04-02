import React, { useEffect, useRef, useState } from "react";
import "./MediaPhoto.css";

const MediaPhoto = () => {
  const base = "mediaPhoto";
  const cardsRef = useRef([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);

  // 🔥 MORE DATA (16+ cards)
  const couples = [
    {
      name: "Bella Blue",
      type: "People, Summer Days",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      name: "Nature",
      type: "Crazy Mood",
      img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    },
    {
      name: "White Buildings",
      type: "Architecture",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    {
      name: "Black & White",
      type: "People",
      img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    },
    {
      name: "Portrait Session",
      type: "Studio",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
      name: "Wedding Love",
      type: "Weddings",
      img: "https://images.unsplash.com/photo-1519741497674-611481863552",
    },
    {
      name: "Couple Story",
      type: "Weddings",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      name: "Sophia",
      type: "Portrait Mood",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },

    // 🔥 NEW EXTRA CARDS
    {
      name: "Sunset Vibes",
      type: "Nature",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      name: "Urban Life",
      type: "City",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
    {
      name: "Dream Wedding",
      type: "Couple",
      img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
    },
    {
      name: "Golden Hour",
      type: "Portrait",
      img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    },
    {
      name: "Mountains",
      type: "Adventure",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
      name: "Beach Mood",
      type: "Summer",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      name: "Street Style",
      type: "Fashion",
      img: "https://images.unsplash.com/photo-1503342452485-86d4c9a0c39a",
    },
    {
      name: "Night Lights",
      type: "City",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
  ];

  // RESPONSIVE
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(8);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // PAGINATION
  const indexOfLast = currentPage * cardsPerPage;
  const indexOfFirst = indexOfLast - cardsPerPage;
  const currentItems = couples.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(couples.length / cardsPerPage);

  // ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, [currentItems]);

  return (
    <section className={base}>
      <div className={`${base}__header`}>
        <h2>
          We're <span>Gleam</span> a small and enthusiastic <br />
          photography studio based in <span>New York</span>
        </h2>
        <p>
          We capture timeless moments, emotions, and beautiful stories through
          our creative photography sessions across the world.
        </p>
      </div>

      <div className={`${base}__grid`}>
        {currentItems.map((item, index) => (
          <div
            key={index}
            className={`${base}__card fade-up`}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div
              className={`${base}__image`}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className={`${base}__overlay`}>
                <span>+</span>
              </div>
            </div>

            <div className={`${base}__info`}>
              <h3>{item.name}</h3>
              <p>{item.type}</p>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON PAGINATION */}
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

export default MediaPhoto;