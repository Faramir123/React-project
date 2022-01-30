import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeName, isOfflineStatus, isOnlineStatus } from '../Actions/Profile';
import { profileSelector } from "../Selectors";


export const Profile = () => {
    const dispatch = useDispatch()
    const { name, age, Network, status } = useSelector(profileSelector)
    console.log(Network)
    const handleNameSubmit = (newName) => {
        dispatch(changeName(newName))
    }
    const handleChangeStatus = () => {
        if (!Network) {
            dispatch(isOnlineStatus())
        }
        else {
            dispatch(isOfflineStatus())
        }

    }


    return (
        <div className="bordered">

           
            <FormControlLabel
           control ={ <Checkbox
                checked={Network}
                onChange={handleChangeStatus}
            />}
            label ={ <p><b>Network status:</b>  {status}</p>}
            />
            <p><b>Name:</b>{name}</p>
            <p><b>Age:</b>{age}</p>
        </div>
    )
}