import React from "react";
import Button from "../common/Button";
import "./Hero.css";

// =========================================================
// HERO COMPONENT
// This is the FIRST thing visitors see — a full-screen section with:
// - A background image (construction site)
// - A strong headline
// - The company slogan
// - Two call-to-action (CTA) buttons
//
// The "id='home'" below lets the Navbar's "Home" link scroll here.
// =========================================================
const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Dark gradient overlay placed on top of the background image so
          the white text remains easy to read */}
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <span className="hero-tag">
          Construction • Engineering • Equipment • Real Estate
        </span>

        <h1 className="hero-title">
          Building Strong Foundations <br />
          For A <span className="text-gold">Greater Tomorrow</span>
        </h1>

        <p className="hero-slogan">
          "Engineering Excellence. Delivering Trust." — Your reliable partner in
          construction, heavy-duty equipment, and land development services.
        </p>

        <div className="hero-buttons">
          {/* Reusing the Button component with different "variant" props */}
          <Button text="Get a Free Quote" href="#contact" variant="primary" />
          <Button text="Our Services" href="#services" variant="outline" />
        </div>
      </div>

      {/* Small scroll indicator at the bottom of the screen */}
      <a
        href="#about"
        className="hero-scroll-indicator"
        aria-label="Scroll down"
      >
        <span></span>
      </a>
    </section>
  );
};

export default Hero;
