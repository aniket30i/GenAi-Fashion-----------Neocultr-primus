import React from "react";
import hdpic from "../aitubo.jpg";

function Hero() {
  return (
    <div className="hero-section">
      <img className="hero-img" src={hdpic} alt="hero-img" />
      <h1>
        <span>NEOCULTR</span>
        <span>PRIMUS</span>
      </h1>
    </div>
  );
}

export default Hero;
