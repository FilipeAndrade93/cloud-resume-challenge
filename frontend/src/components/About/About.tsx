import React from "react";
import "./About.scss";

const stats = [
  { value: "5", suffix: "+", label: "Years of\nExperience" },
  { value: "2", suffix: "", label: "Core\nTech Stacks" },
  { value: "100", suffix: "%", label: "Reliability\nFocused" },
  { value: "Portugal", suffix: "", label: "Location" },
];

const pillars = [
  {
    title: "Fullstack Development",
    desc: "Java & Spring Boot on the backend, React & TypeScript on the front",
  },
  {
    title: "Legacy Integration",
    desc: "Expert at introducing new features into high-stakes, established infrastructures",
  },
  {
    title: "User-First Mindset",
    desc: "I build for the user, prioritising reliability and rapid problem-solving above all else",
  },
];

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about__container">
        {/* Left: pillars */}
        <div className="about__pillars">
          {pillars.map((p, i) => (
            <div className="about__pillar" key={i}>
              <div className="about__pillar-dot" />
              <div className="about__pillar-body">
                <h3 className="about__pillar-title">{p.title}</h3>
                <p className="about__pillar-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: text + stats */}
        <div className="about__content">
          <h2 className="about__heading">
            About me<span className="about__dot">.</span>
          </h2>
          <p className="about__bio">
            Fullstack Developer with 5 years of experience building production
            systems in Java and React. Musician and former hotelier, bringing a
            creative perspective and a service-first mentality to everything I
            build. I specialise in integrating new features into complex,
            established infrastructures without disrupting what already works.
          </p>

          <div className="about__stats">
            {stats.map(({ value, suffix, label }) => (
              <div className="about__stat" key={label}>
                <div className="about__stat-number">
                  {value}
                  <span className="about__stat-suffix">{suffix}</span>
                </div>
                <div className="about__stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
