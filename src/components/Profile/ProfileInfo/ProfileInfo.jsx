import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  // debugger;
  if(!props.profile){
    return <Preloader />
  }

  return (
    <div>
      <div>
        {/* <img className={styles.hat}
          src="https://avatars.mds.yandex.net/i?id=6bbde02e69dd39822b62d5691771a3df-4825382-images-thumbs&n=13"
          alt="hi"
        /> */}
      </div>
      <div className={styles.descritpionBlock}>
        <img src={props.profile.photos.large} alt='hi'/>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
