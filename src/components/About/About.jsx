import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src = '../../aboutImage.png'
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src='../../cursorIcon.png' alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a Frontend Developer with 1 year experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src='../../serverIcon.png' alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src='../../uiIcon.png' alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Production Support</h3>
              <p>
                I have experience in supporting Standalone and Web based applications. I also designed and supported Camunda workflows. 
                I primarily focused on Incident Management, Change Management, Problem Management, LPI reduction
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
