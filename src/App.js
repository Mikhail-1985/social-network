import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  // debugger;
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper__content'>
        <Routes>
          <Route path='/profile/*' element={<Profile dispatch={props.dispatch} profilePage={props.state.profilePage} />} />
          <Route path='/dialogs/*' element={<Dialogs store={props.store} />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
