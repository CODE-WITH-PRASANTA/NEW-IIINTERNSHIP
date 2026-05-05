import React, { useState, useEffect } from "react";
import API from "../../api/axios";
import "./VideoGallery.css";

const VideoGallery = () => {
  const base = "videoGallery";

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(2);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // ✅ BACKEND DATA
  const [videos, setVideos] = useState([]);

  /* ================= FETCH VIDEOS ================= */
  const fetchVideos = async () => {
    try {
      const res = await API.get("/galleryposting");

      const videoData = res.data.data.filter((i) => i.type === "video");

      setVideos(videoData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  /* ================= CONVERT TO EMBED ================= */
  const getEmbedUrl = (url) => {
    if (!url) return "";

    // YouTube watch → embed
    if (url.includes("youtube.com/watch")) {
      const id = url.split("v=")[1];
      return `https://www.youtube.com/embed/${id}`;
    }

    // YouTube short
    if (url.includes("youtu.be")) {
      const id = url.split("/").pop();
      return `https://www.youtube.com/embed/${id}`;
    }

    // Vimeo
    if (url.includes("vimeo.com")) {
      const id = url.split("/").pop();
      return `https://player.vimeo.com/video/${id}`;
    }

    return url; // already embed
  };

  /* ================= RESPONSIVE ================= */
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

  /* ================= PAGINATION ================= */
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
        {currentItems.length === 0 ? (
          <p style={{ textAlign: "center", width: "100%" }}>
            No Videos Available
          </p>
        ) : (
          currentItems.map((item) => (
            <div
              key={item._id}
              className={`${base}__card`}
              onClick={() => setSelectedVideo(getEmbedUrl(item.videoUrl))}
            >
              <div
                className={`${base}__image`}
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80)",
                }}
              >
                {/* fallback image */}
                <div className={`${base}__play`}>▶</div>
              </div>

              <div className={`${base}__info`}>
                {item.title}
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