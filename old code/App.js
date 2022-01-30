import React, { useState, useEffect } from 'react';
import './App.css';
import Routers from './Routers';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { changeIsAuthed } from './actions/profile';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('onAuthStateChanged', { user });
      dispatch(changeIsAuthed(!!user));
    })
  }, [])

  const handleOnOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  return (
    <div className="App">

      <div className="app__links">
        <Link to="/">Home</Link>
        <Link to="/chats">Chats</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/news">News</Link>
        <Link to="/login">login</Link>
        <Link to="/login"></Link>
        <a href="/" onClick={handleOnOut}>Sign Out</a>
      </div>

      <Routers />
    </div>
  )

}

export default App;
