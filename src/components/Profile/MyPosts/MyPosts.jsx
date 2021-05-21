import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
const MyPosts = (props) => {
  let PostsElement = props.postsData.map((el) => (
    <Post key={el.id} message={el.message} likeCounts={el.likeCounts} />
  ));
  let onAddPost = () => {
    props.addPost();
  };
  let onRemovePost = () => {
    props.removePost();
  };
  let addPostElem = React.createRef();
  let Change = () => {
    let text = addPostElem.current.value;
    props.onChange(text);
  };
  return (
    <div>
      <h1>My posts</h1>
      <div className={classes.post}>
        <textarea
          cols="30"
          rows="10"
          ref={addPostElem}
          className={classes.textarea}
          onChange={Change}
          value={props.profilePage.newPostText}
        />
        <div className={classes.buttons}>
          <button className={classes.btn} onClick={onAddPost}>
            Add post
          </button>
          <button className={classes.btn} onClick={onRemovePost}>
            Post remove
          </button>
        </div>
      </div>
      {PostsElement}
    </div>
  );
};

export default MyPosts;
