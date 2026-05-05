import React, { useState, useEffect } from "react";
import "./Recruitment.css";
import Swal from "sweetalert2";
import API from "../../api/axios";

const Recruitment = () => {
  const [jobs, setJobs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    whatsapp: "",
    phone: "",
    email: "",
    qualification: "",
    location: "",
    file: null,
    message: "",
  });

  /* ================= FETCH JOBS ================= */
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/carreier");
      setJobs(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  /* ================= WHATSAPP ================= */
  const handleWhatsApp = (job) => {
    const text = `Hello, I want to apply for ${job.title}`;
    const url = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  /* ================= SUBMIT ================= */
 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("SUBMIT CLICKED");

  if (!form.file) {
    return Swal.fire("Error", "Please upload resume", "error");
  }

  try {
    const data = new FormData();

    Object.keys(form).forEach((key) => {
      if (form[key] !== null) {
        data.append(key, form[key]);
      }
    });

    data.append("jobId", selectedJob._id);

    console.log("Sending Data...");

    await API.post("/api/application", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    Swal.fire("Success", "Application Submitted", "success");

    setShowForm(false);

  } catch (err) {
    console.log("ERROR:", err.response?.data || err.message);
    Swal.fire("Error", "Submission failed", "error");
  }
};

  return (
    <div className="recruit">
      {/* ================= JOB LIST ================= */}
      {jobs.map((job) => (
        <div key={job._id} className="recruit-card">
          <div className="recruit-card-header">
            <h3>
              {job.title} – <span>({job.experience})</span>
            </h3>
          </div>

          <div className="recruit-card-body">
            <table className="recruit-table">
              <tbody>
                <tr>
                  <th>Salary</th>
                  <td>₹{job.salaryMin} – ₹{job.salaryMax}</td>
                  <th>Location</th>
                  <td>{job.location}</td>
                </tr>

                <tr>
                  <th>Type</th>
                  <td>{job.type}</td>
                  <th>Vacancy</th>
                  <td>{job.vacancy}</td>
                </tr>

                <tr>
                  <th>Skills</th>
                  <td colSpan="3">{job.skills?.join(", ")}</td>
                </tr>
              </tbody>
            </table>

            <div className="recruit-actions">
              <button
                className="recruit-btn whatsapp"
                onClick={() => handleWhatsApp(job)}
              >
                WhatsApp
              </button>

              <button
                className="recruit-btn apply"
                onClick={() => {
                  setSelectedJob(job);
                  setShowForm(true);
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* ================= APPLY FORM MODAL ================= */}
      {showForm && (
        <div className="recruit-modal-overlay">
          <div className="recruit-modal">
            <h3>Apply for {selectedJob?.title}</h3>

            <form onSubmit={handleSubmit} className="recruit-form-grid">
              <div className="recruit-form-row">
                <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
                <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
              </div>

              <div className="recruit-form-row">
                <input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" required />
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="Call Number" required />
              </div>

              <div className="recruit-form-row">
                <input name="email" value={form.email} onChange={handleChange} placeholder="Email ID" required />
                <select name="qualification" value={form.qualification} onChange={handleChange} required>
                  <option value="">Select Qualification</option>
                  <option>BTech</option>
                  <option>MCA</option>
                </select>
              </div>

              <div className="recruit-form-row single">
                <input name="location" value={form.location} onChange={handleChange} placeholder="Location" required />
              </div>

              <div className="recruit-form-row single">
                <input type="file" name="file" onChange={handleChange} required />
              </div>

              <div className="recruit-form-row single">
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Explain yourself..." />
              </div>

              <div className="recruit-modal-actions">
                <button type="submit" className="recruit-btn submit">Submit</button>

                <button
                  type="button"
                  className="recruit-btn cancel"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recruitment;