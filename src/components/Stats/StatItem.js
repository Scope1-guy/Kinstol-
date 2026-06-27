import React from "react";

// =========================================================
// STAT ITEM COMPONENT
// Displays ONE statistic, e.g. "15+ Years of Experience".
// Receives its number, suffix (like "+"), and label via props.
// =========================================================
const StatItem = ({ icon, number, suffix, label }) => {
  return (
    <div className="stat-item">
      <span className="stat-icon">{icon}</span>
      <h3 className="stat-number">
        {number}
        {suffix}
      </h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};

export default StatItem;
