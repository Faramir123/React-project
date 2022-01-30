import React from "react";
import { CHANGE_IS_AUTHED, CHANGE_NAME, OFFLINE_STATUS, ONLINE_STATUS } from "../Actions/Profile";

const initialState = {
    name: "Sergey",
    age: 29,
    Network: false,
    status: 'OFFLINE',
    isAuthed: false
}

export default function ProfileReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.payload.name
            }
        case ONLINE_STATUS:
            return {
                ...state,
                Network: !state.Network,
                status: 'ONLINE'
            }
        case OFFLINE_STATUS:
            return {
                ...state,
                Network: !state.Network,
                status: 'OFFLINE'
            }
            case CHANGE_IS_AUTHED:
                return {
                    ...state,
                    isAuthed: action.payload.isAuthed
                }
        default:
            return state
    }
}