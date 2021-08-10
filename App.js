import React, { useState, useEffect } from 'react';
import './App.css';
import Routers from './Routers';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <div className="app__links">
        <Link to="/">Home</Link>
        <Link to="/chats">Chats</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/news">News</Link>
      </div>

      <Routers />
    </div>
  )

}

export default App;
