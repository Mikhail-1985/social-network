import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg" />
      {props.message}
      <div>
        <span>{props.like} likes</span>
      </div>
    </div>
  );
};

export default Post;
