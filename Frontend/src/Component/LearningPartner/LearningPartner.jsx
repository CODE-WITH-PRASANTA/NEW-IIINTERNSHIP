import React, { useEffect, useState } from "react";
import "./LearningPartner.css";
import API, { ImageUrl } from "../../api/axios";

const LearningPartner = () => {
  const base = "learningPartner";

  const [partners, setPartners] = useState([]);

  // ✅ FETCH FROM BACKEND
  const fetchPartners = async () => {
    try {
      const res = await API.get("/learningpartners");
      setPartners(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  // ✅ UPDATED: render real logo instead of SVG
  const renderPartnerLogo = (item) => {
    return (
      <div className={`${base}__logo ${base}__logo--university`}>
        <img
          src={ImageUrl(item.logo)}
          alt={item.name}
          style={{ width: "80px", height: "80px", objectFit: "contain" }}
        />
        <h4>{item.name}</h4>
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
          {partners.length === 0 ? (
            <p style={{ textAlign: "center" }}>No partners found</p>
          ) : (
            partners.map((item) => (
              <div className={`${base}__card`} key={item._id}>
                {renderPartnerLogo(item)}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default LearningPartner;