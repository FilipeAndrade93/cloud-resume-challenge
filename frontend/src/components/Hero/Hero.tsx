import React from "react";
import profile_pic from "../../assets/web_cv_profile_pic_cut.webp";
import "./Hero.scss";

const Hero: React.FC = () => {
  const handleContactScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.getElementById("contacts");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-content">
      <div className="hero-text">
        <h1 className="hero-name">Filipe Andrade</h1>
        <h2 className="hero-role">Fullstack Developer</h2>

        <div className="hero-actions">
          <a
            href="/Filipe_Andrade_Fullstack_Engineer.pdf"
            download="Filipe_Andrade_Fullstack_Engineer.pdf"
            className="btn btn--primary"
          >
            Download CV
          </a>
          <button className="btn btn--secondary" onClick={handleContactScroll}>
            Let's Talk
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-aura">
          <div className="hero-aura__inner" />
        </div>
        <img src={profile_pic} alt="Filipe Andrade" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
