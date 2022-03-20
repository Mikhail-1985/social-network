import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img
          src="https://avatars.mds.yandex.net/i?id=0e005b41d0a10d453ea797777f307955-5876637-images-thumbs&n=13"
          alt="hi"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
