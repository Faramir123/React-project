import React from "react";
import { useSelector } from "react-redux";

export default function useChatExsist({ chatId }) {
    const chats = useSelector((state) => state.Chats)
    return Boolean(Object.values(chats).find((chat) => chat.id === chatId))
}