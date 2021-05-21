/* eslint-disable no-fallthrough */
const CHANGE_POST_TEXT_AREA = "CHANGE-POST-TEXT-AREA";
const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  postsData: [
    { message: "Hello", id: 0, likeCounts: 0 },
    { message: " How are you", id: 1, likeCounts: 0 },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_POST: {
      // let stateCopy = { ...state };
      // if (stateCopy.newPostText) {
      //   stateCopy.postsData = [...state.postsData];
      //   stateCopy.postsData.push({
      //     message: stateCopy.newPostText,
      //     id: Math.random(),
      //     likeCounts: 0,
      //   });
      //   state.newPostText = "";
      // }
      return {
        ...state,
        postsData: [
          ...state.postsData,
          {
            message: state.newPostText,
            id: Math.random(),
            likeCounts: 0,
          },
        ],
        newPostText: "",
      };
      // stateCopy;
    }
    case REMOVE_POST: {
      let stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.splice(-1, 1);
      return stateCopy;
    }
    case CHANGE_POST_TEXT_AREA: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addPost = () => {
  return {
    type: ADD_POST,
  };
};
export const removePost = () => {
  return {
    type: REMOVE_POST,
  };
};
export const onChange = (text) => {
  return {
    type: CHANGE_POST_TEXT_AREA,
    newText: text,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  };
};

export default profileReducer;
