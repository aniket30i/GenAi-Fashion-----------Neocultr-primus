import React from "react";
import logo from "../logo_n.jpg";
import { Link } from "react-router-dom";
import styles from "./Navbar2.module.css";

function Navbar2() {
  return (
    <div className={styles.navbar}>
      <nav className="elems">
        <Link to="/" className={styles.logoLink}>
          <img className={styles.logop2} src={logo} alt="logo-here" />
        </Link>
        <Link className={styles.commBtn}>Community</Link>
      </nav>
    </div>
  );
}

export default Navbar2;
