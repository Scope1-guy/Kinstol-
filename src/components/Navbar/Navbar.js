import React, { useState, useEffect } from "react";
import "./Navbar.css";

// =========================================================
// NAVBAR COMPONENT
// The navigation bar shown at the top of every page.
//
// FEATURES:
// 1. Sticky: stays visible at the top while the user scrolls.
// 2. Background changes once the user scrolls down a little
//    (so it's readable over the Hero image).
// 3. Hamburger menu: on small screens (mobile/tablet), the links
//    collapse into a menu icon that opens/closes on click.
// 4. Smooth scrolling: each link points to a section's "id"
//    (e.g. #about) and html.css "scroll-behavior: smooth" makes
//    the page glide there instead of jumping instantly.
// =========================================================
const Navbar = () => {
  // "isScrolled" tracks whether the page has been scrolled down.
  // We use this to add a solid background + shadow to the navbar.
  const [isScrolled, setIsScrolled] = useState(false);

  // "isMenuOpen" tracks whether the mobile hamburger menu is open.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect runs code when the component loads, and lets us
  // "listen" for the page being scrolled.
  useEffect(() => {
    const handleScroll = () => {
      // If the user has scrolled more than 40px, mark navbar as "scrolled"
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the listener when the component unmounts
    // (good practice to avoid memory leaks)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // List of navigation links. Each "href" matches an "id" on a section
  // further down in App.js (e.g. <section id="about">).
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Equipment", href: "#equipment" },
    { label: "Partnerships", href: "#sponsorship" },
    { label: "Contact", href: "#contact" },
  ];

  // Closes the mobile menu — used when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        {/* ---------- LOGO / COMPANY NAME ---------- */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">K</span>
          <span className="logo-text">
            KINSTOL <span className="logo-text-sub">EQUIPMENT & GLOBAL BUSINESS LTD</span>
          </span>
        </a>

        {/* ---------- DESKTOP NAV LINKS ---------- */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* ---------- CALL-TO-ACTION BUTTON (Desktop only) ---------- */}
        <a href="#contact" className="navbar-cta btn btn-primary">
          Get a Quote
        </a>

        {/* ---------- HAMBURGER ICON (Mobile only) ---------- */}
        <button
          className={`hamburger ${isMenuOpen ? "hamburger-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* ---------- MOBILE DROPDOWN MENU ---------- */}
      {/* Only adds the "open" class (which makes it visible) when isMenuOpen is true */}
      <nav className={`mobile-menu ${isMenuOpen ? "mobile-menu-open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-link"
            onClick={closeMenu} // closes the menu after a link is tapped
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary mobile-cta" onClick={closeMenu}>
          Get a Quote
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
