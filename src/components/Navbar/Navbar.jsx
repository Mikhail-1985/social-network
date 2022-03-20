import React from "react";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.item} ${styles.active}`}>
        <a href="#s">Profile</a>
      </div>
      <div className={styles.item}>
        <a href="#s">Messages</a>
      </div>
      <div className={styles.item}>
        <a href="#s">News</a>
      </div>
      <div className={styles.item}>
        <a href="#s">Music</a>
      </div>
      <div className={styles.item}>
        <a href="#s">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
