import React from "react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import "./Sponsorship.css";

// =========================================================
// SPONSORSHIP & PARTNERSHIP COMPONENT
// Explains the company's sponsorship deals and partnership
// opportunities (for events, sports, organizations, etc.)
// =========================================================
const Sponsorship = () => {
  const partnershipPoints = [
    "Sports team and event sponsorships",
    "Corporate brand partnerships",
    "Community development initiatives",
    "Joint-venture infrastructure projects",
  ];

  return (
    <section id="sponsorship" className="section sponsorship">
      <div className="container sponsorship-grid">
        {/* ---------- LEFT: TEXT CONTENT ---------- */}
        <div className="sponsorship-text">
          <SectionTitle
            tag="Partnerships"
            title="Sponsorship & Partnership Deals"
            light // tells SectionTitle to use white text (dark background)
          />
          <p className="sponsorship-description">
            At Kinstol, we believe in growing together. We actively seek strategic partnerships
            and sponsorship opportunities that create shared value for businesses, communities,
            and organizations.
          </p>

          <ul className="sponsorship-list">
            {partnershipPoints.map((point) => (
              <li key={point}>
                <span className="check-icon">✔</span> {point}
              </li>
            ))}
          </ul>

          <Button text="Discuss a Partnership" href="#contact" variant="primary" />
        </div>

        {/* ---------- RIGHT: IMAGE ---------- */}
        <div className="sponsorship-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
            alt="Business partnership handshake"
            className="sponsorship-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
