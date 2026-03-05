import React from "react";
import "./Skills.scss";

interface SkillCategory {
  title: string;
  items: string[];
}

const skills: SkillCategory[] = [
  {
    title: "Backend & Architecture",
    items: [
      "Java 17",
      "Spring Boot 3.3",
      "Spring Data JPA",
      "Microservices",
      "REST APIs",
      "JDBC",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Redux",
      "Electron",
      "Mantine",
      "Bootstrap",
      "Axios",
      "HTML5",
      "SCSS",
    ],
  },
  {
    title: "Tools & DevOps",
    items: ["Git", "Maven", "Gradle", "Sentry", "Apache POI", "Apache PDFBox"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Languages",
    items: [
      "Portuguese - Native",
      "English - Fluent",
      "Spanish - Intermediate",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <div className="skills__header">
        <h2 className="skills__heading">
          Skills<span className="skills__dot">.</span>
        </h2>
        <p className="skills__subheading">
          Technologies and tools I've worked with across 5 years of professional
          development.
        </p>
      </div>

      <div className="skills__grid">
        {skills.map((category) => (
          <div className="skills__card" key={category.title}>
            <h3 className="skills__card-title">{category.title}</h3>
            <ul className="skills__list">
              {category.items.map((item) => (
                <li key={item} className="skills__item">
                  <span className="skills__item-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
