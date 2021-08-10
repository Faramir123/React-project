import React, { Profiler } from 'react';
import { Switch, Route } from 'react-router';
import Profile from './profile/profile';
import './App.css';
import Home from './Home';
import Chat from "./Chat";
import Chats from './Chats';
import News from './News';

export default function Routers() {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={() =>
                    <Home

                    />} />

                <Route exact path="/chats" component={Chats} />

                <Route path="/chats/:chatId" component={Chat} />

                <Route path="/profile">
                    <Profile />
                </Route>

                <Route path="/news" component={News} />

                <Route>
                    <p>404: not found</p>
                </Route>

            </Switch>
        </div>
    )
}
