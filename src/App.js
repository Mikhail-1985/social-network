import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from "./redux/app-reducer"
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    // debugger;
    if(this.props.initialized){
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper__content'>
            <Routes>
              <Route path='/profile/*' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/users/*' element={<UsersContainer />} />
              <Route path='/login/*' element={<Login />} />
            </Routes>
          </div>
  
        </div>
      );
    }
    return <Preloader />
    
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
