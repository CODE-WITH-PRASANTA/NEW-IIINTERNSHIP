import React from "react";
import "./HeroGoal.css";
import { FiPlay, FiStar } from "react-icons/fi";

const HeroGoal = () => {
  const HeroGoalCards = [
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
      title: "Daily Live Classes",
      description:
        "Interact with educators, ask questions, participate in live polls, and clear your doubts.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
      title: "Practice and Revise",
      description:
        "Learning extends beyond classes with our practice section, mock tests, and guidance.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      title: "Learn Anytime",
      description:
        "One subscription gives you access to all live and recorded classes whenever you need.",
    },
  ];

  const HeroGoalPoints = [
    "Learn from top educators in your city",
    "In-person classes & doubt solving",
    "Bonus access to online learning",
  ];

  return (
    <section className="HeroGoal">
      <div className="HeroGoal__container">
        <div className="HeroGoal__left">
          <div className="HeroGoal__mainImageWrap">
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80"
              alt="Students learning together"
              className="HeroGoal__mainImage"
            />
          </div>

          <div className="HeroGoal__playInfo">
            <div className="HeroGoal__playBadge">
              <div className="HeroGoal__playTextCircle">
                {/* <span>PLAY VIDEO PLAY VIDEO PLAY VIDEO</span> */}
              </div>
              <div className="HeroGoal__playButton">
                <FiPlay />
              </div>
            </div>

            <div className="HeroGoal__playContent">
              <h3 className="HeroGoal__playTitle">
                Learn With <span>200+</span>
                <br />
                World className
                <br />
                Institutions
                <br />
                And Educators
              </h3>
            </div>
          </div>
        </div>

        <div className="HeroGoal__right">
          <div className="HeroGoal__top">
            <h4 className="HeroGoal__title">
              Learning Focused
              
              on Your Goals
            </h4>

            <ul className="HeroGoal__pointList">
              {HeroGoalPoints.map((point, index) => (
                <li key={index} className="HeroGoal__pointItem">
                  <FiStar className="HeroGoal__pointIcon" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="HeroGoal__cards">
            {HeroGoalCards.map((card, index) => (
              <div className="HeroGoal__card" key={index}>
                <div className="HeroGoal__cardImageWrap">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="HeroGoal__cardImage"
                  />
                </div>

                <div className="HeroGoal__cardBody">
                  <h3 className="HeroGoal__cardTitle">{card.title}</h3>
                  <p className="HeroGoal__cardDescription">
                    {card.description}
                  </p>
                </div>

                <div className="HeroGoal__cardShape"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="HeroGoal__bottomShape"></div>
    </section>
  );
};

export default HeroGoal;