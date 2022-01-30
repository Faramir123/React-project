import React from 'react';
import { Checkbox, FormControlLabel } from "@mui/material";
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';
import firebase from 'firebase';

export default function Login(props) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [isSigningUp, setIsSigningUp] = React.useState(false)

    const handleLogin = async () => {
        try{ await  firebase.auth().signInWithEmailAndPassword(email, password)}
        catch(error){ setError(error.message)}
    }
    const handliSigningUp = async () => {
        try{ await  firebase.auth().createUserWithEmailAndPassword(email, password)}
        catch(error){ setError(error.message)}
    }
    const handleSubmit = () =>{
        if(!email || !password){
            setError('Введите Email или password')
            return
        }
        if(isSigningUp){
            handliSigningUp()
            return
        }
        handleLogin()
    }
    const handleIsSigningUpChange = e => setIsSigningUp(e.target.checked)
    const hancdleChangeEmail = e => setEmail(e.target.value)
    const hancdleChangePassword = e => setPassword(e.target.value)
    


    return (<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        < h1 > {isSigningUp? "Create account" : 'Login'} </h1>
        <FormControlLabel
           control ={ <Checkbox
                checked={isSigningUp}
                onChange={handleIsSigningUpChange}
            />}
            label ={ <p><b>Еще нет учетной записи</b></p>}
            />
        
        <TextField className="child__text-field" type='email' value={email} placeholder="введите email" onChange={hancdleChangeEmail} required/>
        <TextField className="child__text-field" type='password' value={password} placeholder="введите password" onChange={hancdleChangePassword} required />
    <Button variant="contained" onClick={handleSubmit}>{isSigningUp? "Create account" : 'Login'}</Button>


    <hr/>
    <p>{error}</p>
    </div>
    )
}