import React, { useState } from "react";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        {/* <img src='../../assets/nav/menuIcon.png'/> */}
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? '../../closeIcon.png'
              : '../../menuIcon.png'
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        /> 
        {console.log(menuOpen)}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};