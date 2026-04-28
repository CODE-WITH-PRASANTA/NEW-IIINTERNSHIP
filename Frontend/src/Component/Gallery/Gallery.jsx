import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import API, { ImageUrl } from "../../api/axios";

const Gallery = () => {
  const base = "gallerySection";
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  const [galleryImages, setGalleryImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // ✅ FETCH ONLY IMAGES FROM BACKEND
  const fetchGallery = async () => {
    try {
      const res = await API.get("/galleryposting");

      // filter only photos
      const images = res.data.data
        .filter((item) => item.type === "photo")
        .map((item) => ({
          id: item._id,
          src: ImageUrl(item.image),
          alt: "Gallery Image",
        }));

      setGalleryImages(images);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const scrollGallery = (direction) => {
    if (!scrollRef.current) return;

    const cardWidth =
      scrollRef.current.querySelector(`.${base}__card`)?.offsetWidth || 280;
    const gap = 18;
    const scrollAmount = cardWidth + gap;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const openPreview = (image) => {
    setActiveImage(image);
    document.body.style.overflow = "hidden";
    setIsPaused(true);
  };

  const closePreview = () => {
    setActiveImage(null);
    document.body.style.overflow = "auto";
    setIsPaused(false);
  };

  // ✅ AUTO SCROLL (UNCHANGED)
  useEffect(() => {
    const track = scrollRef.current;
    if (!track) return;

    autoScrollRef.current = setInterval(() => {
      if (!track || isPaused) return;

      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      const card = track.querySelector(`.${base}__card`);
      const cardWidth = card?.offsetWidth || 280;
      const gap = window.innerWidth <= 767 ? 14 : 18;
      const scrollStep = cardWidth + gap;

      if (track.scrollLeft + scrollStep >= maxScrollLeft - 5) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: scrollStep, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(autoScrollRef.current);
  }, [isPaused]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <section className={base}>
        <div className={`${base}__top`}>
          <span className={`${base}__subTitle`}>Our Moments</span>
          <h2 className={`${base}__title`}>Our Gallery</h2>
        </div>

        <div
          className={`${base}__wrapper`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            className={`${base}__nav ${base}__nav--left`}
            onClick={() => scrollGallery("left")}
          >
            <FiChevronLeft />
          </button>

          <div className={`${base}__track`} ref={scrollRef}>
            {galleryImages.length === 0 ? (
              <p style={{ padding: "20px" }}>No images available</p>
            ) : (
              galleryImages.map((image, index) => (
                <div
                  className={`${base}__card`}
                  key={image.id}
                  style={{ animationDelay: `${index * 0.08}s` }}
                  onClick={() => openPreview(image)}
                >
                  <div className={`${base}__imageWrap`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`${base}__image`}
                    />
                    <div className={`${base}__overlay`}>
                      <span className={`${base}__viewText`}>
                        View Image
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <button
            className={`${base}__nav ${base}__nav--right`}
            onClick={() => scrollGallery("right")}
          >
            <FiChevronRight />
          </button>
        </div>
      </section>

      {activeImage && (
        <div className={`${base}__modal`} onClick={closePreview}>
          <div
            className={`${base}__modalContent`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={`${base}__closeBtn`}
              onClick={closePreview}
            >
              <FiX />
            </button>

            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className={`${base}__modalImage`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;