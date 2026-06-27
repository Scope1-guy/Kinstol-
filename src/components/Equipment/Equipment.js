import React from "react";
import SectionTitle from "../common/SectionTitle";
import EquipmentCard from "./EquipmentCard";
import Button from "../common/Button";
import equipmentData from "../../data/equipmentData";
import "./Equipment.css";

// =========================================================
// EQUIPMENT COMPONENT
// Shows a gallery of heavy-duty equipment available for SALE
// or HIRE, plus a short call-to-action banner encouraging
// visitors to contact the company for pricing.
// =========================================================
const Equipment = () => {
  return (
    <section id="equipment" className="section section-grey equipment">
      <div className="container">
        <SectionTitle
          tag="Equipment Showcase"
          title="Heavy-Duty Equipment"
          description="We offer a wide range of well-maintained heavy-duty equipment for sale and hire, supporting projects of any scale."
        />

        <div className="equipment-grid">
          {equipmentData.map((item) => (
            <EquipmentCard
              key={item.id}
              image={item.image}
              name={item.name}
              availability={item.availability}
              description={item.description}
            />
          ))}
        </div>

        {/* ---------- SALES & HIRING INFO BANNER ---------- */}
        <div className="equipment-banner">
          <div className="equipment-banner-text">
            <h3>Need Equipment For Your Project?</h3>
            <p>
              Whether you need to purchase equipment outright or hire it for a short or long-term
              project, our team is ready to provide flexible terms that suit your budget.
            </p>
          </div>
          <Button text="Request Equipment Quote" href="#contact" variant="primary" />
        </div>
      </div>
    </section>
  );
};

export default Equipment;
