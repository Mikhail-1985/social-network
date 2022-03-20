import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
        My Post
        <div>New Post</div>
        <div className={styles.posts}>
          <Post message='Hello' like='15'/>
          <Post message='how are you?' like='20'/>
        </div>
      </div>
    )
}

export default MyPosts;