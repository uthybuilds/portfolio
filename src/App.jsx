import { useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Projects />
      <TechStack />
      <Footer />
    </>
  );
}

export default App;
