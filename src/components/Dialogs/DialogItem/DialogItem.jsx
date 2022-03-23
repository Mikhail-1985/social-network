import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

const setActive = ({ isActive }) => isActive ? styles.active : "";

const DialogItem = (props) => {

  return (
    <div className={styles.dialogs__item}>      
      <NavLink to={props.id.toString()} className={setActive}>
        {props.name}
      </NavLink>
    </div>
  );
};


export default DialogItem;
