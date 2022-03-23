import React, { createRef } from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
  // debugger;
  let postsElements = props.posts.map((data) => (
    <Post message={data.message} like={data.like} id={data.id} />
  ));

  let newPostElement = createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
    // newPostElement.current.value = '';
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div className={styles.postsBlock}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
