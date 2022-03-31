import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
// import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
// import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

function App() {
  // debugger;
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

export default App;
