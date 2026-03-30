import React from "react";
import "./LeaveComment.css";
import { FiArrowUpRight } from "react-icons/fi";

const LeaveComment = () => {
  const base = "leaveComment";

  return (
    <section className={base}>
      <div className={`${base}__card`}>
        <h2 className={`${base}__title`}>Leave a Comment</h2>

        <p className={`${base}__subtitle`}>
          Your email address will not be published. Required fields are marked{" "}
          <span className={`${base}__required`}>*</span>
        </p>

        <form className={`${base}__form`}>
          <div className={`${base}__row`}>
            <div className={`${base}__field`}>
              <label className={`${base}__label`} htmlFor="comment-name">
                Name <span className={`${base}__required`}>*</span>
              </label>
              <input
                id="comment-name"
                type="text"
                className={`${base}__input`}
                placeholder="e.g., Emily"
              />
            </div>

            <div className={`${base}__field`}>
              <label className={`${base}__label`} htmlFor="comment-email">
                Email <span className={`${base}__required`}>*</span>
              </label>
              <input
                id="comment-email"
                type="email"
                className={`${base}__input`}
                placeholder="hello@example.com"
              />
            </div>
          </div>

          <div className={`${base}__field ${base}__field--full`}>
            <label className={`${base}__label`} htmlFor="comment-message">
              Your Comment
            </label>
            <textarea
              id="comment-message"
              className={`${base}__textarea`}
              placeholder="Write your message here..."
            />
          </div>

          <label className={`${base}__checkRow`}>
            <input type="checkbox" className={`${base}__checkbox`} />
            <span className={`${base}__checkBoxUi`} />
            <span className={`${base}__checkText`}>
              Save my name, email, and website in this browser for the next time
              I comment.
            </span>
          </label>

          <button type="submit" className={`${base}__submitBtn`}>
            <span className={`${base}__submitText`}>Post Comment</span>
            <span className={`${base}__submitIconWrap`}>
              <FiArrowUpRight className={`${base}__submitIcon`} />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeaveComment;