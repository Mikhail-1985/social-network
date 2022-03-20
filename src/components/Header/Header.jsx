import React from "react";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ZChWdThzVXo5Mp6SAv7sL67UqRzg_teuuA&usqp=CAU"
        alt="hi"
      />
    </header>
  );
};

export default Header;
