import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus,}) => {
  if(!profile){
    return <Preloader />
  }

  return (
    <div>
      <div>
      </div>
      <div className={styles.descritpionBlock}>
        <img src={profile.photos.large} alt='hi'/>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
