import React, {PureComponent} from "react";
import { Field, reduxForm } from "redux-form";
import {maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControl/FormsControl";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength50 = maxLengthCreator(50)

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field component={Textarea} placeholder="Post Message" name="newPostText" validate={[required, maxLength50]}
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


class MyPosts extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState){
  //   return nextProps !== this.props || nextState !== this.state
  // }

  render() {
    const {
      props,
    } = this;

    // debugger;
    let postsElements = props.posts.map((data) => (
      <Post message={data.message} key={data.id} like={data.like} id={data.id} />
    ));
    const onAddPost = (data) => {
      props.addPost(data.newPostText);
    };

    return (
      <div className={styles.postsBlock}>
        <h3>My Post</h3>
        <PostReduxForm onSubmit={onAddPost}/>
        <div className={styles.posts}>{postsElements}</div>
      </div>
    );
  }
}

export default MyPosts;
