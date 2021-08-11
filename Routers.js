import React, { Profiler } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Profile from './profile/profile';
import './App.css';
import Home from './Home';
import Chat from "./Chat";
import Chats from './Chats';
import News from './News';
import Login from './login';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {
    const isAuthed = useSelector((state) => state.profile.isAuthed)
    return isAuthed ? <Route {...props} /> : <Redirect to="/login" />
}

export default function Routers() {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={() =>
                    <Home

                    />} />

                <PrivateRoute exact path="/chats" component={Chats} />

                <PrivateRoute path="/chats/:chatId" component={Chat} />

                <PrivateRoute path="/profile">
                    <Profile />
                </PrivateRoute>
                <Route path="/login" component={Login} />

                <Route path="/news" component={News} />

                <Route>
                    <p>404: not found</p>
                </Route>

            </Switch>
        </div>
    )
}
