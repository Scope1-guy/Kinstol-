import React from "react";
import "./App.css";

// ---------- Importing every section component ----------
// Each section of the website lives in its own folder inside
// src/components. This keeps the project organized: if you want
// to edit the Hero section, you know exactly where to look.
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Equipment from "./components/Equipment/Equipment";
import Stats from "./components/Stats/Stats";
import Testimonials from "./components/Testimonials/Testimonials";
import Sponsorship from "./components/Sponsorship/Sponsorship";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// =========================================================
// APP COMPONENT
// This is the MAIN component of the whole website.
// It simply places every section in the order they should
// appear on the page, from top to bottom.
//
// Think of this file as the "table of contents" for the website —
// it doesn't contain much design/logic itself, it just arranges
// all the other components together.
// =========================================================
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Equipment />
        <Stats />
        <Testimonials />
        <Sponsorship />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
