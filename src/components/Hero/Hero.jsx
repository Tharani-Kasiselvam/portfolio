import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hi, I'm Tharani</h2>
        <p className={styles.description}>
        Results-driven Technical Manager, specializing in Incident Management
        and Problem resolution. Demonstrated success in leading process
        enhancements that significantly improved customer satisfaction and
        operational efficiency. 
        <br /><br />
        Skilled in mentoring teams and delivering technical
        guidance, effectively driving solutions in fast-paced environments.
          </p>
          
          <br />
        <p className={styles.description}>
          I'm a Full-Stack Developer with 1 year of experience using React and NodeJS. </p>
          
          <br/>
          <p>
          Reach out if you'd like to learn more!
        </p>
        <br />
        <a href="mailto:sherley.tharani@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src='../../heroImage.png'
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
