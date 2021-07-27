import React from 'react';
import { Switch, Route } from 'react-router';

import './App.css';
import Home from './Home';
import Chat from "./Chat";
import Chats from './Chats';

export default function Routers(props) {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={() =>
                    <Home
                        chats={props.chats}
                        currentChat={props.currentChat}
                        onCurrentChatChange={props.onCurrentChatChange}
                    />} />

                <Route exact path="/chats" render={() =>
                    <Chats
                        chats={props.chats}
                        currentChat={props.currentChat}
                        onCurrentChatChange={props.onCurrentChatChange}
                        getIsChatExists={props.getIsChatExists}
                    />}
                />

                <Route path="/chats/:chatId" render={() => <Chat getIsChatExists={props.getIsChatExists} />} />

                <Route path="/profile">
                    <p>Profile page</p>
                </Route>

                <Route>
                    <p>404: not found</p>
                </Route>

            </Switch>
        </div>
    )
}
