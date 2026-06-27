import React from "react";
import StatItem from "./StatItem";
import "./Stats.css";

// =========================================================
// STATS COMPONENT
// A simple, eye-catching banner that shows 4 key numbers about
// the company: years of experience, projects completed, clients
// served, and equipment available.
//
// TO EDIT: just change the "number" and "label" values below.
// =========================================================
const Stats = () => {
  // Stored as an array so we can .map() through them, same pattern
  // used in Services/Projects/Equipment for consistency.
  const stats = [
    { icon: "📅", number: 15, suffix: "+", label: "Years of Experience" },
    { icon: "🏗️", number: 120, suffix: "+", label: "Projects Completed" },
    { icon: "🤝", number: 80, suffix: "+", label: "Clients Served" },
    { icon: "🚜", number: 40, suffix: "+", label: "Equipment Available" },
  ];

  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <StatItem
            key={stat.label}
            icon={stat.icon}
            number={stat.number}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
