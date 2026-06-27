import React from "react";

// =========================================================
// SECTION TITLE COMPONENT
// A reusable heading block used at the top of every section.
// It shows a small gold "tag", a big title, and an optional description.
//
// PROPS:
// - tag         : small label above the title (e.g. "OUR SERVICES")
// - title       : the main heading text
// - description : optional paragraph under the title
// - light       : if true, uses white text (for dark backgrounds)
// =========================================================
const SectionTitle = ({ tag, title, description, light = false }) => {
  return (
    <div className="section-header">
      <span className="section-tag">{tag}</span>
      <h2 style={light ? { color: "#ffffff" } : undefined}>{title}</h2>
      {description && (
        <p style={light ? { color: "rgba(255,255,255,0.8)" } : undefined}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
