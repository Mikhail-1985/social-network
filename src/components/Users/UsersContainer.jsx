import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  // setTotalUsersCount,
  // setUsers,
  // toggleIsLoading,
  togglefollowingProgress,
  getUsersThunkCreator,
} from "../../redux/users-reducer";
import Users from "./Users";
import { setCurrentPage } from "./../../redux/users-reducer";
// import axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
// import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
  };

  render() {
    // debugger;
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          // pages={this.props.pages}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          // isLoading={this.props.isLoading}
          followingInProgress={this.props.followingInProgress}
          // togglefollowingProgress= {this.props.togglefollowingProgress}
        />
      </>
    );
  }
}

let AuthRedirectComponent = withAuthRedirect(UsersContainer);

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress,
    // togglefollowingProgress: state.usersPage.togglefollowingProgress
  };
};

// export default connect(mapStateToProps, {
//   follow,
//   unfollow,
//   // setUsers,
//   setCurrentPage,
//   // setTotalUsersCount,
//   // toggleIsLoading,
//   togglefollowingProgress,
//   getUsersThunkCreator
// })(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    togglefollowingProgress,
    getUsersThunkCreator,
  }),
  withAuthRedirect
)(UsersContainer);
