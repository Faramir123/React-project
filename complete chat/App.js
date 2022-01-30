import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Router from './components/router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from './components/contextMenu';
import firebase from 'firebase';
import { useDispatch } from 'react-redux';
import { changeIsAuthed } from './Actions/Profile';







function App() {
const dispatch = useDispatch()
React.useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=> dispatch(changeIsAuthed(!!user)))
}, [])

const handleSignOut = (e) => {
  e.preventDefault()
  firebase.auth().signOut()
}
  return (
    <div className="App">

      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              </IconButton>
              <Typography className='linksList' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">Главная страница</Link>
                <Link to="/chats">Список чатов</Link>
                <Link to="/profile">Профайл пользователя</Link>
              </Typography>
              <Button className="Loginbtn" color="inherit"><Link className="linkbtn" to="/login">Login</Link></Button>
              <a href="/" onClick={handleSignOut}>Sign out</a>
            </Toolbar>
          </AppBar>
        </Box>
        <div className='linksList'>
        </div>
        <Router />
      </div>
      <Menu />
    </div >
  );
}

export default App;
