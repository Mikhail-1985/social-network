import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://avatars.mds.yandex.net/i?id=0e005b41d0a10d453ea797777f307955-5876637-images-thumbs&n=13"
          alt="hi"
        />
      </div>
      <div className={styles.descritpionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
