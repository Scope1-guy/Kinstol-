import React from "react";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "./ServiceCard";
import servicesData from "../../data/servicesData";
import "./Services.css";

// =========================================================
// SERVICES COMPONENT
// Displays ALL 16 company services as a responsive grid of cards.
//
// HOW IT WORKS:
// We import the "servicesData" array (a plain list of service info)
// and use JavaScript's .map() function to turn EACH item in that
// list into a <ServiceCard /> component. This means if you want to
// add a 17th service, you only need to edit servicesData.js —
// you never need to touch this file again.
// =========================================================
const Services = () => {
  return (
    <section id="services" className="section section-grey services">
      <div className="container">
        <SectionTitle
          tag="Our Services"
          title="What We Offer"
          description="From construction to land documentation, Kinstol provides a complete range of engineering and business services."
        />

        <div className="services-grid">
          {servicesData.map((service) => (
            // The "key" prop helps React efficiently track each item in the list.
            // It must be unique - we use the service's id from servicesData.js
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
