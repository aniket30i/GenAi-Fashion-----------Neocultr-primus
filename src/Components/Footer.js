import React from "react";

function Footer() {
  return (
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
  );
}

// function TimeNow() {
//   var now = new Date();
//   var now = new Date();
//   var hours = now.getHours();
//   var minutes = now.getMinutes();
//   var seconds = now.getSeconds();

//   hours = hours < 10 ? "0" + hours : hours;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;
//   var currentTime = hours + ":" + minutes + ":" + seconds;
//   document.getElementById("current-time").textContent = currentTime;
// }
// setInterval(TimeNow, 1000);
// TimeNow();

export default Footer;
