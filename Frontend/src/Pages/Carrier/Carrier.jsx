import React, { useState } from 'react';
import '../Carrier/Carrier.css';
import CarrierBackground from '../../assets/CarrierBackground.webp';
import Swal from 'sweetalert2';

const Carrier = () => {

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
    <div className="carrier">

      {/* HERO */}
      <div className="carrier-contact-wrapper">
        <div className="carrier-blob carrier-blob1"></div>
        <div className="carrier-blob carrier-blob2"></div>

        <div className="carrier-contact-container">

          <div className="carrier-contact-left">
            <h2>Career Opportunities</h2>
            <p>
              Explore exciting opportunities with us! Join a growing team that values creativity,
              innovation, and technical excellence.
            </p>
          </div>

          <div className="carrier-contact-right carrier-animate-float">
            <img src={CarrierBackground} alt="career" />
          </div>

        </div>

        <div className="carrier-curve"></div>
      </div>

      {/* JOB CARDS */}
      {jobs.map((job) => (
        <div key={job._id} className="Carrier-card">

          <div className="Carrier-card-header">
            <h3>
              {job.jobPosition} –
              <span> (Experience: {job.experienceFrom}-{job.experienceTo}+ years)</span>
            </h3>
          </div>

          <div className="Carrier-card-body">

            <table className="Carrier-table">
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

            <div className="Carrier-actions">
              <button className="Carrier-btn whatsapp">WhatsApp</button>

              <button
                className="Carrier-btn apply"
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
        <div className="Carrier-modal-overlay">
          <div className="Carrier-modal">

            <h3>Apply for {selectedJob?.jobPosition}</h3>

            <form onSubmit={handleSubmit} className="Carrier-form-grid">

              <div className="Carrier-form-row">
                <input placeholder="First Name" required />
                <input placeholder="Last Name" required />
              </div>

              <div className="Carrier-form-row">
                <input placeholder="WhatsApp Number" required />
                <input placeholder="Call Number" required />
              </div>

              <div className="Carrier-form-row">
                <input placeholder="Email ID" required />
                <select required>
                  <option>Select Qualification</option>
                  <option>BTech</option>
                  <option>MCA</option>
                </select>
              </div>

              <div className="Carrier-form-row single">
                <input placeholder="Location" required />
              </div>

              <div className="Carrier-form-row single">
                <input type="file" required />
              </div>

              <div className="Carrier-form-row single">
                <textarea placeholder="Explain yourself..." />
              </div>

              <div className="Carrier-modal-actions">
                <button className="Carrier-btn submit">Submit</button>
                <button
                  type="button"
                  className="Carrier-btn cancel"
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

export default Carrier;