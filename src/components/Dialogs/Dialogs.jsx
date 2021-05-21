import classes from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import SendMessageContainer from "./SendMessages/SendMessageContainer";

const Dialogs = (props) => {
  let dialogElement = props.dialogData.map((el) => (
    <DialogItem key={el.id} name={el.name} id={el.id} />
  ));
  let messageElement = props.messageData.map((el) => (
    <Message key={el.id} message={el.message} id={el.id} />
  ));
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.dialogs}>{dialogElement}</div>
        <div className={classes.messages}>{messageElement}</div>
      </div>
      <SendMessageContainer store={props.store} />
    </div>
  );
};
export default Dialogs;
