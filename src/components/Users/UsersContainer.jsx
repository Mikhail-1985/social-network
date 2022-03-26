import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setTotalUsersCount,
  setUsers,
  toggleIsLoading,
} from "../../redux/users-reducer";
import Users from "./Users";
import { setCurrentPage } from "./../../redux/users-reducer";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsLoading(false);
        console.log(response);
        // debugger;
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsLoading(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsLoading(false);
        console.log(response);
        // debugger;
        this.props.setUsers(response.data.items);
      });
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
          toggleFollowed={this.props.toggleFollowed}
          // isLoading={this.props.isLoading}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     toggleFollowed: (userId) => {
//       dispatch(followAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsLoading: (isLoading) => {
//       dispatch(toggleIsLoadingAC(isLoading));
//     }

//   };
// };

export default connect(mapStateToProps, {
  follow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsLoading,
})(UsersContainer);
