import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I build responsive, user-friendly web applications using modern frameworks and technologies with a strong focus on performance and accessiblity.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/uiIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>UX/UI Designer</h3>
              <p>
                I design intuitive, aesthetically pleasing interfaces that enhance user experiences by improving usability and accessiblity.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>UX Researcher</h3>
              <p>
                I use research-driven insights to improve user experiences and create informed design decisions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
