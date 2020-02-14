import React from "react";
import styles from "./App.module.scss";
import screenshot from "./screenshot.png";

import {
  FaMusic,
  FaReact,
  FaApple,
  FaWindows,
  FaRainbow
} from "react-icons/fa";

const App = () => {
  return (
    <div className={styles.App}>
      <h1>Tinged.</h1>

      <p>A media player with a modern and beautiful interface</p>

      <ul className={styles.List}>
        <li>
          <FaMusic /> Enjoy your favorite hits
        </li>
        <li>
          <FaRainbow /> Using an neat and clutter-free UI
        </li>
        <li>
          <FaApple />
           <FaWindows /> On any platforms
        </li>

        <li>
          <FaReact /> Built with React and TypeScript
        </li>
      </ul>

      <section className={styles.ButtonGroup}>
        <a className={styles.Button}>
          <FaApple />
        </a>
        <a className={styles.Button}>
          <FaWindows />
        </a>
      </section>
    </div>
  );
};

export default App;
