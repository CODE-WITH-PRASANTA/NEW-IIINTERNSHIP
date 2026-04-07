import React, { useState } from 'react';
import './Recruitment.css';
import CarrierBackground from '../../assets/CarrierBackground.webp';
import Swal from 'sweetalert2';

const Recruitment = () => {

  const [jobs] = useState([
    {
      _id: 1,
      jobPosition: "Frontend Developer",
      experienceFrom: 1,
      experienceTo: 3,
      salaryFrom: 15000,
      salaryTo: 30000,
      jobType: "Developer",
      vacancy: 2,
      location: "Bhubaneswar, Odisha",
      skillsRequired: "React.js, JavaScript, HTML5, CSS3, REST API, Git",
    },
    {
      _id: 2,
      jobPosition: "Backend Developer",
      experienceFrom: 2,
      experienceTo: 4,
      salaryFrom: 20000,
      salaryTo: 40000,
      jobType: "Developer",
      vacancy: 1,
      location: "Remote / Hybrid",
      skillsRequired: "Node.js, Express.js, MongoDB, JWT, REST API",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "🎉 Application Submitted!",
      text: "We will contact you soon",
      icon: "success",
      confirmButtonColor: "#16a34a",
    });

    setShowForm(false);
  };

  return (
    <div className="recruit">
      {/* JOB CARDS */}
      {jobs.map((job) => (
        <div key={job._id} className="recruit-card">

          <div className="recruit-card-header">
            <h3>
              {job.jobPosition} –
              <span> (Experience: {job.experienceFrom}-{job.experienceTo}+ years)</span>
            </h3>
          </div>

          <div className="recruit-card-body">

            <table className="recruit-table">
              <tbody>
                <tr>
                  <th>Salary Range</th>
                  <td>₹{job.salaryFrom} – ₹{job.salaryTo}/month</td>
                  <th>Location</th>
                  <td>{job.location}</td>
                </tr>

                <tr>
                  <th>Job Type</th>
                  <td>{job.jobType}</td>
                  <th>Vacancy</th>
                  <td>{job.vacancy}</td>
                </tr>

                <tr>
                  <th>Skills Required</th>
                  <td colSpan="3">{job.skillsRequired}</td>
                </tr>
              </tbody>
            </table>

            <div className="recruit-actions">
              <button className="recruit-btn whatsapp">WhatsApp</button>

              <button
                className="recruit-btn apply"
                onClick={() => {
                  setShowForm(true);
                  setSelectedJob(job);
                }}
              >
                Apply Now
              </button>
            </div>

          </div>
        </div>
      ))}

      {/* MODAL */}
      {showForm && (
        <div className="recruit-modal-overlay">
          <div className="recruit-modal">

            <h3>Apply for {selectedJob?.jobPosition}</h3>

            <form onSubmit={handleSubmit} className="recruit-form-grid">

              <div className="recruit-form-row">
                <input placeholder="First Name" required />
                <input placeholder="Last Name" required />
              </div>

              <div className="recruit-form-row">
                <input placeholder="WhatsApp Number" required />
                <input placeholder="Call Number" required />
              </div>

              <div className="recruit-form-row">
                <input placeholder="Email ID" required />
                <select required>
                  <option>Select Qualification</option>
                  <option>BTech</option>
                  <option>MCA</option>
                </select>
              </div>

              <div className="recruit-form-row single">
                <input placeholder="Location" required />
              </div>

              <div className="recruit-form-row single">
                <input type="file" required />
              </div>

              <div className="recruit-form-row single">
                <textarea placeholder="Explain yourself..." />
              </div>

              <div className="recruit-modal-actions">
                <button className="recruit-btn submit">Submit</button>
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

