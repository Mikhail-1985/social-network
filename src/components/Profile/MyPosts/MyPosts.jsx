import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'Hello', like: 15},
    {id: 1, message: 'How are you?', like: 11},
    {id: 1, message: 'I am Ok', like: 12}
  ]

  let postsElements = posts.map(data => <Post message={data.message} like={data.like} id={data.id} />)

  return (
    <div className={styles.postsBlock}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>
       {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
