import React, { useState } from "react";
import "./AdminDashboard.css";
import { FaPlusCircle, FaUsers } from "react-icons/fa";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="dashboard-tabs">
        <button
          className={`tab-btn ${activeTab === "add" ? "active" : ""}`}
          onClick={() => setActiveTab("add")}
        >
          <FaPlusCircle /> Add Election
        </button>
        <button
          className={`tab-btn ${activeTab === "voters" ? "active" : ""}`}
          onClick={() => setActiveTab("voters")}
        >
          <FaUsers /> View Voter List
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === "add" && (
          <div className="add-election-card">
            <h2>Add New Election</h2>
            <form className="add-election-form">
              <div className="form-group">
                <label>Election Title</label>
                <input type="text" placeholder="Enter election name" required />
              </div>

              <div className="form-group">
                <label>Election Date</label>
                <input type="date" required />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  placeholder="Enter short description"
                  rows="3"
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">
                Create Election
              </button>
            </form>
          </div>
        )}

        {activeTab === "voters" && (
          <div className="voter-list-card">
            <h2>Registered Voters</h2>
            <table className="voter-table">
              <thead>
                <tr>
                  <th>Voter ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>V001</td>
                  <td>Manoj Kumar</td>
                  <td>manoj@example.com</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>V002</td>
                  <td>Priya Sharma</td>
                  <td>priya@example.com</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>V003</td>
                  <td>Ravi Patel</td>
                  <td>ravi@example.com</td>
                  <td>Inactive</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
