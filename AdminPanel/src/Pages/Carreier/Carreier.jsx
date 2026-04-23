import React, { useState, useEffect } from "react";
import "./Carreier.css";

const Carreier = () => {
  const [form, setForm] = useState({
    title: "",
    experience: "",
    type: "",
    vacancy: "",
    salaryMin: "",
    salaryMax: "",
    salaryType: "Monthly",
    location: "",
    skills: "",
    description: "",
    whatsapp: true,
    apply: true,
  });

  const [jobs, setJobs] = useState([]);
  const [active, setActive] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = () => {
    if (!form.title) return alert("Enter Job Title");

    setJobs([
      ...jobs,
      {
        ...form,
        status: "Active",
        date: new Date().toLocaleDateString(),
      },
    ]);

    setForm({
      title: "",
      experience: "",
      type: "",
      vacancy: "",
      salaryMin: "",
      salaryMax: "",
      salaryType: "Monthly",
      location: "",
      skills: "",
      description: "",
      whatsapp: true,
      apply: true,
    });
  };

  const handleDelete = (i) => {
    setJobs(jobs.filter((_, index) => index !== i));
    setActive(null);
  };

  // close dropdown on outside click
  useEffect(() => {
    const close = () => setActive(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <div className="carreier">

      {/* TOP SECTION */}
      <div className="carreier__top">

        {/* LEFT FORM */}
        <div className="carreier__form">

          <div className="form-card">
            <h2>Job Basic Info</h2>
            <input name="title" value={form.title} placeholder="Job Title" onChange={handleChange}/>
            <input name="experience" value={form.experience} placeholder="Experience" onChange={handleChange}/>

            <select name="type" value={form.type} onChange={handleChange}>
              <option value="">Job Type</option>
              <option>Developer</option>
              <option>Full-time</option>
              <option>Internship</option>
            </select>

            <input name="vacancy" value={form.vacancy} placeholder="Vacancy" onChange={handleChange}/>
          </div>

          <div className="form-card">
            <h3>Salary & Location</h3>

            <div className="grid-2">
              <input name="salaryMin" value={form.salaryMin} placeholder="Min Salary" onChange={handleChange}/>
              <input name="salaryMax" value={form.salaryMax} placeholder="Max Salary" onChange={handleChange}/>
            </div>

            <select name="salaryType" value={form.salaryType} onChange={handleChange}>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>

            <input name="location" value={form.location} placeholder="Location" onChange={handleChange}/>
          </div>

          <div className="form-card">
            <h3>Skills</h3>
            <input name="skills" value={form.skills} placeholder="React, JS, CSS..." onChange={handleChange}/>
          </div>

          <div className="form-card">
            <h3>Description</h3>
            <textarea name="description" value={form.description} placeholder="Job Description" onChange={handleChange}/>
          </div>

          <div className="form-card">
            <h3>Settings</h3>
            <label>
              <input type="checkbox" name="whatsapp" checked={form.whatsapp} onChange={handleChange}/>
              Show WhatsApp
            </label>

            <label>
              <input type="checkbox" name="apply" checked={form.apply} onChange={handleChange}/>
              Show Apply
            </label>
          </div>

          <button className="submit-btn" onClick={handleSubmit}>
            + Add Job
          </button>

        </div>

        {/* RIGHT PREVIEW */}
        <div className="carreier__preview">
          <h2>Live Preview</h2>

          <div className="job-card">
            <h3>
              {form.title || "Frontend Developer"} ({form.experience || "1–3 years"})
            </h3>

            <div className="info-grid">
              <p><b>Salary:</b> ₹{form.salaryMin || "15000"} - ₹{form.salaryMax || "30000"} / {form.salaryType}</p>
              <p><b>Location:</b> {form.location || "Bhubaneswar"}</p>
              <p><b>Type:</b> {form.type || "Full-time"}</p>
              <p><b>Vacancy:</b> {form.vacancy || "2"}</p>
            </div>

            <div className="skills">
              {form.skills
                ? form.skills.split(",").map((s, i) => <span key={i}>{s}</span>)
                : <span>React.js</span>}
            </div>

            <div className="btns">
              {form.whatsapp && <button className="whatsapp">WhatsApp</button>}
              {form.apply && <button className="apply">Apply Now</button>}
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="carreier__table">
        <h2>Job List</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Experience</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Vacancy</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((j, i) => (
                <tr key={i}>
                  <td>{j.title}</td>
                  <td>{j.experience}</td>
                  <td>{j.location}</td>
                  <td>₹{j.salaryMin}-{j.salaryMax}</td>
                  <td>{j.vacancy}</td>
                  <td>{j.status}</td>
                  <td>{j.date}</td>

                  <td className="action-cell">
                    <button
                      className="action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActive(active === i ? null : i);
                      }}
                    >
                      ⋮
                    </button>

                    {active === i && (
                      <div
                        className={`dropdown ${i > jobs.length - 3 ? "dropdown--up" : ""}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button onClick={() => alert("View Job")}>👁 View</button>
                        <button onClick={() => alert("Edit Job")}>✏️ Edit</button>
                        <button onClick={() => handleDelete(i)}>🗑 Delete</button>
                      </div>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Carreier;