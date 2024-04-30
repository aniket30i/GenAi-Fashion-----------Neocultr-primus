import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Vibey from "./Components/Vibey";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Vibey />
      <div className="description-p2"></div>
      <div className="mid-hero"></div>
      <div className="running-img"></div>
      <div className="end-card"></div>
    </div>
  );
}

export default App;
