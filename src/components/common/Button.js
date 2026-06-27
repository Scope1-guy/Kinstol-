import React from "react";
import "./Button.css";

// =========================================================
// BUTTON COMPONENT
// A reusable button used everywhere on the site (Hero, Contact, etc.)
//
// PROPS (data passed into this component from its parent):
// - text     : the words shown inside the button (e.g. "Get a Quote")
// - href     : the link/section the button should scroll/navigate to
// - variant  : controls the COLOR style -> "primary" | "outline" | "outline-dark"
// - onClick  : optional function to run when clicked (used for forms)
//
// Using props lets us reuse this ONE component for every button on the
// website instead of writing separate button code everywhere.
// =========================================================
const Button = ({ text, href, variant = "primary", onClick, type = "button" }) => {
  // Decide which CSS class to use based on the "variant" prop
  const variantClass =
    variant === "outline"
      ? "btn-outline"
      : variant === "outline-dark"
      ? "btn-outline-dark"
      : "btn-primary";

  // If an "href" is provided, render an <a> link (good for navigation/scrolling)
  if (href) {
    return (
      <a href={href} className={`btn ${variantClass}`}>
        {text}
      </a>
    );
  }

  // Otherwise, render a normal <button> (good for form submission)
  return (
    <button type={type} className={`btn ${variantClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
