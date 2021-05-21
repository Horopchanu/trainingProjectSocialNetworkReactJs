import classes from './Post.module.css'
import React from 'react';
const Post = (props) => {
    return (
        <div>
            <img src="http://archilab.online/images/1/123.jpg" alt="ava" className={classes.post__img} />
            <div className={classes.post}>{props.message}</div>
            <button className={classes.post__btn}>like = {props.likeCounts}</button><button className={classes.post__btn}>Dislike</button>
        </div>
    );
}

export default Post;