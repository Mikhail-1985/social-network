import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  // debugger;
  if(!props.profile){
    return <Preloader />
  }

  return (
    <div>
      <div>
      </div>
      <div className={styles.descritpionBlock}>
        <img src={props.profile.photos.large} alt='hi'/>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
