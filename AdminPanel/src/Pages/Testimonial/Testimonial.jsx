import React, { useState } from "react";
import "./Testimonial.css";

const Testimonial = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [testimonials, setTestimonials] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleImage = (file) => {
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !designation || !rating || !feedback || !location) return;

    if (editId) {
      setTestimonials(
        testimonials.map((item) =>
          item.id === editId
            ? {
                ...item,
                name,
                designation,
                rating,
                feedback,
                location,
                image: image ? preview : item.image,
              }
            : item
        )
      );
      setEditId(null);
    } else {
      setTestimonials([
        ...testimonials,
        {
          id: Date.now(),
          name,
          designation,
          rating,
          feedback,
          location,
          image: preview,
        },
      ]);
    }

    setName("");
    setDesignation("");
    setRating(0);
    setFeedback("");
    setLocation("");
    setImage(null);
    setPreview(null);
  };

  const handleDelete = (id) => {
    setTestimonials(testimonials.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setName(item.name);
    setDesignation(item.designation);
    setRating(item.rating);
    setFeedback(item.feedback);
    setLocation(item.location);
    setPreview(item.image);
    setEditId(item.id);
  };

  return (
    <div className="testimonial-container">

      <h2 className="testimonial-heading">Testimonial Posting</h2>

      {/* FORM */}
      <div className="testimonial-card">
        <form onSubmit={handleSubmit} className="testimonial-form">

          <div className="testimonial-grid">
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <input
              type="file"
              onChange={(e) => handleImage(e.target.files[0])}
            />
          </div>

          {/* RATING */}
          <div className="rating-section">
            <label>Rating</label>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= rating ? "star active" : "star"}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <textarea
            placeholder="Write Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <button type="submit">
            {editId ? "Update" : "Submit"}
          </button>

        </form>
      </div>

      {/* TABLE */}
      <div className="testimonial-table-card">

        <div className="table-header">
          <h3>Testimonial List</h3>
        </div>

        {/* SCROLL WRAPPER */}
        <div className="table-wrapper">
          <table className="testimonial-table">
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Rating</th>
                <th>Feedback</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {testimonials.length > 0 ? (
                testimonials.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>

                    <td>
                      <img src={item.image} alt="profile" />
                    </td>

                    <td>{item.name}</td>

                    <td>{item.designation}</td>

                    <td className="rating-cell">
                      {"★".repeat(item.rating)}
                    </td>

                    <td className="feedback-cell">
                      {item.feedback}
                    </td>

                    <td>{item.location}</td>

                    <td>
                      <div className="action-btns">
                        <button
                          className="btn edit-btn"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn delete-btn"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="no-data">
                    No testimonials added yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};

export default Testimonial;