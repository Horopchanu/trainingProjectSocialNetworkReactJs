import classes from "./SendMessage.module.css";
import React from "react";
const SendMessage = (props) => {
  let addMessage = () => {
    props.addMessage();
  };
  let textareaElem = React.createRef();
  let onChange = () => {
    let text = textareaElem.current.value;
    props.onChange(text);
  };
  return (
    <div className={classes.wrapper}>
      <textarea
        id=""
        cols="30"
        rows="10"
        className={classes.textarea}
        ref={textareaElem}
        onChange={onChange}
        value={props.newText}
      ></textarea>
      <button onClick={addMessage} className={classes.btn}>
        Отправить
      </button>
    </div>
  );
};
export default SendMessage;
