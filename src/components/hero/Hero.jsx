import React from "react";
import "./HeroStyles.scss";
import HeroImg from "../../assets/img-hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <img
          className="hero__img"
          src={HeroImg}
          alt="img"
          style={{ width: "100%", height: "690px" }}
        />
      </div>
    </div>
  );
};

export default Hero;
