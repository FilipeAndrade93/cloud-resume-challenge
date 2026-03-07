import React, { useState } from "react";
import "./Experience.scss";

interface Project {
  title: string;
  bullets: string[];
  tags: string[];
}

interface Role {
  title: string;
  period: string;
  projects: Project[];
}

interface ExperienceEntry {
  company: string;
  location: string;
  url?: string;
  roles: Role[];
}

const experiences: ExperienceEntry[] = [
  {
    company: "Zarph - Payment & Cash Solutions",
    location: "Full-remote, Hybrid & Lisbon, Portugal",
    url: "https://www.zarph.com",
    roles: [
      {
        title: "Fullstack Software Engineer",
        period: "Aug 2021 - Present",
        projects: [
          {
            title: "Zarph Payment System V2",
            bullets: [
              "Engineered a Spring Boot 3.3 / Java 17 microservices architecture with dedicated services for authentication, reporting, and equipment operations.",
              "Built multi-format report generation (PDF/Excel) using Apache PDFBox and POI for complex localized transaction histories and financial closures.",
              "Extended REST API endpoints with RBAC and complex query filtering using hand-crafted JDBC queries against PostgreSQL.",
            ],
            tags: [
              "Java 17",
              "Spring Boot",
              "Microservices",
              "PostgreSQL",
              "RBAC",
              "JDBC",
            ],
          },
          {
            title:
              "CTT (Portuguese National Postal Service) Self-Service Shipping Kiosks",
            bullets: [
              "Developed production postal kiosks, delivering the full shipping lifecycle from package drop-off to label printing and invoice generation.",
              "Built a custom React/TypeScript component library from scratch with SCSS, including a full virtual keyboard with cursor tracking and diacritical support.",
              "Designed a complex 8-state payment processing machine and real-time validation forms integrated via Redux and React Context.",
            ],
            tags: ["React", "TypeScript", "Redux", "SCSS", "State Machines"],
          },
          {
            title: "Donation & Vending Invert Machines",
            bullets: [
              "Built a 13+ view state machine for cash/card donation processing using Electron and Redux, managing intricate user flows and real-time hardware polling.",
              "Implemented custom cancellable task schedulers and Promise.allSettled to manage parallel API requests and minimise re-renders.",
              "Developed a proxy-based language handler for PT/EN/ES localisation and integrated Sentry for structured error logging.",
            ],
            tags: ["Electron", "Redux", "React Context", "Sentry", "i18n"],
          },
        ],
      },
      {
        title: "Software Engineer Intern",
        period: "May 2021 - Jul 2021",
        projects: [
          {
            title: "Internship Projects",
            bullets: [
              "Engineered a dual-interface Java application (Swing GUI & CLI) for direct communication with proprietary treasury management hardware.",
              "Developed a Spring Boot REST API integrated with a React CRM platform to modernise internal equipment management and data visualisation.",
              "Architected a web-based automation platform using Spring Boot and React TypeScript to streamline internal corporate procedures.",
            ],
            tags: ["Java", "Spring Boot", "React", "TypeScript", "Swing"],
          },
        ],
      },
    ],
  },
  {
    company: "Professional Background",
    location: "Highlands, North Carolina, USA & Lisbon, Portugal",
    roles: [
      {
        title: "Luxury Hospitality - Various Roles",
        period: "Aug 2014 - Oct 2020",
        projects: [
          {
            title:
              "Four Seasons Ritz Lisbon, Old Edwards Inn & Spa, Pestana Palace Lisboa & Corpo Santo Hotel",
            bullets: [
              "Developed high-level stakeholder satisfaction and crisis-resolution skills within renowned 5-star organisations.",
              "Leveraged the discipline of luxury service environments to build a foundation for high-pressure systems engineering and client-first software delivery.",
            ],
            tags: ["Teamwork", "Client Relations", "Crisis Resolution"],
          },
        ],
      },
    ],
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`project-card ${open ? "project-card--open" : ""}`}>
      <button className="project-card__header" onClick={() => setOpen(!open)}>
        <span className="project-card__title">{project.title}</span>
        <span className="project-card__chevron">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="project-card__body">
          <ul className="project-card__bullets">
            {project.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-card__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <div className="experience">
      <h2 className="experience__heading">
        Experience<span className="experience__dot">.</span>
      </h2>

      <div className="experience__timeline">
        {experiences.map((entry, ei) => (
          <div className="experience__entry" key={ei}>
            {/* Timeline dot */}
            <div className="experience__marker">
              <div className="experience__dot-outer">
                <div className="experience__dot-inner" />
              </div>
              {ei < experiences.length - 1 && (
                <div className="experience__line" />
              )}
            </div>

            {/* Content */}
            <div className="experience__body">
              <div className="experience__company-row">
                <div>
                  {entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience__company-link"
                    >
                      {entry.company}
                    </a>
                  ) : (
                    <h3 className="experience__company">{entry.company}</h3>
                  )}
                  <span className="experience__location">{entry.location}</span>
                </div>
              </div>

              {entry.roles.map((role, ri) => (
                <div className="experience__role" key={ri}>
                  <div className="experience__role-header">
                    <span className="experience__role-title">{role.title}</span>
                    <span className="experience__period">{role.period}</span>
                  </div>

                  <div className="experience__projects">
                    {role.projects.map((project, pi) => (
                      <ProjectCard key={pi} project={project} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
