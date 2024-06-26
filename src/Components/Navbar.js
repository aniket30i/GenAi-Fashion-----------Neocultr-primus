import React, { useEffect } from "react";
import logo from "../logo_n.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    const button = document.getElementById("scrollButton");
    if (button) {
      button.addEventListener("click", () => {
        console.log("click");
        scrollToSection("socials");
      });
    }
  }, []);

  return (
    <div className="nav-bar">
      <nav className="elems">
        <img className="logo" src={logo} alt="logo-here" />
        <p className="menu-items">
          <Link to="/Create" className="menu-item-btn1">
            Create
          </Link>
          <span className="menu-item-btn2" id="scrollButton">
            Socials
          </span>
          <h3>Menu</h3>
        </p>
      </nav>
    </div>
  );
}

export default Navbar;
