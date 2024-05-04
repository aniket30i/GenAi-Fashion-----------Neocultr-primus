import React from "react";
import Navbar2 from "./Navbar2";
import styles from "./Create.module.css";
import gen from "../ideas/window.jpg";
import Genbox from "./Genbox";
import { useState } from "react";
import Loader from "./Loader";

function Create() {
  const [render, setRender] = useState(gen);
  const [isLoader, setLoader] = useState(false);
  const [isNewImage, setNewImage] = useState(false);

  const inputHandler = (val) => {
    async function query(data) {
      setLoader(true);
      try {
        const apiKey = process.env.REACT_APP_HUGGING_FACE_API_KEY;
        const response = await fetch(
          "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
            },
            method: "POST",
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          throw new Error(`Error fetching ! status: ${response.status}`);
        }
        const result = await response.blob();
        return result;
      } catch (error) {
        setNewImage(false);
        console.error("Error fetching data", error);
        throw error;
      } finally {
        setLoader(false);
      }
    }

    async function displayGeneratedImage() {
      try {
        const response = await query({ inputs: val });
        const imageUrl = URL.createObjectURL(response);
        setRender(imageUrl);
        setNewImage(true);
      } catch (error) {
        console.error("Error displaying image :", error);
      }
    }

    displayGeneratedImage();
  };

  return (
    <div className={styles.genPage}>
      <Navbar2 />
      <div className={styles.container}>
        <div className={styles.windowDiv}>
          <img
            className={`${styles.winImg} ${isLoader ? styles["bg-dark"] : ""}`}
            src={render}
            alt="xyz"
          />
          {isLoader && (
            <div className={styles["loader-div"]}>
              <Loader />
            </div>
          )}
        </div>
        <Genbox
          inputHandler={inputHandler}
          isLoader={isLoader}
          isNewImage={isNewImage}
          imgUrl={render}
        />
      </div>
    </div>
  );
}

export default Create;
