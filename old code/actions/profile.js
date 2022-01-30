export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const CHANGE_IS_ONLINE = 'PROFILE::CHANGE_IS_ONLINE';
export const CHANGE_IS_AUTHED = 'PROFILE::CHANGE_IS_AUTHED';

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name,
    },
})

export const changeIsAuthed = (isAuthed) => ({
    type: CHANGE_IS_AUTHED,
    payload: {
        isAuthed,
    },
})

/* export const changeNameWithThunk = (name) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(changeName(name));
        }, 1000)
    }
} */

export const changeIsOnline = (isOnline) => ({
    type: CHANGE_IS_ONLINE,
    payload: {
        isOnline,
    },
})