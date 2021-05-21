import SendMessage from "./SendMessage";
import { onChange, addMessage } from "../../../Redux/dialogsReducer";
import { connect } from "react-redux";
let mapStateToProps = (state) => {
  return {
    newText: state.dialogsPage.newMessageText,
  };
};
const SendMessageContainer = connect(mapStateToProps, {
  onChange,
  addMessage,
})(SendMessage);
export default SendMessageContainer;
