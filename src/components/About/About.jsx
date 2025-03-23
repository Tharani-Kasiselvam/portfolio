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
            <img src='../../uiIcon.png' alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Production Support</h3>
              <p>
              Specializing in Incident Management and Problem resolution.
              Primarily focused on Low Priority Incident reduction. <br/>Configured the application's KPI in the Geneos ITRS Monitoring Tool to
              maintain application stability. <br/>Authored technical documentation, including Standard Operating Procedures, user manuals, and maintenance guides.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src='../../cursorIcon.png' alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Interested in building responsive and optimized websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src='../../serverIcon.png' alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Interested in developing fast and optimised back-end systems and Rest APIs.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
