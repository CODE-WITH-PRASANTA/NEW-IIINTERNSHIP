import React, { useState, useEffect } from "react";
import "./VideoGallery.css";

const VideoGallery = () => {
  const base = "videoGallery";

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(2);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 🎥 Video Data
  const videos = [
    {
      title: "Youtube Video (Popup)",
      img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      title: "Vimeo Video (Popup)",
      img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?auto=format&fit=crop&w=800&q=80",
      url: "https://player.vimeo.com/video/76979871",
    },
    {
      title: "Youtube Video (Popup)",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
    {
      title: "Vimeo Video (Popup)",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
      url: "https://player.vimeo.com/video/22439234",
    },
  ];

  // 📱 Responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pagination
  const indexOfLast = currentPage * cardsPerPage;
  const indexOfFirst = indexOfLast - cardsPerPage;
  const currentItems = videos.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(videos.length / cardsPerPage);

  return (
    <section className={base}>
      {/* TITLE */}
      <h2 className={`${base}__title`}>VIDEO GALLERY</h2>

      {/* GRID */}
      <div className={`${base}__grid`}>
        {currentItems.map((item, i) => (
          <div
            key={i}
            className={`${base}__card`}
            onClick={() => setSelectedVideo(item.url)}
          >
            <div
              className={`${base}__image`}
              style={{
                backgroundImage: `url(${item.img})`,
              }}
            >
              {/* fallback */}
              <img
                src={item.img}
                alt=""
                style={{ display: "none" }}
                onError={(e) => {
                  e.target.parentElement.style.backgroundImage =
                    "url(https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80)";
                }}
              />

              <div className={`${base}__play`}>▶</div>
            </div>

            <div className={`${base}__info`}>
              {item.title}
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

      {/* POPUP */}
      {selectedVideo && (
        <div
          className={`${base}__popup`}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className={`${base}__popup-content`}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={selectedVideo}
              title="video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;