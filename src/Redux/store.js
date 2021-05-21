import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { message: "Hello", id: 0, likeCounts: 0 },
        { message: " How are you", id: 1, likeCounts: 0 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
  },
  getstate() {
    return this._state;
  },
  _callSubsriber() {},
  subscribe(observer) {
    this._callSubsriber = observer;
  },

  // _addPost() {
  //   if (this._state.profilePage.newPostText) {
  //     this._state.profilePage.postsData.push({
  //       message: this._state.profilePage.newPostText,
  //       id: Math.random(),
  //       likeCounts: 0,
  //     });
  //     this._state.profilePage.newPostText = "";
  //     this._callSubsriber(this._state);
  //   }
  // },
  // _removePost() {
  //   this._state.profilePage.postsData.splice(-1, 1);
  //   this._callSubsriber(this._state);
  // },
  // _changePostTextArea(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubsriber(this._state);
  // },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubsriber(this._state);
    //   if (action.type === ADD_POST) {
    //     if (this._state.profilePage.newPostText) {
    //       this._state.profilePage.postsData.push({
    //         message: this._state.profilePage.newPostText,
    //         id: Math.random(),
    //         likeCounts: 0,
    //       });
    //       this._state.profilePage.newPostText = "";
    //       this._callSubsriber(this._state);
    //     }
    //   } else if (action.type === REMOVE_POST) {
    //     this._state.profilePage.postsData.splice(-1, 1);
    //     this._callSubsriber(this._state);
    //   } else if (action.type === CHANGE_POST_TEXT_AREA) {
    //     this._state.profilePage.newPostText = action.newText;
    //     this._callSubsriber(this._state);
    //   } else if (action.type === ADD_MESSAGE) {
    //     this._state.dialogsPage.messageData.push({
    //       message: this._state.dialogsPage.newMessageText,
    //       id: Math.random(),
    //     });
    //     this._state.dialogsPage.newMessageText = "";
    //     this._callSubsriber(this._state);
    //   } else if (action.type === CHANGE_MESSAGE_TEXT_AREA) {
    //     this._state.dialogsPage.newMessageText = action.newMessageText;
    //     this._callSubsriber(this._state);
    //   }
  },
};

// export const changeMessageTextAreaActionCreator = (text) => {
//   return {
//     type: CHANGE_MESSAGE_TEXT_AREA,
//     newMessageText: text,
//   };
// };
// export const addMessageActionCreator = () => {
//   return {
//     type: ADD_MESSAGE,
//   };
// };
// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST,
//   };
// };
// export const removePostActionCreator = () => {
//   return {
//     type: REMOVE_POST,
//   };
// };
// export const changePostTextAreaActionCreator = (text) => {
//   return {
//     type: CHANGE_POST_TEXT_AREA,
//     newText: text,
//   };
// };
// let state = {
// profilePage: {
//   postsData: [
//     { message: "Hello", id: 0, likeCounts: 0 },
//     { message: " How are you", id: 1, likeCounts: 0 },
//   ],
//   newPostText: "",
// },
//   dialogsPage: {
//     dialogData: [
//       { name: "Dima", id: 1 },
//       { name: "Alex", id: 2 },
//       { name: "Maks", id: 3 },
//       { name: "Andrey", id: 4 },
//       { name: "Valera", id: 5 },
//     ],

//     messageData: [
//       { message: "Dima", id: 1 },
//       { message: "Alex", id: 2 },
//       { message: "Maks", id: 3 },
//       { message: "Andrey", id: 4 },
//       { message: "Valera", id: 5 },
//     ],
//   },
// };

// export const addPost = () => {
//   if (store.state.profilePage.newPostText) {
//     store.state.profilePage.postsData.push({
//       message: store.state.profilePage.newPostText,
//       id: Math.random(),
//       likeCounts: 0,
//     });
//     store.state.profilePage.newPostText = "";
//     renderEntireTree(store);
//   }
// };
// export const removePost = () => {
//   store.state.profilePage.postsData.splice(-1, 1);
//   renderEntireTree(store);
// };

// export const changePostTextArea = (newText) => {
//   store.state.profilePage.newPostText = newText;
//   renderEntireTree(store);
// };

export default store;
window.store = store;
