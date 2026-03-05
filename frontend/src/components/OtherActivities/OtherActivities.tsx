import React from "react";
import "./OtherActivities.scss";
import performance_pic from "../../assets/music_box_fa.jpg";

const OtherActivities: React.FC = () => {
  return (
    <div className="other">
      <div className="other__inner">
        {/* Left: content */}
        <div className="other__content">
          <h2 className="other__heading">
            Other Activities<span className="other__dot">.</span>
          </h2>

          <div className="other__entry">
            <div className="other__entry-header">
              <span className="other__role">Musician & Composer</span>
              <span className="other__meta">
                Group & Independent Projects · 2016 – Present
              </span>
            </div>

            <ul className="other__bullets">
              <li>
                Contributed by composing the original score to the documentary{" "}
                <em>"Sou"</em> (Dir. Miguel Saraiva Braga), which won{" "}
                <strong>1st Place for Best Short-Film Documentary</strong> at
                the{" "}
                <a
                  href="https://academiadecinema.pt/vencedores-premio-sophia-estudante-2017/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="other__link"
                >
                  <strong>Prémio Sophia Estudante 2017</strong>
                </a>{" "}
                (Academia Portuguesa de Cinema).
              </li>
              <li>
                Founding member of an independent musical project with one EP
                and one album released.
              </li>
            </ul>
          </div>
        </div>

        {/* Right: photo */}
        <div className="other__photo-wrapper">
          <img
            src={performance_pic}
            alt="Filipe performing"
            className="other__photo"
          />
        </div>
      </div>
    </div>
  );
};

export default OtherActivities;
