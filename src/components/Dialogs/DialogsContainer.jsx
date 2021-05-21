import Dialogs from "./Dialogs.jsx";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogData: state.dialogsPage.dialogData,
    messageData: state.dialogsPage.messageData,
  };
};

const DialogsContainer = connect(mapStateToProps)(Dialogs);
export default DialogsContainer;
