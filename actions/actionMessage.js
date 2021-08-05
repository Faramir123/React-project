import AUTHORS from "../constants"

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE"

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    },
})

export const botMessage = (chatId, message) => {
    return (dispatch, getState) => {

        dispatch(addMessage(chatId, message));
        let timer = setTimeout(() => {
            dispatch(
                addMessage(chatId, {
                    id: `message${Date.now()}`,
                    author: AUTHORS.BOT,
                    text: 'Привет, сообщение от бота!',
                })
            )

            clearTimeout(timer)
        }, 1500)

    }
}
