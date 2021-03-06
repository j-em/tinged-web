import React from "react";
import {
  FaApple,
  FaMusic,
  FaNodeJs,
  FaRainbow,
  FaReact,
  FaWindows
} from "react-icons/fa";

import styles from "./App.module.scss";
import screenshot from "./screenshot.png";

const App = () => {
  return (
    <div className={styles.App}>
      <h1 className={styles.Heading}>Tinged.</h1>
      <p className={styles.Text}>A sleek and intuitive media player</p>
      <ul className={styles.List}>
        <li>
          <FaMusic /> Enjoy your favorite hits
        </li>
        <li>
          <FaRainbow /> Using a neat and clutter-free UI
        </li>
        <li>
          <FaApple />
           <FaWindows /> On your favorite platform
        </li>

        <li>
          <FaReact /> <FaNodeJs /> Built with Electron, React and TypeScript
        </li>
      </ul>
      <section className={styles.Img}>
        <img src={screenshot} alt="screenshot" />
      </section>

      <section className={styles.ButtonGroup}>
        <a
          className={styles.Button}
          href={
            "https://github.com/j-em/tinged/releases/download/v0.2.1/tinged-darwin-x64-0.2.1.zip"
          }
        >
          <FaApple />
        </a>
        <a  
          className={styles.Button}
          href={
            "https://github.com/j-em/tinged/releases/download/v0.2.1/Tinged-0.2.1.Setup.exe"
          }
        >
          <FaWindows fontSize={"inherit"} />
        </a>
      </section>
    </div>
  );
};

export default App;
