import { useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import About from "./components/About";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <ContactSection />
      <TechStack />
      <Footer />
    </>
  );
}

export default App;
