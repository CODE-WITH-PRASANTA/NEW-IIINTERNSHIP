import React from "react";
import "./DetailsContent.css";

const DetailsContent = () => {
  const base = "detailsContent";

  return (
    <section className={base}>
      <div className={`${base}__imageSection`}>
        <img
          className={`${base}__image`}
          src="https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=1800&q=80"
          alt="Student attending an online learning class"
        />
      </div>

      <div className={`${base}__container`}>
        <div className={`${base}__content`}>
          <h2 className={`${base}__title`}>Lower Risk of Chronic Diseases</h2>

          <p className={`${base}__paragraph`}>
            One of the most well-documented benefits of a plant-based diet is
            its ability to reduce the risk of chronic illnesses such as{" "}
            <strong>heart disease</strong>, diabetes, and certain types of
            cancer. Studies have shown that plant-based diets are rich in
            fiber, antioxidants, and healthy fats, all of which contribute to
            improved cardiovascular health.
          </p>

          <h3 className={`${base}__subTitle`}>
            Tips for Transitioning to a Plant-Based Diet
          </h3>

          <ul className={`${base}__list`}>
            <li className={`${base}__listItem`}>
              Begin by incorporating one plant-based meal a day or designating a
              day of the week as “Meatless Monday.”
            </li>
            <li className={`${base}__listItem`}>
              Explore new cuisines and plant-based recipes to keep your meals
              exciting and flavorful.
            </li>
            <li className={`${base}__listItem`}>
              Ensure you’re getting enough protein, healthy fats, and essential
              nutrients by diversifying your food choices.
            </li>
            <li className={`${base}__listItem`}>
              Prioritize whole, minimally processed foods like fruits,
              vegetables, legumes, nuts, and seeds.
            </li>
          </ul>

          <h2 className={`${base}__title ${base}__title--space`}>
            Weight Management
          </h2>

          <p className={`${base}__paragraph`}>
            For those looking to manage their weight, a plant-based diet can be
            an effective tool. Plant-based meals are typically lower in calories
            and higher in volume due to their fiber content, which helps you
            feel fuller for longer.
          </p>

          <p className={`${base}__paragraph`}>
            A 2019 study published in the Journal of Nutrition found that
            individuals who follow a plant-based diet tend to have lower body
            mass indexes (BMIs) compared to those who consume animal products.
          </p>

          <div className={`${base}__quoteCard`}>
            <div className={`${base}__quoteMark`}>“</div>

            <div className={`${base}__quoteBody`}>
              <p className={`${base}__quoteText`}>
                Health is not just about the food we eat; it's about the choices
                we make every day to nourish our body, mind, and planet.
              </p>
              <span className={`${base}__quoteAuthor`}>- CAL NEWPORT</span>
            </div>

            <span className={`${base}__cornerFold`} />
          </div>

          <h2 className={`${base}__title ${base}__title--space`}>
            Improved Gut Health
          </h2>

          <p className={`${base}__paragraph`}>
            The gut microbiome plays a crucial role in overall health, affecting
            everything from digestion to mental well-being.{" "}
            <a href="/" className={`${base}__link`}>
              Plant-based foods are naturally
            </a>{" "}
            rich in prebiotics—non-digestible fibers that feed the healthy
            bacteria in your gut.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailsContent;