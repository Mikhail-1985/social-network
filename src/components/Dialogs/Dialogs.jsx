import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message id={m.id} key={m.id} message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.updateNewMessageBody(body);
  };

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  if (props.isAuth === false) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        Dialogs:
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        Messages:
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
