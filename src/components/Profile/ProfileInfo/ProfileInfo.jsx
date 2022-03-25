import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img className={styles.hat}
          src="https://avatars.mds.yandex.net/i?id=6bbde02e69dd39822b62d5691771a3df-4825382-images-thumbs&n=13"
          alt="hi"
        />
      </div>
      <div className={styles.descritpionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
