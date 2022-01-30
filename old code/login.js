import { Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import firebase from 'firebase';

export default function Login(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);
    const hendleChangeEmail = (e) => setEmail(e.target.value);
    const hendleChangePassword = (e) => setPassword(e.target.value);
    const handleIsSigningUpChange = (e) => setIsSigningUp(e.target.checked);
    const handleLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    const handleSingUp = async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    const handleSubmit = async () => {
        console.log('Логинимся', { email, password });

        if (!email || !password) {
            setError('Заполните поля');
            return;
        }
        if (isSigningUp) {
            handleSingUp();
            return;
        }

        handleLogin();
    }

    return (
        <div className="loginfield">
            <p>{isSigningUp ? "Sing Up" : "Login"}</p>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isSigningUp}
                        onChange={handleIsSigningUpChange}
                        name="chackedB"
                        color="primary"
                    />
                }
                label={<p>Вы не зарегистрированы?</p>}
            />



            <TextField
                placeholder="Email"
                value={email}
                type="email"
                onChange={hendleChangeEmail} />
            <TextField
                placeholder="Password"
                value={password}
                type="text"
                onChange={hendleChangePassword} />
            <Button variant="contained" onClick={handleSubmit}>{isSigningUp ? "Sing Up" : "Login"}</Button>
            <hr />
            <p>{error}</p>
        </div>
    )
}