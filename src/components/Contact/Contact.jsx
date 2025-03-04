import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src='../../assets/contact/emailIcon.png' alt="Email icon" />
          <a href="mailto:sherley.tharani@gmail.com">sherley.tharani@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src='../../assets/contact/linkedinIcon.png'
            alt="LinkedIn icon"
          />
          <a href="www.linkedin.com/in/tharani-k-abb1161a3">www.linkedin.com/in/tharani-k-abb1161a3</a>
        </li>
        <li className={styles.link}>
          <img src='../../assets/contact/githubIcon.png' alt="Github icon" />
          <a href="https://github.com/Tharani-Kasiselvam">https://github.com/Tharani-Kasiselvam</a>
        </li>
      </ul>
    </footer>
  );
};
