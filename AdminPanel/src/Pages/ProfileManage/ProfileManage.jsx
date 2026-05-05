import React, { useState } from "react";
import "./ProfileManage.css";

const ProfileManage = () => {
  const [form, setForm] = useState({
    name: "Admin User",
    email: "admin@school.com",
    phone: "9876543210",
    role: "Administrator",
    bio: "Managing school operations and academic activities.",
  });

  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300"
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <div className="profile">
      {/* HEADER */}
      <div className="profile__header">
        <h2>Admin Profile</h2>
        <p>Manage your personal information</p>
      </div>

      <div className="profile__container">
        {/* LEFT CARD */}
        <div className="profile__left">
          <div className="profile__avatar">
            <img src={image} alt="avatar" />
          </div>

          <h3>{form.name}</h3>
          <span className="profile__badge">{form.role}</span>

          <label className="profile__upload">
            Change Avatar
            <input type="file" hidden onChange={handleImage} />
          </label>
        </div>

        {/* RIGHT FORM */}
        <div className="profile__right">
          <div className="profile__grid">
            <div className="profile__field">
              <label>Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="profile__field">
              <label>Email Address</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="profile__field">
              <label>Phone Number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="profile__field">
              <label>Role</label>
              <input
                name="role"
                value={form.role}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="profile__field profile__bio">
            <label>Bio</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
            />
          </div>

          <div className="profile__actions">
            <button onClick={handleSubmit}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileManage;