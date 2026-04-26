import React, { useState } from "react";
import "./ApplyForm.css";

const ApplyForm = () => {
  const [data, setData] = useState([
    {
      id: 1,
      subject: "Website Issue",
      phone: "9876543210",
      email: "subrat@gmail.com",
      location: "Bhubaneswar",
      description: "Unable to login",
      status: "Pending",
    },
  ]);

  // Handle Status Change
  const handleStatusChange = (id, value) => {
    const updated = data.map((item) =>
      item.id === id ? { ...item, status: value } : item
    );
    setData(updated);
  };

  // Delete Row
  const handleDelete = (id) => {
    const filtered = data.filter((item) => item.id !== id);
    setData(filtered);
  };

  // Edit (Demo)
  const handleEdit = (item) => {
    alert(`Edit clicked for: ${item.subject}`);
  };

  return (
    <div className="apply-form">
      <div className="apply-form__container">

        <h2 className="apply-form__title">Cold Leads / Enquiries</h2>

        <div className="apply-form__table-wrapper">
          <table className="apply-form__table">
            <thead>
              <tr>
                <th>SL</th>
                <th>Subject</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Location</th>
                <th>Description</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.subject}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.location}</td>
                  <td>{item.description}</td>

                  {/* STATUS DROPDOWN */}
                  <td>
                    <select
                      value={item.status}
                      onChange={(e) =>
                        handleStatusChange(item.id, e.target.value)
                      }
                      className="status-dropdown"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </td>

                  {/* ACTION BUTTONS */}
                  <td>
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

export default ApplyForm;