import React from "react";
import logo from "../logo_n.jpg";

function Navbar() {
  return (
    <div className="nav-bar">
      <nav className="elems">
        <img className="logo" src={logo} alt="logo-here" />
        <p className="menu-items">
          <div className="menu-item-btn1">Create</div>
          <div className="menu-item-btn2">Credits</div>
        </p>
      </nav>
    </div>
  );
}

export default Navbar;
