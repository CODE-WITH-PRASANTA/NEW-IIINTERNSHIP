import React from "react";
import "./HeroMentors.css";

const mentors = [
  {
    id: 1,
    name: "David Martinez",
    role: "Marketing Mentor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80",
    accent: "yellow",
    position: "center top",
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Data Scientist Mentor",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80",
    accent: "green",
    position: "center top",
  },
  {
    id: 3,
    name: "Alexander Johnson",
    role: "Coding Instructor",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1000&q=80",
    accent: "yellow",
    position: "center top",
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Graphic Design Mentor",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=1000&q=80",
    accent: "pink",
    position: "center top",
  },
  {
    id: 5,
    name: "Sophia Williams",
    role: "Marketing Mentor",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80",
    accent: "yellow",
    position: "center top",
  },
  {
    id: 6,
    name: "Ethan Brown",
    role: "Coding Instructor",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=1000&q=80",
    accent: "pink",
    position: "center top",
  },
];

const stats = [
  {
    id: 1,
    value: "1.2",
    unit: "Millions",
    label: "Student enrolled",
    color: "yellow",
  },
  {
    id: 2,
    value: "32.2K",
    unit: "",
    label: "Class completed",
    color: "green",
  },
  {
    id: 3,
    value: "99.9%",
    unit: "",
    label: "Satisfaction rate",
    color: "pink",
  },
];

const HeroMentors = () => {
  return (
    <section className="HeroMentors">
      <div className="HeroMentors__container">
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

          <div className="HeroMentors__stats">
            {stats.map((item) => (
              <div className="HeroMentors__stat" key={item.id}>
                <div
                  className={`HeroMentors__statCircle HeroMentors__statCircle--${item.color}`}
                >
                  <span>{item.value}</span>
                </div>

                <div className="HeroMentors__statContent">
                  <h3 className="HeroMentors__statValue">
                    {item.unit ? <>{item.unit}</> : null}
                  </h3>
                  <p className="HeroMentors__statLabel">{item.label}</p>
                </div>

                {item.unit ? (
                  <div className="HeroMentors__statUnit">{item.unit}</div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="HeroMentors__right">
          <div className="HeroMentors__grid">
            {mentors.map((mentor) => (
              <div className="HeroMentors__card" key={mentor.id}>
                <div
                  className={`HeroMentors__brush HeroMentors__brush--${mentor.accent}`}
                ></div>

                <div className="HeroMentors__imageWrap">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="HeroMentors__image"
                    style={{ objectPosition: mentor.position }}
                  />
                </div>

                <div className="HeroMentors__info">
                  <h3 className="HeroMentors__name">{mentor.name}</h3>
                  <p className="HeroMentors__role">{mentor.role}</p>
                  <span className="HeroMentors__cutShape"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMentors;