import React from "react";

// =========================================================
// TESTIMONIAL CARD COMPONENT
// Displays ONE client review including their avatar, name,
// role/company, star rating, and quote.
// =========================================================
const TestimonialCard = ({ avatar, name, role, quote, rating }) => {
  // Creates an array like [1,2,3,4,5] so we can show that many stars.
  // Array(rating).fill(0) just creates a list with "rating" number of items.
  const stars = Array(rating).fill(0);

  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {stars.map((_, index) => (
          <span key={index}>⭐</span>
        ))}
      </div>

      <p className="testimonial-quote">"{quote}"</p>

      <div className="testimonial-author">
        <img src={avatar} alt={name} className="testimonial-avatar" />
        <div>
          <h4>{name}</h4>
          <span>{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
