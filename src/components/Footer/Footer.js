import React from "react";
import servicesData from "../../data/servicesData";
import "./Footer.css";

// =========================================================
// FOOTER COMPONENT
// The bottom section shown on every page, containing:
// - Company summary
// - Quick links (jump to sections)
// - A handful of service links
// - Contact details
// - Social media icons
// =========================================================
const Footer = () => {
  // Automatically grabs today's year so the copyright notice
  // never needs to be manually updated every year.
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Equipment", href: "#equipment" },
    { label: "Contact", href: "#contact" },
  ];

  // We only show the FIRST 6 services in the footer to keep it tidy.
  // ".slice(0, 6)" takes the first 6 items from servicesData array.
  const footerServices = servicesData.slice(0, 6);

  const socialLinks = [
    { label: "Facebook", icon: "📘", href: "https://facebook.com" },
    { label: "Instagram", icon: "📷", href: "https://instagram.com" },
    { label: "LinkedIn", icon: "💼", href: "https://linkedin.com" },
    { label: "Twitter / X", icon: "🐦", href: "https://twitter.com" },
  ];

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* ---------- COLUMN 1: COMPANY INFO ---------- */}
        <div className="footer-col">
          <h3 className="footer-logo">
            KINSTOL <span>EQUIPMENT & GLOBAL BUSINESS LTD</span>
          </h3>
          <p className="footer-about">
            A trusted construction and engineering company delivering quality infrastructure,
            equipment, and land development solutions.
          </p>
          {/* ---------- SOCIAL ICONS ---------- */}
          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="social-icon"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ---------- COLUMN 2: QUICK LINKS ---------- */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- COLUMN 3: SERVICES ---------- */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            {footerServices.map((service) => (
              <li key={service.id}>
                <a href="#services">{service.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- COLUMN 4: CONTACT INFO ---------- */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <ul className="footer-contact-list">
            <li>📍 123 Engineering Way, Abuja, FCT, Nigeria</li>
            <li>📞 +234 800 123 4567</li>
            <li>✉️ info@kinstolequipment.com</li>
          </ul>
        </div>
      </div>

      {/* ---------- BOTTOM BAR ---------- */}
      <div className="footer-bottom">
        <p>
          © {currentYear} Kinstol Equipment & Global Business Limited. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
