import React from "react";
import { Field, reduxForm } from "redux-form";
// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field component="textarea" name="newPostText"
          />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
    </form>
  );
};


const PostReduxForm = reduxForm({
  form: "ProfileAddNewPostForm",
})(PostForm);


const MyPosts = (props) => {
  // debugger;
  let postsElements = props.posts.map((data) => (
    <Post message={data.message} key={data.id} like={data.like} id={data.id} />
  ));

  // let newPostElement = createRef();

  const onAddPost = (data) => {
    props.addPost(data.newPostText);
  };
  

  // let onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  // }

  return (
    <div className={styles.postsBlock}>
      <h3>My Post</h3>
      <PostReduxForm onSubmit={onAddPost}/>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
