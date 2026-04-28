import React, { useEffect, useState } from "react";
import "./HeroMentors.css";
import API, { ImageUrl } from "../../api/axios";

const HeroMentors = () => {
  const [mentors, setMentors] = useState([]);

  // ✅ FETCH FROM BACKEND
  const fetchMentors = async () => {
    try {
      const res = await API.get("/mentors");
      setMentors(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMentors();
  }, []);

  // 🎨 optional accent colors
  const accents = ["yellow", "green", "pink"];

  return (
    <section className="HeroMentors">
      <div className="HeroMentors__container">

        {/* LEFT SIDE (STATIC CONTENT SAME) */}
        <div className="HeroMentors__left">
          <div className="HeroMentors__spark HeroMentors__spark--one">✦</div>
          <div className="HeroMentors__spark HeroMentors__spark--two">✦</div>

          <h1 className="HeroMentors__title">
            <span className="HeroMentors__titleLine">Meet our</span>
            <span className="HeroMentors__titleLine">Highly Skilled</span>
            <span className="HeroMentors__titleLine HeroMentors__titleLine--accent">
              Mentors
            </span>
          </h1>
        </div>

        {/* RIGHT SIDE (DYNAMIC) */}
        <div className="HeroMentors__right">
          <div className="HeroMentors__grid">
            {mentors.length === 0 ? (
              <p>No mentors available</p>
            ) : (
              mentors.map((mentor, index) => (
                <div className="HeroMentors__card" key={mentor._id}>
                  
                  {/* 🎨 Random Accent */}
                  <div
                    className={`HeroMentors__brush HeroMentors__brush--${
                      accents[index % accents.length]
                    }`}
                  ></div>

                  <div className="HeroMentors__imageWrap">
                    <img
                      src={ImageUrl(mentor.image)}
                      alt={mentor.name}
                      className="HeroMentors__image"
                      style={{ objectPosition: "center top" }}
                    />
                  </div>

                  <div className="HeroMentors__info">
                    <h3 className="HeroMentors__name">{mentor.name}</h3>
                    <p className="HeroMentors__role">
                      {mentor.designation}
                    </p>
                    <span className="HeroMentors__cutShape"></span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroMentors;