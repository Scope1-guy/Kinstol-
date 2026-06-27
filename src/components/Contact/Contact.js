import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import "./Contact.css";

// =========================================================
// CONTACT COMPONENT
// Contains:
// 1. A contact form (name, email, phone, message)
// 2. Company contact details (address, phone, email)
// 3. A Google Maps placeholder (an embedded iframe you can later
//    replace with your real business location)
//
// HOW THE FORM WORKS (for beginners):
// We use React's "useState" to remember what the user types into
// each input box. This is called a "controlled form" because React
// is in full control of the input's value at all times.
// =========================================================
const Contact = () => {
  // "formData" holds the current value of every field in one object.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // "isSubmitted" tracks whether the form was successfully sent,
  // so we can show a friendly thank-you message.
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Runs every time the user types in ANY input field.
  // "e.target.name" matches the input's "name" attribute (e.g. "email")
  // "e.target.value" is whatever the user typed.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, // keep all other fields unchanged
      [name]: value, // update only the field that changed
    }));
  };

  // Runs when the form is submitted (the Send Message button is clicked)
  const handleSubmit = (e) => {
    e.preventDefault(); // stops the page from refreshing (default browser behavior)

    // NOTE FOR BEGINNERS:
    // This demo simply shows a success message. To make this form actually
    // SEND emails, you would connect it to a backend service such as
    // Formspree, EmailJS, or your own server API.
    console.log("Form submitted with:", formData);

    setIsSubmitted(true);

    // Clear the form fields after submitting
    setFormData({ name: "", email: "", phone: "", message: "" });

    // Hide the success message again after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section section-grey contact">
      <div className="container">
        <SectionTitle
          tag="Contact Us"
          title="Get In Touch"
          description="Have a project in mind or need equipment for hire? Reach out to us today."
        />

        <div className="contact-grid">
          {/* ---------- LEFT: CONTACT INFO + MAP ---------- */}
          <div className="contact-info">
            <div className="contact-info-card">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Office Address</h4>
                <p>Block 2, Ewekoro, Ogun State, Nigeria</p>
              </div>
            </div>

            <div className="contact-info-card">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Phone Number</h4>
                <p>+234 814 693 4439</p>
              </div>
            </div>

            <div className="contact-info-card">
              <span className="contact-icon">✉️</span>
              <div>
                <h4>Email Address</h4>
                <p>Tolanikazeem7@gmail.com</p>
              </div>
            </div>

            {/* ---------- GOOGLE MAPS PLACEHOLDER ---------- */}
            {/* This is a placeholder map of Abuja. Replace the "src" link
                with your real Google Maps embed link when ready. */}
            <div className="map-wrap">
              <iframe
                title="Kinstol Equipment Office Location"
                src="https://www.google.com/maps?q=Block+2,+Ewekoro,+Ogun+State,+Nigeria&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* ---------- RIGHT: CONTACT FORM ---------- */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Us A Message</h3>

            {/* Success message - only shows when isSubmitted is true */}
            {isSubmitted && (
              <div className="form-success">
                ✅ Thank you! Your message has been received. We'll get back to
                you shortly.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your project or enquiry..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <Button text="Send Message" variant="primary" type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
