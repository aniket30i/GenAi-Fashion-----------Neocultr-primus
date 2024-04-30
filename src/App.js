import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Vibey from "./Components/Vibey";
import hdpic1 from "./aitubo.jpg";
import hdpic2 from "./aitubo-2.jpg";
import Running from "./Components/Running";

function App() {
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

      <div className="end-card"></div>
    </div>
  );
}

export default App;
