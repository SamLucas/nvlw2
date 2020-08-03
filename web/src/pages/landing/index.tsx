import React from "react";

import Logo from "../../assets/images/logo.svg";
import LogoLanding from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClasssesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcons from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

export default function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={LogoLanding} alt="" className="hero-image" />

        <div className="button-container">
          <a href="" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>
          <a href="" className="give-classes">
            <img src={giveClasssesIcon} alt="Dar aulas" />
            Dar aulas
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões realizadas
          <img src={purpleHeartIcons} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}
