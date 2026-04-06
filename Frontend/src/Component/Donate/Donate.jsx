import React from "react";
import "./Donate.css";

const Donate = () => {
  return (
    <section className="donate">
      <div className="donate__container">
        <div className="donate__badge">Glory and Inspiration of Donation</div>

        <p className="donate__intro">
          Donating not only paves the way for our spiritual progress, but it also
          strengthens moral, human values, and goodwill in society. The effect of
          donation is not limited to this birth only, but its auspicious results
          also benefit us in the next births, thereby providing higher speed.
        </p>

        <div className="donate__quoteWrap">
          <div className="donate__quoteLine"></div>
          <p className="donate__quote">
            We all are bound by the bondage of karma in our lives, and with the
            bondage of karma, we leave this world and then take birth again.{" "}
            <span>
              In such a situation, if we do good deeds by donating according to
              our capacity and contribute to the work that benefits the public
              and the service dedicated to society, then our name can remain
              immortal for ages.
            </span>
          </p>
        </div>

        <h2 className="donate__sectionHeading">
          REQUEST TO RICH AND VIRTUOUS GENTLEMEN
        </h2>

        <p className="donate__text donate__text--center">
          Religious-loving rich people, philanthropists, and wealthy capitalists
          are appealed to contribute to this sacred cause.{" "}
          <span>
            Donate generously for the construction of a grand building of Unique
            Records of Universe unit under the banner of "Divya Prerak Kahaniya
            Humanity Research Centre Trust", so that human values can be promoted
            and the coming generation can get a positive benefit.
          </span>
        </p>

        <h2 className="donate__sectionHeading">
          MAKE VOLUNTARY DONATION TO DPKHRC CHARITABLE TRUST
        </h2>

        <p className="donate__text donate__text--center">
          You can participate in this great work by donating to Divya Prerak
          Kahaniyan Humanity Research Centre Charitable Trust as per your
          capacity.{" "}
          <span>
            This donation will be Tax-free under Section 80G of the Income Tax
            Act, Government of India.
          </span>
        </p>

        <h2 className="donate__sectionHeading">DONATE, EARN MERIT</h2>

        <p className="donate__text donate__text--center">
          Donation makes the life of any person successful, purifies the soul,
          and brings happiness, prosperity, <span>progress, and peace in your
          life. Come forward and become a part of this noble work by making a
          voluntary donation as per your capacity and serve Humanity.</span>
        </p>

        <div className="donate__topButtons">
          <button className="donate__smallBtn donate__smallBtn--primary">
            Make a Donation
          </button>
          <button className="donate__smallBtn donate__smallBtn--secondary">
            List of Charities
          </button>
        </div>

        <div className="donate__formCard">
          <div className="donate__field donate__field--full">
            <label className="donate__label">
              Enter Amount (₹): <span>*</span>
            </label>
            <input
              type="text"
              className="donate__input"
              placeholder="Enter Amount..."
            />
          </div>

          <div className="donate__grid">
            <div className="donate__field">
              <label className="donate__label">
                1. Name: <span>*</span>
              </label>
              <input
                type="text"
                className="donate__input"
                placeholder="Enter Name..."
              />
            </div>

            <div className="donate__field">
              <label className="donate__label">
                2. Mobile Number: <span>*</span>
              </label>
              <input
                type="text"
                className="donate__input"
                placeholder="Enter Mobile Number..."
              />
            </div>

            <div className="donate__field">
              <label className="donate__label">
                3. Email: <span>*</span>
              </label>
              <input
                type="email"
                className="donate__input"
                placeholder="Enter Email..."
              />
            </div>

            <div className="donate__field">
              <label className="donate__label">
                4. Do you want an 80G certificate? <span>*</span>
              </label>
              <select className="donate__input donate__select" defaultValue="No">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
          </div>

          <div className="donate__field donate__field--full">
            <label className="donate__label">
              5. Address: <span>*</span>
            </label>
            <textarea
              className="donate__textarea"
              placeholder="Enter Address..."
            ></textarea>
          </div>

          <div className="donate__field donate__field--full">
            <label className="donate__label">6. Anything Else?:</label>
            <textarea
              className="donate__textarea"
              placeholder="Anything else..."
            ></textarea>
          </div>

          <button className="donate__paymentBtn">Make Payment</button>
        </div>
      </div>
    </section>
  );
};

export default Donate;