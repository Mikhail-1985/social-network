import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";


const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component="textarea" name="newMessageBody"
        placeholder="Enter your message"
      ></Field>

      <button>SEND</button>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "message",
})(AddMessageForm);

const Dialogs = (props) => {

  const addNewMessage = (formData) => {
    props.sendMessage(formData.newMessageBody);
  };
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message id={m.id} key={m.id} message={m.message} />
  ));

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
        <AddMessageReduxForm onSubmit={addNewMessage} />   
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
