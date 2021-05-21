import MyPosts from "./MyPosts";
import { addPost, removePost, onChange } from "../../../Redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    postsData: state.profilePage.postsData,
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  removePost,
  onChange,
})(MyPosts);
export default MyPostsContainer;
