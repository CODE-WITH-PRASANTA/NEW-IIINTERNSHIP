import React, { useEffect, useRef, useState } from "react";
import API, { ImageUrl } from "../../api/axios";
import "./MediaPhoto.css";

const MediaPhoto = () => {
  const base = "mediaPhoto";
  const cardsRef = useRef([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(8);

  // ✅ DATA FROM BACKEND
  const [photos, setPhotos] = useState([]);

  /* ================= FETCH PHOTOS ================= */
  const fetchPhotos = async () => {
    try {
      const res = await API.get("/galleryposting");

      const photoData = res.data.data.filter((i) => i.type === "photo");

      setPhotos(photoData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  /* ================= RESPONSIVE ================= */
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

  /* ================= PAGINATION ================= */
  const indexOfLast = currentPage * cardsPerPage;
  const indexOfFirst = indexOfLast - cardsPerPage;
  const currentItems = photos.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(photos.length / cardsPerPage);

  /* ================= ANIMATION ================= */
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
      {/* HEADER (UNCHANGED UI) */}
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

      {/* GRID */}
      <div className={`${base}__grid`}>
        {currentItems.length === 0 ? (
          <p style={{ textAlign: "center", width: "100%" }}>
            No Photos Available
          </p>
        ) : (
          currentItems.map((item, index) => (
            <div
              key={item._id}
              className={`${base}__card fade-up`}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div
                className={`${base}__image`}
                style={{
                  backgroundImage: `url(${ImageUrl(item.image)})`,
                }}
              >
                <div className={`${base}__overlay`}>
                  <span>+</span>
                </div>
              </div>

              <div className={`${base}__info`}>
                <h3>{item.title}</h3>
                <p>Gallery Photo</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
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
      )}
    </section>
  );
};

export default MediaPhoto;