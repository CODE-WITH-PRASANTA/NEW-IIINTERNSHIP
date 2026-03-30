import React from "react";
import "./SuccessDetailsreply.css";
import {
  FiHeart,
  FiArrowLeft,
  FiArrowRight,
  FiChevronDown,
} from "react-icons/fi";

const SuccessDetailsreply = () => {
  const base = "successDetailsReply";

  const comments = [
    {
      id: 1,
      name: "Sophia",
      date: "December 25, 2024",
      message:
        "This is a really insightful post, and I appreciate you sharing your perspective. I've learned something new today and will definitely be thinking about this further.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      name: "Mary Brown",
      date: "December 25, 2024",
      message:
        "I completely agree with your assessment of the situation. It's important to have these conversations, and I appreciate you bringing this to light.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 3,
      name: "Olivia Wilson",
      date: "December 25, 2024",
      message:
        "This is a fantastic resource, and I'm so glad I came across it. I'll be sharing this with my network as it's relevant to so many people.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section className={base}>
      <div className={`${base}__container`}>
        <div className={`${base}__topBar`}>
          <div className={`${base}__tagsWrap`}>
            <span className={`${base}__label`}>Tags:</span>
            <div className={`${base}__tags`}>
              <span className={`${base}__tag`}>#Health</span>
              <span className={`${base}__tag`}>#Travel</span>
            </div>
          </div>

          <button className={`${base}__likeBtn`} type="button">
            <span className={`${base}__likeIconWrap`}>
              <FiHeart className={`${base}__likeIcon`} />
            </span>
            <span className={`${base}__likeText`}>217Like</span>
          </button>
        </div>

        <div className={`${base}__postNav`}>
          <div className={`${base}__postCard`}>
            <div className={`${base}__postThumbWrap`}>
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
                alt="Previous post"
                className={`${base}__postThumb`}
              />
            </div>

            <div className={`${base}__postContent`}>
              <span className={`${base}__postLabel`}>
                <FiArrowLeft className={`${base}__postArrow`} />
                Previous Post
              </span>
              <h3 className={`${base}__postTitle`}>
                The Power of a Plant-Based Diet: Why It’s a Game Changer for
                Health
              </h3>
            </div>
          </div>

          <div className={`${base}__divider`} />

          <div
            className={`${base}__postCard} ${base}__postCard--reverse`}
          >
            <div className={`${base}__postContent ${base}__postContent--right`}>
              <span className={`${base}__postLabel ${base}__postLabel--next`}>
                Next post
                <FiArrowRight className={`${base}__postArrow`} />
              </span>
              <h3 className={`${base}__postTitle`}>
                The Mind-Body Connection: How Mental Health Affects Physical
                Health
              </h3>
            </div>

            <div className={`${base}__postThumbWrap`}>
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
                alt="Next post"
                className={`${base}__postThumb`}
              />
            </div>
          </div>
        </div>

        <button className={`${base}__commentToggle`} type="button">
          <span>View Comment (3)</span>
          <FiChevronDown className={`${base}__toggleIcon`} />
        </button>

        <div className={`${base}__comments`}>
          {comments.map((item, index) => (
            <div
              key={item.id}
              className={`${base}__commentItem ${
                index !== comments.length - 1 ? `${base}__commentItem--border` : ""
              }`}
            >
              <div className={`${base}__commentHeader`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={`${base}__avatar`}
                />

                <div className={`${base}__commentMeta`}>
                  <h4 className={`${base}__userName`}>{item.name}</h4>
                  <span className={`${base}__date`}>on {item.date}</span>
                </div>
              </div>

              <p className={`${base}__message`}>{item.message}</p>

              <button className={`${base}__replyBtn`} type="button">
                Reply
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessDetailsreply;