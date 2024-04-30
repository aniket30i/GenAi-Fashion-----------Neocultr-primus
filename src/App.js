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
      <div className="footer">
        <h1>UNITE</h1>
        <div className="footer-txts">
          <footer>
            <div class="footer-content">
              <h4>Instagram</h4>
              <h4>X (twitter)</h4>
              <h4>
                Local time:
                <h4 id="current-time">12:30:45</h4>
              </h4>
              <h4>&copy; 2024 Aniket Saha</h4>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

function TimeNow() {
  var now = new Date();
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  var currentTime = hours + ":" + minutes + ":" + seconds;
  document.getElementById("current-time").textContent = currentTime;
}
setInterval(TimeNow, 1000);
TimeNow();

export default App;
