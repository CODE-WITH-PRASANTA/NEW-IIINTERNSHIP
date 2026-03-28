import React, { useRef, useState } from "react";
import "./Gallery.css";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const Gallery = () => {
  const base = "gallerySection";
  const scrollRef = useRef(null);
  const [activeImage, setActiveImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      alt: "Fashion model portrait",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
      alt: "Winter fashion portrait",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
      alt: "Colorful duo portrait",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
      alt: "Stylish portrait",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
      alt: "Snow mountain travel",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
      alt: "Premium sunglasses portrait",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80",
      alt: "Creative street look",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      alt: "Modern portrait pose",
    },
  ];

  const scrollGallery = (direction) => {
    if (!scrollRef.current) return;

    const cardWidth = scrollRef.current.querySelector(`.${base}__card`)?.offsetWidth || 280;
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
  };

  const closePreview = () => {
    setActiveImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className={base}>
        <div className={`${base}__top`}>
          <span className={`${base}__subTitle`}>Our Moments</span>
          <h2 className={`${base}__title`}>Our Gallery</h2>
        </div>

        <div className={`${base}__wrapper`}>
          <button
            className={`${base}__nav ${base}__nav--left`}
            onClick={() => scrollGallery("left")}
            aria-label="Scroll left"
          >
            <FiChevronLeft />
          </button>

          <div className={`${base}__track`} ref={scrollRef}>
            {galleryImages.map((image, index) => (
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
                    <span className={`${base}__viewText`}>View Image</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className={`${base}__nav ${base}__nav--right`}
            onClick={() => scrollGallery("right")}
            aria-label="Scroll right"
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
              aria-label="Close preview"
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