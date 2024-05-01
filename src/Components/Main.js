import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Vibey from "./Vibey";
import hdpic1 from "../aitubo.jpg";
import hdpic2 from "../aitubo-2.jpg";
import Running from "./Running";
import Footer from "./Footer";

function Main() {
  return (
    <div className="main">
      <Navbar />
      <Hero>
        <img className="hero-img" src={hdpic1} alt="hero-img" />
        <h1 className="view-1">
          <span>NEOCULTR</span>
          <span>FAZHION</span>
        </h1>
      </Hero>
      <Vibey />
      <Hero>
        <img className="hero-img-2" src={hdpic2} alt="hero-img" />
        <h1 className="view-2">
          <span>YOUR IMAGINATION</span>
          <span className="canvas">ON OUR CANVAS</span>
        </h1>
      </Hero>
      <Running />
      <Footer />
    </div>
  );
}

export default Main;
