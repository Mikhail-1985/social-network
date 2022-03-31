import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useMatch } from "react-router-dom";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "./../../redux/profile-reducer";

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
