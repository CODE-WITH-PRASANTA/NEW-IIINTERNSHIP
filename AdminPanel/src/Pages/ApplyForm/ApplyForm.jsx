import React, { useState, useEffect } from "react";
import "./ApplyForm.css";
import API from "../../api/axios";

const ApplyForm = () => {
  const [data, setData] = useState([]);

  /* ================= FETCH APPLICATIONS ================= */
  useEffect(() => {
    fetchApplications();
  }, []);

const fetchApplications = async () => {
  try {
    const res = await API.get("/application"); // ✅ FIXED
    setData(res.data);
  } catch (err) {
    console.log("Fetch Error:", err);
  }
};

  /* ================= STATUS CHANGE ================= */
const handleStatusChange = async (id, value) => {
  try {
    await API.put(`/application/${id}`, { status: value }); // ✅ FIXED

    const updated = data.map((item) =>
      item._id === id ? { ...item, status: value } : item
    );
    setData(updated);
  } catch (err) {
    console.log("Status Update Error:", err);
  }
};

  /* ================= DELETE ================= */
const handleDelete = async (id) => {
  try {
    await API.delete(`/application/${id}`); // ✅ FIXED

    setData(data.filter((item) => item._id !== id));
  } catch (err) {
    console.log("Delete Error:", err);
  }
};

  /* ================= EDIT ================= */
  const handleEdit = (item) => {
    alert(`Edit clicked for: ${item.firstName}`);
  };

  return (
    <div className="apply-form">
      <div className="apply-form__container">

        <h2 className="apply-form__title">Applications / Leads</h2>

        <div className="apply-form__table-wrapper">
          <table className="apply-form__table">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Location</th>
                <th>Qualification</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="8" className="empty">
                    No Applications Found
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>

                    <td>{item.firstName} {item.lastName}</td>

                    <td>{item.phone || item.whatsapp}</td>

                    <td>{item.email}</td>

                    <td>{item.location}</td>

                    <td>{item.qualification}</td>

                    {/* STATUS */}
                    <td>
                      <select
                        value={item.status || "Pending"}
                        onChange={(e) =>
                          handleStatusChange(item._id, e.target.value)
                        }
                        className="status-dropdown"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Reviewed">Reviewed</option>
                        <option value="Selected">Selected</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>

                    {/* ACTIONS */}
                    <td>
                      <button
                        className="btn edit-btn"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn delete-btn"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default ApplyForm;