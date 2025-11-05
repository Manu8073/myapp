import React from "react";
import "./election.css";

function ElectionList() {
  const elections = [
    {
      title: "General Election 2025",
      startDate: "2025-11-03",
      endDate: "2025-11-05",
      status: "Active",
      description: "Nationwide election for the central government.",
    },
    {
      title: "Local Body Election 2026",
      startDate: "2026-02-10",
      endDate: "2026-02-12",
      status: "Upcoming",
      description: "Municipal and panchayat elections across the country.",
    },
    {
      title: "Student Union Election 2027",
      startDate: "2027-01-05",
      endDate: "2027-01-06",
      status: "Closed",
      description: "College student council election results announced.",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="section-title text-center mb-4">
        Current &amp; Upcoming Elections
      </h2>

      <div className="row g-4">
        {elections.map((election, index) => (
          <div key={index} className="col-md-4">
            <div className="election-card h-100 d-flex flex-column">
              <div className="card-body flex-grow-1">
                <h5 className="card-title">{election.title}</h5>
                <p className="card-text">{election.description}</p>

                <p>
                  <strong>Start:</strong> {election.startDate}
                </p>
                <p>
                  <strong>End:</strong> {election.endDate}
                </p>

                <span
                  className={`status-badge ${election.status.toLowerCase()}`}
                >
                  {election.status}
                </span>
              </div>

              <button className="vote-btn mt-auto">
                {election.status === "Active" ? "Vote Now" : "View Details"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ElectionList;
