import React from "react";
import logo from "../logo_n.jpg";

function Navbar() {
  return (
    <div className="nav-bar">
      <nav className="elems">
        <img className="logo" src={logo} alt="logo-here" />
        <p className="menu-items">
          <p>Credits</p>
          <p>Create</p>
        </p>
      </nav>
    </div>
  );
}

export default Navbar;
