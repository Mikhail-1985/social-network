import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  // debugger;
  return (
    <div className={styles.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
