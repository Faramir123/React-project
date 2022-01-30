import React from "react";
import { Route, Switch, Redirect } from "react-router";
import FormDialog from "./CHATLISTMI";
import { Home } from "./Home";
import MessageList from "./messagelist";
import { Profile } from "./profile";
import Login from './Login'
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
    const isAuthed = useSelector((state) => state.profile.isAuthed)
    return isAuthed ? <Route{...props} /> : <Redirect to="/login" />
}

export default function Router() {


    return (


        <Switch>
            <Route
                path="/"
                exact
                render={() => (
                    <Home />
                )}
            />
            <PrivateRoute path="/chats"
                render={() => <FormDialog />}
                exact
            />

            <PrivateRoute path="/chats/:chatId"
                render={() => <MessageList />} />

            <Route path="/login" render={() => <Login />} />
            <PrivateRoute path="/profile" render={() => <Profile />} />


            <Route >
                <p>ERROR: 404 NO FOUND</p>
            </Route>



        </Switch>

    )
}