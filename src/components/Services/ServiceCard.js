import React from "react";

// =========================================================
// SERVICE CARD COMPONENT
// Renders ONE service card. The Services component calls this
// once for EVERY service in servicesData.js, passing different
// "props" (icon, title, description) each time.
//
// This is a great example of REUSABILITY: instead of writing
// 16 separate blocks of HTML/JSX for 16 services, we write the
// card design ONCE and reuse it with different data via props.
// =========================================================
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
