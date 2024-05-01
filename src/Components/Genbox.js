import React from "react";
import styles from "./Genbox.module.css";

function Genbox() {
  return (
    <div className={styles.promptContainer}>
      <form onSubmit={() => false}>
        <div className={styles.nameBox}>
          <input
            type="text"
            placeholder="Your name?"
            id="name"
            style={{ fontSize: "16px", fontFamily: "Roboto" }}
          />
          <label htmlFor="name">ABC</label>
        </div>

        {/* <div className={styles.promptBox}>
          <input
            type="text"
            placeholder="Put your vision in words!"
            id="prompt"
            style={{ fontSize: "16px", fontFamily: "Roboto" }}
          />
          <label htmlFor="prompt">DEF</label>
        </div> */}

        <div className={styles.promptBox}>
          <textarea
            placeholder="Put down your vision in words!"
            id="message"
            style={{
              fontSize: "16px",
              fontFamily: "Roboto",
              verticalAlign: "top",
            }}
          ></textarea>
          <label htmlFor="message">Message</label>
        </div>

        <button className={styles.generateBtn}>Generate</button>
      </form>
    </div>
  );
}

export default Genbox;
