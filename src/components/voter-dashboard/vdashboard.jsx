import React from "react";
import ElectionStatusCard from "./election";

const Vdashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-4">Welcome to your Dashboard</h2>
      <ElectionStatusCard />
    </div>
  );
};

export default Vdashboard;
