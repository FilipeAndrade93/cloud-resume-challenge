import React from "react";
import profile_pic from "../../assets/web_cv_profile_pic_cut.webp";
import "./Hero.scss";

const Hero: React.FC = () => {
  return (
    <div className="hero-content">
      <div className="hero-text">
        <h1 className="hero-name">Filipe Andrade</h1>
        <h2 className="hero-role">Fullstack Developer</h2>

        <div className="hero-actions">
          <button className="btn btn--primary">Download CV</button>
          <button className="btn btn--secondary">Let's Talk</button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-aura"></div>
        <img src={profile_pic} alt="Filipe Andrade" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
