import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dilogs-reducer";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message id={m.id} message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

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
