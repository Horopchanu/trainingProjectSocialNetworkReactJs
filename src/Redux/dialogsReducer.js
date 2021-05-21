const ADD_MESSAGE = "ADD-MESSAGE";
const CHANGE_MESSAGE_TEXT_AREA = "CHANGE_MESSAGE_TEXT_AREA";

let initialState = {
  dialogData: [
    { name: "Dima", id: 1 },
    { name: "Alex", id: 2 },
    { name: "Maks", id: 3 },
    { name: "Andrey", id: 4 },
    { name: "Valera", id: 5 },
  ],
  messageData: [
    { message: "Dima", id: 1 },
    { message: "Alex", id: 2 },
    { message: "Maks", id: 3 },
    { message: "Andrey", id: 4 },
    { message: "Valera", id: 5 },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_MESSAGE: {
      // let stateCopy = { ...state };
      // if (stateCopy.newMessageText) {
      //   stateCopy.messageData = [...state.messageData];
      //   stateCopy.messageData.push({
      //     message: stateCopy.newMessageText,
      //     id: Math.random(),
      //   });
      //   stateCopy.newMessageText = "";
      // }
      return {
        ...state,
        messageData: [
          ...state.messageData,
          {
            message: state.newMessageText,
            id: Math.random(),
          },
        ],
        newMessageText: "",
      };
    }
    // eslint-disable-next-line no-fallthrough
    case CHANGE_MESSAGE_TEXT_AREA: {
      return {
        ...state,
        newMessageText: action.newMessageText,
      };
    }
    default:
      return state;
  }
};

export const onChange = (text) => {
  return {
    type: CHANGE_MESSAGE_TEXT_AREA,
    newMessageText: text,
  };
};
export const addMessage = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export default dialogsReducer;
