import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { changeIsOnline } from '../actions/profile';

export default function Profile(props) {

    const handleIsOnlineChange = (event) => {
        dispatch(changeIsOnline(event.target.checked))
    }
    const dispatch = useDispatch();
    const { name, age, isOnline } = useSelector(state => state.profile)

    return (<div>
        <p>Profile page</p>
        <p>
            <b>Name:</b>{name}
        </p>
        <p>
            <b>Age:</b>{age}
        </p>
        <FormControlLabel
            control={
                <Checkbox
                    checked={isOnline}
                    onChange={handleIsOnlineChange}
                    name="checkedB"
                    color="primary"
                />
            }
            label="Onlone status"
        />
    </div>
    )
}
