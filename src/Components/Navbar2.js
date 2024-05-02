import React from "react";
import logo from "../logo_n.jpg";
import { Link } from "react-router-dom";
import styles from "./Navbar2.module.css";
import { useState } from "react";

function Navbar2() {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
    alert("Coming Soon ! Stay in touch.");
  };

  return (
    <div className={styles.navbar}>
      <nav className="elems">
        <Link to="/" className={styles.logoLink}>
          <img className={styles.logop2} src={logo} alt="logo-here" />
        </Link>
        <span className={styles.commBtn} onClick={handleButtonClick}>
          Community
        </span>
      </nav>
    </div>
  );
}

export default Navbar2;
