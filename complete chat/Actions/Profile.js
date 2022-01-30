export const CHANGE_NAME = "PROFILE:: CHANGE_NAME"
export const ONLINE_STATUS = "PROFILE:: ONLINE_STATUS"
export const OFFLINE_STATUS = "PROFILE:: OFFLINE_STATUS"
export const CHANGE_IS_AUTHED = "PROFILE:: CHANGE_IS_AUTHED"


export const changeIsAuthed = (isAuthed) =>({
    type: CHANGE_IS_AUTHED,
    payload:{
        isAuthed
    }
})
export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name
    }
})

export const isOnlineStatus = () => ({
    type: ONLINE_STATUS,


})

export const isOfflineStatus = () => ({
    type: OFFLINE_STATUS,

})