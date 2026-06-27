import React from "react";

// =========================================================
// EQUIPMENT CARD COMPONENT
// Displays ONE piece of heavy-duty equipment, including whether
// it's available for "Sale & Hire" or "Hire Only".
// =========================================================
const EquipmentCard = ({ image, name, availability, description }) => {
  return (
    <div className="equipment-card">
      <div className="equipment-image-wrap">
        <img src={image} alt={name} className="equipment-image" />
      </div>
      <div className="equipment-info">
        <div className="equipment-info-top">
          <h3>{name}</h3>
          {/* Availability badge color changes slightly based on the text,
              but for simplicity we just style it consistently in CSS */}
          <span className="equipment-availability">{availability}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EquipmentCard;
