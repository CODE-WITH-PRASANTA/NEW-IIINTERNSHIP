import React from "react";
import "./SuccessHero.css";
import { FiMessageSquare } from "react-icons/fi";

const SuccessHero = () => {
  const base = "successHero";

  return (
    <section className={base}>
      <div className={`${base}__top`}>
        <div className={`${base}__container`}>
          <div className={`${base}__content`}>
            <h1 className={`${base}__title`}>
              From Beginner to Pro: How Online Courses Can
              <br />
              Accelerate Your Learning
            </h1>

            <div className={`${base}__metaRow`}>
              <div className={`${base}__metaLeft`}>
                <span className={`${base}__tag`}>Technology</span>
                <span className={`${base}__dot`}>•</span>
                <span className={`${base}__metaText`}>Aug 7, 2024</span>
                <span className={`${base}__dot`}>•</span>
                <span className={`${base}__metaText`}>by Amelia Wilson</span>
                <span className={`${base}__dot`}>•</span>
                <span className={`${base}__metaText`}>Read Time: 5m</span>
              </div>

              <div className={`${base}__metaRight`}>
                <FiMessageSquare className={`${base}__metaIcon`} />
                <span className={`${base}__metaText`}>5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${base}__bottom`}>
        <div className={`${base}__container`}>
          <div className={`${base}__imageWrap`}>
            <img
              className={`${base}__image`}
              src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=1400&q=80"
              alt="Online learning session"
            />
          </div>

          <div className={`${base}__article`}>
            <p className={`${base}__paragraph`}>
              In recent years, plant-based diets have gained tremendous
              popularity, and for good reason. From reducing the risk of chronic
              diseases to promoting environmental sustainability, the benefits
              of a plant-based lifestyle are transformative. But what exactly
              makes this way of eating such a game changer for your health?
              Let’s dive into the science and explore the compelling reasons to
              embrace more plants on your plate.
            </p>

            <h2 className={`${base}__heading`}>
              Lower Risk of Chronic Diseases
            </h2>

            <p className={`${base}__paragraph`}>
              One of the most well-documented benefits of a plant-based diet is
              its ability to reduce the risk of chronic illnesses such as{" "}
              <strong>heart disease</strong>, diabetes, and certain types of
              cancer. Studies have shown that plant-based diets are rich in
              fiber, antioxidants, and healthy fats, all of which contribute to
              improved cardiovascular health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessHero;