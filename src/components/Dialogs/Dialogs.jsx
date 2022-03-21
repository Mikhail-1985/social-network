import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

// const setActive = ({ isActive }) => (isActive ? styles.active : "");

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Михаил Олегович" },
    { id: 2, name: "Екатерина Александровна" },
    { id: 3, name: "Димас" },
  ];

  let messages = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Здарова" },
    { id: 3, message: "Как сам?" },
  ];

  let dialogElements = dialogs.map((data) => (
    <DialogItem name={data.name} id={data.id} />
  ));
  let messagesElements = messages.map((data) => (
    <Message id={data.id} message={data.message} />
  ));

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        Dialogs:
        {dialogElements}
      </div>
      <div className={styles.messages}>
        Messages:
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
