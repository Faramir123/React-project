import React from 'react'
import { AUTHORS } from "../constants/constants"
import firebase from "firebase"

export const ADD_MESSAGE = "MESSAGELIST:: ADD_MESSAGE"
export const REMOVE_MESSAGE = "MESSAGELIST::REMOVE_MESSAGE"

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        message,
    }
})

export const removeMessage = (chatId, message) => ({
    type: REMOVE_MESSAGE,
    payload: {
        chatId,
        message,
    }
})
export const middlewarBotMessage = (chatId, message) => {
    return () => {

        firebase
        .database()
        .ref('messages')
        .child(chatId)
        .push(message)

        let timer = setTimeout(() => {
            firebase
            .database()
            .ref('messages')
            .child(chatId)
            .push({
                id: `message${Date.now()}`,
                author: AUTHORS.BOT,
                text: 'Привет! Я бот!',
            })
            
            clearTimeout(timer)
        }, 1500)

    }

}

export const subscribeOnMessagesChangings =(chatId) => {
    

    return (dispatch, getState)=>{
        firebase
        .database()
        .ref('messages')
        .child(chatId)
        .on('child_added', (snapshot)=>{
                dispatch(addMessage(chatId, snapshot.val()))
        })

        firebase
        .database()
        .ref('messages')
        .child(chatId)
        .on('child_changed', (snapshot)=>{
            dispatch(addMessage(chatId, snapshot.val()))
        })
    }
}

