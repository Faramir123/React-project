import { ADD_MESSAGE, REMOVE_MESSAGE } from "../Actions/Message"


const initialState = {

};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.payload.chatId]: [
                    ...(state[action.payload.chatId] || []),
                    action.payload.message,
                ]
            }
        }
        case REMOVE_MESSAGE: {
            delete state[action.payload.chatId.message.id]
            return {
                ...state,

            }
        }
        default: return state
    }
}