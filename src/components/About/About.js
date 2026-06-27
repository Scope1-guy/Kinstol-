import React from "react";
import SectionTitle from "../common/SectionTitle";
import "./About.css";

// =========================================================
// ABOUT COMPONENT
// Tells visitors WHO Kinstol is, what drives the company
// (Mission/Vision), and WHY clients should choose them.
// =========================================================
const About = () => {
  // "Why Choose Us" points are stored as a small local array.
  // We map() over this list to avoid repeating the same JSX 4 times.
  const whyChooseUs = [
    {
      icon: "✅",
      title: "Proven Expertise",
      text: "Years of hands-on experience across construction, engineering, and land development.",
    },
    {
      icon: "🛠️",
      title: "Modern Equipment",
      text: "A wide fleet of well-maintained heavy-duty machinery for every project size.",
    },
    {
      icon: "👷",
      title: "Skilled Workforce",
      text: "A team of qualified engineers, surveyors, and project managers.",
    },
    {
      icon: "⏱️",
      title: "Timely Delivery",
      text: "We respect deadlines and deliver projects on time, every time.",
    },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionTitle
          tag="About Us"
          title="Who We Are"
          description="Kinstol Equipment & Global Business Limited is a multi-disciplinary construction and engineering company committed to building infrastructure and communities across the nation."
        />

        <div className="about-grid">
          {/* ---------- LEFT: IMAGE ---------- */}
          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=900&auto=format&fit=crop"
              alt="Kinstol construction site with engineers reviewing plans"
              className="about-image"
            />
            {/* Floating badge over the image */}
            <div className="about-badge">
              <span className="about-badge-number">15+</span>
              <span className="about-badge-text">Years of Excellence</span>
            </div>
          </div>

          {/* ---------- RIGHT: TEXT CONTENT ---------- */}
          <div className="about-text">
            <p className="about-paragraph">
              Since our establishment, Kinstol Equipment & Global Business Limited has grown into
              a trusted name in construction, infrastructure development, and heavy-duty equipment
              services. We combine modern engineering practices with a deep understanding of local
              terrain and regulations to deliver lasting value to our clients.
            </p>

            {/* Mission & Vision cards */}
            <div className="mission-vision-grid">
              <div className="mv-card">
                <h3>🎯 Our Mission</h3>
                <p>
                  To provide reliable, high-quality construction, engineering, and equipment
                  solutions that empower businesses and communities to grow.
                </p>
              </div>
              <div className="mv-card">
                <h3>🔭 Our Vision</h3>
                <p>
                  To be the leading construction and engineering company in the region, known for
                  integrity, innovation, and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- WHY CHOOSE US ---------- */}
        <div className="why-choose-us">
          <h3 className="why-title">Why Choose Kinstol?</h3>
          <div className="why-grid">
            {whyChooseUs.map((item) => (
              <div className="why-card" key={item.title}>
                <span className="why-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
