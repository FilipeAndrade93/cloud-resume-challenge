import React from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import TechStack from "./components/Techstack/Techstack";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";

const App: React.FC = () => {
  return (
    <main className="app-root">
      <Navbar />
      {/*Hero Section*/}
      <section className="hero-section" id="home">
        <div className="container">
          <Hero />
        </div>
        <TechStack />
      </section>
      <section className="about-section" id="about">
        <div className="container">
          <About />
        </div>
      </section>
      <section className="experience-section" id="experience">
        <div className="container"></div>
      </section>
    </main>
  );
};

export default App;
