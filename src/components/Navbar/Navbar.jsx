import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const setActive = ({isActive}) => isActive ? styles.active : ''; 

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to="/profile" className={setActive}>Profile</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink className={setActive} to="/dialogs/">Messages</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink className={setActive} to="/news">News</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/music" className={setActive}>Music</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings" className={setActive}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
