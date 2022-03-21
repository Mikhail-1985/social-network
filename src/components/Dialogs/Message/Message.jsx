import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./Message.module.css";

// const setActive = ({ isActive }) => (isActive ? styles.active : "");

const Message = (props) => {
  return <div className={styles.messages__item}>{props.message}</div>;
};

export default Message;
