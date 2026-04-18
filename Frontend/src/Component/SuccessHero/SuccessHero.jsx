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
            
            {/* TITLE */}
            <h1 className={`${base}__title`}>
              From Beginner to Pro: How Online Courses Can
              <br />
              Accelerate Your Learning
            </h1>

            {/* META */}
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
    </section>
  );
};

export default SuccessHero;