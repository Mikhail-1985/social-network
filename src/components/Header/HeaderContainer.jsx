import React from "react";
// import styles from './Header.module.css';
// import { NavLink } from 'react-router-dom';
import Header from "./Header";
import { connect } from "react-redux";
// import * as axios from "axios";
import { getAuthUserData, logout } from "./../../redux/auth-reducer";
// import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {


  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  // logout: state.auth.logout,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
