import React, { useState } from "react";
import "./FreeWorkshop.css";
import { FaPlay, FaArrowRight, FaGraduationCap } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";

const FreeWorkshop = () => {
  const base = "freeWorkshop";
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className={base}>
        <div className={`${base}__container`}>
          <div className={`${base}__mediaSide`}>
            <div className={`${base}__mediaWrap`}>
              <div className={`${base}__shape`}></div>
              <div className={`${base}__shapeOutline`}></div>
              <div className={`${base}__dotPattern`}></div>

              <div className={`${base}__badge`}>
                <span className={`${base}__badgeLine`}></span>
                <span className={`${base}__badgeLine ${base}__badgeLine--two`}></span>
                <span className={`${base}__badgeText`}>LIVE CLASS</span>
              </div>

              <div className={`${base}__imageBox`}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                  alt="Students watching workshop"
                  className={`${base}__image`}
                />

                <button
                  className={`${base}__playButton`}
                  onClick={() => setShowVideo(true)}
                  aria-label="Play workshop video"
                >
                  <FaPlay />
                </button>
              </div>
            </div>
          </div>

          <div className={`${base}__contentSide`}>
            <div className={`${base}__tag`}>Free Workshop</div>

            <h2 className={`${base}__title`}>Join Our Free Workshops</h2>

            <p className={`${base}__desc`}>
              Edhen an unknown printer took a galley of type and scrambled it to
              make a type specimen bookas survived not only five centuries.
              Edhen an unknown printer took a galley of type and scrambled.
            </p>

            <div className={`${base}__featureList`}>
              <div className={`${base}__featureItem`}>
                <div className={`${base}__iconBox ${base}__iconBox--pink`}>
                  <HiMiniUsers />
                </div>

                <div className={`${base}__featureText`}>
                  <h4>Smooth Virtual Live Classes</h4>
                  <p>
                    Edhen an unknown printer Rtook galley of type scrambled.
                  </p>
                </div>
              </div>

              <div className={`${base}__featureItem`}>
                <div className={`${base}__iconBox ${base}__iconBox--cyan`}>
                  <FaGraduationCap />
                </div>

                <div className={`${base}__featureText`}>
                  <h4>99% Graduation Complete</h4>
                  <p>
                    Edhen an unknown printer Rtook galley of type scrambled.
                  </p>
                </div>
              </div>
            </div>

            <button className={`${base}__cta`}>
              <span>Quick Join Now</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {showVideo && (
        <div className={`${base}__videoModal`} onClick={() => setShowVideo(false)}>
          <div
            className={`${base}__videoBox`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={`${base}__closeBtn`}
              onClick={() => setShowVideo(false)}
            >
              ×
            </button>

            <div className={`${base}__videoRatio`}>
              <iframe
                src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1"
                title="Workshop Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FreeWorkshop;