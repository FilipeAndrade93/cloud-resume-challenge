import React from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import TechStack from "./components/Techstack/Techstack";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import OtherActivities from "./components/OtherActivities/OtherActivities";
import Contacts from "./components/Contacts/Contacts";

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
        <div className="container">
          <Experience />
        </div>
      </section>
      <section className="education-section" id="education">
        <div className="container">
          <Education />
        </div>
      </section>
      <section className="skills-section" id="skills">
        <div className="container">
          <Skills />
        </div>
      </section>
      <section className="other-activities-section" id="other-activities">
        <div className="container">
          <OtherActivities />
        </div>
      </section>
      <section className="contacts-section" id="contacts">
        <div className="container">
          <Contacts />
        </div>
      </section>
    </main>
  );
};

export default App;
