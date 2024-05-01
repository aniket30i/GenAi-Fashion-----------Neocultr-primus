import React from "react";
import logo from "../logo_n.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <nav className="elems">
        <img className="logo" src={logo} alt="logo-here" />
        <p className="menu-items">
          <Link to="/Create" className="menu-item-btn1">
            Create
          </Link>
          <Link className="menu-item-btn2">Credits</Link>
        </p>
      </nav>
    </div>
  );
}

export default Navbar;
