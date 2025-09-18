import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Ascot gatekeep pug banjo. Gochujang keffiyeh raclette, ennui pabst
            letterpress drinking vinegar hoodie art party church-key sus vinyl.
            Farm-to-table leggings sriracha copper mug adaptogen. Unicorn ramps
            master cleanse skateboard, fashion axe gentrify squid flexitarian
            green juice lo-fi shaman tumeric tilde actually.{" "}
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
