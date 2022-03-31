import React from "react";
import Profile from "./Profile";
// import * as axios from 'axios';
import { connect } from "react-redux";
// import { setUserProfile } from "../../redux/profile-reducer";
import { Navigate, useMatch } from "react-router-dom";
// import { usersAPI } from './../../api/api';
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "./../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
// import { compose } from 'redux';

class ProfileContainer extends React.Component {
  // debugger;
  componentDidMount() {
    // debugger;
    let userId = this.props.match ? this.props.match.params.userId : 23080;
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
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

// compose(
//   connect(mapStateToProps, { getUserProfile }),
//   ProfileURLMatch,
//   withAuthRedirect
// )(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
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
