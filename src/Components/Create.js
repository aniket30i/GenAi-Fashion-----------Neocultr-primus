import React from "react";
import Navbar2 from "./Navbar2";
import styles from "./Create.module.css";
import gen from "../ideas/window.jpg";
import Genbox from "./Genbox";
function Create() {
  return (
    <div className={styles.genPage}>
      <Navbar2 />
      <div className={styles.container}>
        <div className={styles.windowDiv}>
          <img className={styles.winImg} src={gen} alt="xyz" />
        </div>
        <Genbox />
      </div>
    </div>
  );
}

export default Create;
