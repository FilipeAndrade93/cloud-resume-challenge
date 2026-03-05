import React from "react";
import "./Techstack.scss";

const techs = ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL"];

const TechStack: React.FC = () => {
  return (
    <div className="tech-stack">
      {techs.map((tech, i) => (
        <React.Fragment key={tech}>
          <span className="tech-stack__item">{tech}</span>
          {i < techs.length - 1 && <span className="tech-stack__sep" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TechStack;
