import { useSelector } from 'react-redux'
import React from 'react'

export const useIsChatExsits = ({ chatId }) => {
    const chats = useSelector(state => state.chats);
    return Boolean(Object.values(chats).find((chat) => chat.id === chatId))
}