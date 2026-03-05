import React from "react";
import "./Education.scss";

interface EducationEntry {
  institution: string;
  location: string;
  period: string;
  degree: string;
  bullets: string[];
  url?: string;
}

const education: EducationEntry[] = [
  {
    institution: "Programa UpSkill – Digital Skills & Jobs",
    location: "Lisbon, Portugal",
    period: "2020 – 2021",
    degree: "Java Development Specialization",
    bullets: [
      "Completed an intensive program focused on algorithmic problem solving, Object-Oriented Programming (OOP) in Java, and relational database modelling/querying in collaboration with ISCTE.",
      "Managed the full software development lifecycle (SDLC) from requirements engineering to implementation in Information Systems.",
    ],
    url: "https://www.upskill.pt/",
  },
  {
    institution: "Le Wagon WebDev Bootcamp",
    location: "Lisbon, Portugal",
    period: "2017",
    degree: "Full Stack Web Development",
    bullets: [
      "9-week intensive coding bootcamp learning Ruby on Rails, JavaScript, HTML, CSS, and SQL.",
      "Developed and shipped a production-ready web application.",
    ],
    url: "https://www.lewagon.com",
  },
  {
    institution:
      "Restart – Instituto de Criatividade, Artes e Novas Tecnologias",
    location: "Lisbon, Portugal",
    period: "2016 – 2017",
    degree: "Music Theory & Composition",
    bullets: [
      "Completed a 9-month professional program focused on commercial composition, digital audio workstations, and scoring for visual media.",
    ],
    url: "https://www.restart.pt",
  },
  {
    institution: "Swiss Hotel Management School",
    location: "Caux, Switzerland",
    period: "2013 – 2016",
    degree: "Bachelor of Arts (B.A.) in International Hospitality Management",
    bullets: [
      "In partnership with University of Derby.",
      "Served as Student Ambassador Forum Member.",
    ],
    url: "https://www.shms.com",
  },
];

const Education: React.FC = () => {
  return (
    <div className="education">
      <h2 className="education__heading">
        Education<span className="education__dot">.</span>
      </h2>

      <div className="education__timeline">
        {education.map((entry, i) => (
          <div className="education__entry" key={i}>
            {/* Marker */}
            <div className="education__marker">
              <div className="education__dot-outer">
                <div className="education__dot-inner" />
              </div>
              {i < education.length - 1 && <div className="education__line" />}
            </div>

            {/* Content */}
            <div className="education__body">
              <div className="education__header">
                <div>
                  {entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="education__institution-link"
                    >
                      {entry.institution}
                    </a>
                  ) : (
                    <span className="education__institution">
                      {entry.institution}
                    </span>
                  )}
                  <span className="education__location">{entry.location}</span>
                </div>
                <span className="education__period">{entry.period}</span>
              </div>

              <p className="education__degree">{entry.degree}</p>

              <ul className="education__bullets">
                {entry.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
