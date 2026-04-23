import React, { useState } from "react";
import "./ApplyForm.css";

const ApplyForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    qualification: "",
    location: "",
    resume: null,
    about: "",
  });

  const [showFirstName, setShowFirstName] = useState(true);
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      exp: "1-3 Years",
      location: "Bhubaneswar",
      salary: "₹3-5 LPA",
      vacancy: 3,
      status: "Active",
      date: "10 Apr 2026",
    },
    {
      id: 2,
      title: "Backend Developer",
      exp: "2-5 Years",
      location: "Remote",
      salary: "₹5-8 LPA",
      vacancy: 2,
      status: "Draft",
      date: "15 Apr 2026",
    },
  ]);

  const [selectedJob, setSelectedJob] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted ✅");
  };

  // ✅ DELETE
  const handleDelete = (id) => {
    const confirm = window.confirm("Delete this job?");
    if (!confirm) return;
    setJobs(jobs.filter((job) => job.id !== id));
  };

  // ✅ VIEW
  const handleView = (job) => {
    setSelectedJob(job);
    setIsEdit(false);
  };

  // ✅ EDIT
  const handleEdit = (job) => {
    setSelectedJob(job);
    setIsEdit(true);
  };

  // ✅ SAVE EDIT
  const handleSave = () => {
    setJobs(
      jobs.map((job) =>
        job.id === selectedJob.id ? selectedJob : job
      )
    );
    setSelectedJob(null);
    setIsEdit(false);
  };

  return (
    <div className="applyForm">
      <div className="applyForm__container">

        {/* LEFT FORM */}
        <form className="applyForm__left" onSubmit={handleSubmit}>
          <h2>Apply Now</h2>

          <div className="applyForm__toggle">
            <label>First Name</label>
            <button
              type="button"
              onClick={() => setShowFirstName(!showFirstName)}
            >
              {showFirstName ? "Hide" : "Show"}
            </button>
          </div>

          {showFirstName && (
            <input name="firstName" placeholder="First Name" onChange={handleChange} />
          )}

          <input name="lastName" placeholder="Last Name" onChange={handleChange} />
          <input name="phone" placeholder="Phone" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="qualification" placeholder="Qualification" onChange={handleChange} />
          <input name="location" placeholder="Location" onChange={handleChange} />

          <div className="applyForm__file">
            <label>Resume Upload</label>
            <input type="file" name="resume" onChange={handleChange} />
          </div>

          <textarea name="about" placeholder="About You" onChange={handleChange}></textarea>

          <button className="applyForm__submit">Submit</button>
        </form>

        {/* RIGHT PREVIEW */}
        <div className="applyForm__right">
          <h2>Preview</h2>

          <div className="previewBox">
            <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Qualification:</strong> {formData.qualification}</p>
            <p><strong>Resume:</strong> {formData.resume?.name}</p>
            <p><strong>About:</strong> {formData.about}</p>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="applyForm__tableSection">
        <h2>Job List</h2>

        <div className="tableWrapper">
          <table>
            <thead>
              <tr>
                <th>Job Title</th>
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
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.title}</td>
                  <td>{job.exp}</td>
                  <td>{job.location}</td>
                  <td>{job.salary}</td>
                  <td>{job.vacancy}</td>
                  <td>
                    <span className={`status ${job.status.toLowerCase()}`}>
                      {job.status}
                    </span>
                  </td>
                  <td>{job.date}</td>

                  <td className="actions">
                    <button className="view" onClick={() => handleView(job)}>View</button>
                    <button className="edit" onClick={() => handleEdit(job)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(job.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ MODAL */}
      {selectedJob && (
        <div className="modal">
          <div className="modalContent">
            <h2>{isEdit ? "Edit Job" : "View Job"}</h2>

            {isEdit ? (
              <>
                <input
                  value={selectedJob.title}
                  onChange={(e) =>
                    setSelectedJob({ ...selectedJob, title: e.target.value })
                  }
                />
                <input
                  value={selectedJob.location}
                  onChange={(e) =>
                    setSelectedJob({ ...selectedJob, location: e.target.value })
                  }
                />

                <button onClick={handleSave} className="saveBtn">Save</button>
              </>
            ) : (
              <>
                <p><b>Title:</b> {selectedJob.title}</p>
                <p><b>Location:</b> {selectedJob.location}</p>
                <p><b>Salary:</b> {selectedJob.salary}</p>
              </>
            )}

            <button onClick={() => setSelectedJob(null)} className="closeBtn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyForm;