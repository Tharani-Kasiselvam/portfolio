import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hi, I'm Tharani</h2>
        <p className={styles.description}>
          I am working as a Production Support Manager for last 10 years with Java, Linux, SQL skills and handled Incident Tickets and Change Management. 
          <br />
          I'm a Good Debugger and Troubleshooter. <br />
          I have Problem solving skills to manage BAU and Escalations.
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
