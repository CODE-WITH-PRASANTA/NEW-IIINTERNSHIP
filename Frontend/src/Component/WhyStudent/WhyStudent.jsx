import React from "react";
import "./WhyStudent.css";
import { FaCheckCircle } from "react-icons/fa";

const WhyStudent = () => {
  const base = "whyStudent";

  const points = [
    "Free for physically handcraft",
    "Easy to enroll courses",
    "Course certificate for particular course",
  ];

  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <div className={`${base}__content`}>
          <span className={`${base}__eyebrow`}>Why Choose Us</span>

          <h2 className={`${base}__title`}>
            Why Students Choose Us for
            <br />
            Gain Their Knowledge
          </h2>

          <p className={`${base}__description`}>
            Helping employees gain skills and providing career development often
            take a back seat to business priorities but workplace better right
            now. Seventy percent of workers think that.
          </p>

          <div className={`${base}__list`}>
            {points.map((item, index) => (
              <div className={`${base}__listItem`} key={index}>
                <span className={`${base}__listIcon`}>
                  <FaCheckCircle />
                </span>
                <span className={`${base}__listText`}>{item}</span>
              </div>
            ))}
          </div>

          <button className={`${base}__button`}>More about us</button>
        </div>

        <div className={`${base}__gallery`}>
          <div className={`${base}__shape ${base}__shape--blue`}></div>
          <div className={`${base}__shape ${base}__shape--yellow`}></div>

          <div className={`${base}__grid`}>
            <div className={`${base}__card ${base}__card--top`}>
              <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80"
                alt="Teacher helping students"
              />
            </div>

            <div className={`${base}__card ${base}__card--right`}>
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
                alt="Teacher speaking online"
              />
            </div>

            <div className={`${base}__card ${base}__card--bottom`}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                alt="Students learning together"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStudent;