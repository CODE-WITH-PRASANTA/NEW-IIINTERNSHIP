import React from "react";
import "./LearningPartner.css";

const LearningPartner = () => {
  const base = "learningPartner";

  const partners = [
    {
      id: 1,
      type: "university",
      modifier: "shield",
    },
    {
      id: 2,
      type: "creativebook",
      modifier: "book",
    },
    {
      id: 3,
      type: "owlbook",
      modifier: "owl",
    },
    {
      id: 4,
      type: "university",
      modifier: "crest",
    },
    {
      id: 5,
      type: "university",
      modifier: "badge",
    },
    {
      id: 6,
      type: "creativebook",
      modifier: "book",
    },
    {
      id: 7,
      type: "owlbook",
      modifier: "owl",
    },
    {
      id: 8,
      type: "university",
      modifier: "shield",
    },
  ];

  const renderPartnerLogo = (item) => {
    if (item.type === "creativebook") {
      return (
        <div className={`${base}__logo ${base}__logo--creative`}>
          <svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M35 58C52 44 71 37 90 37C109 37 128 44 145 58"
              stroke="#1D64C8"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M35 62C52 76 71 83 90 83C109 83 128 76 145 62"
              stroke="#1D64C8"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path
              d="M63 49L90 59L117 49"
              stroke="#F48B4A"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="90" cy="37" r="8" fill="#F48B4A" />
            <circle cx="68" cy="44" r="5" fill="#F7B17A" />
            <circle cx="112" cy="44" r="5" fill="#F7B17A" />
            <circle cx="59" cy="59" r="4" fill="#F7B17A" />
            <circle cx="121" cy="59" r="4" fill="#F7B17A" />
            <line x1="90" y1="45" x2="90" y2="55" stroke="#F48B4A" strokeWidth="3" />
            <line x1="73" y1="48" x2="81" y2="56" stroke="#F48B4A" strokeWidth="3" />
            <line x1="107" y1="48" x2="99" y2="56" stroke="#F48B4A" strokeWidth="3" />
          </svg>
          <h4>CREATIVEBOOK</h4>
          <p>LOREM IPSUM DOLOR SIT AMET</p>
        </div>
      );
    }

    if (item.type === "owlbook") {
      return (
        <div className={`${base}__logo ${base}__logo--owl`}>
          <svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M40 70H140"
              stroke="#1D64C8"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M55 62C65 48 78 42 90 42C102 42 115 48 125 62"
              stroke="#D85B33"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="75" cy="55" r="16" fill="#F5F5F5" stroke="#D85B33" strokeWidth="4" />
            <circle cx="105" cy="55" r="16" fill="#F5F5F5" stroke="#D85B33" strokeWidth="4" />
            <circle cx="75" cy="55" r="5" fill="#1D64C8" />
            <circle cx="105" cy="55" r="5" fill="#1D64C8" />
            <path
              d="M86 64L90 68L94 64"
              fill="#F4A044"
              stroke="#F4A044"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M60 74C72 79 81 81 90 81C99 81 108 79 120 74"
              stroke="#6C6C6C"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M68 35L74 42"
              stroke="#D85B33"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M112 35L106 42"
              stroke="#D85B33"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <h4>OWLBOOK</h4>
          <p>TAGLINE HERE</p>
        </div>
      );
    }

    if (item.modifier === "crest") {
      return (
        <div className={`${base}__logo ${base}__logo--crest`}>
          <svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M90 25C97 37 108 44 120 48C118 67 106 82 90 92C74 82 62 67 60 48C72 44 83 37 90 25Z"
              fill="#D73737"
            />
            <circle cx="90" cy="40" r="8" fill="#F2F2F2" />
            <path
              d="M90 49V68"
              stroke="#F2F2F2"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M72 66C79 61 84 59 90 59C96 59 101 61 108 66"
              stroke="#1D64C8"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M52 78H128"
              stroke="#7B7BAA"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M60 76C66 84 77 90 90 90C103 90 114 84 120 76"
              stroke="#7B7BAA"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <h4>UNIVERSITY</h4>
          <p>TAG LINE</p>
        </div>
      );
    }

    if (item.modifier === "badge") {
      return (
        <div className={`${base}__logo ${base}__logo--badge`}>
          <svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="55" r="32" fill="#F5F8FF" stroke="#2A66CC" strokeWidth="5" />
            <path
              d="M90 26V84"
              stroke="#2A66CC"
              strokeWidth="4"
            />
            <path
              d="M61 55H119"
              stroke="#2A66CC"
              strokeWidth="4"
            />
            <path
              d="M70 34L90 55L110 34"
              stroke="#F08B44"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M70 76L90 55L110 76"
              stroke="#F08B44"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect x="63" y="88" width="54" height="12" rx="2" fill="#D64545" />
            <path
              d="M74 18L79 25"
              stroke="#F08B44"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M90 14L90 22"
              stroke="#F08B44"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M106 18L101 25"
              stroke="#F08B44"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <h4>UNIVERSITY</h4>
        </div>
      );
    }

    return (
      <div className={`${base}__logo ${base}__logo--university`}>
        <svg viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 28L90 40L130 28"
            stroke="#1F63C9"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M58 34V83C68 78 79 76 90 76C101 76 112 78 122 83V34"
            stroke="#1F63C9"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M90 40V76"
            stroke="#E05B49"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M58 34C68 39 79 41 90 41C101 41 112 39 122 34"
            stroke="#E05B49"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <h4>UNIVERSITY</h4>
        <p>TAG LINE HERE</p>
      </div>
    );
  };

  return (
    <section className={base}>
      <div className={`${base}__dots`}></div>

      <div className={`${base}__container`}>
        <div className={`${base}__content`}>
          <span className={`${base}__label`}>OUR PARTNERS</span>

          <h2 className={`${base}__title`}>
            Learn with Our
            <br />
            Partners
          </h2>

          <span className={`${base}__line`}></span>

          <p className={`${base}__text`}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt.
          </p>
        </div>

        <div className={`${base}__grid`}>
          {partners.map((item) => (
            <div className={`${base}__card`} key={item.id}>
              {renderPartnerLogo(item)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPartner;