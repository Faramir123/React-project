import React, { useState, useEffect } from 'react';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chat from './Chat'

function App() {
  return (
    <div className="App">
      <List classname="app_sidebar" subheader="Список чатов">
        <ListItem> Chat 1 </ListItem>
        <ListItem> Chat 2 </ListItem>
        <ListItem> Chat 3 </ListItem>
      </List>

      <div className="app_main">
        <Chat />
      </div>
    </div>
  );
}

export default App;
