import React from "react";
import SectionTitle from "../common/SectionTitle";
import TestimonialCard from "./TestimonialCard";
import testimonialsData from "../../data/testimonialsData";
import "./Testimonials.css";

// =========================================================
// TESTIMONIALS COMPONENT
// Displays client reviews so new visitors can trust the company
// based on what previous clients have said.
// =========================================================
const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <SectionTitle
          tag="Testimonials"
          title="What Our Clients Say"
          description="We take pride in the trust our clients place in us. Here's what some of them have to say."
        />

        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <TestimonialCard
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              role={item.role}
              quote={item.quote}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
