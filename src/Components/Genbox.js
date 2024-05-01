import React from "react";
import styles from "./Genbox.module.css";
import { useState } from "react";

function Genbox({ inputHandler, isLoader, isNewImage, imgUrl }) {
  const [prompt, setPrompt] = useState("");

  const handlePromptInput = (e) => {
    setPrompt(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    inputHandler(prompt);
  };

  return (
    <div className={styles.promptContainer}>
      <form onSubmit={submitHandler}>
        <div className={styles.nameBox}>
          <input
            type="text"
            placeholder="Your name?"
            id="name"
            style={{ fontSize: "16px", fontFamily: "Roboto" }}
          />
          <label htmlFor="name"></label>
        </div>

        <div className={styles.promptBox}>
          <textarea
            placeholder="Put down your vision in words!"
            id="message-prompt"
            onChange={handlePromptInput}
            value={prompt}
            style={{
              fontSize: "16px",
              fontFamily: "Roboto",
              verticalAlign: "top",
            }}
          ></textarea>
          <label htmlFor="Prompt">Prompt</label>
        </div>

        <button
          className={`${styles.generateBtn} ${
            isLoader ? styles["disable"] : ""
          } `}
          type="submit"
          disabled={isLoader}
        >
          Generate
        </button>
      </form>
      {isNewImage && (
        <a href={imgUrl} download={imgUrl} className={styles["download-btn"]}>
          Download
        </a>
      )}
    </div>
  );
}

export default Genbox;
