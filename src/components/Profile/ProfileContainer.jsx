import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useMatch, Navigate } from "react-router-dom";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "./../../redux/profile-reducer";

class ProfileContainer extends React.Component {
  // debugger;
  componentDidMount() {
    // debugger;
    let userId = this.props.match ? this.props.match.params.userId : this.props.autorizedUserId;
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    // if(!this.userId){
    //   return <Navigate to={'/login'} />
    // }
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

const ProfileURLMatch = (props) => {
  const match = useMatch("/profile/:userId/");
  return <ProfileContainer {...props} match={match} />;
};

export default connect(mapStateToProps, {
  getUserProfile,
  getStatus,
  updateStatus,
})(ProfileURLMatch);
